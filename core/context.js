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

	line(x1, y1, x2, y2, color) {
		this.context.beginPath();

		this.context.strokeStyle = color;
		this.context.moveTo(x1, y1);
		this.context.lineTo(x2, y2);
		this.context.stroke();

		this.context.closePath();
	}

	rectangle(x, y, width, height, color, drawingStyle) {
		this.context.beginPath();

		switch (drawingStyle) {
			case 'fill':
				this.context.fillStyle = color;
				this.context.fillRect(x, y, width, height);
				break;

			case 'stroke':
				this.context.strokeStyle = color;
				this.context.rect(x, y, width, height);
				this.context.stroke();
				break;

			default:
				throw `Unknown drawing style '${drawingStyle}'`;
		}

		this.context.closePath();
	}

	ellipse(centerX, centerY, width, height, color, drawingStyle) {
		var halfWidth = width / 2;
		var halfHeight = height / 2;

		this.context.beginPath();

		this.context.moveTo(centerX, centerY - halfHeight);
		this.context.bezierCurveTo(
    		centerX + halfWidth, centerY - halfHeight,
    		centerX + halfWidth, centerY + halfHeight,
    		centerX, centerY + halfHeight
    	);
    	this.context.bezierCurveTo(
    		centerX - halfWidth, centerY + halfHeight,
    		centerX - halfWidth, centerY - halfHeight,
    		centerX, centerY - halfHeight
    	);

    	switch (drawingStyle) {
			case 'fill':
				this.context.fillStyle = color;
				this.context.fill();
				break;

			case 'stroke':
				this.context.strokeStyle = color;
				this.context.stroke();
				break;

			default:
				throw `Unknown drawing style '${drawingStyle}'`;
		}

		this.context.closePath();
	}

	circle(centerX, centerY, width, color, drawingStyle) {
		this.context.beginPath();

		this.context.arc(centerX, centerY, width, 0, 2 * Math.PI);

		switch (drawingStyle) {
			case 'fill':
				this.context.fillStyle = color;
				this.context.fill();
				break;

			case 'stroke':
				this.context.strokeStyle = color;
				this.context.stroke();
				break;

			default:
				throw `Unknown drawing style '${drawingStyle}'`;
		}

		this.context.closePath();
	}
}