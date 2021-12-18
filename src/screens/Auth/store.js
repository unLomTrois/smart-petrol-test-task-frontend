import { makeAutoObservable } from "mobx";
import { validateEmail } from "utils/email";

import auth_api from "api/auth";

export class AuthStore {
  email = "";
  password = "";
  error = false;

  constructor() {
    makeAutoObservable(this);
  }

  setEmail(s) {
    this.email = s;
  }

  setPassword(s) {
    this.password = s;
  }

  get emailCorrect() {
    return validateEmail(this.email);
  }

  get canLogin() {
    return this.emailCorrect && !!this.password;
  }

  async login() {
    try {
      await auth_api.login(this.email, this.password);
    } catch (err) {
      this.error = true;
      return;
    }
    window.location.pathname = "/";
  }
}
