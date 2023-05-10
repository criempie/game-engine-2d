import { IUpdateable } from '../types';
import { Vector } from '../vector';
import { StaticEntity } from './static-entity';

abstract class Entity extends StaticEntity implements IUpdateable {
    protected _speed: number = 0;
    protected _direction: Vector = Vector.create(0, 0);

    constructor(position: Vector, size: Vector) {
        super(position, size);
    }

    abstract update(): void;
}

export { Entity };