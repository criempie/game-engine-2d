export interface IUpdateable {
    update(): void;
}

export interface IRenderable {
    render(ctx: CanvasRenderingContext2D): void;
}

export interface EngineConfig {
    ups: number;
    canvas: {
        width: number;
        height: number;
    }
}

export interface GameConfig {
    engine: EngineConfig;
}