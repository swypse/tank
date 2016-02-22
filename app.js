import {Scene} from './core/scene';
import {Layer} from './core/layer';
import {Ui} from './src/layers/ui';
import {Actor} from './core/actor';
import {Context} from './core/context';
import {Game} from './core/game';

var g = new Game("Tanks")

var ui = new Ui("ui");

var a = new Actor("actor", 10, 20, 10, 10, 'line', '#ff0000', 'fill');
ui.addActor(a);

var a2 = new Actor("actor2", 70, 10, 20, 20, 'rectangle', '#00ff00', 'fill');
ui.addActor(a2);

var a3 = new Actor("actor3", 100, 150, 30, 30, 'rectangle', '#0000ff', 'stroke');
ui.addActor(a3);

var a4 = new Actor("actor4", 160, 50, 20, 20, 'ellipse', '#ffff00', 'stroke');
ui.addActor(a4);

var a5 = new Actor("actor5", 70, 70, 20, 20, 'circle', '#00ffff', 'fill');
ui.addActor(a5);

var s = new Scene("scene");
s.addLayer(ui);
g.addScene(s);

/* */
var layer = new Layer("ui");
ui.addActor(new Actor("actor", 0, 0,10,10, 'circle', '#00ffff', 'fill'));
var s2 = new Scene("scene 2");
s2.addLayer(ui);
g.addScene(s2);




g.setScene(1);
g.setContext(new Context(200, 200));
g.start();

exports.game = g;
