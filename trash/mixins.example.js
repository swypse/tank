import {Actor} from '../actor';
import {mixin} from 'core-decorators';


const canJump = { canJump: true };
const canSwim = (v) => {
	return { canSwim: v };
}

const canMove = (v) => (t) => t.prototype.canMove = v;

const isEnemy = (t) => {
	t.prototype.isEnemy = true;
}

@mixin(canJump) // способ с использованием core-decorators пакета
@mixin(canSwim(false))
@canMove(false) // родной способ
@isEnemy
export class Square extends Actor {
	constructor(name, x, y, size, fillStyle, strokeStyle) {
		super(name, x, y, size, size, "Rectangle", fillStyle, strokeStyle);
	}
}

var a = new Square();
console.log('canJump: ', a.canJump);
console.log('canSwim: ', a.canSwim);
console.log('canMove: ', a.canMove);
console.log('isEnemy: ', a.isEnemy);

/*
function dec(target, prop, descriptor){
    let {initializer} = descriptor;
    delete descriptor.initializer;
    delete descriptor.writable;

    descriptor.get = function(){
        return initializer.call(this);
    };
}
*/