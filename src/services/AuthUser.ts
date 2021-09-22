import IUserCredentials from "../types/UserCredentials";

export const AuthUser = ({ username, password }: IUserCredentials): boolean => {
  return (
    username === localStorage.getItem("username") &&
    password === localStorage.getItem("password")
  );
};
