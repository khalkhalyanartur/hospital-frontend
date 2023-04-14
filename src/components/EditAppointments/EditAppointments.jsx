/*
import { useState } from 'react';
import moment from 'moment';
import Modal from 'src/components/UI/Modal/Modal';
import Input from 'src/components/UI/Input/Input';
import Snackbar from 'src/components/Snackbar/Snackbar';
import Select from 'src/components/UI/Select/Select';
import { doctors } from "src/constants";
import getFormattedDate from "src/helpers/helpers";


const EditAppointments = ({ closeModalWindow, editedAppointment, saveCheckedAppointment }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState('');
  const [editedInfo, setEditedInfo] = useState({
    name: editedAppointment.name,
    doctor: editedAppointment.doctor,
    date: editedAppointment.date,
    complaints: editedAppointment.complaints,
  })
  const handleChange = (key, newValue) => {
    setEditedInfo({
      ...editedInfo,
      [key]: newValue,
    });
  };
  const showError = (message) => {
    setMessage(message);
    setOpenSnackbar(true);
  };
  const saveEditedAppointment = () => {
    if (editedAppointment.name.trim().length === 0) {
      showError('Заполните имя пациента!');
      return;
    };
    if (editedAppointment.doctor.trim().length === 0) {
      showError('Выберете доктора!');
      return;
    };
    if ((editedAppointment.date.trim().length === 0)) {
      showError('Выберите дату приёма!');
      return;
    };
    if (editedAppointment.complaints.trim().length  === 0) {
      showError('Укажите жалобу!');
      return;
    };
    const desiredDate = getFormattedDate(editedAppointment.date, "DD.MM.YYYY");
    const currentDate = getFormattedDate(Date.now(), "DD.MM.YYYY");
    if (desiredDate !== currentDate
      && moment(editedAppointment.date).isBefore()) {
        showError('Невозможно записаться к врачу в прошедшую дату!');
      return;
    };
    saveCheckedAppointment(editedInfo);
  };
  return (
    <div className='editingForm'>
      <Modal
        title="Изменить приём"
        className="editingForm"
        closeModalWindow={closeModalWindow}
        buttonAction={saveEditedAppointment}
        buttonTitle="Сохранить"
      >
      <input
        label="Имя:"
        type="text"
        value={editedInfo.name}
        className="editingForm__input input__frame"
        additionalClass="location"
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <Select
        label="Врач"
        type="text"
        className="editingForm__input input__frame"
        value={editedInfo.doctor}
        onChange={(e) => handleChange("doctor", e.target.value)}
      >
        {doctors.map(doctor =>
          <option value={doctor}>{doctor}</option>
        )}
      </Select>
      <Input
        label="Дата:"
        type="date"
        className="editingForm__input input__frame"
        value={editedInfo.date}
        onChange={(e) => handleChange("date", e.target.value)}
      />
      <Input
        label="Жалобы:"
        type="text"
        className="inut__frame editingForm__inputComplaints"
        value={editedInfo.complaints}
        onChange={(e) => handleChange("complaints", e.target.value)}
      />
      </ModalWindow>
      <Snackbar
        openSnackbar={openSnackbar}
        showMessage={message}
        closeSnackbar={() => setOpenSnackbar(false)}
      />
    </div>
  );
};
export default EditAppointments;
*/