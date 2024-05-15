export const getAllTodos = 'SELECT * FROM todos';
export const addTodo = 'INSERT INTO todos (title, description) VALUES ($1, $2) RETURNING *';
export const updateTodo = 'UPDATE todos SET title = $1, description = $2 WHERE id = $3 RETURNING *';
export const deleteTodo = 'DELETE FROM todos WHERE id = $1';
