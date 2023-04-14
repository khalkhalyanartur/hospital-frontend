import { useContext, useEffect, useState } from "react";
import { Context } from "src";
import Header from "src/components/Header/Header";
import AddAppointments from "src/components/AddAppointment/Addappointment";
import TableAppointment from "src/components/TableAppointment/TableAppointment";

const Reception = () => {
  const [appointments, setAppointments] = useState([]);
  const store = useContext(Context);

  const handlerLogout = () => {
    console.log("logout app")
    store.logout();
    return
  }

  const getAllApointments = async () => {
    const { error, data } = await store.showAllAppointments();
    setAppointments(data);
  }

  useEffect(() => {
    getAllApointments()
  }, [])

  const addNewAppointmentReception = async (appointmentInfo) => {
    try {
      const { error, data } = await store.createAppointments(appointmentInfo);
      if (error) {
        console.log(error);
        return
      }
      setAppointments([...appointments, data])

    } catch (error) {
      console.log("error Reception", error);
    }

  }

  const delAppointment = async (id) => {
    try {
      const { error, data } = await store.deleteAppointment(id);

      if (error) {
        console.log(error);
        return
      }

      const arrayAfterDel = appointments.filter(app => app._id !== id);

      setAppointments(arrayAfterDel);

    } catch (error) {
      console.log("error delete appointment", error);
    }

  }

  return (
    <div>
      <Header title="Приемы">
        <button onClick={handlerLogout}>Выйти</button>
      </Header>
      <div className="dash" />
      <AddAppointments addNewAppointmentReception={addNewAppointmentReception} />
      <TableAppointment
        appointments={appointments}
        delAppointment={delAppointment}
      />
    </div>
  )
}

export default Reception;