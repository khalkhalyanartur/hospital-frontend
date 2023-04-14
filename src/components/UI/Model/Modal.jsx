import { useState } from "react";
import "./style.scss"

const Modal = ({ children, confirmAction, closeModal, buttonText, title }) => {

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="header">
          <h2>{title}</h2></div>
        <div className="body">
          {children}
          <div className="btn-wrapper">
            <button onClick={closeModal}>Отмена</button>
            <button onClick={confirmAction}>{buttonText}</button>
          </div>

        </div>
        <div className="footer"></div>


        




      </div>





    </div >

  )
}

export default Modal;