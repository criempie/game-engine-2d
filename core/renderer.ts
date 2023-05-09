import { IRenderable } from '../common/types';

class CanvasRenderer {
    private readonly _canvasElement: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;

    private _buffer: IRenderable[] = [];

    constructor(rootElement: HTMLElement, width: number, height: number) {
        this._canvasElement = this._createCanvas(width, height);
        const ctx = this._canvasElement.getContext('2d');

        if (!ctx) throw new Error('context from canvas is null');
        this._ctx = ctx;
    }

    public addToRenderBuffer(e: IRenderable) {
        this._buffer.push(e);
    }

    public render() {
        this._buffer.forEach((e) => e.render(this._ctx));
    }

    private _createCanvas(width: number, height: number) {
        const canvasElement = document.createElement('canvas');

        canvasElement.width = width;
        canvasElement.height = height;
        canvasElement.className = 'game__canvas';

        return canvasElement;
    }
}

export { CanvasRenderer };