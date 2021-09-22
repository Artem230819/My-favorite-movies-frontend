import IUserCredentials from "../components/Login/components/interfaces/UserCredentials";

export const AuthUser = ({ username, password }: IUserCredentials): boolean => {
  if (
    username !== localStorage.getItem("username") ||
    password !== localStorage.getItem("password")
  ) {
    return false;
  }
  return true;
};
