import { IdManager } from '../../common/idManager';
import { deleteElementsFromArray } from '../../lib';
import { ControlsManagerSubscription, EventType, KeyboardKeyCode } from './types';

class ControlsManager {
    private _subscribers: ControlsManagerSubscription[] = [];
    private _idManager: IdManager;

    constructor(private _elementToListen: HTMLElement) {
        this._idManager = new IdManager();
    }

    public startObserve() {
        this._elementToListen.addEventListener('keydown', this._keyListener.bind(this));
        this._elementToListen.addEventListener('keyup', this._keyListener.bind(this));
    }

    public stopObserve() {
        this._elementToListen.removeEventListener('keydown', this._keyListener.bind(this));
        this._elementToListen.removeEventListener('keyup', this._keyListener.bind(this));
    }

    public subscribe(event: EventType, key: KeyboardKeyCode, callback: Function) {
        const id = this._idManager.next();

        this._subscribers.push({
            id,
            type: event,
            key,
            callback
        });

        return () => this._unsubscribeFn(id);
    }

    private _unsubscribeFn(id: string) {
        deleteElementsFromArray(((s) => s.id === id), this._subscribers);
    }

    private _keyListener(event: KeyboardEvent) {
        this._subscribers.forEach((s) => {
            if (s.type === event.type && s.key === event.code) {
                s.callback();
            }
        });
    }
}

export { ControlsManager };