import React, { ReactElement } from "react";
import { Login } from "./components/Login/Login";
import "./i18n/i18n";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
