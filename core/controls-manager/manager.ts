import { SubscriptionManager } from '../../common/subscription-manager';
import { KeyboardControl } from './types';

class ControlsManager {
    private _subscriptionManager: SubscriptionManager<KeyboardControl>;

    constructor(private _elementToListen: HTMLElement) {
        this._subscriptionManager = new SubscriptionManager();
    }

    public startObserve() {
        this._elementToListen.addEventListener('keydown', this._keyListener.bind(this));
        this._elementToListen.addEventListener('keyup', this._keyListener.bind(this));
    }

    public stopObserve() {
        this._elementToListen.removeEventListener('keydown', this._keyListener.bind(this));
        this._elementToListen.removeEventListener('keyup', this._keyListener.bind(this));
    }

    private _keyListener(event: KeyboardEvent) {
        this._subscriptionManager.subscriptions.forEach((s) => {
            if (s.type === event.type && s.key === event.code) {
                s.callback();
            }
        });
    }
}

export { ControlsManager };