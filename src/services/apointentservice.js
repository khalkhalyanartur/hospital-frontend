import api from "../http/index";

const getReceptions = () => {
  return api.get("appointments/");
}

export { getReceptions }