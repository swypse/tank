import {MainSprite} from './mainSprite';

export class Player2 extends MainSprite {
	constructor(name, x, y) {
		super(name, x, y, [
			// up
			{
				x: 128, y: 0, width: 16, height: 16,
				duration: 4, direction: "0-1"
			},
			{
				x: 144, y: 0, width: 16, height: 16,
				duration: 4, direction: "0-1"
			},
			
			// down
			{
				x: 192, y: 0, width: 16, height: 16,
				duration: 4, direction: "01"
			},
			{
				x: 208, y: 0, width: 16, height: 16,
				duration: 4, direction: "01"
			},
			
			// left
			{
				x: 160, y: 0, width: 16, height: 16,
				duration: 4, direction: "-10"
			},
			{
				x: 176, y: 0, width: 16, height: 16,
				duration: 4, direction: "-10"
			},
			
			// right
			{
				x: 224, y: 0, width: 16, height: 16,
				duration: 4, direction: "10"
			},
			{
				x: 240, y: 0, width: 16, height: 16,
				duration: 4, direction: "10"
			},
		], 32, 32);
	}
}