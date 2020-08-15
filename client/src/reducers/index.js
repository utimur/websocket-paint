import figureReducer from "./figureReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    figures: figureReducer,
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
