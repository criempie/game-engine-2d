class Vector {
    constructor(public x: number, public y: number) {}

    public addition(n: number): Vector
    public addition(v: Vector): Vector
    public addition(nOrV: number | Vector) {
        if (typeof nOrV === 'number') {
            this.x += nOrV;
            this.y += nOrV;
        } else {
            this.x += nOrV.x;
            this.y += nOrV.y;
        }

        return this;
    }

    public multiply(n: number) {
        this.x *= n;
        this.y *= n;

        return this;
    }

    public isEqual(v: Vector) {
        return this.x === v.x && this.y === v.y;
    }

    public clone() {
        return new Vector(this.x, this.y);
    }

    static create(x: number, y: number) {
        return new Vector(x, y);
    }
}

export { Vector };