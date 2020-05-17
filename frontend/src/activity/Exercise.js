import React, { Component } from "react";

class Exercise extends Component{
    render(){
        return(

            <div class="wrapper">
                <div class="auth-wrapper">
                    <p class="center"> Stay physically active during self-quarantine  </p>
                    <p class="center-middle">We recommends 150 minutes of moderate-intensity or 75 minutes of vigorous-intensity physical activity per week</p>
                    <p class="center"><img id="img" src={require("./Family.jpg")} border="0" width= "1000" ></img></p>
                </div>
                <div class="auth-inner"> As new COVID-19 cases continue to emerge in the we European Region, many healthy individuals are being requested to stay at home in self-quarantine. 
                In some countries, fitness centres and other locations where individuals are normally active, will remain temporarily closed. 
                Staying at home for prolonged periods of time can pose a significant challenge for remaining physically active. 
                Sedentary behaviour and low levels of physical activity can have negative effects on the health, well-being and quality of life of individuals. 
                Self-quarantine can also cause additional stress and challenge the mental health of citizens. 
                Physical activity and relaxation techniques can be valuable tools to help you remain calm and continue to protect your health during this time.
                <p class="center"><img id="img" src={require("./stress.png")} border="0" width= "600" ></img></p>
                We recommends 150 minutes of moderate-intensity or 75 minutes of vigorous-intensity physical activity per week, or a combination of both. 
                These recommendations can still be achieved even at home, with no special equipment and with limited space. 
                The following are some tips on how to stay active and reduce sedentary behaviour while at home in self-quarantine:
                </div>

                <div class="recipe"> 
                        <div class="image-txt-container">
                            <img src={require("./Fitness4.jpg")} border="0" width= "500" ></img>
                            <p2 class="margin">
                              <p> <font size="6" color="blue"> Take short active breaks during the day </font> </p>
                              Short bouts of physical activity add up to the weekly recommendations. 
                              You may use the suggested exercises below as inspiration to be active every day. 
                              Dancing, playing with children, and performing domestic chores such as cleaning and gardening are other means to stay active at home.
                            </p2>
                                
                        </div>                      
                    </div>

                    <div class="recipe"> 
                        <div class="image-txt-container">
                            <img src={require("./Fitness1.png")} border="0" width= "500" align="right" ></img>
                            <p2 class="margin">
                              <p> <font size="6" color="blue"> Follow online exercise class </font> </p>
                              Take advantage of the wealth of online exercise classes. 
                              Many of these are free and can be found on YouTube. 
                              If you have no experience performing these exercises, be cautious and aware of your own limitations.
                            </p2>
                                
                        </div>                      
                    </div>    

                    <div class="recipe"> 
                        <div class="image-txt-container">
                            <img src={require("./walking.jpeg")} border="0" width= "450" align="right" ></img>
                            <p2 class="margin">
                              <p> <font size="6" color="blue"> Walk </font> </p>
                              Even in small spaces, walking around or walking on the spot, can help you remain active.
                               If you have a call, stand or walk around your home while you speak, instead of sitting down. 
                               If you decide to go outside to walk or exercise, be sure to maintain at least a 1-meter distance from other people.
                            </p2>
                                
                        </div>                      
                    </div>   

                    <div class="recipe"> 
                        <div class="image-txt-container">
                            <img src={require("./breaks.png")} border="0" width= "500" align="right" ></img>
                            <p2 class="margin">
                              <p> <font size="6" color="blue"> Stand-Up </font> </p>
                              Reduce your sedentary time by standing up whenever possible. 
                              Ideally, aim to interrupt sitting and reclining time every 30 minutes. 
                              Consider setting up a standing desk by using a high table or stacking a pile of books or other materials, to continue working while standing.
                               During sedentary leisure time prioritize cognitively stimulating activities, such as reading, board games, and puzzles.
                            </p2>
                                
                        </div>                      
                    </div>   

                    <div class="recipe"> 
                        <div class="image-txt-container">
                            <img src={require("./Yoga.jpg")} border="0" width= "500" align="right" ></img>
                            <p2 class="margin">
                              <p> <font size="6" color="blue"> Relax </font> </p>
                              Meditation and deep breaths can help you remain calm. 
                              A few examples of relaxation techniques are available below for inspiration.
                            </p2>
                                
                        </div>                      
                    </div> 

                    <p class="bottom"> For optimal health, it is also important to remember to eat healthily and stay hydrated.
                     We recommends drinking water instead of sugar-sweetened beverages. 
                     'Limit or avoid alcoholic beverages for adults and strictly avoid these in young people, and pregnant and breastfeeding women, or for other health reasons. 
                     Ensure plenty of fruits and vegetables, and limit the intake of salt, sugar and fat. 
                     Prefer whole grains rather than refined foods. 
                     For more guidance on how to eat healthily, please see the We fact sheet on healthy diet. </p>

                     <div class="auth-links">
                    <img id="img" src={require("./knee.jpg")} border="0" width= "200"></img>
                    <a> <p> <font size="4" color="blue">  Knee to elbow </font> </p>
                        Touch one knee with the opposite elbow, alternating sides. 
                        Find your own pace. Try to perform this for 1–2 minutes, rest for 30–60 seconds, and repeat up to 5 times. 
                        This exercise should increase your heart and breathing rates.
                        </a>
                    </div>

                    <div class="auth-links">
                    <img id="img" src={require("./plank.png")} border="0" width= "200"></img>
                    <a> <p> <font size="4" color="blue"> Plank</font> </p>
                    Support your forearms firmly on the ground, with the elbows under the shoulders. 
                    Keep the hips at the level of the head. Hold for 20–30 seconds, rest for 30–60 seconds,repeat up to 5 times. 
                    This exercise strengthens your belly, arms and legs.
                    </a>
                    </div>

                    <div class="auth-links">
                    <img id="img" src={require("./squarts.png")} border="0" width= "200"></img>
                    <a> <p> <font size="4" color="blue"> Squats</font> </p>
                    Place your feet at hip distance with the toes pointing slightly outwards. 
                    Bend the knees as much as feels comfortable, keeping the heels on the ground and the knees over the feet. 
                    Bend and stretch the legs. Perform this exercise 10–15 times, rest for 30 seconds,repeat up to 5 times. 
                    This exercise strengthens your legs and glutes.
                    </a>
                    </div>

                    <div class="auth-links">
                    <img id="img" src={require("./legsup.jpg")} border="0" width= "200"></img>
                    <a> <p> <font size="4" color="blue">Legs up the wall</font> </p>
                     Bring your hips close (5–10 cm) to the wall and let your legs rest.
                     Close your eyes, relax your body and progressively deepen your breathing. 
                     Concentrate on your breath, trying not to focus on any thought or concern. 
                     Rest in this pose for up to 5 minutes. This position is meant to be comfortable, relaxing and de-stressing.
                    </a>
                    </div>
                    

                    <div class="auth-links">
                    <img id="img" src={require("./superman.jpg")} border="0" width= "200"></img>
                    <a> <p> <font size="4" color="blue">Superman</font> </p>
                    Place your hands under your shoulders and knees under your hips. 
                    Lift one arm forward and the opposite leg back, alternating sides. 
                    Perform this exercise 20–30 times (or more), rest for 30–60 seconds,and repeat up.
                    </a>
                    </div>

                    <div class="auth-links">
                    <img id="img" src={require("./sideknee.png")} border="0" width= "200"></img>
                    <a> <p> <font size="4" color="blue">SideKnee</font> </p>
                    Touch your knee with your elbow, lifting the knee to the side, alternating sides. 
                    Find your own pace. Try to perform this for 1–2 minutes, rest for 30–60 seconds, and repeat up to 5 times.
                     This exercise should increase your heart and breathing rates.
                    </a>
                    </div>

                    <div class="auth-links">
                    <img id="img" src={require("./bridge.jpg")} border="0" width= "200"></img>
                    <a> <p> <font size="4" color="blue">Bridge</font> </p>
                    Plant your feet firmly on the ground with the knees over the heels. 
                    Lift the hips as much as it feels comfortable and slowly lower them again. 
                    Perform this exercise 10–15 times (or more), rest for 30–60 seconds, and repeat up to 5 times. 
                    This exercise strengthens your glutes.
                    </a>
                    </div>
                
                <div>
                
                </div>

                
             </div>   
            
            
            
        );

    }
}
    export default Exercise;