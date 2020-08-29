const SET_CANVAS = 'SET_CANVAS'
const SET_HOLST_LIST = 'SET_HOLST_LIST'
const SET_CURRENT_HOLST = 'SET_CURRENT_HOLST'
const SET_IMG_LOAD = 'SET_IMG_LOAD'
const ADD_HOLST = 'ADD_HOLST'

const defaultState = {
    canvas: null,
    holstList: [],
    isImgLoad: false,
    currentHolst: {}
}


export default function canvasReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CANVAS: return {...state, canvas: action.payload}
        case SET_HOLST_LIST: return {...state, holstList: action.payload}
        case SET_CURRENT_HOLST: return {...state, currentHolst: action.payload, isImgLoad: true}
        case SET_IMG_LOAD: return {...state, isImgLoad: action.payload}
        case ADD_HOLST: return {...state, holstList: [...state.holstList, action.payload]}
        default:
            return state
    }
};

export const setCanvas = (canvas) => ({type: SET_CANVAS, payload: canvas})
export const setHolstList = (list) => ({type: SET_HOLST_LIST, payload: list})
export const setCurrentHolst = (holst) => ({type: SET_CURRENT_HOLST, payload: holst})
export const setImgLoad = (bool) => ({type: SET_IMG_LOAD, payload: bool})
export const addHolst = (holst) => ({type: ADD_HOLST, payload: holst})
