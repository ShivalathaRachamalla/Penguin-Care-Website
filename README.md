# COVID-19
Coronaviruses are a large family of viruses that cause illness ranging from the common cold to more severe diseases. A novel coronavirus (nCoV) is a new strain that has not been previously identified in humans.

## Infections spread between people

The virus is thought to spread mainly from person-to-person.

Between people who are in close contact with one another (within about 6 feet)
Through respiratory droplets produced when an infected person coughs, sneezes or talks.

People have been told to stay at home where possible to shop for necessities; as key workers continue to work in social care, construction, the media and a number of other industries.


## Parenting in the time of COVID-19

To help parents interact constructively with their children during this time of confinement visit our website to cover planning one-on-one time, staying positive, creating a daily routine, avoiding bad behaviour, managing stress, and talking about COVID-19. Use them to your and your kids’ advantage, and have fun in doing so.

[![parents](./img/parents.gif)](./parents.gif)

## Setup

For Mac

Our development environment for a full-stack web application will consist of three main parts:​

 * Database (Postgres).
 * Backend server (Spring).
 * Frontend development server (React).​We will need to set up and start these three components in the order above for everything to work.​

### Prerequisites

 * Install <span style="background-color:gray">docker</span> and <span style="background-color:gray">docker-compose</span>.
 * Install <span style="background-color:gray">Nodejs</span>.
 * Install a proper IDE/Text editor fo Java and Javascript. IntelliJ community edition is recommended for Java development but doesn't work very well with JavaScript. It's therefore recommended to use VS Code or any other JavaScript-friendly IDE when working with frontend code.

### Starting the database

Starting the database
To start the database open the terminal and <span style="background-color:gray">cd</span> your way in to the project root folder. You can just simply run <span style="background-color:gray">docker-compose up</span> to start the database. Closing the terminal will kill the database. So you need to restart the database every time you need to use it.​

### Starting the backend server

Open the root folder in IntelliJ and import all the gradle dependencies (this has to be done only once of course).​Make sure that the database is running (see steps above) otherwise the backend won't have access to it. Then run the main class at <span style="background-color:gray">src/main/java/se/kth/sda7/.java</span> to start the web server.​

### Starting the frontend development server

To install the project dependencies for the frontend, open the terminal and make sure that the current directory is frontend. You can then run <span style="background-color:gray">npm install</span> to install all the dependencies needed for the project (This has to be done only once).​To start the frontend server run <span style="background-color:gray">npm start</span> from the frontend directory. Make sure that database and backend server are also running so that the frontend can interact with the backend. When working on the frontend, open the frontend folder in your favorite Javascript IDE.​




