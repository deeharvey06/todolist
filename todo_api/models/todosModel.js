// connet to the DB
const mongoose = require('mongoose');
mongoose.set('debug', true);
const URL = // enter cloud database or setup local
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