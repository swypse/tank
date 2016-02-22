import {Scene} from './scene'

var gameInterval = null,
	gameSpeed = 1000;

export class Game {
	constructor(name) {
		this.name = name;
		this.scenes = [];
		this.activeSceneIndex = 0;
	}
	
	addScene(scene) {
		if (!(scene instanceof Scene)) {
			throw new Error(`scene is not instance of Scene`);
		}
		this.scenes.push(scene);
	}
	
	setScene(sceneIndex) {
		this.activeSceneIndex = parseInt(sceneIndex, 10);
	}
	
	setContext(ctx) {
		this.ctx = ctx;
	}
	
	
	start() {
		if (!this.validate()) {
			return false;
		}
		gameInterval = setInterval(() => { this.draw() }, gameSpeed);
	}
	
	draw() {
		console.log(`draw gem, scene ${this.activeSceneIndex}`);
		this.scenes[this.activeSceneIndex].draw(this.ctx);
	}
	
	validate() {
		let state = true;
		if (!this.ctx) {
			console.error("No context defined");
			state = false;
		}
		if (!this.scenes.length) {
			console.error("No scenes in current game");
			state = false;
		}
		if (!this.scenes[this.activeSceneIndex]) {
			console.error(`No scenes at index ${this.activeSceneIndex}`);
			state = false;
		}
		return state;
	}
	
}