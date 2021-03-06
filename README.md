# NASA Mission Control Project

"Near future... SpaceX had finished starship and NASA wants to explore possible habitable planets discovered by Kepler mission."

This project has been deployed to AWB(EC2), check [demo](http://35.158.111.240:3001).

Used technologies: HTML, CSS, JS, React, NodeJS, REST API, Docker, AWS.

## Running the Project

1. In the terminal, run: `npm run deploy`
2. Browse to the mission control frontend at [localhost:3001](http://localhost:3001) and schedule an interstellar launch!

## Docker

1. Ensure you have the latest version of Docker installed
2. Run `docker build -t nasa-project .`
3. Run `docker run -it -p 3001:3001 nasa-project`

## Running the Tests

To run any automated tests, run `npm test`. This will: 
* Run all the client-side tests: `npm test --prefix client`
* Run all the server-side tests: `npm test --prefix server` 

