import axios from 'axios'
import {API_URL} from "../config";
import {setCurrentHolst, setHolstList} from "../reducers/canvasReducer";
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
            console.log(img)
            console.log(id)
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
