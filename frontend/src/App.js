import React, { useState, Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./components/auth/LoginPage.js";
import SignupPage from "./components/auth/SignupPage.js";

import Home from "./home/Home.component";
import Indoor from "./components/Indoor";
import Recipe from "./food/Recipe";
import PostPage from "./components/posts/PostPage";
import Movies from "./components/Movies";
import Auth from "./services/Auth";
import Exercise from "./activity/Exercise";
import Outdooractivity from "./Outdoor/Outdooractivity";
import PagesBar from "./components/navbar/PagesBar";
import FAQ from "./components/FAQ";
import AboutUs from "./components/AboutUs";
function App() {
  const [isLoggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);

  const toggleMenu = () => {
    const menuContainer = document.getElementById("navbarTogglerDemo02");
    menuContainer.classList.toggle("collapse");
  };

  const email = Auth.getDisplayName();

  const renderPostPage = (props) => {
    return <PostPage {...props} email={email} />;
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            {isLoggedIn ? (
              <Link className="navbar-brand" to={"/"}>
                <img
                  className="logo"
                  src={require("./assets/images/pcaring.png")}
                  alt="logo"
                />
              </Link>
            ) : (
              <img
                className="logo"
                src={require("./assets/images/pcaring.png")}
                alt="logo"
              />
            )}
            <button
              onClick={(e) => toggleMenu()}
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              {isLoggedIn ? <PagesBar /> : null}

              <ul className="navbar-nav ml-auto">
                {isLoggedIn ? (
                  <li className="nav-item">
                    <div>logged in as</div>
                    <img
                      className="usericon"
                      src={require("./assets/images/login_icon.png")}
                      alt="user_icon"
                    />
                    <span>{email}</span>
                    <Link className="nav-link" onClick={() => Auth.logout()}>
                      Logout
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link" to={"/Login"}>
                      Login
                    </Link>
                  </li>
                )}
                {!isLoggedIn ? (
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>
                      Sign up
                    </Link>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Login" component={LoginPage} />
              <Route path="/sign-up" component={SignupPage} />
              <Route path="/Indoor" component={Indoor} />
              <Route path="/Movies" component={Movies} />
              <Route path="/Recipe" component={Recipe} />
              <Route path="/Exercise" component={Exercise} />
              <Route path="/Outdoor" component={Outdooractivity} />
              <Route
                exact
                path="/posts"
                component={(props) => renderPostPage(props)}
              />
              <Route path="/FAQ" component={FAQ} />
              <Route path="/AboutUs" component={AboutUs} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
