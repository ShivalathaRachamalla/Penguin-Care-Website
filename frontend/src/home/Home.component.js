import React, { Component } from "react";

class Home extends Component{
    render(){
        return(
            <div class="wrapper">
                <div class="auth-wrapper">
                    <p class="center">  Coronavirus (COVID-19) guide for parents </p>
                    <p class="center-middle">What you need to know to keep your loved ones safe.</p>
                    <p class="center"><img id="img" src={require("./family.jpg")} border="0" width= "1000" ></img></p>
                </div>
                <div class="auth-inner"> 
                    As a parent, you want to do everything you can to protect your child. 
                    The coronavirus disease (COVID-19) pandemic has brought with it new challenges for families across the globe. 
                    We know parents are struggling to balance work, child care and self-care while keeping worries — 
                    both your children’s and your own — under control. 
                    You don’t have to do it alone.
                    Penguine Care is here to be your partner in navigating this health crisis by providing you with accurate, 
                    reliable information on the best ways to keep your family safe.

                    <p> Regardless of their age, this may be a difficult time for children and young people. 
                        Some may react immediately, while others may show signs of difficulty later on. 
                    </p>

                    <p> During this time, it’s important that you support and take care of your family’s mental health – 
                        there are lots of things you can do, and additional support is available if you need it.
                    </p>

                    <p> <font size="4" color="purple"> Looking after your own mental health </font> </p>
                    As well as thinking about the children or young people in your care, it is important to take care of your own 
                    mental health and wellbeing. 
                    Children and young people react, in part, to what they see from the adults around them. 
                    When parents and carers deal with a situation calmly and confidently, 
                    they can provide the best support for their children and young people. 
                    Parents and carers can be more supportive to others around them, especially children, 
                    when they are better prepared.

                   <p> See <a href="https://www.nhs.uk/oneyou/every-mind-matters/">Every Mind Matters </a> 
                    for clear advice and actions to take care of your mental health and wellbeing. </p>
                </div>

                <div class="auth-inner">
                    <p> <font size="5" color="purple"> How children and young people of different ages may react </font> </p>
                    <p> All children and young people are different, but there are some common ways in which different age 
                        groups may react to a situation like the coronavirus (COVID-19) pandemic. 
                        Understanding these may help you to support your family. 
                        The common reactions to distress will fade over time for most children and young people, 
                        though could return if they see or hear reminders of what happened.
                    </p>
                    <p>
                        <p> <font size="4" color="purple"> For infants to 2-year olds </font> </p>    
                        Infants may become more easily distressed. They may cry more than usual or want to be held and cuddled more.
                    </p>
                    <p>
                        <p> <font size="4" color="purple"> For 3 to 6-year olds </font> </p>    
                        Preschool and nursery children may return to behaviours they have outgrown. 
                        For example, toileting accidents, bed-wetting, or being frightened about being separated 
                        from their parents or carers. 
                        They may also have tantrums or difficulty sleeping.
                    </p>
                    <p>
                        <p> <font size="4" color="purple"> For 7 to 10-year olds </font> </p>    
                        Older children may feel sad, angry, or afraid. 
                        Peers may share false information but parents or carers can correct the misinformation. 
                        Older children may focus on details of the situation and want to talk about it all the time, 
                        or not want to talk about it at all. 
                        They may have trouble concentrating.
                    </p>
                    <p>
                        <p> <font size="4" color="purple"> For preteens and teenagers </font> </p>    
                        Some preteens and teenagers respond to worrying situations by acting out. 
                        This could include reckless driving, and alcohol or drug use. Others may become afraid to leave the home. 
                        They may cut back on how much time they connect with their friends. 
                        They can feel overwhelmed by their intense emotions and feel unable to talk about them. 
                        Their emotions may lead to increased arguing and even fighting with siblings, parents, carers or other adults. 
                        They may have concerns about how the school closures and exam cancellations will affect them.
                    </p>     
                </div>

                <div class="auth-inner">
                    <p> <font size="4" color="purple"> What parents should know </font> </p>
                    <p>
                    The virus is transmitted through direct contact with respiratory droplets of an infected person 
                    (generated through coughing and sneezing), and touching surfaces contaminated with the virus. 
                    The COVID-19 virus may survive on surfaces for several hours, but simple disinfectants can kill it.
                    </p> 
                    <p> <font size="4" color="purple"> What are the symptoms of coronavirus? </font> </p>
                    <p class="center"> <img id="img" src={require("./besafehome.png")} border="0" width= "800"></img> </p>
                    <p>
                        Symptoms can include fever, cough and shortness of breath. 
                        In more severe cases, infection can cause pneumonia or breathing difficulties. 
                        More rarely, the disease can be fatal. 
                        These symptoms are similar to the flu (influenza) or the common cold, which are a lot more common than COVID-19. 
                        This is why testing is required to confirm if someone has COVID-19. 
                        It’s important to remember that key prevention measures are the same – 
                        frequent hand washing, and respiratory hygiene (cover your cough or sneeze with a flexed elbow or tissue, 
                        then throw away the tissue into a closed bin). 
                        Also, there is a vaccine for the flu – so remember to keep yourself and your child up to date with vaccinations.
                    </p>
                    
                </div>

                 

                <div class="auth-link">
                <img id="img" src={require("./handwash.jpg")} border="0" width= "200"></img>
                <a href=" https://www.unicef.org/stories/novel-coronavirus-outbreak-what-parents-should-know"> 
                Everything you need to know about washing your hands to protect against coronavirus (COVID-19) 
                </a>
                </div>

                <div class="auth-link">
                <img id="img" src={require("./stemcell.jpg")} border="0" width= "200"></img>
                <a href=" https://www.tobiasregistret.se/ "> 
                Save a life – join the stem cell donor registry! 
                </a>
                </div>

                <div class="auth-link">
                <img id="img" src={require("./hunger.jpg")} border="0" width= "200"></img>
                <a href=" https://thehungersite.greatergood.com/clicktogive/ths/home "> 
                When you click, our sponsors fund food and support for the hungry.
                </a>
                </div>

                <div class="auth-link">
                <img id="img" src={require("./Public.gif")} border="0" width= "200"></img>
                <a href=" https://www.folkhalsomyndigheten.se/the-public-health-agency-of-sweden/"> 
                Public Health Agency Of Sweden
                </a>
                </div>

                <div class="auth-link">
                <img id="img" src={require("./doctor.gif")} border="0" width= "200"></img>
                <a href=" kry.se/"> 
                Your digital health care
                </a>
                </div>
        </div>
                
        );
    }
}
export default Home;