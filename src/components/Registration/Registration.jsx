import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "src";
import { regExpPassword } from "../../constants";
import { bigLogo } from "src/img";
import Header from "src/components/Header/Header";
import Form from "src/components/Form/Form";
import Snackbar from "src/components/UI/Snackbar/Snackbar";
import "./style.scss"

const Registration = () => {
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isSnackbarShow, setSnackbarShow] = useState(false);
  const [userInfo, setUserInfo] = useState({
    login: "",
    password: "",
    repeatedPassword: ""
  });

  const store = useContext(Context);

  const registrateUser = async () => {
    const login = userInfo.login.trim();
    const password = userInfo.password.trim();

    if (login.length < 6) {
      showSnackbar("Логин должен содержать не менее 6 символов");
      return
    }

    if (!regExpPassword.test(password)) {
      showSnackbar("Пароль должен содержать не менее 6 латинских символов, где хотя бы один является цифрой");
      return
    }

    if (password !== userInfo.repeatedPassword) {
      showSnackbar("Пароли не совпадают");
      return
    }

    const { error } = await store.registration(login, password);

    if (error) {
      showSnackbar(error);
      return
    }
  }

  const showSnackbar = (message) => {
    setSnackbarShow(true);
    setSnackbarMessage(message);
  }

  const handleChange = (value, key) => {
    setUserInfo({
      ...userInfo,
      [key]: value
    })
  }

  return (
    <div>
      <Snackbar
        message={snackbarMessage}
        openSnackBar={isSnackbarShow}
        closeSnackBar={() => setSnackbarShow(false)}
      />
      <Header title="Зарегистрироваться в системе" />
      <div className="registration">
        <img
          src={bigLogo}
          alt="logo"
        />
        <Form title="Регистрация">
          <label
            className="registration__label"
            htmlFor="loginInput"
          >
            Логин:
          </label>
          <input
            id="loginInput"
            type="text"
            value={userInfo.login}
            placeholder="Логин"
            className="registration__input"
            onChange={(event) => handleChange(event.target.value, "login")}
          />
          <label
            className="registration__label"
            htmlFor="passwordInput"
          >
            Пароль:
          </label>
          <input
            id="passwordInput"
            type="password"
            value={userInfo.password}
            placeholder="Пароль"
            className="registration__input"
            onChange={(event) => handleChange(event.target.value, "password")}
          />
          <label
            className="registration__label"
            htmlFor="repeatedPasswordInput"
          >
            Повторите пароль:
          </label>
          <input
            id="repeatedPasswordInput"
            type="password"
            value={userInfo.repeatedPassword}
            placeholder="Пароль"
            className="registration__input"
            onChange={(event) => handleChange(event.target.value, "repeatedPassword")}
          />
          <div className="registrationButtons">
            <button
              type="button"
              className="registrationButtons__button"
              onClick={registrateUser}
            >
              Зарегистрироваться
            </button>
            <Link
              to="/authorization"
              className="registrationButtons__link"
            >
              Авторизация
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Registration;