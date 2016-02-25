export function keyboardPositionUpdater(controls) {
	this.position.moveX = controls.keyboard["right"] ? 1 : 0;
	this.position.moveX = controls.keyboard["left"] ? -1 : this.position.moveX;
	
	this.position.moveY = controls.keyboard["down"] ? 1 : 0;
	this.position.moveY = controls.keyboard["up"] ? -1 : this.position.moveY;
}