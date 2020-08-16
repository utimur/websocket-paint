const SET_CANVAS = 'SET_CANVAS'

const defaultState = {
    canvas: null,
}


export default function canvasReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CANVAS:
            return {...state, canvas: action.payload}
        default:
            return state
    }
};

export const setCanvas = (canvas) => ({type: SET_CANVAS, payload: canvas})
