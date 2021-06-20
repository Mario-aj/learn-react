import express from 'express';
import { config } from 'dotenv';
config();
import './services/index';

const app = express();

app.get('/login', (req, res) => {
  return res.json({ msg: 'Hello world!' });
});

const PORT = process.env.PORT || 4321;

app.listen(PORT, () =>
  console.log(`server started on http://localhost:${PORT}`)
);
