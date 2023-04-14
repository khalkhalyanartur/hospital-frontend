import moment from "moment";
import { edit } from "src/img";
import { del } from "src/img";
import { textAppointments } from "src/constants"
import "./style.scss";


const TableAppointment = ({ appointments, delAppointment }) => {
  return (
    <table className="tableAppointment">
      <thead className="tableAppointmentHeader">
        <tr className="tableAppointmentHeaderRow">
          {
            textAppointments.map(text =>
              <th className="th" key={text.id}>{text.title}</th>
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
            <td className="tableAppointment__btn">
              <button
                //onClick={() => delAppointment(data._id)}
                className="btn_icon"
              >
                <img src={edit} alt="edit" />
              </button>

              <button
                className="btn_icon"
                onClick={() => delAppointment(data._id)}
              >
                <img src={del} alt="delete" />
              </button>
            </td>

          </tr>
        )
      }

    </table>
  )
}


export default TableAppointment;