import {Actor} from '../actor';

export class Square extends Actor {
	constructor(name, x, y, size, fillStyle, strokeStyle) {
		super(name, x, y, size, size, "Rectangle", fillStyle, strokeStyle);
	}
}