import Brush from "./Brush";

export default class Eraser extends Brush{
    constructor(canvas) {
        super(canvas);
        this.name = 'Eraser'
        this.ctx.strokeStyle = 'white'
    }


    draw(x,y) {
        this.ctx.strokeStyle = 'white'
        super.draw(x,y)
    }
}
