import api from "../http/index";

const registrationService = (login, password) => {
  return api.post("users/registration", { login, password });
}

const authorizationService = (login, password) => {
  return api.post("users/authorization", { login, password });
}

const logoutService = () => {
  console.log("logout")
  return api.get("users/logout");
}

const refreshService = async () => {
  return api.get("users/refresh");
}

export { registrationService, authorizationService, logoutService, refreshService }