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

        rootElement.appendChild(this._canvasElement);

        this.render = this.render.bind(this);
    }

    public addToRenderBuffer(e: IRenderable) {
        this._buffer.push(e);
    }

    public render() {
        this._buffer.forEach((e) => {
            this._drawWrapper(e.render)(this._ctx);
        });
    }

    private _drawWrapper<T extends Array<unknown>, R>(func: (...args: T) => R) {
        return (...args: T): R => {
            const savedStrokeColor = this._ctx.strokeStyle;
            const savedFillColor = this._ctx.fillStyle;

            this._ctx.beginPath();
            const result = func.apply(this, args);
            this._ctx.closePath();

            this._ctx.strokeStyle = savedStrokeColor;
            this._ctx.fillStyle = savedFillColor;

            return result;
        };
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