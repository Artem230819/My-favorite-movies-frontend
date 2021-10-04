import { History, LocationState } from "history";

export const LogOut = (history: History<LocationState>):void => {
  localStorage.setItem("Auth", "0");
  history.push("/login");
};
