import axios from "axios"

const API_URL = "todo-list-api-production-419d.up.railway.app"

export const getTodos = async() => {
    const resp = await axios.get(API_URL)
    const data = resp.data
    return data
}

export const createTodo = async(body) => {
    const resp = await axios.post(API_URL,body)
    const data = resp.data
    return data
}

export const deleteTodo = async(id) => {
    const resp = await axios.delete(`${API_URL}/${id}`)
    const data = resp.data
    return data
}

export const getPendingsTodos = async() => {
    const resp = await axios.get(`${API_URL}/pendings`)
    const data = resp.data
    return data
}

export const checkTodo = async(id,body) => {
    const resp = await axios.put(`${API_URL}/${id}`,body)
    const data = resp.data
    return data
}