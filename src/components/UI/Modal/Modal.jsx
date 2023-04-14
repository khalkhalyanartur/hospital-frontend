import { useState } from "react";
import "./style.scss"

const Modal = ({active, setActive}) => {

  return (
    <div className="modal" onClick={() => setActive(false)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>

      </div>
    </div >

  )
}