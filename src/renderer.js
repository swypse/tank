export class Renderer {
	constructor(w, h) {
		var canvas = document.createElement('canvas');
		this.width = canvas.width = w;
		this.height = canvas.height = h;
		document.body.appendChild(canvas);
		this.ctx = canvas.getContext('2d');
		this.ctx.mozImageSmoothingEnabled = false;
		this.ctx.imageSmoothingEnabled = false;
	}

	render(scene) {
		this.ctx.clearRect(0, 0, this.width, this.height);

		scene.bg.forEach(actor => {
			this.drawActor(actor);
		});

		scene.touched = true;
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
		if (true && actor.primitiveType != "Text" && this.controls.keyboard.fire) {
			this.ctx.fillStyle = "black";
			this.ctx.font = "10px Arial";
			this.ctx.fillText(`(${actor.position.x}, ${actor.position.y})`, actor.position.x, actor.position.y);
		}
	}

	MainSpriteDrawer(actor, drawingContext) {
		var frame = actor.frameResolver.resolve(actor, this.controls);
		if (!frame) {
			// иногда фрейм пут, не знаю еще, почему.
			// пока предыдущий показываю.
			frame = actor.preparedFrames[actor.previousDirection][0];
			if (!frame) return;
		}
		this.ctx.drawImage(actor.img, frame.x, frame.y, frame.width,
			frame.height, actor.position.x, actor.position.y, actor.width, actor.height);
	}

	BgTileDrawer(actor, drawingContext) {
		this.ctx.rect(actor.position.x, actor.position.y, actor.width, actor.height);
	}

	ComplexDrawer(actor, drawingContext) {
		drawingContext.x = actor.position.x;
		drawingContext.y = actor.position.y;
		actor.components.forEach((a, i) => {
			this.drawActor(a, drawingContext);
		});
	}

	RectangleDrawer(actor, drawingContext) {
		var x = drawingContext.x + actor.position.x,
			y = drawingContext.y + actor.position.y;
		this.ctx.rect(x, y, actor.width, actor.height);
	}

	TextDrawer(actor) {
		this.ctx.font = actor.font;
		this.ctx.fillText(actor.text, actor.position.x, actor.position.y);
	}

	LineDrawer(actor) {
		this.ctx.moveTo(actor.x1, actor.y1);
		this.ctx.lineTo(actor.x2, actor.y2);
		this.ctx.stroke();
	}

	CircleDrawer(actor) {
		var centerX = actor.position.x + actor.width / 2;
		var centerY = actor.position.y + actor.height / 2;
		this.ctx.arc(centerX, centerY, actor.width, 0, 2 * Math.PI);
	}

	EllipseDrawer(actor) {
		var halfWidth = actor.width / 2,
			halfHeight = actor.height / 2,
			centerX = actor.position.x + halfWidth,
			centerY = actor.position.y + halfHeight;

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