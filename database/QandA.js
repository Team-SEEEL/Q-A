const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const questionsSchema = new mongoose.Schema({
  body: String,
  answers: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Answers' }
  ]
})

const answersSchema = new mongoose.Schema({
  answer: String,
  votes: Number,
  seller: Boolean,
  name: String,
})

const Questions = mongoose.model('Questions', questionsSchema);
const Answers = mongoose.model('Answers', answersSchema);

const findQuestions = (query, callback) => {
  Questions.find(query, callback);
}

const findAnswers = (query, callback) => {
  Answers.find(query, callback);
}

const findAndVote = () => {
  Answers.findOneandUpdate
}

module.exports = {
  Questions: Questions,
  Answers: Answers,
  findQuestions: findQuestions,
  findAnswers: findAnswers
}