import axios from 'axios'
import {API_URL} from "../config";
import {addHolst, setCurrentHolst, setHolstList} from "../reducers/canvasReducer";
import {setUser} from "../reducers/userReducer";


export function getHolstList() {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/holst`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setHolstList(response.data))
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function getCurrentHolst(id) {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/holst/one?id=${id}`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setCurrentHolst(response.data))
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}


export async function saveHolst(id, img) {
        try {
            const fd = new FormData()
            fd.append('id', id)
            fd.append('img', img)
            await axios.post(`${API_URL}/api/holst/save`, fd,{headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            alert("File was saved")
        } catch (e) {
            console.log(e)
            alert(e?.response?.data?.message)
        }
}


export function createHolst(title) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/holst/create`, {title},{headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(addHolst(response.data))
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

