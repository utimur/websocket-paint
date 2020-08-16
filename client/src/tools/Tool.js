class Tool {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.destroyEvents()
    }

    draw(){};

    set color(color) {
        this.ctx.strokeStyle = color
        this.ctx.fillStyle = color
    }


    destroyEvents() {
        this.canvas.onmousedown = null
        this.canvas.onmousemove = null
        this.canvas.onmouseup = null
    }
}

export default Tool
