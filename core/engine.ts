import { Scene } from '../common/scene';
import { EngineConfig } from '../common/types';
import { Loop } from './loop';
import { CanvasRenderer } from './renderer';

class Engine {
    private _loop: Loop;
    private _renderer: CanvasRenderer;

    private _scene?: Scene;

    constructor(rootElement: HTMLElement, config: EngineConfig) {
        this._renderer = new CanvasRenderer(rootElement, config.canvas.width, config.canvas.height);
        this._loop = new Loop(config.ups, this._update.bind(this), this._renderer.render);
    }

    public run() {
        this._loop.start();
    }

    public setScene(scene: Scene) {
        this._scene = scene;

        this._renderer.addToRenderBuffer(scene);

        scene.entities.forEach((e) => {
            this._renderer.addToRenderBuffer(e);
        })
    }

    private _update() {
        if (this._scene) {
            this._scene.update();
        }
    }
}

export { Engine };