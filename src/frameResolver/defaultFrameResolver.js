import {_} from '../../node_modules/underscore/underscore';

export class DefaultFrameResolver {
	resolve(sprite, controls) {
		sprite.frameCounter++;
		var frames = getFramesForDirection(sprite);
		var currentFrame = frames[sprite.frameIndex] || frames[0];
		if (sprite.frameCounter < currentFrame.duration) return frames[sprite.frameIndex];
		sprite.frameIndex += 1;
		if (!frames[sprite.frameIndex]) sprite.frameIndex = 0;
		sprite.frameCounter = 0;
		var f = frames[sprite.frameIndex];
		return f;
	}
}

var getFramesForDirection = (sprite) => {
	// xy: 0-1 | 00 | -1-1 | 11 | …
	var direction = sprite.position.moveX + "" + sprite.position.moveY;
	if (sprite.preparedFrames[direction]) {
		sprite.previousDirection = direction;
		return sprite.preparedFrames[direction];
	}

	if (!sprite.frames.length) throw new Error("Sprite must have at least one frame defined");
	var frames = _.where(sprite.frames, { direction: direction });
	if (!frames.length) {
		frames = _.where(sprite.frames, { direction: "00" });
		if (!frames.length) {
			// if frame for direction: "00" is not defined, set the first frame as default frame for actor
			//frames = [sprite.frames[0]];
			return [
				sprite.preparedFrames[sprite.previousDirection]
					? sprite.preparedFrames[sprite.previousDirection][0]
					: sprite.frames[0]
			];
		}
	}
	sprite.previousDirection = direction;
	sprite.preparedFrames[direction] = frames;
	return frames;
}