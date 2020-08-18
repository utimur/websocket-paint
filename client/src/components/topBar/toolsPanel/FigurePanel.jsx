import React from 'react';
import LineWidthInput from "../../../utils/lineWidthInput/LineWidthInput";
import {setStrokeColor} from "../../../reducers/toolReducer";
import {useDispatch} from "react-redux";

const FigurePanel = () => {
    const dispatch = useDispatch()

    return (
        <div className="tools-panel__wrap">
            <LineWidthInput label="Толщина обводки"/>
            <label htmlFor="color-input">Цвет обводки</label>
            <input onInput={(e) => dispatch(setStrokeColor(e.target.value))} id="color-input" type="color"/>
        </div>
    );
};

export default FigurePanel;
