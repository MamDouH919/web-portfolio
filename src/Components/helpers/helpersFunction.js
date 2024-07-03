import { Globals } from "../../Hooks/Classes/Globals";

export const UserLogout = (func) => {
  localStorage.removeItem("token");

  Globals.setUser(null);
  Globals.settings = null;
  func && func();
};
