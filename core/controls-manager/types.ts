export enum KeyboardKeyCode {
    W = 'KeyW', D = 'KeyD', S = 'KeyS', A = 'KeyA'
}

export type EventType = 'keyup' | 'keydown';

export interface ControlsManagerSubscription {
    id: string;
    type: EventType,
    key: KeyboardKeyCode,
    callback: Function,
}