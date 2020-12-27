import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, Register, MainApp } from "../../pages";

export const index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainApp />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default index;
