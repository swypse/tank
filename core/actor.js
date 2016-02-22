export class Actor {
	constructor(name, x, y) {
		this.name = name;
		this.x = x;
		this.y = y;
	}
	
	draw(ctx) {
		ctx.rectangle(this.x, this.y, 10, 10, '#ff0000');
	}
}