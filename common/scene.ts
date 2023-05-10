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

    public render(ctx: CanvasRenderingContext2D) {
        this.entities.forEach((e) => e.render(ctx));
    }

}

export { Scene };