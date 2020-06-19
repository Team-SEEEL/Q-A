const mongoose = require('mongoose');
const Autoincrement = require('mongoose-sequence')(mongoose)
mongoose.connect('mongodb://localhost/api', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log('it works') });

module.exports = {
  db: db,
}