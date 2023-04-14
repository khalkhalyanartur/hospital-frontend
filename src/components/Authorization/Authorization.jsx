import Header from "src/components/Header/Header";
import Form from "src/components/UI/Form/Form";
import Snackbar from "src/components/UI/Snackbar/Snackbar";
import { bigLogo } from "src/img";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "src";
import "./style.scss";

const Authorization = () => {
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isSnackbarShow, setSnackbarShow] = useState(false);
  const [userInfo, setUserInfo] = useState({
    login: "",
    password: "",
    repeatedPassword: ""
  });

  const store = useContext(Context);

  const authorizateUser = async () => {
    const login = userInfo.login.trim();
    const password = userInfo.password.trim();

    if (!login) {
      showSnackbar("Заполните логин!");
      return
    }

    if (!password) {
      showSnackbar("Заполните пароль!");
      return
    }

    const { error } = await store.authorization(login, password);

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
      <Header title="Войти в систему" />
      <div className="authorization">
        <img
          src={bigLogo}
          alt="logo"
          className="authorization__building"
        />
        <Form title="Войти в систему">
          <label
            className="authorization__label"
            htmlFor="loginInput"
          >
            Логин:
          </label>
          <input
            id="loginInput"
            type="text"
            value={userInfo.login}
            placeholder="Логин"
            className="authorization__input"
            onChange={(event) => handleChange(event.target.value, "login")}
          />

          <label
            className="authorization__label"
            htmlFor="passwordInput"
          >
            Пароль:
          </label>
          <input
            id="passwordInput"
            type="password"
            value={userInfo.password}
            placeholder="Пароль"
            className="authorization__input"
            onChange={(event) => handleChange(event.target.value, "password")}
          />
          <div className="authorizationButtons">
            <button
              type="button"
              className="authorizationButtons__button"
              onClick={authorizateUser}
            >
              Войти
            </button>
            <Link
              to="/registration"
              className="authorizationButtons__link"
            >
              Зарегистрироваться
            </Link>
          </div>

        </Form>
      </div>
    </div>
  )
}

export default Authorization;