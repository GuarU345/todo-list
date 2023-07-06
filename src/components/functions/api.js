import axios from "axios";

const isDev = true

const API_URL = isDev ? "http://localhost:3333/api/todos" :
  "https://todo-list-api-production-419d.up.railway.app/api/todos";

export const getTodos = async (token) => {
  const { data } = await axios.get(`${API_URL}`, {headers: {Authorization: token}});
  return data;
};

export const createTodo = async (body,token) => {
  const { data } = await axios.post(API_URL, body, {headers: {Authorization: token}});
  return data;
};

export const deleteTodo = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
};

export const getPendingsTodos = async (token) => {
  const { data } = await axios.get(`${API_URL}/pendings`,{headers: {Authorization: token}});
  return data;
};

export const checkTodo = async (id, body) => {
  const { data } = await axios.put(`${API_URL}/${id}`, body);
  return data;
};
