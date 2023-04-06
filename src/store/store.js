import { event } from "../constants";
import {
  registrationService
} from "../services/authService"

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
        data: null
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
}

export default Store;