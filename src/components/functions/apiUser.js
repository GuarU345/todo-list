import axios from "axios";

const USER_API_URL = "https://todo-list-api-production-419d.up.railway.app/api"

export const register = async(body) => {
    try {
        const {data} = await axios.post(`${USER_API_URL}/register`,body)
        return data
    } catch (error) {
        console.error(error)
    }
}

export const login = async(body) => {
    try {
        const {data} = await axios.post(`${USER_API_URL}/login`,body)
        return data
    } catch (error) {
        console.error(error)
    }
}

export const credentials = async(token) => {
    try {
        const {data} = await axios.post(`${USER_API_URL}/credentials`,token)
        return data
    } catch (error) {
        console.error(error)
    }
}