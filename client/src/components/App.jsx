import React, {useEffect} from 'react';
import TopBar from "./topBar/TopBar";
import Canvas from "./canvas/Canvas";
import './app.scss';
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Auth from "./auth/Auth";
import HolstList from "./holstList/HolstList";
import {getUser} from "../actions/user.actions";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getUser())
    }, [])

    return (
        <BrowserRouter>
            <div className="app">
                <TopBar/>
                {isAuth ?
                    <Switch>
                        <Route path="/canvas/:id" component={Canvas}/>
                        <Route exact path="/" component={HolstList}/>
                        <Redirect to="/"/>
                    </Switch>
                    :
                    <Switch>
                        <Route path="/auth" component={Auth}/>
                        <Redirect to="/auth"/>
                    </Switch>
                }

            </div>
        </BrowserRouter>
    );
}

export default App;
