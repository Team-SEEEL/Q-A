/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/QandA.js');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/questions', (req, res) => {
  const query = { 'answers.0': { $exists: true } };
  db.findQuestions(query, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/api/answers', (req, res) => {
  db.findAnswers({ body: req.query[0] }, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/api/questions', (req, res) => {
  db.findAndVote({ _id: 1 }, {});
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
