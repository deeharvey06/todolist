const express = require('express');
const router = express.Router();
const todosController = require('../controller/todosController');

router.get('/', todosController.showTodo);
router.post('/', todosController.createTodo);

router.get('/:todoID', todosController.findById);
router.put('/:todoID', todosController.updateTodo);
router.delete('/:todoID', todosController.deleteTodo)

module.exports = router;