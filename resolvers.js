const authors = require('./db/authors.json');
const students = require('./db/students.json');

/**
 * Resolver are used for handling Query defined in typeDefs
 */
const resolvers = {
  Query: {
    authors: () => authors, // just return the authors from DB
    author: (root, args) => { // return single author by id
      const id = args.id;
      return authors.find(author => author.id === id);
    },
    student: () => students
  },
};

export default resolvers;
