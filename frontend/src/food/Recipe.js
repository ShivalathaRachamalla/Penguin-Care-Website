import React, { Component } from "react";
import AddRecepiePage from "./AddRecepiePage";

class Recipe extends Component{
    render(){
        return(

            <div class="auth-wrapper">
                <p class="center">
                    Best quick healthy recipes 
                </p>
                 
                    <div class="recipe"> 
                        <div class="image-txt-container">
                            <img 
                                src={require("./lemon.jpg")} border="0" width= "200" >
                            </img>
                                <p2>
                                    <p> 
                                        <font size="6" color="purple"> Lemon Turmeric Energy Balls </font> 
                                    </p>
                                    Soft and citrusy, these Lemon Turmeric Energy Balls are just amazing. 
                                    They are loaded with flavor and SUPERFOODS - powerful healing spice turmeric and nutritious chia seeds. 
                                    These immune boosting, added-sugar-free power balls are perfect healthy snack.
                                    <p> 
                                        <font color="purple">  Ingredients: </font>
                                    </p>
                                    <ul>
                                        <li> 12 dates </li>
                                        <li> 1 cup rolled oats gluten free </li>
                                        <li>  ½ cup almonds </li>
                                        <li> 1 tablespoon chia seeds </li>
                                        <li> 4 tablespoons lemon juice </li>
                                        <li> 1 teaspoon lemon zest </li>
                                        <li> 1 teaspoon vanilla extract </li>
                                        <li> 1 teaspoon turmeric powder </li>
                                        <li> Pinch of black pepper </li>
                                        <li> ½ cup shredded coconut for dusting </li>
                                    </ul>
                                    <p> 
                                        <font color="purple">  How to make it: </font>
                                    </p>
                                    <ol>
                                        <li> Remove the pits from dates and soak them in hot water for several minutes. 
                                            When the dates are softened, drain them and place in food processor. 
                                            Save the water.
                                        </li>
                                        <li> Add the other ingredients to a food processor and blend until mixture turns into a dough-like consistency. 
                                            Add 1 tablespoon of water in which you have soaked the dates if the mixture is too dry. 
                                        </li>
                                        <li>
                                            With the small spoon scoop the mixture and roll into balls. 
                                            Roll the balls in shredded coconut and place on the baking sheet.
                                        </li>
                                        <li>
                                            Store energy balls in an airtight container in the refrigerator until serving.
                                        </li>
                                    </ol>
                              </p2>                  
                               <ul> 
                                    <li> Preparation time: 10mins  </li>
                                    <li> Cooking time: 10mins </li>
                               </ul>
                    </div>                      
            </div>


            <div class="recipe"> 
                <div class="image-txt-container">
                    <img src={require("./carrot.jpeg")} border="0" width= "500" ></img>
                        <p2>
                            <p> <font size="6" color="purple"> Carrot-Mango Lassi </font> </p>
                              The pinch of turmeric here is great for the liver.

                                <p> <font color="purple">  Ingredients: </font> </p>
                                <ul>
                                    <li> 2 medium carrots or 1/4 cup carrot juice</li>
                                    <li> 1 small mango, peeled and cubed </li>
                                    <li>  1/2 cup plain nonfat yogurt </li>
                                    <li> 3 tablespoons honey </li>
                                    <li> 1 tablespoon fresh lime juice </li>
                                    <li> 1/4 teaspoon ground turmeric </li>
                                    <li> salt </li>
                                </ul>
                                <p> <font color="purple">  How to make it: </font> </p>
                                <ol>
                                    <li> Juice the carrots. 
                                        Transfer the juice to a blender and add all of the remaining ingredients except the salt.
                                    </li>
                                    <li>
                                        Blend until smooth. Season with salt.
                                    </li>
                                </ol>
                        </p2>                  
                                     <ul> 
                                         <li>  Preparation time: 10mins  </li>
                                         <li> Cooking time: 10mins </li>
                                     </ul>
                 </div>                      
            </div>

                    <div class="recipe"> 
                        <div class="image-txt-container">
                            <img src={require("./sandwich.jpg")} border="0" height="300" width= "400" ></img>
                            <p2>
                              <p> <font size="6" color="purple"> Peruvian Triple Sandwiches </font> </p>
                                Avocados are plentiful in Peru and add a nice richness while the eggs offer a healthy protein source and the 
                                ripe tomato brightens up this sandwich, which is often enjoyed as a meal and as a snack.
                                <p> <font color="purple">  Ingredients: </font> </p>
                                <ul>
                                    <li> 4 eggs</li>
                                    <li> 1/4 cup (60 mL) mayonnaise </li>
                                    <li>  8	slices white sandwich bread, crusts removed </li>
                                    <li> 1 large ripe avocado </li>
                                    <li> 1	vine ripened tomato, sliced </li>
                                    <li> 1/2 tsp (2.5 mL) each salt and pepper, divided </li>
                                </ul>
                                <p> <font color="purple">  How to make it: </font> </p>
                                <ol>
                                    <li> Place eggs in single layer in saucepan. Cover, by 1-inch (2.5) cm, with cold water. </li>
                                    <li>   Set pan over high heat and bring water to rolling boil. Place tight-fitting lid on pan and remove from heat. </li>
                                    <li>   Let stand for 6 minutes. Drain water and place eggs under cold running water for 1 minute or until cool enough to handle. </li>
                                    <li>   Peel and slice each egg. </li>
                                    <li> Spread thin layer of mayonnaise on one side of each slice of bread. </li>
                                    <li> Divide avocado evenly over 2 pieces of bread; season with some salt and pepper. </li> 
                                    <li> Top avocado with a piece of bread, mayonnaise side up. </li>
                                    <li> Divide tomato evenly over the 2 pieces of bread; season with some salt and pepper. </li>
                                    <li> Top tomato with a third piece of bread; mayo side up. </li>
                                    <li> Divide sliced eggs evenly over the 2 pieces of bread; season with remaining salt and pepper. </li>
                                     <li>  Top with the last piece of bread; mayo side down. Cut each sandwich in half to make 4 portions.</li>
                                </ol>
                            </p2>                  
                                     <ul> 
                                         <li>  Preparation time: 10mins  </li>
                                         <li> Cooking time: 10mins </li>
                                     </ul>


                        </div>                      
                    </div>
                   
                    <div class="recipe"> 
                        <div class="image-txt-container">
                            <img src={require("./soup.png")} border="0" width= "400" ></img>
                            <p2>
                              <p> <font size="6" color="purple"> Real tomato soup </font> </p>
                              Creamy tomato soup is the stuff of childhood, and it's easy to make yourself.

                                <p> <font color="purple">  Ingredients: </font> </p>
                                <ul>
                                    <li> 2 tbsp olive oil</li>
                                    <li> 1 onion, chopped </li>
                                    <li>  1 garlic clove, finely chopped </li>
                                    <li> 1 tbsp tomato purée </li>
                                    <li> 400g can chopped tomato </li>
                                    <li> handful basil leaf </li>
                                    <li> pinch bicarbonate of soda </li>
                                    <li> 600ml milk </li>
                                </ul>
                                <p> <font color="purple">  How to make it: </font> </p>
                                <ol>
                                <li> Heat the olive oil in a large pan, then tip in the onion and garlic. </li>
                                    <li>   Cook over a moderate heat until the onion has softened, about 5 mins </li>
                                    <li>   Stir in the tomato purée, then pour in the chopped tomatoes and basil leaves, and bring up to the boil. </li>
                                    <li>   Turn the heat down and leave to simmer for about 15 mins until thick and full of flavour. </li>
                                    <li> To finish the soup, tip the tomato mixture into a pan. </li>
                                    <li> Spoon the baking soda into a small bowl and pour over 1 tbsp or so of the milk. </li> 
                                    <li> Mix together until there are no lumps, then tip into the tomato mix and pour over the milk. </li>
                                    <li> Bring up to a boil (the mixture will froth, but don’t worry – it will go away). </li>
                                    <li> Gently simmer for about 5 mins until ready to serve. </li>
                                </ol>
                            </p2>                  
                                     <ul> 
                                         <li>  Preparation time: 5mins  </li>
                                         <li> Cooking time: 20mins </li>
                                     </ul>
                        </div>  

                        <div class="recipe">
                            <p>
                                <AddRecepiePage />  
                            </p>
                            
                        </div> 

                                          
                    </div>
                   
                    <p class="center"> 
                     Easy, affordable and healthy eating tips during the coronavirus disease (COVID-19) outbreak 
                    </p> 
                    <p 
                     class="center-middle"> Ideas to help your family maintain a nutritious diet. 
                    </p>
                    <img 
                        id="img" src={require("./parentchild.jpg")} border="0" width= "1300">
                    </img>

                    <p> The coronavirus disease (COVID-19) outbreak is upending life for families around the world. 
                        As schools and childcare centres close, many parents are finding themselves stuck at home for most of the day juggling childcare, full-time work and other competing responsibilities. 
                        Figuring out “What’s for dinner?” can be yet another daily challenge. 
                    </p>
                    <p> To make things even harder, panic buying and disruptions to food supply systems mean some foods can now be difficult to find. 
                        And for many people, unemployment and lost income are making food shopping an additional financial challenge.
                    </p>
                    <p> While many parents are understandably looking to ready meals and processed foods as a quick and low-cost way to feed the family, there are convenient, affordable and healthy alternatives. 
                         Here are five ways to help feed your children a varied, nutritious diet that will support their growth and development, all while building healthy eating habits. 
                    </p>  
                    <p class="left"> <font color="purple">  5 healthy eating tips </font></p> 
                    <p>
                      <div class="auth-inner"> 
                            <p> <font size="4" color="purple"> 1. Keep up fruit and vegetable intake </font> </p>
                            Purchasing, storing and cooking fresh vegetables can be challenging in a lockdown, especially when parents are advised to limit trips outside of the home.
                            But wherever possible, it’s important to ensure children are still getting plenty of fruit and vegetables in their diet. 
                            <p> Whenever it is possible to get hold of fresh produce, do so. 
                                As well as being eaten fresh, fruits and vegetables can be frozen where possible and will retain most of their nutrients and flavor. 
                              Using fresh vegetables to cook large batches of soups, stews or other dishes will make them last longer and provide meal options for a few days. 
                                These can also be frozen where possible and then quickly reheated.
                            </p>      
                            <img id="img" src={require("./freshfood.jpg")} ></img>
                        </div>
                    </p>
                    
                    <p>
                        <div class="auth-inner"> 
                            <p> <font size="4" color="purple"> 2. Swap in healthy dried or canned alternatives when fresh produce is not available </font> </p>
                            Fresh produce is almost always the best option, but when it is not available there are plenty of healthy alternatives that are easy to store and prepare.
                    
                          <p> Canned beans and chickpeas, which provide an abundance of nutrients, can be stored for months or even years, and can be included in meals in many ways.
                              Canned oily fish such as sardines, mackerel and salmon are rich in protein, omega 3 fatty acids and a range of vitamins and minerals. 
                              These can be used cold in sandwiches, salads or pasta dishes, or cooked as part of a warm meal.
                         </p>
                         <p> 
                                Dried goods like dried beans, pulses and grains such as lentils, split peas, rice, couscous or quinoa are also nutritious, long-lasting options that are tasty, affordable and filling. 
                                Rolled oats cooked with milk or water can serve as an excellent breakfast option, and can be spiced up with yoghurt, chopped fruits or raisins. 
                         </p>
                        </div>
                    </p>

                    <p>
                        <div class="auth-inner">
                            <p> <font size="4" color="purple"> 3. Build up a stock of healthy snacks </font> </p>
                            <img id="img" src={require("./snacks.jpg")} border="0" width= "300"></img>
                            <p>
                                Children often need to eat a snack or two during the day to keep them going. Rather than giving kids sweets or salty snacks, opt for healthier options like nuts, cheese, yoghurt (preferably unsweetened), chopped or dried fruits, boiled eggs, or other locally available healthy options. 
                                These foods are nutritious, more filling, and help build healthy eating habits that last a lifetime.
                            </p>
                        </div>
                    </p>

                    <p>
                        <div class="auth-inner">
                            <p>  <font size="4" color="purple">  4. Limit highly processed foods </font> </p>
                            
                            <p>
                                While using fresh produce may not always be possible, try to limit the amount of highly processed foods in your shopping basket.
                                Ready-to-eat meals, packaged snacks and desserts are often high in saturated fat, sugars and salt.
                                If you do purchase processed foods, look at the label and try to choose healthier options containing less of these substances. 
                                Try to also avoid sugary drinks and instead drink lots of water. 
                                Adding fruits or vegetables like lemon, lime, cucumber slices or berries to water is a great way to add an extra twist of flavor.
                            </p>
                        </div>
                    </p>

                    <p>
                        <div class="auth-inner">
                            <p> <font size="4" color="purple">  5. Make cooking and eating a fun and meaningful part of your family routine </font> </p>
                            <p>
                                Cooking and eating together is a great way to create healthy routines, strengthen family bonds and have fun. 
                                Wherever you can, involve your children in food preparation small children can help with washing or sorting food items while older children can take on more complex tasks and help to set the table.
                            </p>
                            <p>
                                Try as much as possible to stick to fixed mealtimes as a family. 
                                Such structures and routine can help reduce anxiety for children in these stressful situations.
                            </p>
                            <img id="img" src={require("./family.jpg")} border="0" width= "600"></img>
                        </div>
                    </p>

                  <p class="center">  Explore more </p>

                    <div class="auth-link">
                        <img id="img" src={require("./site.jpg")} border="0" width= "200"></img>
                        <a href=" https://softwaretosamayal.wixsite.com/website"> 
                            For more intresting recipes by: Vidya
                        </a>
                    </div> 

            </div>
             
        );
    }
}
export default Recipe;