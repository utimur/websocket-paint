class Tool {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.destroyEvents()
    }

    draw(){};

    set fillColor(fillColor) {
        this.ctx.fillStyle = fillColor
    }

    set strokeColor(strokeColor) {
        this.ctx.strokeStyle = strokeColor
    }
    set lineWidth(lineWidth) {
        this.ctx.lineWidth = lineWidth
    }
    set lineCap(lineCap) {
        this.ctx.lineCap = lineCap
    }


    destroyEvents() {
        this.canvas.onmousedown = null
        this.canvas.onmousemove = null
        this.canvas.onmouseup = null
    }
}

export default Tool
