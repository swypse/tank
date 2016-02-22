'use strict';

export class Scene {
	constructor(name) {
		this.name = name;
		this.layers = [];
	}
	
	addLayer(l) {
		this.layers.push(l);
	}
	
	draw(ctx) {
		this.layers.forEach(l => {
			l.draw(ctx);
		});
	}
}