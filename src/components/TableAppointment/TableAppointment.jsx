import { textAppointments } from "src/constants"
import moment from "moment";
import "./style.scss";


const TableAppointment = ({ appointments, className }) => {
  return (
    <table className={`${className} tableAppointment`}>
      <thead className="tableAppointmentHeader">
        <tr className="tableAppointmentHeaderRow">
          {
            textAppointments.map(text =>
              <th key={text.id}>{text.title}</th>
            )
          }
        </tr>
      </thead>
      {
        appointments.map(data => 
          <tr>
            <td className="tableAppointment__element">{data.patient}</td>
            <td className="tableAppointment__element">{data.doctor}</td>
            <td className="tableAppointment__element">{moment(data.date).format("DD.MM.YYYY")}</td>
            
            <td className="tableAppointment__element">{data.complaint}</td>
          </tr>
        )
      }
    
    </table>
  )
}

{/* <table>
    <thead>
        <tr>
            <th colspan="2">The table header</th>
        </tr>
    </thead> */}

export default TableAppointment;