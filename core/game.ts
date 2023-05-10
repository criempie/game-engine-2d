import { GameConfig } from '../common/types';
import { Engine } from './engine';

abstract class Game {
    protected _engine: Engine;

    constructor(rootElement: HTMLElement, config: GameConfig) {
        this._engine = new Engine(rootElement, config.engine);
    }
}

export { Game };