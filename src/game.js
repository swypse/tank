'use strict';

import {Scene} from './scene'
import {MouseControl} from './controls/mouseControl'
import {KeyboardControl} from './controls/keyboardControl'
import {Loop} from './loop'
import {CollisionEngine} from './collisionEngine'

export class Game {
	constructor(name, renderer) {
		this.name = name;
		this.renderer = renderer;
		this.loop = new Loop(this.update.bind(this), this.draw.bind(this));
		this.collisionEngine = new CollisionEngine();

		this.controls = {
			mouse: new MouseControl(),
			keyboard: new KeyboardControl(),
			gameInfo: {
				fps: () => parseInt(this.loop.fps)
			},
			game: this
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

	resolveCollision(actor) {
		this.scene.obj.filter(actor2 => actor.name != actor2.name).forEach(actor2 => {
			this.collisionEngine.resolveCollision(actor, actor2);
		});
	}
}