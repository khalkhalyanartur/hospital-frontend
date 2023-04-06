import "./style.scss"

const Form = (props) => {
  return (

    <div className="form">
      <div className="formContent">
        <p className="formContent__title">{props.title}</p>
        {props.children}
      </div>
    </div>
  )
}

export default Form;