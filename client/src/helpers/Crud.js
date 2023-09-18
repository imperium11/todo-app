import axios from "axios";

const todosApi = axios.create({
  baseURL: 'http://localhost:3000'
});

export const getAllTodos = async() => {
  const result = await todosApi.get('/todos');
  return result.data;
}

export const addTodo = async(todo) => {
  return await todosApi.post('/todos', todo);
}

export const updateTodo = async(todo) => {
  return await todosApi.put(`/todos/${todo.id}`, todo);
}

export const deleteTodo = async(id) => {
  return await todosApi.delete(`/todos/${id}`);
}