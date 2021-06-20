import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
config();

import './services/mongoDB';
import Routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use(Routes);

const PORT = process.env.PORT || 4321;

app.listen(PORT, () =>
  console.log(`server started on http://localhost:${PORT}`)
);
