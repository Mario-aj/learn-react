import { model, Schema } from 'mongoose';

const PostSchema = Schema({
  author: String,
  title: String,
  description: String,
  bannerUrl: String,
});

export default model('post', PostSchema);
