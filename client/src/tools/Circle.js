import Tool from "./Tool";
import {pushToUndo} from "../reducers/toolReducer";

export default class Circle extends Tool{
    constructor(canvas) {
        super(canvas);
        this.name = 'Circle'
        this.listen()
    }

    listen() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
    }

    mouseDownHandler(e) {
        this.dispatch(pushToUndo(this.canvas.toDataURL()))
        this.ctx.beginPath()
        this.startX = e.pageX-e.target.offsetLeft
        this.startY = e.pageY-e.target.offsetTop
    }

    mouseUpHandler(e) {
        this.mouseDown = false
        let curentX =  e.pageX-e.target.offsetLeft
        let curentY =  e.pageY-e.target.offsetTop
        let width = curentX-this.startX
        let height = curentY-this.startY
        let r = Math.sqrt(width**2 + height**2)
        this.draw(this.startX, this.startY, r)
    }


    draw(x,y,r) {
        this.ctx.arc(x, y, r, 0, 2*Math.PI)
        this.ctx.fill()
        this.ctx.stroke()
    }
}
