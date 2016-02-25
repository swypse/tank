'use strict';

import {_} from '../node_modules/underscore/underscore';
import {BgTile} from './actors/bgTile';

export class Scene {
	
	constructor(name, objects) {
		this.name = name;
		this.bg = [];
		this.obj = [];
		if (objects) this.addObj(objects);
		
	}
	
	addObj(objects) {
		if (!Array.isArray(objects)) objects = [objects];
		this.obj = this.obj.concat(objects);
	}
	
	setBg(objects) {
		if (!Array.isArray(objects)) objects = [objects];
		this.bg = this.bg.concat(objects);
	}
	
	setBgFromMap(map) {
		var bgs = [],
			size = 32;
		map.forEach((row, y) => {
			row.forEach((cellType, x) => {
				bgs.push(new BgTile(cellType, x * size, y * size, size, size));
			});
		});
		this.setBg(bgs);
	}
	
	draw(ctx) {
		this.bg.forEach(o => {
			o.draw(ctx);
		});
		this.obj.forEach(o => {
			o.draw(ctx);
		});
	}
}