export class Loop {
	constructor(updateCallback, renderCallback) {
		this.simulationTimestep = 1000 / 60;
		this.frameDelta = 0;
		this.lastFrameTimeMs = 0;
		this.fps = 60;
		this.lastFpsUpdate = 0;
		this.framesThisSecond = 0;
		this.numUpdateSteps = 0;
		this.minFrameDelay = 0;
		this.running = false;
		this.started = false;
		this.panic = false;
		this.rafHandle = null;

		this.updateCallback = updateCallback;
		this.renderCallback = renderCallback;
	}

	animate(timestamp) {
		if (timestamp < this.lastFrameTimeMs + this.minFrameDelay) {
			this.rafHandle = requestAnimationFrame(() => { this.animate(); });
			return;
		}

		this.frameDelta += timestamp - this.lastFrameTimeMs;
		this.lastFrameTimeMs = timestamp;

		if (timestamp > this.lastFpsUpdate + 1000) {
			this.fps = 0.25 * this.framesThisSecond + 0.75 * this.fps;
			this.lastFpsUpdate = timestamp;
			this.framesThisSecond = 0;
		}
		this.framesThisSecond++;

		this.numUpdateSteps = 0;
		while (this.frameDelta >= this.simulationTimestep) {
			this.updateCallback(this.simulationTimestep);
			this.frameDelta -= this.simulationTimestep;

			if (++this.numUpdateSteps >= 240) {
				this.panic = true;
				break;
			}
		}

		this.renderCallback(this.frameDelta / this.simulationTimestep);
		this.panic = false;

		this.rafHandle = requestAnimationFrame(() => { this.animate(); });
	}

	start() {
		if (!this.started) {
			this.started = true;
			this.rafHandle = requestAnimationFrame(timestamp => {
				this.renderCallback(1);

				this.running = true;
				this.lastFrameTimeMs = timestamp;
				this.lastFpsUpdate = timestamp;
				this.framesThisSecond = 0;

				this.rafHandle = requestAnimationFrame(() => { this.animate(); });
			});
		}
	}

	stop() {
		this.running = false;
		this.started = false;
		cancelAnimationFrame(this.rafHandle);
	}
}