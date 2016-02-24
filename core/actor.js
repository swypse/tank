export class Actor {
	constructor(name, x, y, width, height, primitiveType, fillStyle, strokeStyle) {
		this.name = name;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.primitiveType = primitiveType;
		this.fillStyle = fillStyle;
		this.strokeStyle = strokeStyle;
	}
	
	update() {
		// here refresh the actor state
		var x = Math.random() * 12;
		this.x += x * (x > 6 ? 1 : -1);
		var y = Math.random() * 10;
		this.y += y * (y > 5 ? 1 : -1);
	}
}