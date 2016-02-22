export class Layer {
	constructor(name) {
		this.name = name;
		this.actors = [];
	}
	
	addActor(a) {
		this.actors.push(a);
	}
	
	draw() {
		console.log(`draw layer ${this.name}`);
		this.actors.forEach(a => {
			a.draw();
		});
	}
}