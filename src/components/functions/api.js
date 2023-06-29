import axios from "axios";

const API_URL =
  "https://todo-list-api-production-419d.up.railway.app/api/todos";

export const getTodos = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const createTodo = async (body) => {
  const { data } = await axios.post(API_URL, body);
  return data;
};

export const deleteTodo = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
};

export const getPendingsTodos = async () => {
  const { data } = await axios.get(`${API_URL}/pendings`);
  return data;
};

export const checkTodo = async (id, body) => {
  const { data } = await axios.put(`${API_URL}/${id}`, body);
  return data;
};
