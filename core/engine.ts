import { Entity, StaticEntity } from '../common/entity';
import { Scene } from '../common/scene';
import { EngineConfig } from '../common/types';
import { Loop } from './loop';
import { CanvasRenderer } from './renderer';

class Engine {
    private _loop: Loop;
    private _renderer: CanvasRenderer;
    private _entities: Array<Entity | StaticEntity> = [];

    constructor(rootElement: HTMLElement, config: EngineConfig) {
        this._renderer = new CanvasRenderer(rootElement, config.canvas.width, config.canvas.height);
        this._loop = new Loop(config.ups, this._update.bind(this), this._renderer.render);
    }

    public run() {
        this._loop.start();
    }

    public loadScene(scene: Scene) {
        this._renderer.addToBuffer(scene);

        scene.entities.forEach((e) => {
            this._entities.push(e);
            this._renderer.addToBuffer(e);
        });
    }

    private _update() {
        this._entities.forEach((e) => {
            if (e instanceof Entity) e.update();
        });
    }
}

export { Engine };