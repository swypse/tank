'use strict';

export class CollisionEngine {
	resolveCollision(actor1, actor2) {
		if (actor1.position.moveX) {
			var newx = actor1.position.x + actor1.position.moveX * actor1.position.speedX;
			var willCollide = newx < actor2.position.x + actor2.width
				&& newx + actor1.width > actor2.position.x
				&& actor1.position.y < actor2.position.y + actor2.height
				&& actor1.position.y + actor1.height > actor2.position.y;

			if (willCollide)
				actor1.position.moveX = 0;
		}

		if (actor1.position.moveY) {
			var newy = actor1.position.y + actor1.position.moveY * actor1.position.speedY;
			var willCollide = newy < actor2.position.y + actor2.height
				&& newy + actor1.height > actor2.position.y
				&& actor1.position.x < actor2.position.x + actor2.width
				&& actor1.position.x + actor1.width > actor2.position.x;

			if (willCollide)
				actor1.position.moveY = 0;
		}
	}
}