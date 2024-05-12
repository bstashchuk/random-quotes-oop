# Random Quotes OOP with API

Welcome to the Random Quotes app!
This project consists of a client-side Vanilla JavaScript app and a server-side Express Node.js app.

## Running the App in Development Mode

### Run server

1. Navigate to the root directory of the project.
1. Open new terminal window.
1. Change directory to the server subfolder:
   `cd server`
1. Install server dependencies by running the following command:
   `npm install`
1. Run server in the development mode with hot reload feature:
   `npm run dev`
1. Server will be running at the http://localhost:3000

### Run client

1. Open new terminal window in the root of the project
1. Run client in the development mode with hot reload:
   `npx live-server client`
1. Client will be running at the http://localhost:8080

## Running the App in Production Mode

### Run server

1. Navigate to the root directory of the project.
1. Open new terminal window.
1. Change directory to the server subfolder:
   `cd server`
1. Install server dependencies by running the following command:
   `npm install`
1. Run server in the production mode:
   `npm start`
1. Configure hosting server where you run application to forward all requests to the http://localhost:3000
1. Get assigned by the hosting provider URL for your backend API server.
   For example https://random-quotes-api.com

### Run client

1. There is no need to build the client as it already contains HTML, CSS and JS files
1. In the `client/config.js` replace http://localhost:3000 with URL assigned to the server API in the step 7. in the previous section. For example https://random-quotes-api.com
   Note: You could make this change directly on the hosting server or in the project source files (less preferrable)
1. Host all client files from the `client` subfolder on the public web server
1. Get assigned by the hosting provider URL for you client frontend application.
   For example https://random-quotes-frontend.com
1. Open https://random-quotes-frontend.com in the web browser
