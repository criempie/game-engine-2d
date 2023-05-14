import { Scene } from '../common/scene';
import { GameConfig } from '../common/types';
import { Engine } from './engine';

abstract class Game {
    protected _engine: Engine;
    protected abstract _scene: Scene;

    constructor(rootElement: HTMLElement, config: GameConfig) {
        this._engine = new Engine(rootElement, config.engine);
    }

    public start() {
        this._engine.loadScene(this._scene);
        this._engine.run();
    }
}

export { Game };