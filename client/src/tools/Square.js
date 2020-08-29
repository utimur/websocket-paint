import Tool from "./Tool";
import {pushToUndo} from "../reducers/toolReducer";

export default class Square extends Tool{
    constructor(canvas) {
        super(canvas);
        this.name = 'Square'
        this.listen()
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
        this.startX = e.pageX-e.target.offsetLeft
        this.startY = e.pageY-e.target.offsetTop
        this.saved = this.canvas.toDataURL()
    }

    mouseUpHandler(e) {
        this.mouseDown = false
    }

    mouseMoveHandler(e) {
        if (this.mouseDown) {
            let curentX = e.pageX - e.target.offsetLeft;
            let curentY = e.pageY - e.target.offsetTop
            let width = curentX - this.startX
            let height = curentY - this.startY
            this.draw(this.startX, this.startY, width, height)
        }
    }


    draw(x,y,w,h) {
        const img = new Image()
        img.src = this.saved
        img.onload = async function () {
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.rect(x, y, w,h)
            this.ctx.fill()
            this.ctx.stroke()
        }.bind(this)

    }
}
