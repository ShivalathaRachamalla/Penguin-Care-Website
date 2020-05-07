import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./components/auth/LoginPage.js";
import SignupPage from "./components/auth/SignupPage.js";

import Home from './home/Home.component';
import Indoor from './components/Indoor';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}><img className="logo" src={require("./assets/images/finallogo.png")} alt="logo"/></Link>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
                <Link className="nav-link" to={"/Indoor"}>Indoor Activities</Link>
              </li>
              </ul>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            
              <li className="nav-item">
                <Link className="nav-link" to={"/Login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/Login" component={LoginPage} />
            <Route path="/sign-up" component={SignupPage} />
            <Route Path="/Indoor Activities" component={Indoor}/>
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
