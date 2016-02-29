import {MainSprite} from './mainSprite';

export class Player1 extends MainSprite {
	constructor(name, x, y) {
		super(name, x, y, [
			// up
			{
				x: 0, y: 0, width: 16, height: 16,
				duration: 4, direction: "0-1"
			},
			{
				x: 16, y: 0, width: 16, height: 16,
				duration: 4, direction: "0-1"
			},
			
			// down
			{
				x: 64, y: 0, width: 16, height: 16,
				duration: 4, direction: "01"
			},
			{
				x: 80, y: 0, width: 16, height: 16,
				duration: 4, direction: "01"
			},
			
			// left
			{
				x: 32, y: 0, width: 16, height: 16,
				duration: 4, direction: "-10"
			},
			{
				x: 48, y: 0, width: 16, height: 16,
				duration: 4, direction: "-10"
			},
			
			// right
			{
				x: 96, y: 0, width: 16, height: 16,
				duration: 4, direction: "10"
			},
			{
				x: 112, y: 0, width: 16, height: 16,
				duration: 4, direction: "10"
			},
		], 32, 32);
	}
}