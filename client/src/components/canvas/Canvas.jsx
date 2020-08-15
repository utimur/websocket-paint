import React, {useEffect, useRef} from 'react';
import './canvas.scss'

const Canvas = () => {
    const canvasRef = useRef()
    let canvas;
    let ctx;

    useEffect(()=> {
        canvas = canvasRef.current
        ctx = canvas.getContext('2d')
    }, [])

    function mouseDownHandler(e) {
        console.log(e.pageX)
        console.log(e.pageY)
        ctx.fillRect(e.pageX-50,e.pageY-50,50,50)
    }

    function mouseUpHandler(e) {

    }

    function mouseMoveHandler(e) {

    }

    return (
        <canvas
            ref={canvasRef}
            width={(document.body.getBoundingClientRect().width - 50)}
            height={(document.body.getBoundingClientRect().height - 50)} className='canvas'
            onMouseDown={(e) => mouseDownHandler(e)}
            onMouseUp={(e) => mouseUpHandler(e)}
            onMouseMove={(e) => mouseMoveHandler(e)}
        />
    );
};

export default Canvas;
