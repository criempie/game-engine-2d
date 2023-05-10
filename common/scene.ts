import { Vector } from './vector';
import { Entity, StaticEntity } from './entity';
import { IRenderable, IUpdateable } from './types';

class Scene implements IUpdateable, IRenderable {
    public entities: Array<StaticEntity | Entity> = [];

    constructor() {}

    public update() {
        this.entities.forEach((e) => {
            if (e instanceof Entity) {
                e.update();
            }
        });
    }

    public render(ctx: CanvasRenderingContext2D, size: Vector) {}

}

export { Scene };