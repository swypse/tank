'use strict';

export class Scene {
	constructor(name) {
		this.name = name;
		this.layers = [];
	}
	
	addLayer(l) {
		this.layers.push(l);
	}
	
	draw() {
		console.log("Render scene: " + this.name);
		this.layers.forEach(l => {
			l.draw();
		});
	}
}