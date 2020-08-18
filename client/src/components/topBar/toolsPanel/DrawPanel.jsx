import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setLineCap, setLineWidth} from "../../../reducers/toolReducer";
import LineWidthInput from "../../../utils/lineWidthInput/LineWidthInput";

const DrawPanel = () => {
    const tool = useSelector(state => state.tool.tool)
    const lineWidth = useSelector(state => state.tool.lineWidth)
    const dispatch = useDispatch()


    return (
        <div className="tools-panel__wrap">
            <LineWidthInput label="Толщина линии"/>
            <label htmlFor="tools-panel__square">Прямые углы</label>
            <input
                id="tools-panel__square"
                value="square"
                className="tools-panel__square"
                type="radio"
                name="cap"
                onChange={(e) => dispatch(setLineCap(e.target.value))}/>
            <label htmlFor="tools-panel__circle">Круглые углы</label>
            <input
                id="tools-panel__circle"
                value="round"
                className="tools-panel__circle"
                type="radio"
                name="cap"
                checked={true}
                onChange={(e) => dispatch(setLineCap(e.target.value))}/>
        </div>
    );
};

export default DrawPanel;
