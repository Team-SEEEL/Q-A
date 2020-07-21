/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/QandA.js');

const app = express();
const port = 3003;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/questions/api/products/:index', (req, res) => {
  db.findQuestions({ index: req.params.index }, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      const answers = data[0].questions.filter((question) => question.answers.length > 0);
      res.status(200).send(answers);
    }
  });
});

app.get('/questions/api/products/:index/answers', (req, res) => {
  db.findAnswers({ index: req.params.index }, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data.questions);
    }
  });
});

app.post('/questions/api/products/:index', (req, res) => {
  const query = { 'questions.body': req.body.question };
  db.postQuestions(query, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.patch('/questions/api/products/:index/questions', (req, res) => {
  const increment = req.body.query === 'up' ? 1 : -1;

  const query = { index: req.params.index };

  db.findAndVote(query, increment, req.body.questID, req.body.voteID, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
