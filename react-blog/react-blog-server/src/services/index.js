import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to db!'))
  .catch((e) => console.log('error message: ', e.message));

export default mongoose;
