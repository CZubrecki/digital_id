import React from "react";
import Login from "./Login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Home from "./Home/Home";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}
