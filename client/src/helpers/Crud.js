import axios from "axios";

const todosApi = axios.create({
  baseURL: 'http://localhost:3000'
});

export const getAllTodos = async() => {
  const result = await todosApi.get('/todos');
  return result.data;
}

export const addTodo = async(todo) => {
  console.log('add a todo: ', todo);
  return await todosApi.post('/todos', todo);
}

export const updateTodo = async(id) => {
  return await todosApi.put(`/todos/${id}`);
}

export const deleteTodo = async(id) => {
  return await todosApi.delete(`/todos/${id}`);
}