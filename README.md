# Central Arkansas JavaScript React WebApp
This react web application was created with the intent to serve as way for members to find out about our group and events.

[This app is currently deployed here.](https://caj-react-app.firebaseapp.com)

## Table of Contents
- [Getting Started](#getting-started)
- [How to Deploy](#to-deploy-with-firebase)
- [Dependencies](#dependencies)
- [About Us](#about-us)

## Getting started
- Install the latest version of node
- Install the latest version of npm
- clone this repository
- in your terminal cd into the directory you cloned to, type `npm install` to ensure all dependencies are installed
- in the directory you cloned to, type the command `npm start` to start the test server

## To Deploy with Firebase
- `npm install -g firebase-tools` to install the firebase cli
- `firebase init` If you have not done this already
- `firebase login` and enter your credentials, and set the correct production build directory
- `npm run build` to compile code for production (will be into `build` folder)
- `firebase deploy` to deploy.
[See more info here](https://firebase.google.com/docs/cli/)

## Dependencies

    axios: ^0.18.0,
    bootstrap: ^4.1.3,
    disqus-react: ^1.0.5,
    fetch-jsonp: ^1.1.3,
    firebase: ^5.5.1,
    react: ^16.5.2,
    react-dom: ^16.5.2,
    react-router-bootstrap: ^0.24.4,
    react-router-dom: ^4.3.1,
    react-scripts: 1.1.5,
    react-sticky-footer: 0.1.0-rc3,
    reactstrap: ^6.5.0
    
## About Us
We are a small group of enthusiasts meeting every second Tuesday of the month at 6:30pm, at the Faulkner County Library in Conway, AR. Come join us and share what you’re working on, or just chat and meet other JavaScript enthusiasts! Each month will feature a speaker or lab or a combination of both!
