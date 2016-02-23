import {Scene} from './scene'

var gameInterval = null,
	gameSpeed = 1000;

export class Game {
	constructor(name) {
		this.name = name;
	}
	
	setScene(scene) {
		this.scene = scene;
	}
	
	setContext(ctx) {
		this.ctx = ctx;
	}
	
	start() {
		gameInterval = setInterval(() => { this.draw() }, gameSpeed);
	}
	
	draw() {
		this.scene.draw(this.ctx);
	}
	
}