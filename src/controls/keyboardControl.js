export class KeyboardControl {
	constructor() {
		this.up = false;
		this.down = false;
		this.left = false;
		this.right = false;
		this.space = false;

		document.addEventListener("keydown", (e) => {
			switch (e.keyCode) {
				case 37:
					this.left = true;
					break;
				case 40:
					this.down = true;
					break;
				case 38:
					this.up = true;
					break;
				case 39:
					this.right = true;
					break;
				case 32:
					this.space = false;
					break;
			}
		});

		document.addEventListener("keyup", (e) => {
			switch (e.keyCode) {
				case 37:
					this.left = false;
					break;
				case 40:
					this.down = false;
					break;
				case 38:
					this.up = false;
					break;
				case 39:
					this.right = false;
					break;
				case 32:
					this.space = false;
					break;
			}
		});
	}
}