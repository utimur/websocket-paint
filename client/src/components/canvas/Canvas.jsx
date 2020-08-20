import React, {useEffect, useRef} from 'react';
import './canvas.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCanvas, setCurrentHolst, setImgLoad} from "../../reducers/canvasReducer";
import LeftBar from "../leftBar/LeftBar";
import {getCurrentHolst} from "../../actions/holst.actions";

const Canvas = (props) => {
    const canvasRef = useRef()
    const dispatch = useDispatch()
    const fillColor = useSelector(state => state.tool.fillColor)
    const strokeColor = useSelector(state => state.tool.strokeColor)
    const lineWidth = useSelector(state => state.tool.lineWidth)
    const lineCap = useSelector(state => state.tool.lineCap)
    const tool = useSelector(state => state.tool.tool);
    const currentHolst = useSelector(state => state.canvas.currentHolst);
    const isImgLoad = useSelector(state => state.canvas.isImgLoad);
    const holstId = props.match.params.id


    useEffect(()=> {
        dispatch(getCurrentHolst(holstId))
    }, [holstId])

    useEffect(()=> {
        loadCanvasImage()
        return function () {
            dispatch(setImgLoad(false))
        }
    }, [isImgLoad])

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

    function loadCanvasImage() {
        if (currentHolst.img) {
            const image = new Image()
            image.src = `${currentHolst.img}`
            image.crossOrigin="anonymous"
            image.onload = () => {
                canvasRef.current.getContext('2d').drawImage(image, 0, 0)
            }
        } else {
            canvasRef.current.getContext('2d').clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
        }
    }

    return (
        <div className="wrap">
            <LeftBar/>
            <canvas
                ref={canvasRef}
                width={(document.body.getBoundingClientRect().width - 50)}
                height={(document.body.getBoundingClientRect().height - 70)} className={`canvas ${tool.name}`}
            />
        </div>
    );
};

export default Canvas;
