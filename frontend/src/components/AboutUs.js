import React, { Component } from "react";
import '../App.css';
//import './AboutUs.css';
class AboutUs extends Component {
    render() {
        return (
            <div class="abtus">
                <div class="abtwrap">
                <h1>Our Team</h1>
                <div class="team">
                    <div class="team_member">
                        <div class="team-imag">
                        <img src={require('../img/anu.png')} alt="team member
                    image"  width="250px" height="300px"/>
                        </div>
                        <h3 class="tmember">Anu Sindhura Madava</h3>
                        <p class="role">Full Stack Developer</p>
                        <p>I am a gril who always takes time to live life,which inspirer’s my work.
I like to solve puzzles and travel.</p>
                    </div>
                    <div class="team_member">
                    <div class="team-imag">
                        <img src={require('../img/harsha.jpg')} alt="team member
                    image" width="250px" height="300px" />
                    </div>
                        <h3 class="tmember">Harshada Mulye</h3>
                        <p class="role">Full Stack Developer </p>
                        <p>I am fun loving woman and mom of 3 years old girl. 
                            I have IT background and experienced of teaching. I like to read books and love to visit new places. I would like to thanks Novare for giving me this opportunity to brush up my skills.</p>
                    </div>
                    <div class="team_member">
                    <div class="team-imag">
                        <img src={require('../img/manasa.jpg')} alt="team member
                    image" width="250px" height="300px" />
                    </div>
                    <h3 class="tmember">Manasa Muddasani</h3>
                        <p class="role">Full Stack Developer</p>
                        <p>I am a fun loving person. like cooking and nature. love travelling and shopping.I would like to thanks Novare for giving me this opportunity to brush up my skills.</p>
                    </div>
                    </div>
                    <div class="team">
                    <div class="team_member">
                    <div class="team-imag">
                        <img src={require('../img/shiva.jpg')} alt="team member
                    image"  width="250px" height="300px"/>
                    </div>
                    <h3 class="tmember">Shiva Latha R </h3>
                        <p class="role">Full Stack Developer</p>
                        <p>I am a person who is positive about every aspect of life. I like to be surrounded by people. I just find myself happy with the simple things. Appreciating the blessings god gave me. 
“I want to be your favorite hello and your hardest goodbye”.</p>
                    </div> 
                    
                    <div class="team_member">
                    <div class="team-imag">
                        <img src={require('../img/teja.jpg')} alt="team member
                    image" width="250px" height="300px" />
                    </div>
                    <h3 class="tmember">Tejaswi Nuthi</h3>
                        <p class="role">Full Stack Developer</p>
                        <p>I am simple woman who likes to travel,watch movies. Reading is my passion</p>
                    </div> 
                        
                    <div class="team_member">
                    <div class="team-imag">
                        <img src={require('../img/vidhya.jpg')} alt="team member
                    image" width="250px" height="300px" />
                    </div>
                    <h3 class="tmember">Vidhya Segar </h3>
                        <p class="role">Full Stack Developer</p>
                        <p> I am a simple woman who dreams to become super mom and great cook. Currently, I am a part time developer for this project. I have greater interest in trying various cuisine.  So I started a food blog recently. I had good experience and exposure while working in this webpage creation. I thank all the beautiful ladies and smart gentlemen of this SDA group. 
                            A special mention to my colleagues of team Raindrops.</p>
                    </div> 
                    </div>
            </div>
            </div>
            );
        }
    }
    
    export default AboutUs;

