import { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import Header from "../Header/Header";
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

  return (
    <div>
      <Header title="Приемы">
        <button onClick={handlerLogout}>Выйти</button>
      </Header>
      <div className="dash" />
      <AddAppointments />
      <TableAppointment 
        appointments={appointments}
      />
    </div>
  )
}

export default Reception;