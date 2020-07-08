const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const db = require('./index.js');

mongoose.Promise = global.Promise;

const productsSchema = new mongoose.Schema({
  index: Number,
  questions: [
    {
      body: String,
      answers: [
        {
          answer: String,
          votes: Number,
          seller: Boolean,
          name: String,
          time: String,
        },
      ],
    },
  ],
});

const Products = mongoose.model('Products', productsSchema);

productsSchema.plugin(AutoIncrement, { id: 'index_seq', inc_field: 'index' });

const findQuestions = (query, callback) => {
  Products.find(query, callback);
};

const findAndVote = (filter, update, _id1, _id2, callback) => {
  // Products.findOne(filter, callback);
  Products.findOne(filter, (err, data) => {
    const answer = data.questions.id(_id1).answers.id(_id2);
    answer.votes += update;
    data.save();
  });
};

module.exports = {
  Products,
  findQuestions,
  findAndVote,
};
