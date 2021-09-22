import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface IPrivateRoute extends RouteProps {}

export const PrivateRoute: React.FC<IPrivateRoute> = ({ ...props }) => {
  const Auth = localStorage.getItem("Auth");
  if (Auth === "0") return <Redirect to="/login" />;
  return <Route {...props} />;
};
