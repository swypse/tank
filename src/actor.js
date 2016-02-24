export class Actor {
	constructor(name, x, y, width, height, primitiveType, fillStyle, strokeStyle) {
		this.name = name;
		this.coordinates = {
			x: x,
			y: y
		};
		this.width = width;
		this.height = height;
		this.primitiveType = primitiveType;
		this.fillStyle = fillStyle;
		this.strokeStyle = strokeStyle;
		this.coordinatesUpdater = () => { };
	}
	
	update(controls) {
		this.coordinatesUpdater(controls);
	}
	
	setCoordinatesUpdater(coordinatesUpdater) {
		this.coordinatesUpdater = coordinatesUpdater.bind(this);
	}
}