import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ msg: 'Hello world!' });
});

app.listen(4321, () => console.log('server started on http://localhost:4321'));
