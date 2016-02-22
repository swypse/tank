import {Scene} from './core/scene';
import {Layer} from './core/layer';
import {Ui} from './src/layers/ui';
import {Actor} from './core/actor';
import {Context} from './core/context';
import {Game} from './core/game';

var g = new Game("Tanks")

var uiLayer = new Ui("ui");

var a = new Actor("actor", 10, 20);
uiLayer.addActor(a);

var a2 = new Actor("actor2", 70, 10);
uiLayer.addActor(a2);

var a3 = new Actor("actor3", 100, 150);
uiLayer.addActor(a3);

var s = new Scene("scene");
s.addLayer(uiLayer);
g.addScene(s);

/* */
var layer = new Layer("ui");
uiLayer.addActor(new Actor("actor", 0, 0));
var s2 = new Scene("scene 2");
s2.addLayer(uiLayer);
g.addScene(s2);




g.setScene(1);
g.setContext(new Context(200, 200));
g.start();

exports.game = g;