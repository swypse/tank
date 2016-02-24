export class Renderer {
	constructor(w, h) {
		var canvas = document.createElement('canvas');
		this.width = canvas.width = w;
		this.height = canvas.height = h;
		document.body.appendChild(canvas);
		this.ctx = canvas.getContext('2d');
	}

	render(scene) {
		this.ctx.clearRect(0, 0, this.width, this.height);
		scene.obj.forEach(actor => {
			this.drawActor(actor);
		});
	}

	drawActor(actor, drawingContext) {
		if (!drawingContext) {
			drawingContext = {
				width: this.width,
				height: this.height,
				x: 0,
				y: 0,
				// fillColor
				// strokeColor
				// font ...
			};
		}
		this.ctx.beginPath();
		this.setDrawingStyle(actor);
		this[`${actor.primitiveType}Drawer`](actor, drawingContext);
		this.ctx.closePath();
		this.ctx.fill();
		this.ctx.stroke();
	}

	ComplexDrawer(actor, drawingContext) {
		drawingContext.x = actor.coordinates.x;
		drawingContext.y = actor.coordinates.y;
		actor.components.forEach((a, i) => {
			this.drawActor(a, drawingContext);
		});
	}

	RectangleDrawer(actor, drawingContext) {
		var x = drawingContext.x + actor.coordinates.x,
			y = drawingContext.y + actor.coordinates.y;
		this.ctx.rect(x, y, actor.width, actor.height);
	}

	TextDrawer(actor) {
		this.ctx.font = actor.font;
		this.ctx.fillText(actor.text, actor.coordinates.x, actor.coordinates.y);
	}

	LineDrawer(actor) {
		this.ctx.moveTo(actor.x1, actor.y1);
		this.ctx.lineTo(actor.x2, actor.y2);
		this.ctx.stroke();
	}

	CircleDrawer(actor) {
		var centerX = actor.coordinates.x + actor.width / 2;
		var centerY = actor.coordinates.y + actor.height / 2;
		this.ctx.arc(centerX, centerY, actor.width, 0, 2 * Math.PI);
	}

	EllipseDrawer(actor) {
		var halfWidth = actor.width / 2,
			halfHeight = actor.height / 2,
			centerX = actor.coordinates.x + halfWidth,
			centerY = actor.coordinates.y + halfHeight;

		this.ctx.moveTo(centerX, centerY - halfHeight);
		this.ctx.bezierCurveTo(
			centerX + halfWidth, centerY - halfHeight,
			centerX + halfWidth, centerY + halfHeight,
			centerX, centerY + halfHeight
			);
		this.ctx.bezierCurveTo(
			centerX - halfWidth, centerY + halfHeight,
			centerX - halfWidth, centerY - halfHeight,
			centerX, centerY - halfHeight
			);
	}

	setDrawingStyle(actor) {
		this.ctx.fillStyle = actor.fillStyle || "transparent";
		this.ctx.strokeStyle = actor.strokeStyle || "transparent";
	}

}