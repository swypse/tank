import {Actor} from '../actor';

export class ComplexActor extends Actor {
	constructor(name, x, y, width, height) {
		super(name, x, y, width, height, "Complex");
		this.components = [];
	}
	
	addComponents(actors) {
		if (!Array.isArray(actors)) actors = [actors];
		this.components = this.components.concat(actors);
	}
}