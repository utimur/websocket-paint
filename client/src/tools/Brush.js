import Tool from "./Tool";
import {pushToUndo} from "../reducers/toolReducer";

export default class Brush extends Tool{
    constructor(canvas) {
        super(canvas);
        this.name = 'Brush'
        this.listen()
        this.ctx.lineCap = 'round'
    }

    listen() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    }

    mouseDownHandler(e) {
        this.mouseDown = true
        this.dispatch(pushToUndo(this.canvas.toDataURL()))
        this.ctx.beginPath()
        this.ctx.moveTo(e.pageX-e.target.offsetLeft, e.pageY-e.target.offsetTop)
    }

    mouseUpHandler(e) {
        this.mouseDown = false
    }

    mouseMoveHandler(e) {
        if (this.mouseDown) {
            this.draw(e.pageX-e.target.offsetLeft, e.pageY-e.target.offsetTop)
        }
    }

    draw(x,y) {
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
        console.log('draw')
    }
}
