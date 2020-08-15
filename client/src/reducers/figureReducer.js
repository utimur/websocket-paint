const SET_COLOR = 'SET_COLOR'

const defaultState = {
    undoList: [],
    redoList: [],
    color: '#000000'
}


export default function figureReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_COLOR:
            return {...state, color: action.payload}
        default:
            return state
    }
};

export const setColor = (color) => ({type: SET_COLOR, payload: color})
