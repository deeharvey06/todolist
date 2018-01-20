const Todo = require('../models/todosModel');

todosController = {};

todosController.showTodo = function(req, res){
  Todo.find()
  .then(function(todos) {
    res.json(todos);
  })
  .catch(function(err) {
    res.send(err);
  })
}

todosController.createTodo = function(req, res) {
  Todo.create(req.body)
  .then(function(newTodo) {
    res.json(newTodo);
  })
  .catch(function(err) {
    res.send(err);
  })
}

todosController.findById = function(req, res) {
  Todo.findById(req.params.todoId)
  .then(function(todo) {
    res.json(todo)
  })
  .catch(function(err){
    res.send(err);
  })
}

todosController.updateTodo = function(req, res) {
  Todo.findByIdAndUpdate({_id: req.params.todosId}, req.body, {new: true})
  .then(function(todo) {
    res.json(todo);
  })
  .catch(function(err) {
    res.send(err);
  })
}

todosController.deleteTodo = function(req, res) {
  Todo.remove({_id: req.params.todosId})
  .then(function(todo) {
    res.json({message: 'We deleted it!'})
  })
  .catch(function(err) {
    res.send(err);
  })
}

module.exports = todosController;