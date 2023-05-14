import { deleteElementFromArray } from '../../lib';
import { IdManager } from '../id-manager';
import { Subscription } from './types';

class SubscriptionManager<T> {
    private _idManager: IdManager;
    public subscriptions: Subscription<T>[] = [];

    constructor() {
        this._idManager = new IdManager('sub_');
    }

    public subscribe(data: T) {
        const id = this._idManager.next();
        this.subscriptions.push({ id, ...data });

        return this._unsubscribeFactory(id);
    }

    private _unsubscribeFactory(id: string) {
        return () => deleteElementFromArray((s) => s.id === id, this.subscriptions);
    }
}

export { SubscriptionManager };