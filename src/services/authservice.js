import api from "src/http/index";

const registrationService = (login, password) => {
  return api.post("users/registration", { login, password });
}

export { registrationService }