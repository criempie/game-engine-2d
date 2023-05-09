export interface IUpdateable {
    update(): void;
}

export interface IRenderable {
    render(ctx: CanvasRenderingContext2D): void;
}