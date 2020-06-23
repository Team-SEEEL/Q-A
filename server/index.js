const express = require('express');
const app = express();
const db = require('../database/QandA.js')
const axios = require('axios')
const bodyParser = require('body-parser')

const port = 3000

app.get('/', (req, res) => res.send("Hello World"))

app.get('/api/questions', (req,res) => {
  db.findQuestions({}, (err, data) => {
    if (err) { res.status(404).send(err) }
    else {
      res.status(200).send(data)
    }
  })
})

app.get('/api/answers', (req,res) => {
  db.findAnswers({}, (err, data) => {
    if (err) { res.status(404).send(err) }
    else {
      res.status(200).send(data)
    }
  })
})

app.post('/api/questions', (req, res) => {
  db.findAndVote({ "answers.0": { "$exists": true } }, { $inc: { votes: 1 } }, (err, data) => {
    if (err) { res.status(404).send(err) }
    else {
      res.status(201).send(data)
    }
  })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
