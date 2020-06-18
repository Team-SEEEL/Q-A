const express = require('express');
const app = express();
const db = require('../database/QandA.js')
const axios = require('axios')
const bodyParser = require('body-parser')
const seed = require('../database/seed.js')

const port = 3000

app.get('/', (req, res) => res.send(console.log(seed.sampleQuestionData, seed.sampleAnswerData)))

app.listen(port, () => console.log('Example app listening at http://localhost:${port}'))
