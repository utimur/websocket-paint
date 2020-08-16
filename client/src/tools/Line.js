import Tool from "./Tool";
import {pushToUndo} from "../reducers/toolReducer";

export default class Line extends Tool{
    constructor(canvas) {
        super(canvas);
        this.listen()
        this.name = 'Line'
        this.ctx.lineWidth = 5
    }

    listen() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
    }

    mouseDownHandler(e) {
        this.currentX = e.pageX-e.target.offsetLeft
        this.currentY = e.pageY-e.target.offsetTop
        this.dispatch(pushToUndo(this.canvas.toDataURL()))
        this.ctx.beginPath()
        this.ctx.moveTo(this.currentX, this.currentY )
        this.state = this.canvas.toDataURL()
    }

    mouseUpHandler(e) {
        this.draw(e.pageX-e.target.offsetLeft, e.pageY-e.target.offsetTop)
    }


    draw(x,y) {
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
    }
}
