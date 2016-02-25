export class Actor {
	constructor(name, x, y, width, height, primitiveType, fillStyle, strokeStyle) {
		this.name = name;
		this.position = {
			x: x,
			y: y,
			speed: 3,
			moveX: 0, // -1 0 1
			moveY: 0
		};
		this.width = width;
		this.height = height;
		this.primitiveType = primitiveType;
		this.fillStyle = fillStyle;
		this.strokeStyle = strokeStyle;
		this.positionUpdater = () => { };
		
		this.collaidable = true;
	}
	
	update(controls) {
		this.positionUpdater(controls);
		
		// check if can move
		if(this.position.moveX)
			this.position.x += this.position.moveX * this.position.speed;
		if(this.position.moveY)
			this.position.y += this.position.moveY * this.position.speed;
	}
	
	setPositionUpdater(positionUpdater) {
		this.positionUpdater = positionUpdater.bind(this);
	}
}