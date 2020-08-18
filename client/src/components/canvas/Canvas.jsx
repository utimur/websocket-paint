import React, {useEffect, useRef} from 'react';
import './canvas.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCanvas} from "../../reducers/canvasReducer";

const Canvas = () => {
    const canvasRef = useRef()
    const dispatch = useDispatch()
    const fillColor = useSelector(state => state.tool.fillColor)
    const strokeColor = useSelector(state => state.tool.strokeColor)
    const lineWidth = useSelector(state => state.tool.lineWidth)
    const lineCap = useSelector(state => state.tool.lineCap)
    const tool = useSelector(state => state.tool.tool);



    useEffect(() => {
        dispatch(setCanvas(canvasRef.current))
    }, [])

    useEffect(() => {
        if (tool) {
            tool.fillColor = fillColor;
            tool.strokeColor = strokeColor;
            tool.lineWidth = lineWidth;
            tool.lineCap = lineCap
            tool.dispatch = dispatch
        }
    }, [tool, fillColor, strokeColor, lineWidth, lineCap])


    return (
        <canvas
            ref={canvasRef}
            width={(document.body.getBoundingClientRect().width - 50)}
            height={(document.body.getBoundingClientRect().height - 70)} className={`canvas ${tool.name}`}
        />
    );
};

export default Canvas;
