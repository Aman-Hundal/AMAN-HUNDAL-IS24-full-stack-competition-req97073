# IMB WebApps Tracker For BC Government

My submssion for the IS24-full-stack-competition-req97073 competition. Application was created in a 1 week deadline and the assignment can be found here https://github.com/bcgov/citz-imb-full-stack-code-challenge-req97073

This application is designed help manage and track Web Applications developed by the BC Government Ministry of Citizens' Services Information Management Branch (IMB).

Application was successfully accepted.

### Stack

- Front-End = React.js (React Router), Material UI
- Back-End = Node.js (v16.15.0), Express.js
- Languages = JavaScript, HTML, CSS

## Lets get started

### Front-End Setup

1. Go to /frontend folder
2. `npm i` to install front-end dependancies 
3. Create a copy of ".env copy" then paste and rename to ".env" in /frontend root
4. Go to the .env file and adjust the following:
  - PORT (3001 recommended)
  - REACT_APP_API_URL (EX. http://localhost:3000/api)
5. `npm run start` to start React client

### Back-End Setup

1. Go to /backend folder
2. `npm i` to install back-end dependancies
3. Create a copy of ".env copy" then paste and rename to ".env" in /backend root
4. Go to the .env file and adjust the following:
  - PORT (3000 recommended)
5. `npm run start` to start Node server

### Swagger Documentation

Swagger Documentation API is available at http://localhost:3000/api/api-docs
