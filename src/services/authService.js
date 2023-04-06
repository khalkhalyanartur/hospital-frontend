import api from "../http/index";

const registrationService = (login, password) => {
  return api.post("users/registration", { login, password });
}

export { registrationService }