export function randomCoordinatesUpdater() {
	this.coordinates.x += Math.random() > .5 ? 1 : -1;
	this.coordinates.y += Math.random() > .5 ? 1 : -1;
}