export class Context {
	constructor(width, height) {
		var canvas = document.createElement('canvas');
		if (!canvas.getContext)
			throw 'Your browser does not support canvas element.';

		this.width = canvas.width = width;
		this.height = canvas.height = height;

		document.body.appendChild(canvas);

		this.context = canvas.getContext('2d');
	}

	rectangle(x, y, width, height, fillStyle) {
		this.context.fillStyle = fillStyle;
		this.context.fillRect(x, y, width, height);
	}

	outline(x, y, width, height, strokeStyle) {
		this.context.strokeStyle = strokeStyle;
		this.context.rect(x, y, width, height);
		this.context.stroke();
	}
}