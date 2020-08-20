import axios from 'axios'
import {API_URL} from "../config";
import {setUser} from "../reducers/userReducer";

export async function registration(username, password) {
    try {
        const response = await axios.post(`${API_URL}/api/auth/registration`, {username,password})
        alert(response.data.message)
    } catch (e) {
        alert(e?.response?.data?.message)
    }
}
export function login(username, password) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/auth/login`, {username,password})
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function getUser() {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/auth`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}
