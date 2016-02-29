import {Actor} from '../actor';

var types = [
	{
		fillStyle: "red", strokeStyle: ""
	},
	{
		fillStyle: "#333", strokeStyle: ""
	},
	{
		fillStyle: "#444", strokeStyle: ""
	},
	{
		fillStyle: "#222", strokeStyle: ""
	},
	{
		fillStyle: "#234", strokeStyle: ""
	},
	{
		fillStyle: "#282", strokeStyle: ""
	},
];

export class BgTile extends Actor {
	constructor(type, x, y, width, height) {
		super("", x, y, width, height, "BgTile", types[type].fillStyle, types[type].strokeStyle);
		this.bgType = type;
	}
}