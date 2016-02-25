import {Actor} from '../actor';

var types = [
	{
		fillStyle: "red", strokeStyle: ""
	},
	{
		fillStyle: "#f6f6f6", strokeStyle: ""
	},
	{
		fillStyle: "#ddd", strokeStyle: ""
	},
	{
		fillStyle: "#eee", strokeStyle: ""
	},
	{
		fillStyle: "#eee", strokeStyle: ""
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