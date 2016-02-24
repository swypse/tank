import {Scene} from './core/scene';
import {Actor} from './core/actor';
import {Square} from './core/actors/square';
import {ComplexActor} from './core/actors/complexActor';
import {Game} from './core/game';
import {Renderer} from './core/renderer';


var renderer = new Renderer(800, 600);

var g = new Game("Tanks", renderer);

var a = new Actor("actor", 10, 20, 10, 10, 'Line', '', '#ff0000');
var a2 = new Actor("actor2", 70, 10, 20, 20, 'Rectangle', '#00ff00');
var a4 = new Actor("actor4", 160, 50, 50, 70, 'Ellipse', '#ffff00');

var square = new Square("Square", 100, 30, 30, '#eee', '#0000ff');

var complexObject = new ComplexActor("actor5", 70, 70, 20, 20, 'Complex', '#00ffff');

complexObject.addComponents([
	new Square("Square", 0, 0, 10, '#0000ff'),
	new Square("Square", 10, 10, 10, '#ff0000')
]);

var s = new Scene("scene", [a, a2, square, a4, complexObject]);

g.setScene(s);
g.start();

