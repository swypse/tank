export function randomPositionUpdater() {
	this.position.x += Math.random() > .5 ? 1 : -1;
	this.position.y += Math.random() > .5 ? 1 : -1;
}