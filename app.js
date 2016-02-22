import {Scene} from './core/scene';
import {Ui} from './src/layers/ui';
import {Actor} from './core/actor';
import {Context} from './core/context';


var ui = new Ui("ui layer");

var a = new Actor("actor", 10, 20);
ui.addActor(a);

var a2 = new Actor("actor2", 70, 10);
ui.addActor(a2);

var a3 = new Actor("actor3", 100, 150);
ui.addActor(a3);

var s = new Scene("scenename");
s.addLayer(ui);

var ctx = new Context(200, 200);
s.draw(ctx);