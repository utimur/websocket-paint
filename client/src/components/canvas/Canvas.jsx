import React, {useEffect, useRef, useState} from 'react';
import './canvas.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCanvas, setCurrentHolst, setImgLoad} from "../../reducers/canvasReducer";
import LeftBar from "../leftBar/LeftBar";
import {getCurrentHolst} from "../../actions/holst.actions";
import {clearTools} from "../../reducers/toolReducer";
import {API_URL} from "../../config";

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
    const [mouse, setMouse] = useState({x:0, y:0, inCanvas: false})
    const isLineTool = tool.name === 'Brush' || tool.name === 'Eraser' || tool.name === 'Line'


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
        console.log('USE EFFECT')
        dispatch(setCanvas(canvasRef.current))
        return function () {
            dispatch(clearTools())
        }
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
        canvasRef.current.getContext('2d').clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
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

    function mouseMoveHandler(e) {
        setMouse({x: e.clientX, y:e.clientY, inCanvas: true})
    }


    return (
        <div className="wrap">
            <LeftBar/>
            {(isLineTool && mouse.inCanvas) &&
            <span className={'cursor'}
                  style={{width:lineWidth+'px',
                      height:lineWidth+'px',
                      top:mouse.y-(lineWidth/2),
                      left:mouse.x-(lineWidth/2)}}/>}
            <canvas
                ref={canvasRef}
                width={(document.body.getBoundingClientRect().width - 50)}
                height={(document.body.getBoundingClientRect().height - 70)}
                className={!isLineTool ? `canvas pointer` : 'canvas'}
                onMouseMove={(e) => mouseMoveHandler(e)}
                onMouseEnter={() => setMouse( {...mouse, inCanvas: true})}
                onMouseLeave={() => setMouse( {...mouse, inCanvas: false})}
            />
        </div>
    );
};

export default Canvas;
