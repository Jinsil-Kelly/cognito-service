const keys = require('./keys');

// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express route handlers

app.get('/', (req, res) => {
  res.send('Hi');
});

app.post('/values', async (req, res) => {
  const index = req.body.index;
  const regex= /^[0-9]+$/;

  if (!regex.test(index)) {
    return res.status(422).send('Put only number without space');
  }

  if (parseInt(index) > 40) {
    return res.status(422).send('Index too high');
  }

  res.send({ working: true });
});

app.listen(5000, err => {
  console.log('Listening');
});
