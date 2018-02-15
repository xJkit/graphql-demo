import mongoose from 'mongoose';
import uuid from 'node-uuid';

const authorSchema = new mongoose.Schema({
  id: { type: String, default: uuid.v1 },
  name: String,
  age: Number,
  books: [String],
  gender: String
});

export default mongoose.model('author', authorSchema);
