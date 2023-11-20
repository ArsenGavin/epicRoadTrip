# EPIC ROAD TRIP 
Road trip / travel helper

## Screenshots
#### Mockup
<a href="https://ibb.co/4sVPBhW"><img src="https://i.ibb.co/6vWg6jY/screen-maquette.png" alt="screen-maquette" border="0"></a>
#### Web App
<a href="https://ibb.co/PzmVQHw"><img src="https://i.ibb.co/jZ6jRXg/screen-web.png" alt="screen-web" border="0"></a>
#### API (Swagger)
<a href="https://ibb.co/8KVRwYq"><img src="https://i.ibb.co/JBPbT3V/screen-api.png" alt="screen-api" border="0"></a>
## Tech Stack
* [React](https://github.com/facebook/create-react-app)
* [NodeJS](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/fr)
* [Redux](https://redux.js.org/)
* [Cypress](https://www.cypress.io/)
* [Material-UI](https://material-ui.com/)
* [Mocha](https://mochajs.org/)
* [Istanbul](https://istanbul.js.org/)

## Setup
1. [React Web App](https://github.com/EpitechMscPro2020/epicRoadTrip_2022_20/blob/master/README.md#react-web-app)
2. [Cypress E2E](https://github.com/EpitechMscPro2020/epicRoadTrip_2022_20/blob/master/README.md#cypress-end-to-end-testing)
3. [NodeJS API](https://github.com/EpitechMscPro2020/epicRoadTrip_2022_20/blob/master/README.md#nodejs-api)
4. [Mocha Unit Tests](https://github.com/EpitechMscPro2020/epicRoadTrip_2022_20/blob/master/README.md#mocha-unit-testing)
5. [Code Coverage](https://github.com/EpitechMscPro2020/epicRoadTrip_2022_20/blob/master/README.md#code-coverage)
6. [ES Lint](https://github.com/EpitechMscPro2020/epicRoadTrip_2022_20/blob/master/README.md#es-lint)
7. [Git Versioning](https://github.com/EpitechMscPro2020/epicRoadTrip_2022_20/blob/master/README.md#git)

## Work Methodology
* [Work Methodology Documentation](https://github.com/EpitechMscPro2020/epicRoadTrip_2022_20/blob/master/README.md#work-methodology-documentation)
### React Web App
```
cd web
npm i 
npm start
```
### Cypress End-To-End Testing
```
cd web
npm start
npm run cypress
```

### NodeJS API
```
cd api
npm i 
npm run serve
```

### Mocha Unit Testing
```
cd api
npm test
```

### Code Coverage
```
cd api
npm run test:coverage
```

### ES Lint
```
cd api / web
npm run eslint
```

### Git
```
git checkout develop
git pull origin develop
git branch featurename
git checkout featurename
...
git add .
git commit -m "feat: featurename"
git push origin featurename
```
### Work Methodology Documentation

##### Comments
* Format: YYYY – MM – DD Feat / Fix / WIP / Bug name
##### Language
* Code, comments, versioning and reviews are to be made in English
##### Versioning
* “develop” should be the main working branch
* Commits when pushed should go through proper QAT
* Branches should be prefixed by feat- or fix- followed by the name in Camel case
* Commits should have WIP when necessary and proper description messages
##### React
* Only use functional components
* Only use Hooks (useEffect, useRef, useState, useMemo, etc.)
##### Redux
* Only use Redux Hooks (useDispatch, useSelector)
* Create a slice for every context (userSlice, tripSlice, accommodationSlice, etc.)
##### NodeJS
* Every model and controller should be documented with Javadoc
* CommonJS should be used
##### Tests
* Every feature should be pushed with proper E2E tests
* Backend Unit Tests should be present for every endpoint

## Hosting
Epic Road Trip is hosted on the Heroku service, for the front part and the api part.
* Front: [link](https://epicroad.herokuapp.com/)
* Api: [link](https://epicroadtripapi.herokuapp.com/)
