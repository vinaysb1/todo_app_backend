import { Request, Response } from 'express';
import todoService from '../services/todoService';

export const getAllTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos = await todoService.getAllTodos();
        res.status(200).json(todos);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const newTodo = req.body;
        const createdTodo = await todoService.createTodo(newTodo);
        res.status(201).json(createdTodo);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const todoId = parseInt(req.params.id, 10);
        const updatedTodo = await todoService.updateTodo(todoId, req.body);
        res.status(200).json(updatedTodo);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const todoId = parseInt(req.params.id, 10);
        await todoService.deleteTodo(todoId);
        res.status(200).json({ message: 'Todo item deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
