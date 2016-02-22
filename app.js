import {Scene} from './core/scene';
import {Ui} from './src/layers/ui';
import {Actor} from './core/actor';


var ui = new Ui("ui layer");

var a = new Actor("actorname");
ui.addActor(a);

s.addLayer(ui);

var s = new Scene("scenename");

s.draw();