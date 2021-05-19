# Kostkollen

Node application with TypeScript, Express and TypeORM on the server.
React with MobX on the  client.

The application let´s you register food intake and get nutritional feedback.
Nutritional data origins from open API of the Swedish Food Agency.

## Server

Code in `server` folder. 

To run the application:

````
cd server
npm install
npm run dev
````

To populate local database with data needed to run application properly:

````
cd server
cp .env.example .env
npm install
npm run import
````

Server listening on `http://localhost:3131/`

## Client

Code in `client` folder. To run it:

````
cd client
npm install
npm run start
````

Client running on `http://localhost:3000/`