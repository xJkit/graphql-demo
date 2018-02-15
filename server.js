import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

// graphQL schema
import schema from './schema';

// database connection
mongoose.connect('mongodb://localhost:27017/graphql-db')
mongoose.connection.once('open', () => {
  console.log('====================================');
  console.log('seccessfully connect to mongo db');
  console.log('====================================');
})


const server = express();

/** enable graphiql to debug easier using graphiql */
server.get('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

// backend server
server.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
server.listen(4000, () => {
  console.log('====================================');
  console.log('express is running on port 4000');
  console.log('====================================');
})