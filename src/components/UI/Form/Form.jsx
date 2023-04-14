import "./style.scss"

const Form = ({ title, children }) => {
  return (
    <div className="form">
      <div className="formContent">
        <p className="formContent__title">{title}</p>
        {children}
      </div>
    </div>
  )
}

export default Form;