import toolReducer from "./toolReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import canvasReducer from "./canvasReducer";
import userReducer from "./userReducer";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
    tool: toolReducer,
    canvas: canvasReducer,
    user: userReducer,
    app: appReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
