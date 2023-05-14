export enum KeyboardKeyCode {
    W = 'KeyW', D = 'KeyD', S = 'KeyS', A = 'KeyA'
}

export type KeyboardEventType = 'keyup' | 'keydown';

export interface KeyboardControl {
    type: KeyboardEventType,
    key: KeyboardKeyCode,
    callback: Function,
}