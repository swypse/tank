export class Actor {
	constructor(name, x, y, width, height, primitiveType, color, drawingType) {
		this.name = name;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.primitiveType = primitiveType;
		this.color = color;
		this.drawingType = drawingType;
	}
	
	draw(ctx) {
		switch (this.primitiveType)
		{
			case 'rectangle':
				ctx.rectangle(this.x, this.y, this.width, this.height, this.color, this.drawingType);
				return;

			case 'line':
				ctx.line(this.x, this.y, this.x + this.width, this.y + this.height, this.color);
				return;

			case 'ellipse':
				ctx.ellipse(this.x + this.width / 2, this.y + this.height / 2, this.width, this.height, this.color, this.drawingType);
				return;

			case 'circle':
				ctx.circle(this.x + this.width / 2, this.y + this.height / 2, this.width, this.color, this.drawingType);
				return;

			default:
				throw `Unknown primitive type '${this.primitiveType}'`;
		}
	}
}