import Tool from "./Tool";
import {pushToUndo} from "../reducers/toolReducer";

export default class Text extends Tool{
    constructor(canvas) {
        super(canvas);
        this.name = 'Text'
        this.listen()
        console.log('brush')
        this.ctx.lineCap = 'round'
        this.ctx.lineWidth = 5
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
    }
}
