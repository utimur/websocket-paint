import React, {useEffect, useRef} from 'react';
import './canvas.scss'
import Brush from "../../tools/Brush";
import {useDispatch, useSelector} from "react-redux";
import {setCanvas} from "../../reducers/canvasReducer";

const Canvas = () => {
    const canvasRef = useRef()
    const dispatch = useDispatch()
    const color = useSelector(state => state.tool.color)
    const undoList = useSelector(state => state.tool.undoList)
    const redoList = useSelector(state => state.tool.redoList)
    let canvas;
    let ctx;
    const tool = useSelector(state => state.tool.tool);



    useEffect(() => {
        dispatch(setCanvas(canvasRef.current))
    }, [])

    useEffect(() => {
        if (tool) {
            tool.color = color;
            tool.dispatch = dispatch
        }
    }, [tool, color])


    return (
        <canvas
            ref={canvasRef}
            width={(document.body.getBoundingClientRect().width - 50)}
            height={(document.body.getBoundingClientRect().height - 70)} className={`canvas ${tool.name}`}
        />
    );
};

export default Canvas;
