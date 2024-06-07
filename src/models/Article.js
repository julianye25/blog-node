import { Schema, model } from 'mongoose';

const ArticleSchema = Schema({
  title: { type: String, require: true },
  content: { type: String, require: true },
  date: { type: Date, default: Date.now },
  img: { type: String, default: 'degault.png' },
});

export default model('Article', ArticleSchema, 'articles');
