export function keyboardCoordinatesUpdater(controls) {
	if (controls.keyboard.right)
		this.coordinates.x += 1;
	if (controls.keyboard.left)
		this.coordinates.x -= 1;
	if (controls.keyboard.up)
		this.coordinates.y -= 1;
	if (controls.keyboard.down)
		this.coordinates.y += 1;
}