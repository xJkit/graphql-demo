import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

/** Database schema */
import AuthorSchema from './models/author';

const typeDefs = `
  ### data schema in DB ###
  type Author {
    id: String,
    age: Int,
    name: String,
    books: [String],
    gender: String
  }

  type Student {
    id: String,
    name: String,
    major: String,
    score: Int
  }

  ### query schema from the client ###
  type Query {
    authors: [Author],
    author(id: String): Author,
  }

  ## mutations to the database
  type Mutation {
    addAuthor(
      name: String!, # Required field
      gender: String,
      books: [String]!, # Required field
      age: Int
    ): Author,
    deleteAuthor(id: String!): Author,
    updateAuthor(id: String!, name: String!): Author
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
