import React, { Component } from "react";
import './FAQ.css';
import '../App.css';
class FAQ extends Component {
    render() {
        return (
            <div className="wrapper">
                <h2 align="center"><b>FAQ about COVID-19</b></h2>
               
            

            <div class="box">
             <p class="heading1">FAQs</p>
             <div class="Faqs">
                 <details className="try">
                     <summary className="try1">
                         what is COVID-19?
                     </summary>
                     <p class="text">COVID-19 is the official name, decided by 
                     the WHO, for the disease caused by the new coronavirus SARS-CoV-2. COVID-19 is an acronym for coronavirus disease 2019.</p>
                 </details>
                 <details className="try">
                     <summary>
                     What are the symptoms of COVID-19?
                     </summary>
                     <p class="text">In most people, COVID-19 manifests as a respiratory tract infection, and many different symptoms may be present. It is not possible to distinguish COVID-19 from other infections from only the symptoms – a laboratory test is required.
                     Among the reported symptoms are:
                     <ul type="disc">
                         <li>Cough</li>
                         <li>Fever</li>
                         <li>Difficult breathing</li>
                         <li>Runny nose</li>
                         <li>Blocked nose</li>
                         <li>Sore throat</li>
                         <li>Headache</li>
                         <li>Muscle and joint pain</li></ul>
                         
                         A person falling ill with COVID-19 may experience one or more of these symptoms. It is fairly common 
                         to lose one’s sense of smell and taste for some time during an infection in the upper respiratory tract. 
                         Diarrhea has also been reported as a symptom.
                     </p>
                 </details>
                 <details className="try">
                     <summary className="try1">
                         How is COVID-19 transmited? 
                     </summary>
                     <p class="text">
            The coronavirus (SARS-CoV-2) causing COVID-19 is mainly transmitted between people via respiratory droplets or secretions from the respiratory tract. Transmission via droplets happens when an infected person coughs or sneezes and the droplets reach mucous tissue in someone's eyes, nose, or mouth. The droplets fall to the ground within approximately one meter (3 ft) from the source.
            The virus can also be transmitted via contaminated surfaces, so-called indirect contact transmission. Therefore, it cannot be excluded that the disease can spread via items. <br/>It is currently not clear how long the virus can survive on surfaces and items.<br/> The material itself and conditions in the surrounding such as humidity, temperature, and sunlight will determine how long the virus is viable. Further studies will clarify the importance of transmission via surfaces and items for the overall spreading of COVID-19.
            You can decrease the risk of transmission by keeping a distance from other people in public spaces, washing your hands often with soap and warm water, avoiding touching your face (eyes, nose and mouth), and by staying at home if you are ill.</p>
                 </details>
                 <details className="try">
                     <summary className="try1">
                     Is there a vaccine or any other treatment against COVID-19?</summary>
                     <p class="text">There is currently no vaccine and no approved medicine against COVID-19. Any treatment given in severe cases of illness serves to support the patient’s lungs and other internal organs.
                     International studies of various types of medicines are under way. <br/>There is also research on a vaccine.</p>
                 </details>
                 <details className="try">
                     <summary className="try1">
                     Can children and youths be vaccinated as planned according to the child vaccination programme during the outbreak of COVID-19?</summary>
                     <p class="text">Yes, children and youths can be vaccinated according to the child vaccination programme also during the outbreak of COVID-19. In case of an ongoing acute infection with fever and/or an affected general condition (COVID-19 or other illness) the vaccination should, as always, 
                     be postponed.</p>
                 </details>
                 <details className="try">
                     <summary className="try1">
                     Are children affected by COVID-19?</summary>
                     <p class="text">Children represent only a small proportion of the reported cases of COVID-19. Studies suggest that infected children develop very mild symptoms. There is currently very limited knowledge about to what extent COVID-19 spreads between children, and there are no reports about extensive transmission within groups of children.
                  Even if they have mild symptoms, children can pass the infection to others (just like adults with mild symptoms). <br/>Therefore, it is important that children with fever or cold do not meet elderly people or people with immune system problems.
                  New knowledge is added every day, and we monitor the situation closely to be able to give accurate advice.<br/>
                  BRIS (Children´s Rights in Society, in Swedish) and the WHO have published support on how to support children in matters related to COVID-19</p>
                 </details>
                 <details className="try">
                     <summary className="try1">
                         Are Preschools open?
                     </summary>
                     <p class="text">Schools for upper secondary education (over-16s) and universities have been recommended to close and switch to distance learning, but closing schools for younger children has not been 
                     considered a necessary measure in Sweden.<br/>This is partly due to the nature of the virus. Studies suggest children are both affected by the virus and transmit it to a lesser extent than adults, and the Public Health Agency said that other countries at more advanced stages of the outbreak had not seen any virus clusters linked to schools.</p>
                 </details>
                 <details className="try">
                     <summary className="try1">
                     What is the advice for travelling with train, bus or taxi?</summary>
                     <p class="text">When you travel by train, bus or taxi, follow our advice on how to protect yourself and others. Stay at home if you feel ill, keep your hands clean, cough and sneeze into your elbow, avoid touching your eyes, nose or mouth.<br/>You can also aim to keep at a distance from other people. Please refer to local advice and routines issued by the transportation providers.
                       <br/>It is still unclear whether indirect contact, i.e. contact with respiratory droplets or secretions on surfaces and items, contributes to the spread of COVID-19.
                       <br/>Make sure to wash your hands after travelling. Alcohol-based hand rub is an alternative when washing facilities are not available.</p>
                 </details>
                 <details className="try">
                     <summary className="try1">
                     What does quarantine mean?</summary>
                     <p class="text">Anyone that has been, or is suspected to have been, exposed to a disease classified as dangerous to society can be kept in quarantine as decided by the Communicable Diseases Officer (under the Swedish Communicable Diseases Act; 2004:168).<br/> A person can be put in quarantine in their own home. Quarantine means that you are not allowed to leave the building or receive visitors, apart from health and social care staff. Quarantine is a form of isolation of people that are suspected to carry a disease that is dangerous to society, but are not yet ill. For people that are ill with such a disease, isolation may be imposed. Decisions about quarantine are always individual, and patients may appeal against them.</p>
                 </details>
                 <details className="try">
                     <summary className="try1">
                     Does COVID-19 spread via water and food?
                     </summary>
                     <p class="text">The main route of transmission for COVID-19 is via contact between people or via droplets produced when coughing or sneezing. There are no indications that the disease spreads via ingested food or water.
                     It is also unlikely that COVID-19 is transmitted via water in swimming pools or other baths.<br/>
                     It is currently unclear how long the virus that causes COVID-19 can survive outside the human body, and whether the disease can spread via indirect contact i.e. droplets that have landed on surfaces or items.</p>
                 </details>
                 <details className="try">
                     <summary className="try1">
                      What is the advice regarding international travel?</summary>
                     <p class="text">The Swedish Ministry for Foreign Affairs issues advice regarding travel to other countries (in Swedish).
                   Due to the ongoing pandemic and a changeable situation, the Ministry for Foreign Affairs currently advise against non-essential travel to all countries. <br/>
                   This is valid from 14th March through to 15th June, when a new assessment will be done.</p>
                 </details>
                 <details className="try">
                     <summary className="try1">
                     Do I need to take extra precaution after travelling, even though I feel well?
                     </summary>
                     <p class="text">No, but you should follow the current recommendations in Sweden. Stay at home if you feel unwell. The symptoms reported are manly fever and cough. Breathing problems, runny or blocked nose, sore throat, headache, nausea, or muscle and joint pain are common symptoms. Most people have mild symptoms that clear without treatment. Some develop a severe form om COVID-19 with breathing difficulties and pneumonia.<br/>
                     The time between getting infected and developing symptoms (the incubation period) seems to be between 2 and 14 days. Most people develop symptoms after 5 days. Individual cases may deviate from this time frame.<br/>
                     It is very important that you stay at home if you feel ill. If you can no longer manage the illness on your own, please call 1177 for medical advice (available in English). Please do not visit a hospital or healthcare centre unless instructed to do so.</p>
                 </details>
                 </div>
            </div>
            </div>
             );
            }
        }
        
        export default FAQ;
