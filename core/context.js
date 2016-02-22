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
		var oldFillStyle = this.context.fillStyle;
		this.context.fillStyle = fillStyle;
		this.context.fillRect(x, y, width, height);
		this.context.fillStyle = oldFillStyle;
	}

	outline(x, y, width, height, strokeStyle) {
		var oldStrokeStyle = this.context.strokeStyle;
		this.context.strokeStyle = strokeStyle;
		this.context.rect(x, y, width, height);
		this.context.stroke();
		this.context.strokeStyle = oldStrokeStyle;
	}
}