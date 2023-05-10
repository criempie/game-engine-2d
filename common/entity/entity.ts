import { IUpdateable } from '../types';
import { Vector } from '../vector';
import { StaticEntity } from './static-entity';

abstract class Entity extends StaticEntity implements IUpdateable {
    constructor(position: Vector, size: Vector) {
        super(position, size);
    }

    abstract update(): void;
}

export { Entity };