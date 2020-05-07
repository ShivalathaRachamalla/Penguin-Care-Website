import React, { Component } from "react";
import '../App.css';
class Movies extends Component {
    render() {
        return (
            <div className="card">
               <h4 className="card-title">Films for quarantined kids of all ages that will keep the whole family entertained</h4>
               <div className="trial">
                   <img src={require('../img/familtytv.jpg')} alt="activity d
                    image"  class="activity_img" />
                     <p>
                     With parents and kids alike stuck inside courtesy of the coronavirus, 
                     families are spending lots more together, which means sharing escapist entertainment to 
                     quell the quarantined boredom of social distancing.
                    </p>
                </div>
                <ol type="1">
                            <div className="trial">
                        <font size="5" color="brown"> <li><b> 'Babe' (1995)</b></li></font>
                        <p>Not only will it make you rethink bacon, but this film about an orphaned piglet who goes from 
                            being an option for Christmas dinner to a champion sheep-herder will warm everyone’s hearts. Also, it features one of the best 
                            final movie lines ever: “That’ll do, pig. That’ll do.” <br/>
                            <b>Where to watch:</b>iTunes, Vudu, Amazon</p>
                            <img src={require('../img/babe.jpeg')} alt="activity d
                                image" width="600" height="350" align="center" />
                        </div>
                        <div className="trial">
                        <font size="5" color="brown"> <li><b> 'Coco' (2017)</b></li></font>
                        <p>The Pixar movie about a guitar-toting Mexican boy who inadvertently is sent to the afterlife and learns about his 
                            ancestors while there will entertain all members of your family, especially the music fans. And you’ll definitely ugly cry 
                            at the end, but in that rousing, cathartic way. <br/>
                            <b>Where to watch:</b>iDisney+, iTunes, Vudu</p>
                            <img src={require('../img/coco.jpg')} alt="activity d
                                image" width="600" height="350" align="center" />
                        </div>
                        <div className="trial">
                        <font size="5" color="brown"> <li><b> 'Coraline'(2009))</b></li></font>
                        <p>Neil Gaiman's children's book gets the LAIKA stop-motion-animation treatment for something special, marrying dark 
                            fantasy with a child's curious nature. The title girl ventures to an alternate world where its version of her parents 
                            are nicer than her own, and then things get really twisted in LAIKA's modern fairy tale. <br/>
                            <b>Where to watch:</b>Vudu, Fandango Now</p>
                            <img src={require('../img/coroline.jpeg')} alt="activity d
                                image" width="600" height="350" align="center" />
                        </div>
                        <div className="trial">
                        <font size="5" color="brown"> <li><b> 'The Goonies' (1985)</b></li></font>
                        <p>The most tech-savvy kid in a group of young misfits is a walking, talking Rube Goldberg machine so there’s a timeless quality to the epic adventure 
                            with children trying to save their homes and town. It also doles out lessons on cool pirates, young love and tolerance. <br/>
                            <b>Where to watch:</b>iTunes, Vudu, Amazon</p>
                            <img src={require('../img/goonies.jpg')} alt="activity d
                                image" width="600" height="350" align="center" />
                        </div>
                        <div className="trial">
                        <font size="5" color="brown"> <li><b> 'Hairspray' (2007)</b></li></font>
                        <p>Amid the catchy songs and top-notch dancing, there’s a strong civil-rights message – as well as John Travolta in drag – at 
                            the heart of the 1960s-set musical. 
                            The deeper themes are there if you’re looking, but it gives your kids some old-school dance moves to learn. <br/>
                            <b>Where to watch:</b>Netflix, iTunes, Vudu</p>
                            <img src={require('../img/hairspray.jpg')} alt="activity d
                                image" width="600" height="350" align="center" />
                        </div>
                        <div className="trial">
                        <font size="5" color="brown"> <li><b>  'The House With a Clock in Its Walls' (2018)</b></li></font>
                        <p>If your children are interested in trying out scary movies, this 1950s-set throwback supernatural 
                            tale is a good foray into horror centering on an orphaned boy who goes to live with his eccentric uncle in
                             his super-weird magical house and has to deal with a resurrected warlock. <br/>
                            <b>Where to watch:</b> iTunes, Vudu, Amazon</p>
                            <img src={require('../img/thehouse.jpeg')} alt="activity d
                                image" width="500" height="350" align="center" />
                        </div>
                        
                        <div className="trial">
                        <font size="5" color="brown"> <li><b>  'How to Train Your Dragon' (2010)'</b></li></font>
                        <p>While “Lord of the Rings” might be your initial fantasy go-to, this is a more family-friendly trilogy to 
                            tackle, beginning with the animated movie that first introduced a Viking teenage boy with identity issues 
                            and the story of how he met his scaly best friend Toothless. <br/>
                            <b>Where to watch:</b> iTunes, Vudu, Amazon</p>
                            <img src={require('../img/dragon.jpg')} alt="activity d
                                image" width="600" height="350" align="center" />
                        </div>
                        <div className="trial">
                        <font size="5" color="brown"> <li><b>'Indiana Jones and the Last Crusade' (1989)</b></li></font>
                        <p>Of all the flicks featuring the fedora-clad hero, this one is both great in quality and OK for most 
                            kids: Young teen Indy has his first adventure, old Indy meets up with his dad plus punches Nazis and seeks a 
                            religious antique, and most importantly, no melting faces or ripped-out hearts! <br/>
                            <b>Where to watch:</b> Netflix, iTunes, Vudu</p>
                            <img src={require('../img/indiana.jpeg')} alt="activity d
                                image" width="500" height="350" align="center" />
                        </div>
                        <div className="trial">
                        <font size="5" color="brown"> <li><b>Inside Out' (2015)</b></li></font>
                        <p>The Pixar movie that promises all the feels – in fact, emotions running around a little girl's 
                            head are central to this hilarious and surprisingly deep animated comedy. The little ones can 
                            appreciate effervescent Joy and blistering Anger, while everyone else can relate to the inner turmoil of growing up. <br/>
                            <b>Where to watch:</b>Disney+, iTunes, Vudu</p>
                            <img src={require('../img/insideout.jpeg')} alt="activity d
                                image" width="500" height="350" align="center" />
                        </div>
                        <div className="trial">
                        <font size="5" color="brown"> <li><b>'Labyrinth' (1986)</b></li></font>
                        <p>You love to hate and just love to love David Bowie as the smoothest Goblin King of all time. He's the main attraction, 
                            obviously, of Jim Henson's retro fantasy, though the tale of a teenage girl who first wishes her baby bro away (and then needs to 
                            save the kid) is stunning overall in look and scale. <br/>
                            <b>Where to watch:</b>iTunes, Vudu, Amazon</p>
                            <img src={require('../img/laby.jpg')} alt="activity d
                                image" width="500" height="350" align="center" />
                        </div>
                        <div className="trial">
                        <font size="5" color="brown"> <li><b> 'The Little Mermaid' (1989)</b></li></font>
                        <p>The greatest hit of Disney's '80s/'90s run of A-list musicals, "Little Mermaid" has the best songs, 
                            crooning crustaceans, a love story, a seriously evil villainess with no redeeming qualities and a narrative about being free. 
                            And it's totally OK if you're feeling the lyric "I want to be where the people are" more than usual.<br/>
                            <b>Where to watch:</b> Disney+, iTunes, Vudun</p>
                            <img src={require('../img/lego.jpeg')} alt="activity d
                                image" width="500" height="350" align="center" />
                        </div>
                        <div className="trial">
                        <font size="5" color="brown"> <li><b>  'Moana' (2016)</b></li></font>
                        <p>Sailing on the high seas for an epic musical is a great escape from all the social distancing. Moana’s an 
                            empowered Disney non-princess who’s a delight, self-obsessed demi-god Maui (Dwayne Johnson in one of his greatest roles) 
                            is a hoot, and there’s even a villainous hermit crab.<br/>
                            <b>Where to watch:</b> Disney+, iTunes, Vudu</p>
                            <img src={require('../img/moana1.jpeg')} alt="activity d
                                image" width="400" height="350" align="center" />
                        </div>
                        <div className="trial">
                        <font size="5" color="brown"> <li><b>  'The Muppet Movie' (1979)</b></li></font>
                        <p>Kermit, Miss Piggy, Fozzy and the gang have recently wrestled with relevance, especially among younger audiences. Unleash 
                            this tuneful, retro road-trippin' ode to showbiz and you’ll remind the whole clan why the Muppets ruled pop culture back in the day. 
                            Electric Mayhem forever!<br/>
                            <b>Where to watch:</b> Disney+, iTunes, Vudu</p>
                            <img src={require('../img/muppet.jpg')} alt="activity d
                                image" width="400" height="350" align="center" />
                        </div>
                        <div className="trial">
                        <font size="5" color="brown"> <li><b>  'National Treasure' (2004)</b></li></font>
                        <p>Kids, don’t steal the Declaration of Independence. But it’s OK if Nicolas Cage does it in this all-ages
                             adventure about a historian on heck of a treasure hunt. Parents are familiar with Cage’s crazy shenanigans so 
                             youngsters will get a full load of him plus some history lessons.<br/>
                            <b>Where to watch:</b> Disney+, iTunes, Vudu</p>
                            <img src={require('../img/nationtre.jpg')} alt="activity d
                                image" width="400" height="350" align="center" />
                        </div>
                        <div className="trial">
                        <font size="5" color="brown"> <li><b>  'Paddington 2' (2014)</b></li></font>
                        <p>The criminally cute bear from the old children’s books came to vivid life in the first 
                            "Paddington" but is just excellent in the quirky sequel, where our furry Peruvian hero is
                             framed for the theft of a valuable pop-up book, gets incarcerated and tussles with a villainous 
                             washed-up stage actor (Hugh Grant).<br/>
                            <b>Where to watch:</b> iTunes, Vudu, Amazon</p>
                            <img src={require('../img/padding.jpeg')} alt="activity d
                                image" width="400" height="350" align="center" />
                        </div>
                </ol>
                </div>
               
               
                 );
    }
}

export default Movies;
