'use strict';
import {_} from '../node_modules/underscore/underscore';

export class Scene {
	
	constructor(name, objects) {
		this.name = name;
		this.obj = [];
		if (objects) this.addObj(objects);
	}
	
	addObj(objects) {
		if (!Array.isArray(objects)) objects = [objects];
		this.obj = this.obj.concat(objects);
	}
	
	draw(ctx) {
		console.log("draw scene " + this.name);
		this.obj.forEach(o => {
			o.draw(ctx);
		});
	}
}