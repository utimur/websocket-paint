import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setLineWidth} from "../../reducers/toolReducer";

const LineWidthInput = ({label}) => {
    const tool = useSelector(state => state.tool.tool)
    const lineWidth = useSelector(state => state.tool.lineWidth)
    const dispatch = useDispatch()

    function onLineWidthChange(e) {
        if (e.target.value >= 0 && e.target.value <= 50) {
            dispatch(setLineWidth(e.target.value));
        }
    }

    return (
        <div>
            <label htmlFor="line-input">{label}</label>
            <input
                onChange={(e) => onLineWidthChange(e)}
                value={lineWidth}
                type="number"
                className="line-input"
                id="line-input"/>
        </div>
    );
};

export default LineWidthInput;
