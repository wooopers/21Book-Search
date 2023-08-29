const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
//const { ApolloServer } = require('apollo-server-express');
//const { typeDefs, resolvers } = require('./schemas');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

//1. npm i and add .gitignore for node_modules

// 2. Install Apollo Server and GraphQL/ any other dependencies

//3 check config folder for the connection to mongo

//4. use apollo in the server.js file

//5 add the typeDefs and resolvers in schema folder on server side

//6. define the queries and mutations in the client side

//7. update components and pages with graphql/apollo

//8 Deploy to Heroku


// Setup Apollo in the App.js
