import React, {useEffect} from 'react';
import './topBar.scss'
import {useDispatch, useSelector} from "react-redux";
import {popFromRedo, popFromUndo, pushToRedo, pushToUndo} from "../../reducers/toolReducer";

const TopBar = () => {
    const canvas = useSelector(state => state.canvas.canvas)
    const undoList = useSelector(state => state.tool.undoList)
    const redoList = useSelector(state => state.tool.redoList)
    const dispatch = useDispatch()


    function undoClickHandler(e) {
        if (undoList.length > 0) {
            console.log('123')
            const ctx = canvas.getContext('2d')
            const restoreState = undoList[undoList.length-1];
            dispatch(popFromUndo())
            dispatch(pushToRedo(canvas.toDataURL()))
            const img = new Image()
            img.src = restoreState
            img.onload = function() {
                ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
                ctx.drawImage(img, 0, 0);
            }
        }
    }

    function redoClickHandler(e) {
        if (redoList.length > 0) {
            const ctx = canvas.getContext('2d')
            const restoreState = redoList[redoList.length-1];
            dispatch(popFromRedo())
            dispatch(pushToUndo(canvas.toDataURL()))
            const img = new Image()
            img.src = restoreState
            img.onload = function() {
                ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
                ctx.drawImage(img, 0, 0);
            }
        }
    }



    return (
        <div className="topbar">
            <div className="topbar__main">
                <button className="topbar__file">File</button>
                <button className="topbar__save topbar__btn"/>
                <button className="topbar__undo topbar__btn" onClick={(e) => undoClickHandler(e)}/>
                <button className="topbar__redo topbar__btn" onClick={(e) => redoClickHandler(e)}/>
            </div>
        </div>
    );
};

export default TopBar;
