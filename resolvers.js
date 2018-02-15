const authors = require('./db/authors.json');
const students = require('./db/students.json');

import AuthorModel from './models/author';
/**
 * Resolver are used for handling Query defined in typeDefs
 * Demo Database CRUD
 */
const resolvers = {
  Query: {
    authors: () => AuthorModel.find(),
    /** advanced find query can check http://mongoosejs.com/docs/api.html#Query */
    author: (root, { id }) => {
      return AuthorModel.findOne({ id });
    },
  },

  Mutation: {
    addAuthor: (root, { name, age, books, gender }) => {
      const author = new AuthorModel({ name, age, books, gender });
      return author.save();
    },
    deleteAuthor: (root, { id }) => {
      return AuthorModel.findOneAndRemove({ id });
    },
    updateAuthor: (root, { id, name }) => {
      return AuthorModel.findOneAndUpdate({ id }, { name });
    }
  }
};

export default resolvers;
