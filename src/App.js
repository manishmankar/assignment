import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import PageDashboard from "./containers/PageDashboard/PageDashboard";
import PageUserLogin from "./containers/PageUserLogin/PageUserLogin";
import PageUserRegister from "./containers/PageUserRegister/PageUserRegister";
import React, { useEffect } from "react";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App(props) {
  let isValidUser = JSON.parse(localStorage.getItem("userinfo"));
  return (
    <Router>
      <Switch>
        <Route exact path="/login" render={(props) => <PageUserLogin {...props} />} />
        <Route path="/signup" render={(props) => <PageUserRegister {...props} />} />
        <Route
          path="/dashboard"
          render={(props) =>
            isValidUser ? <PageDashboard {...props} /> : props.history.push("/login/?rto=")
          }
        />

        <Route path="*" render={(props) => <> "Not Fonts 404" </>} />
      </Switch>
    </Router>
  );
}

export default App;
