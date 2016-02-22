export class Layer {
	constructor(name) {
		this.name = name;
		this.actors = [];
	}
	
	addActor(a) {
		this.actors.push(a);
	}
	
	draw(ctx) {
		ctx.rectangle(0, 0, ctx.width, ctx.height, '#cccccc', 'stroke');
		this.actors.forEach(a => {
			a.draw(ctx);
		});
	}
}