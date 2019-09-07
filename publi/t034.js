var point = new Point(2,3)
point.toString() // (2, 3)


//------------------------

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y)
        this.color = color
    }

    toString() {
        return this.color+ '' + super()
    }
}