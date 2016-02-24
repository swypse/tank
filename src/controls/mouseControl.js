export class MouseControl {
	constructor() {
		this.x = 0;
		this.y = 0;
		
		document.querySelectorAll("canvas")[0].addEventListener("mousemove", (e) => {
			this.x = e.layerX;
			this.y = e.layerY;
		});
	}
}