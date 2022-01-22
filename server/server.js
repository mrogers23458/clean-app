const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const path = require('path')

const { typeDefs, resolvers } = require('./schemas')

const { authMiddleware } = require('./utils/auth')

const db = require('./config/connection')

//function to drop the DB for testing - remove prior to deployment
/* async function dropDb() {
  await db.dropDatabase()
}

dropDb() */

const PORT = process.env.PORT || 3001;
const app = express()

const server = new ApolloServer({
    typeDefs,
    resolvers,

    context: authMiddleware,
})

server.applyMiddleware({ app })

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
  }
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });