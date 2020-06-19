const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const questionsSchema = new mongoose.Schema({
  body: String,
})

const answersSchema = new mongoose.Schema({
  answer: String,
  votes: Number,
  seller: Boolean,
  name: String,
  question: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Questions' }
  ]
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