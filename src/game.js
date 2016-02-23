'use strict';

import {Scene} from './scene'
import {Loop} from './loop'

export class Game {
	constructor(name) {
		this.name = name;
		this.loop = new Loop(() => { this.update(); }, () => { this.draw(); });
	}
	
	setScene(scene) {
		this.scene = scene;
	}
	
	setContext(ctx) {
		this.ctx = ctx;
	}
	
	start() {
		this.loop.start();
	}

	stop() {
		this.loop.stop();
	}

	update() {
	}
	
	draw() {
		this.scene.draw(this.ctx);
	}
}