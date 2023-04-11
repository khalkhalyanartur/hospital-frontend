import "./style.scss";

const AddAppointments = () => {
  return (
    <div className="reception-input">
      <div className="input-block">
        <label>
          Имя:
        </label>
        <input
          className="input-block__input"
          id="loginInput"
          type="text"
        // value={userInfo.login}
        //onChange={(event) => handleChange(event.target.value, "login")}
        />
      </div>
      <div className="input-block">
        <label>
          Врач:
        </label>
        <input
          className="input-block__input"
          id="loginInput"
          type="text"
        // value={userInfo.login}
        //onChange={(event) => handleChange(event.target.value, "login")}
        />
      </div>
      <div className="input-block">
        <label>
          Дата:
        </label>
        <input
          className="input-block__input"
          id="loginInput"
          type="date"
        // value={userInfo.login}
        //onChange={(event) => handleChange(event.target.value, "login")}
        />
      </div>
      <div className="input-block">
        <label>
          Жалобы:
        </label>
        <input
          className="input-block__input"
          id="loginInput"
          type="text"
        // value={userInfo.login}
        //onChange={(event) => handleChange(event.target.value, "login")}
        />
      </div>
      <div className="input-block">
        <button className="reception-input__button">Добавить</button>
      </div>

    </div>

  )
}

export default AddAppointments;


