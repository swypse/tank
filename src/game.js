'use strict';

/*
import {Scene} from './scene'
import {Renderer} from './renderer';
var gameInterval = null,
	gameSpeed = 10;

export class Game {
	constructor(name, renderer) {
		this.name = name;
		this.renderer = renderer;
	}
	
	setScene(scene) {
		this.scene = scene;
	}
	
	start() {
		gameInterval = setInterval(() => { 
			this.renderer.render(this.scene);
		 }, gameSpeed);
	}
*/
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