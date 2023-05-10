import { Entity, StaticEntity } from './entity';
import { IRenderable, IUpdateable } from './types';

class Scene implements IUpdateable {
    public entities: Array<StaticEntity | Entity> = [];

    constructor() {}

    public update() {
        this.entities.forEach((e) => {
            if (e instanceof Entity) {
                e.update();
            }
        });
    }

}

export { Scene };