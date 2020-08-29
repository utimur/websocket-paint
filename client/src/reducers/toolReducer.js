import Cursor from "../tools/Cursor";

const SET_FILL_COLOR = 'SET_FILL_COLOR'
const SET_STROKE_COLOR = 'SET_STROKE_COLOR'
const SET_LINE_WIDTH = 'SET_LINE_WIDTH'
const SET_LINE_CAP = 'SET_LINE_CAP'
const SET_TOOL = 'SET_TOOL'
const PUSH_TO_UNDO = 'PUSH_TO_UNDO'
const PUSH_TO_REDO = 'PUSH_TO_REDO'
const POP_FROM_UNDO = 'POP_FROM_UNDO'
const POP_FROM_REDO = 'POP_FROM_REDO'
const CLEAR_TOOLS = 'CLEAR_TOOLS'

const defaultState = {
    undoList: [],
    redoList: [],
    fillColor: '#000000',
    strokeColor: '#000000',
    lineWidth: 1,
    lineCap: 'round',
    tool: new Cursor(),
}


export default function toolReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_FILL_COLOR:
            return {...state, fillColor: action.payload}
        case SET_STROKE_COLOR:
            return {...state, strokeColor: action.payload}
        case SET_LINE_WIDTH:
            return {...state, lineWidth: action.payload}
        case SET_LINE_CAP:
            return {...state, lineCap: action.payload}
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
        case CLEAR_TOOLS:
            return {...state, redoList: [], undoList: [], tool: new Cursor()}
        default:
            return state
    }
};

export const setFillColor = (color) => ({type: SET_FILL_COLOR, payload: color})
export const setStrokeColor = (color) => ({type: SET_STROKE_COLOR, payload: color})
export const setLineWidth = (width) => ({type: SET_LINE_WIDTH, payload: width})
export const setLineCap = (cap) => ({type: SET_LINE_CAP, payload: cap})
export const setTool = (tool) => ({type: SET_TOOL, payload: tool})
export const pushToUndo = (data) => ({type: PUSH_TO_UNDO, payload: data})
export const pushToRedo = (data) => ({type: PUSH_TO_REDO, payload: data})
export const popFromUndo = (data) => ({type: POP_FROM_UNDO})
export const popFromRedo = (data) => ({type: POP_FROM_REDO})
export const clearTools = () => ({type: CLEAR_TOOLS})
