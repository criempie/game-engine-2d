class Loop {
    private _lastUpdate: number = 0;
    private _isRunning: boolean = false;
    private _requestID?: number;

    constructor(private _frequency: number,
                private _updateFn: Function,
                private _renderFn: Function) {

        this._tick = this._tick.bind(this);
    }

    public start() {
        this._isRunning = true;
        this._tick(this._lastUpdate);
    }

    public stop() {
        this._isRunning = false;
        window.cancelAnimationFrame(this._requestID);
    }

    private _tick(timestamp: number) {
        const dt = timestamp - this._lastUpdate;

        if (dt > 1000 / this._frequency) {
            this._lastUpdate = timestamp;

            this._updateFn();
            this._renderFn();
        }

        this._requestID = requestAnimationFrame(this._tick);
    }
}

export { Loop };