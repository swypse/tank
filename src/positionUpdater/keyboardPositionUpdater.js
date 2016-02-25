export function keyboardPositionUpdater(controls) {
	this.position.moveX = controls.keyboard["right"] ? 1 : 0;
	this.position.moveX = controls.keyboard["left"] ? -1 : this.position.moveX;
	
	this.position.moveY = controls.keyboard["down"] ? 1 : 0;
	this.position.moveY = controls.keyboard["up"] ? -1 : this.position.moveY;

	controls.game.resolveCollision(this);
		
	// check if can move
	if(this.position.moveX)
		this.position.x += this.position.moveX * this.position.speedX;
	if(this.position.moveY)
		this.position.y += this.position.moveY * this.position.speedY;
}