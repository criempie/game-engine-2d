import { IRenderable } from '../types';
import { Vector } from '../vector';

abstract class StaticEntity implements IRenderable {
    public position: Vector;

    constructor(position: Vector) {
        this.position = position.clone();
    }

    public render(ctx: CanvasRenderingContext2D) {}
}

export { StaticEntity };