const express = require('express');
app = express();
const body = require('body-parser');
const cookie = require('cookie-parser');

const todoRoutes = require('./routes/todoRoutes');

app.use(body.json());
app.use(body.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

app.listen(3000, function(){
  console.log('APP RUNNING ON PORT 3000');
});
