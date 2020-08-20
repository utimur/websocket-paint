import React, {useEffect} from 'react';
import {Route, useHistory} from 'react-router-dom'
import './topBar.scss'
import {useDispatch, useSelector} from "react-redux";
import {popFromRedo, popFromUndo, pushToRedo, pushToUndo} from "../../reducers/toolReducer";
import ToolsPanel from "./toolsPanel/ToolsPanel";
import {logOut, setIsLogin} from "../../reducers/userReducer";
import {saveHolst} from "../../actions/holst.actions";

const TopBar = () => {
    const canvas = useSelector(state => state.canvas.canvas)
    const undoList = useSelector(state => state.tool.undoList)
    const redoList = useSelector(state => state.tool.redoList)
    const currentHolst = useSelector(state => state.canvas.currentHolst)
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    const history = useHistory()

    function reStateCanvas(arr, popFunc, pushFunc) {
        if (arr.length > 0) {
            const ctx = canvas.getContext('2d')
            const restoreState = arr[arr.length-1];
            dispatch(popFunc())
            dispatch(pushFunc(canvas.toDataURL()))
            const img = new Image()
            img.src = restoreState
            img.onload = function() {
                ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
                ctx.drawImage(img, 0, 0);
            }
        }
    }

    function saveClickHandler() {
        canvas.toBlob((blob)=> {
            saveHolst(currentHolst._id, blob)
        })
    }


    function logOutClickHandler() {
        dispatch(logOut())
        localStorage.removeItem('token')
    }

    return (
        <div className="topbar">
            <div className="topbar__main">
                <Route path="/canvas">
                    <div>
                        <button className="topbar__file">File</button>
                        <button className="topbar__save topbar__btn" onClick={() => saveClickHandler()}/>
                        <button className="topbar__undo topbar__btn" onClick={() => reStateCanvas(undoList, popFromUndo, pushToRedo)}/>
                        <button className="topbar__redo topbar__btn" onClick={() => reStateCanvas(redoList, popFromRedo, pushToUndo)}/>
                    </div>
                </Route>
                {!isAuth && <button className="topbar__auth topbar__right" onClick={()=>dispatch(setIsLogin(true))}>Войти</button>}
                {!isAuth && <button className="topbar__auth" onClick={()=>dispatch(setIsLogin(false))}>Регистрация</button>}
                {isAuth && <button className="topbar__auth topbar__right" onClick={()=> logOutClickHandler()}>Выход</button>}
            </div>
            <Route path="/canvas">
                <ToolsPanel/>
            </Route>
        </div>
    );
};

export default TopBar;
