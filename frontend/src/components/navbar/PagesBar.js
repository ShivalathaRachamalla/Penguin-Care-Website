import React from 'react';

/* import Home from '../../home/Home.component';
import Indoor from '../Indoor';
import Recipe from '../../food/Recipe';
import PostPage from '../posts/PostPage';
import Movies from '../Movies'; 
import Exercise from '../../activity/Exercise';
import Outdooractivity from '../../Outdoor/Outdooractivity'; */

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dropdown from '../dropdownmenu/Dropdown';


function PagesBar(){
  return(
    <>
             <ul className="navbar-nav ml-auto">
          <li >   
          <div style={{display: 'flex', justifyContent: 'center'}} > 
          <Dropdown/>
          </div>
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
             <li className="nav-item">
               <Link className="nav-link" to={"/FAQ"}><img className="posticon" src={require('./qu.png')} alt="FAQ"/></Link></li>
            
              <li className="nav-item">
               <Link className="nav-link" to={"/AboutUs"}><img className="posticon" src={require('./about.png')} alt="about"/></Link></li>
               <li className="nav-item">
    
      <Link className="nav-link" to={"/posts"}><img className="posticon" src={require('./newpost.png')} alt="logo"/></Link>
    </li> 
             </ul>

    </>
    
  );

}

export default PagesBar;
