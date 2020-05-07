import React, { Component } from "react";

class Home extends Component{
    render(){
        return(
            <div class="wrapper">
                <div class="auth-wrapper">
                    <p class="center">  Coronavirus (COVID-19) guide for parents </p>
                    <p class="center-middle">What you need to know to keep your loved ones safe.</p>
                </div>
                <div class="auth-inner"> As a parent, you want to do everything you can to protect your child. 
                    The coronavirus disease (COVID-19) pandemic has brought with it new challenges for families across the globe. 
                     Penguine Care is here to be your partner in navigating this health crisis by providing you with accurate, reliable information on the best ways to keep your family safe.
                </div>
                <div class="auth-link">
                <img id="img" src={require("./handwash.jpg")} border="0" width= "200"></img>
                <a href=" https://www.unicef.org/stories/novel-coronavirus-outbreak-what-parents-should-know"> 
                Everything you need to know about washing your hands to protect against coronavirus (COVID-19) 
                </a>
                </div>
                
        </div>
                
        );
    }
}
export default Home;