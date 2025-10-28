const express = require('express');
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  createTaskValidation,
  updateTaskValidation,
  deleteTaskValidation
} = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/', createTaskValidation, createTask);
router.get('/', getTasks);
router.put('/:id', updateTaskValidation, updateTask);
router.delete('/:id', deleteTaskValidation, deleteTask);

module.exports = router;
