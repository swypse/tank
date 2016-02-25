import {Actor} from '../actor';

export class MainSprite extends Actor {
	constructor(type, x, y, width, height) {
		super("", x, y, width, height, "MainSprite");
		this.src = "/assets/main.png";
		
	}
}