import React, { ReactElement } from "react";
import { Login } from "./components/Login";
import "./i18n/i18n";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { PrivateRoute } from "./PrivateRoute";
import { SearchMoviesPage } from "components/SearchMoviesPage";

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <PrivateRoute exact path="/searchMovies" component={SearchMoviesPage} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
