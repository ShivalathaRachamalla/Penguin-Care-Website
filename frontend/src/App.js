import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/auth/login.component";
import SignUp from "./components/auth/signup.component";

import Home from './home/Home.component';
import Indoor from './components/Indoor';
import Recipe from './food/Recipe';
import PostPage from './components/posts/PostPage';
import Movies from './components/Movies'; 
import Exercise from './activity/Exercise';
import Outdooractivity from './Outdoor/Outdooractivity';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}><img className="logo" src={require("./assets/images/penlogo.png")} alt="logo"/></Link>
          <ul className="navbar-nav ml-auto">
         
          <li className="nav-item">
                <Link className="nav-link" to={"/Indoor"}>Indoor Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Outdoor"}>Outdoor Activities</Link>
              </li>
              <li className="nav-item">


              <Link className="nav-link" to={"/Recipe"}>Recipes</Link>
                 </li>

                 <li className="nav-item">
                 <Link className="nav-link" to={"/Exercise"}>Exercise</Link>
                 </li>
                 <li className="nav-item">
                <Link className="nav-link" to={"/Movies"}>Movies for kids</Link>

              </li>
              </ul>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/posts"}>Posts</Link>
              </li>
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
            <Route path="/Login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/Indoor" component={Indoor}/>
            <Route path="/Outdoor" component={Outdooractivity}/>

            <Route path="/Recipe" component={Recipe}/>
            <Route path="/Exercise" component={Exercise}/>
            <Route exact path="/posts" component={PostPage}/>

            <Route path="/Movies" component={Movies} />

          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
