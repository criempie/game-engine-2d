import { Entity } from '../../common/entity';
import { SubscriptionManager } from '../../common/subscription-manager';
import { KeyboardControl } from './types';

class ControlsManager {
    private _subscriptionManager: SubscriptionManager<KeyboardControl>;
    private _pressedKeys = new Set<string>();
    private _unpressedKeys = new Set<string>();

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

    public loadEntity(ent: Entity) {
        ent.controls.forEach((c) => {
            this._subscriptionManager.subscribe(c);
        })
    }

    public update() {
        this._subscriptionManager.subscriptions.forEach((s) => {
            if (this._pressedKeys.has(s.key)) {
                s.callback();
            } else if (this._unpressedKeys.has(s.key)) {
                if (s.callbackWhenReverse) s.callbackWhenReverse();
            }
        });

        this._unpressedKeys.clear();
    }

    private _keyListener(event: KeyboardEvent) {
        if (event.type === 'keydown') {
            this._pressedKeys.add(event.code);
        } else if (event.type === 'keyup') {
            this._pressedKeys.delete(event.code);
            this._unpressedKeys.add(event.code);
        }
    }
}

export { ControlsManager };