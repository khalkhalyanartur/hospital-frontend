import { useState } from "react";
import { doctors } from "src/constants";
import "./style.scss";

const AddAppointments = ({addNewAppointmentReception}) => {
  const [appointmentInfo, setAppointmentInfo] = useState({
    patient: '',
    doctor: '',
    date: '',
    complaint: ''
  })

  const handleChange = (value, key) => {
    setAppointmentInfo({
      ...appointmentInfo,
      [key]: value
    })
  }

  const addNewAppointment = () => {

    if (!appointmentInfo.patient.trim()) {
      console.log("Пациент пуст!");
      return
    }
    if (!appointmentInfo.doctor.trim()) {
      console.log("Доктор пуст!");
      return
    }
    if (!appointmentInfo.date.trim()) {
      console.log("Дата пуста!");
      return
    }
    if (!appointmentInfo.complaint.trim()) {
      console.log("Жалобы пусты!");
      return
    }

    addNewAppointmentReception(appointmentInfo);
  }



  return (
    <div className="reception-input">
      <div className="input-block">
        <label>
          Имя:
        </label>
        <input
          className="input-block__input"
          type="text"
          value={appointmentInfo.patient}
          onChange={(event) => handleChange(event.target.value, "patient")}
        />
      </div>
      <div className="input-block">
        <label>
          Врач:
        </label>
        <select
          className="input-block__input"
          value={appointmentInfo.doctor}
          onChange={(event) => handleChange(event.target.value, "doctor")}
        >
          <option hidden value="" />
          {doctors.map((doctor) => <option key={doctor}>{doctor}</option>)}
        </select>
      </div>
      <div className="input-block">
        <label>
          Дата:
        </label>
        <input
          className="input-block__input"
          id="loginInput"
          type="date"
          value={appointmentInfo.date}
          onChange={(event) => handleChange(event.target.value, "date")}
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
          value={appointmentInfo.complaint}
          onChange={(event) => handleChange(event.target.value, "complaint")}
        />
      </div>
      <div className="input-block">
        <button onClick={addNewAppointment} className="reception-input__button">Добавить</button>
      </div>

    </div>

  )
}

export default AddAppointments;


