import { useState } from "react";
import Modal from "src/components/UI/Model/Modal";


const DeleteAppointment = ({ delAppointment, closeModal }) => {



  return (
    <div>
      <Modal
        confirmAction={delAppointment}
        closeModal={closeModal}
        buttonText="Удалить"
        title="Удалить прием"
      >
        <div>
        <span>Вы действительно хотите удалить запись?</span>
        </div>
      </Modal>
    </div>
  )
}
export default DeleteAppointment;