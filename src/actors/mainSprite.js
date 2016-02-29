import {Actor} from '../actor';
import {DefaultFrameResolver} from '../frameResolver/defaultFrameResolver';

export class MainSprite extends Actor {
	constructor(name, x, y, frames, width, height) {
		super(name, x, y, width || 32, height || 32, "MainSprite");
		var img = new Image();
		img.src = "assets/main.png";
		this.img = img;

		this.frameIndex = 0;
		this.frameResolver = new DefaultFrameResolver();
		frames.forEach(f => {
			f.direction = f.direction || "00";
			f.duration = f.duration || 15; 
			f.width = f.width || 16; 
			f.height = f.height || 16; 
		});
		
		this.frames = frames;
		
		// list of frames for direction, a part of entire frames list
		// computed once when first time this direction is selected
		this.preparedFrames = [];
		
		this.frameCounter = 0;
		
		this.previousDirection = "00";
	}

	setFrameResolver(fr) {
		this.frameResolver = fr;
	}
}