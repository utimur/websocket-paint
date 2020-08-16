import Cursor from "../tools/Cursor";

const SET_COLOR = 'SET_COLOR'
const SET_TOOL = 'SET_TOOL'
const PUSH_TO_UNDO = 'PUSH_TO_UNDO'
const PUSH_TO_REDO = 'PUSH_TO_REDO'
const POP_FROM_UNDO = 'POP_FROM_UNDO'
const POP_FROM_REDO = 'POP_FROM_REDO'

const defaultState = {
    undoList: [],
    redoList: [],
    color: '#000000',
    tool: new Cursor(),
}


export default function toolReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_COLOR:
            return {...state, color: action.payload}
        case SET_TOOL:
            return {...state, tool: action.payload}
        case PUSH_TO_UNDO:
            let newUndo = [...state.undoList, action.payload]
            if (newUndo.length > 10) {
                newUndo = newUndo.slice(1)
            }
            return {...state, undoList: newUndo};
        case PUSH_TO_REDO:
            let newRedo = [...state.redoList, action.payload]
            if (newRedo.length > 10) {
                newRedo = newUndo.slice(1)
            }
            return {...state, redoList: newRedo};
        case POP_FROM_UNDO:
            return {...state, undoList: [...state.undoList.slice(0, state.undoList.length - 1)]}
        case POP_FROM_REDO:
            return {...state, redoList: [...state.redoList.slice(0, state.redoList.length - 1)]}
        default:
            return state
    }
};

export const setColor = (color) => ({type: SET_COLOR, payload: color})
export const setTool = (tool) => ({type: SET_TOOL, payload: tool})
export const pushToUndo = (data) => ({type: PUSH_TO_UNDO, payload: data})
export const pushToRedo = (data) => ({type: PUSH_TO_REDO, payload: data})
export const popFromUndo = (data) => ({type: POP_FROM_UNDO})
export const popFromRedo = (data) => ({type: POP_FROM_REDO})
