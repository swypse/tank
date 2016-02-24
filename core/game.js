import {Scene} from './scene'
import {Renderer} from './renderer';

var gameInterval = null,
	gameSpeed = 10;

export class Game {
	constructor(name, renderer) {
		this.name = name;
		this.renderer = renderer;
	}
	
	setScene(scene) {
		this.scene = scene;
	}
	
	start() {
		gameInterval = setInterval(() => { 
			this.renderer.render(this.scene);
		 }, gameSpeed);
	}
	
}