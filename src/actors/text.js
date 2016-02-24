import {Actor} from '../actor';
import {mixin} from 'core-decorators';


export class Text extends Actor {
	constructor(name, text, x, y, font, fillStyle, strokeStyle) {
		super(name, x, y, 0, 0, "Text", fillStyle, strokeStyle);
		this.text = text;
		this.font = font;
	}
	
	update(controls) {
		super.update(controls);
		this.textUpdater(controls);
	}
	
	setTextUpdater(textUpdater) {
		this.textUpdater = textUpdater.bind(this);
	}
}