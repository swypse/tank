'use strict';

import {Scene} from './scene'
import {Loop} from './loop'

export class Game {
	constructor(name, renderer) {
		this.name = name;
		this.renderer = renderer;
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
		this.renderer.render(this.scene);
	}
}