import {Scene} from './core/scene';
import {Actor} from './core/actor';
import {Context} from './core/context';
import {Game} from './core/game';

var g = new Game("Tanks")

var a = new Actor("actor", 10, 20, 10, 10, 'line', '#ff0000', 'fill');
var a2 = new Actor("actor2", 70, 10, 20, 20, 'rectangle', '#00ff00', 'fill');
var a3 = new Actor("actor3", 100, 150, 30, 30, 'rectangle', '#0000ff', 'stroke');
var a4 = new Actor("actor4", 160, 50, 20, 20, 'ellipse', '#ffff00', 'stroke');
var a5 = new Actor("actor5", 70, 70, 20, 20, 'circle', '#00ffff', 'fill');

var s = new Scene("scene", [a, a2, a3, a4, a5]);

g.setContext(new Context(200, 200));
g.setScene(s);
g.start();

