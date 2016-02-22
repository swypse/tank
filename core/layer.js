export class Layer {
	constructor(name) {
		this.name = name;
		this.actors = [];
	}
	
	addActor(a) {
		this.actors.push(a);
	}
	
	draw(ctx) {
		ctx.outline(0, 0, ctx.width, ctx.height, '#cccccc');
		this.actors.forEach(a => {
			a.draw(ctx);
		});
	}
}