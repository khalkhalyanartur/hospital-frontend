import { event } from "../constants";
import {
  registrationService,
  authorizationService,
  logoutService,
  refreshService
} from "../services/authservice"

import {
  getReceptions
} from "../services/apointentservice"

class Store {
  user = {};
  isAuth = false;
  subscribers = {};

  setAuth(boolean) {
    this.isAuth = boolean;
    this.publish(event[0], this.isAuth)
  }


  setUser(userData) {
    this.user = userData;
  }

  subscribe = (event, callback) => {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }

    this.subscribers[event].push(callback);
  }

  publish = (event, data) => {
    if (!this.subscribers[event]) {
      return
    }

    this.subscribers[event].forEach(subscribersCallback => {
      subscribersCallback(data);
    });
  }

  registration = async (login, password) => {
    try {
      const response = await registrationService(login, password);

      localStorage.setItem("token", response.data.accessToken);

      this.setAuth(true);
      this.setUser(response.data.user);

      return {
        error: null,
        data: response.data
      }
    } catch (error) {
      const err = error.response?.data?.message
        ?? "Ошибка на сервере при регистрации";

      return {
        error: err,
        data: null
      }
    }
  }

  authorization = async (login, password) => {
    try {
      const response = await authorizationService(login, password);

      localStorage.setItem("token", response.data.accessToken);

      this.setAuth(true);
      this.setUser(response.data.user);

      return {
        error: null,
        data: response.data
      }
    } catch (error) {
      const err = error.response?.data?.message
        ?? "Ошибка на сервере при авторизации";

      return {
        error: err,
        data: null
      }
    }
  }

  logout = async () => {
    try {
      console.log("store logout");
      await logoutService();

      localStorage.removeItem("token");

      this.setAuth(false);
      this.setUser({});

      return {
        error: null,
        data: null
      }
    } catch (error) {
      const err = error.response?.data?.message
        ?? "Не удалось выйти, ошибка на сервере";

      return {
        error: err,
        data: null
      }
    }
  }



  checkAuth = async () => {
    try {
      if (!localStorage.getItem("token")) {
        this.setAuth(false);
        this.setUser({});
        return;
      }
      const response = await refreshService();
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
      return {
        error: null,
        data: null
      }
    } catch (error) {
      const err = error.response?.data?.message
        ?? "Ошибка! Не удалось проверить авторизован ли пользователь в системе";
      return {
        error: err,
        data: null
      }
    }
  }

  showAllAppointments = async () => {
    try {
      const response = await getReceptions();

      return {
        error: null,
        data: response.data
      }
    } catch (error) {
      const err = error.response?.data?.message
        ?? "Ошибка! Не удалось получить записи с сервера";
      return {
        error: err,
        data: null
      }
    }
  }

}

export default Store;