import React from 'react';

/* import Home from '../../home/Home.component';
import Indoor from '../Indoor';
import Recipe from '../../food/Recipe';
import PostPage from '../posts/PostPage';
import Movies from '../Movies'; 
import Exercise from '../../activity/Exercise';
import Outdooractivity from '../../Outdoor/Outdooractivity'; */

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function PagesBar(){
  return(
    <>
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
    </>
  );

}

export default PagesBar;
