export class Actor {
	constructor(name) {
		this.name = name;
	}
	
	draw() {
		console.log(`draw actor ${this.name}`);
	}
}