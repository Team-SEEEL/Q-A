const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose)
const db = require('./index.js');

mongoose.Promise = global.Promise;

const questionsSchema = new mongoose.Schema({
  body: String,
  answers: [
    {
      answer: String,
      votes: Number,
      seller: Boolean,
      name: String,
    },
  ],
});

const Questions = mongoose.model('Questions', questionsSchema);

const findQuestions = (query, callback) => {
  Questions.find(query, callback);
};

const findAnswers = (query, callback) => {
  Questions.find(query, 'answers', callback);
};

const findAndVote = (filter, update) => {
  Questions.findOneandUpdate(filter, update);
};

module.exports = {
  Questions,
  findQuestions,
  findAnswers,
};
