/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/QandA.js');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.patch('/api/questions', (req, res) => {
  console.log(req.body.questID, req.body.voteID);
  let increment = { $inc: { 'answers.$.votes': 1 } };
  let decrement = { $inc: { 'answers.$.votes': -1 } };
  let query = { _id: req.body.questID, 'answers._id': req.body.voteID };
  if (req.body.query === 'up') {
    db.findAndVote(query, increment, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  } else if (req.body.query === 'down') {
    db.findAndVote(query, decrement, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
