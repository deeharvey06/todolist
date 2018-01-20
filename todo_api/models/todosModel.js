// connet to the DB
const mongoose = require('mongoose');
mongoose.set('debug', true);
const URL = 'mongodb://deeharvey06:1234@ds115124.mlab.com:15124/mod-0'
mongoose.connect(URL);

mongoose.Promise = Promise;

//setup schema for DB
const todoSchema = new mongoose.Schema({
  name: {
    type:String,
    required: 'Name cannnot be blank'
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Todo', todoSchema);