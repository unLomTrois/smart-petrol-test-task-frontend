import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";

// import { validateEmail } from "~/utils/email";

import api from "api/auth";

export class GlobalState {
  user;

  constructor() {
    makeAutoObservable(this);
  }

  async getUser() {
    this.user = await api.getCurrentUser();
  }
}

export const GlobalStateContext = createContext(new GlobalState())
export const GlobalStateProvider = GlobalStateContext.Provider

export function useGlobalState() {
  return useContext(GlobalStateContext)
}
