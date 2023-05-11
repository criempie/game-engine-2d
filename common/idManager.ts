class IdManager {
    private _lastId = 0;
    private _prefix = 'id_';

    constructor(prefix?: string) {
        if (prefix) this._prefix = prefix;
    }

    public next() {
        return this._prefix + this._lastId++;
    }
}

export { IdManager };