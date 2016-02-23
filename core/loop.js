export class Loop {
	constructor(updateCallback, renderCallback) {
		this.interval = 1000;
		this.updateCallback = updateCallback;
		this.renderCallback = renderCallback;
	}

	start() {
		this.timerId = setInterval(() => {
			this.updateCallback();
			this.renderCallback();
		}, this.interval);
	}

	stop() {
		clearInterval(this.timerId);
	}
}