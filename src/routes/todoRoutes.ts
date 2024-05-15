// todoRoutes.ts

import express from 'express';
import {getAllTodos,createTodo,updateTodo,deleteTodo} from '../controllers/todoController';

const router = express.Router();

router.route('/').get(getAllTodos).post(createTodo);

router.route('/:id').put(updateTodo).delete(deleteTodo);

export default router;