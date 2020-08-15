import React from 'react';
import './leftBar.scss'
import {useDispatch} from "react-redux";
import {setColor} from "../../reducers/figureReducer";

const LeftBar = () => {
    const dispatch = useDispatch()

    return (
        <div className="leftbar">
            <input type="color" className="leftbar__color-input" onInput={(e) =>dispatch(setColor(e.target.value))}/>
        </div>
    );
};

export default LeftBar;
