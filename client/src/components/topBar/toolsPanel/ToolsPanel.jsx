import React from 'react';
import './toolsPanel.scss';
import {useDispatch, useSelector} from "react-redux";
import {setLineCap, setLineWidth} from "../../../reducers/toolReducer";
import DrawPanel from "./DrawPanel";
import FigurePanel from "./FigurePanel";

const ToolsPanel = () => {
    const tool = useSelector(state => state.tool.tool)
    const lineWidth = useSelector(state => state.tool.lineWidth)
    const dispatch = useDispatch()

    function onLineWidthChange(e) {
        if (e.target.value >= 0 && e.target.value <= 50) {
            dispatch(setLineWidth(e.target.value));
        }
    }

    return (
        <div className="tools-panel">
            {(tool.name === 'Brush' || tool.name === 'Eraser' || tool.name === 'Line') &&
            <DrawPanel/>
            }
            {(tool.name === 'Circle' || tool.name === 'Square') &&
            <FigurePanel/>
            }
        </div>
    );
};

export default ToolsPanel;
