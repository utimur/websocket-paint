const SET_USER = 'SET_USER'
const SET_IS_LOGIN = 'SET_IS_LOGIN'
const LOG_OUT = 'LOG_OUT'

const defaultState = {
    user: {},
    isAuth: false,
    isLogin: true
}


export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER: return {...state, user: action.payload, isAuth: true}
        case SET_IS_LOGIN: return {...state, isLogin: action.payload}
        case LOG_OUT: return {...state, user: {}, isAuth: false}
        default:
            return state
    }
};

export const setUser = (user) => ({type: SET_USER, payload: user})
export const setIsLogin = (bool) => ({type: SET_IS_LOGIN, payload: bool})
export const logOut = () => ({type: LOG_OUT})
