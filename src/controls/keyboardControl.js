import {_} from '../../node_modules/underscore/underscore';

export class KeyboardControl {
	constructor(commands) {
		if (!commands) {
			commands = [
				{ command: "left",  code: 37 },
				{ command: "right", code: 39 },
				{ command: "up",    code: 38 },
				{ command: "down",  code: 40 },
				{ command: "fire",  code: 32 }
			];
		}

		document.addEventListener("keydown", (e) => {
			var x = _.findWhere(commands, { code: e.keyCode });
			if (x) {
				this[x.command] = true;
			}
		});

		document.addEventListener("keyup", (e) => {
			var x = _.findWhere(commands, { code: e.keyCode });
			if (x) {
				this[x.command] = false;
			}
		});
	}
}