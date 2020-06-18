import React from "react";
import Login from "./Login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DigitalIDSignUp from "./DigitalIDSignUp/DigitalIDSignUp";


export default function App() {
  return (
    <Router>
      {/* <Route path='/' exact component={} /> */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={DigitalIDSignUp} />
        </Switch>
      </div>
    </Router>
  );
}
