import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface IPrivateRoute extends RouteProps {}

export const PrivateRoute: React.FC<IPrivateRoute> = ({ ...props }) => {
  const Auth = localStorage.getItem("Auth");
  return Auth === "0" ? <Redirect to="/login" /> : <Route {...props} />;
};
