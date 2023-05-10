import { IRenderable } from '../types';
import { Vector } from '../vector';

abstract class StaticEntity implements IRenderable {
    public position: Vector;
    public size: Vector;

    constructor(position: Vector, size: Vector) {
        this.position = position.clone();
        this.size = size;
    }

    abstract render(ctx: CanvasRenderingContext2D): void;
}

export { StaticEntity };