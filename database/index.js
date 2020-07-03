/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');
const Autoincrement = require('mongoose-sequence')(mongoose);

mongoose.connect('mongodb://database:27017/api', { useNewUrlParser: true });

const db = mongoose.connection;
// eslint-disable-next-line no-console

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('it works');
});

module.exports = {
  db,
};
