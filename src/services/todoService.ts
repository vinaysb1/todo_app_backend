import { Todo } from '../models/Todo';
import pool from '../database/database';
import * as dbQueries from '../database/dbQueries'; 



const getAllTodosService = async (): Promise<Todo[]> => {
    const client = await pool.connect();
    try {
        const result = await client.query(dbQueries.getAllTodos);
        return result.rows;
    } finally {
        client.release();
    }
};

const createTodoService = async (newTodo: Todo): Promise<Todo> => {
    const client = await pool.connect();
    try {
        const { title, description } = newTodo;
        const result = await client.query(dbQueries.addTodo, [title, description]);
        return result.rows[0];
    } finally {
        client.release();
    }
};

const updateTodoService = async (todoId: number, updatedTodo: Todo): Promise<Todo> => {
    const client = await pool.connect();
    try {
        const { title, description } = updatedTodo;
        const result = await client.query(dbQueries.updateTodo, [title, description, todoId]);
        if (result.rows.length === 0) {
            throw new Error('Todo not found');
        }
        return result.rows[0];
    } finally {
        client.release();
    }
};

const deleteTodoService = async (todoId: number): Promise<void> => {
    const client = await pool.connect();
    try {
        const result = await client.query(dbQueries.deleteTodo, [todoId]);
        if (result.rowCount === 0) {
            throw new Error('Todo not found');
        }
    } finally {
        client.release();
    }
};

export default {
    getAllTodos: getAllTodosService,
    createTodo: createTodoService,
    updateTodo: updateTodoService,
    deleteTodo: deleteTodoService
};
