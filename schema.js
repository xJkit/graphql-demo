import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
  ### data schema in DB ###
  type Author {
    id: Int,
    age: Int,
    name: String,
    books: [String],
    gender: String
  }

  type Student {
    id: Int,
    name: String,
    major: String,
    score: Int
  }

  ### query schema from the client ###
  type Query {
    authors: [Author],
    author(id: Int): Author,
    student: [Student]
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
