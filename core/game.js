export class Game {
	constructor(name) {
		this.name = name;
		this.scenes = [];
		this.activeScene = 0;
	}
	
	addScene(scene) {
		this.scenes.push(scene);
	}
	
	draw() {
		if (!this.validate()) {
			return false;
		}
		console.log(`draw actor ${this.name}`);
	}
	
	validate() {
		let state = true;
		if (!this.scenes.length) {
			console.error("No scenes in current game");
			state = false;
		}
		if (!this.scenes[this.activeScene]) {
			console.error(`No scenes at index ${this.activeScene}`);
			state = false;
		}
		return state;
	}
	
}