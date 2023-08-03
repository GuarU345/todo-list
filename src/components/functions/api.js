import axios from "axios";

const isDev = false;

const API_URL = isDev
  ? "http://localhost:3000/api/todos"
  : "https://todo-list-api-express-3aiq-dev.fl0.io/api/todos";

export const getTodos = async (token) => {
  const { data } = await axios.get(`${API_URL}`, {
    headers: { Authorization: token },
  });
  return data;
};

export const createTodo = async (body, token) => {
  const { data } = await axios.post(API_URL, body, {
    headers: { Authorization: token },
  });
  return data;
};

export const deleteTodo = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
};

export const getPendingsTodos = async (token) => {
  const { data } = await axios.get(`${API_URL}/pendings`, {
    headers: { Authorization: token },
  });
  return data;
};

export const checkTodo = async (id, body) => {
  const { data } = await axios.put(`${API_URL}/${id}`, body);
  return data;
};
