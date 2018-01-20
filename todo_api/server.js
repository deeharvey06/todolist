const express = require('express');
app = express();
const body = require('body-parser');
const cookie = require('cookie-parser');

const todoRoutes = require('./routes/todoRoutes');

app.use(body.json());
app.use(body.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.send('HELLO WORLD');
});

app.use('/api/todos', todoRoutes);

app.listen(3000, function(){
  console.log('APP RUNNING ON PORT 3000');
});
