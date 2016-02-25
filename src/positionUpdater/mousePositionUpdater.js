export function mousePositionUpdater(controls) {
	var speedX = controls.mouse.x - this.position.x;
	this.position.speedX = Math.abs(speedX);
	this.position.moveX = Math.sign(speedX);

	var speedY = controls.mouse.y - this.position.y;
	this.position.speedY = Math.abs(speedY);
	this.position.moveY = Math.sign(speedY);

	controls.game.resolveCollision(this);

	// check if can move
	if(this.position.moveX)
		this.position.x += this.position.moveX * this.position.speedX;
	if(this.position.moveY)
		this.position.y += this.position.moveY * this.position.speedY;
}