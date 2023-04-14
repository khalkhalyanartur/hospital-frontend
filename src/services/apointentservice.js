import api from "../http/index";

const getReceptions = () => {
  return api.get("appointments/");
}

const addAppointmentService = (appointmentInfo) => {
  return api.post("appointments/create",appointmentInfo);
}

const deleteAppointmentService = (id) => {
  return api.delete(`appointments/delete/${id}`);
}


export { 
  getReceptions, 
  addAppointmentService,
  deleteAppointmentService 
}