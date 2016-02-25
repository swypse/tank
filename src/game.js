'use strict';

import {Scene} from './scene'
import {MouseControl} from './controls/mouseControl'
import {KeyboardControl} from './controls/keyboardControl'
import {Loop} from './loop'

export class Game {
	constructor(name, renderer) {
		this.name = name;
		this.renderer = renderer;
		this.loop = new Loop(this.update.bind(this), this.draw.bind(this));

		this.controls = {
			mouse: new MouseControl(),
			keyboard: new KeyboardControl(),
			gameInfo: {
				fps: () => parseInt(this.loop.fps)
			}
		};
		this.renderer.controls = this.controls;
	}

	setScene(scene) {
		this.scene = scene;
	}

	start() {
		this.loop.start();
	}

	stop() {
		this.loop.stop();
	}

	update() {
		this.scene.obj.forEach(actor => {
			actor.update(this.controls);
		});
	}

	draw(t) {
		this.renderer.render(this.scene);
	}
}