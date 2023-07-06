import axios from "axios";

const isDev = true

 const USER_API_URL = isDev ?  "http://localhost:3333/api"
 : "https://todo-list-api-production-419d.up.railway.app/api"

export const register = async(body) => {
    try {
        const {data} = await axios.post(`${USER_API_URL}/register`,body)
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const login = async(body) => {
    try {
        const {data} = await axios.post(`${USER_API_URL}/login`,body)
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const logout = async(token) => {
    try {
        await axios.post(`${USER_API_URL}/logout`,{}, {headers: {Authorization: token}})
    } catch (error) {
        throw new Error(error)
    }
}