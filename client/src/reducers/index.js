import toolReducer from "./toolReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import canvasReducer from "./canvasReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    tool: toolReducer,
    canvas: canvasReducer,
    user: userReducer,
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
