import React from 'react';
import App from './components/App';
import {render} from "react-dom";
import {Provider} from "react-redux";
import {store} from "./reducers";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


