import {Scene} from './src/scene';
import {Actor} from './src/actor';
import {Square} from './src/actors/square';
import {Text} from './src/actors/text';
import {ComplexActor} from './src/actors/complexActor';
import {Game} from './src/game';
import {randomCoordinatesUpdater} from './src/coordinatesUpdater/randomCoordinatesUpdater';
import {mouseCoordinatesUpdater} from './src/coordinatesUpdater/mouseCoordinatesUpdater';
import {keyboardCoordinatesUpdater} from './src/coordinatesUpdater/keyboardCoordinatesUpdater';
import {fpsTextUpdater} from './src/textUpdater/fpsTextUpdater';
import {Renderer} from './src/renderer';


var renderer = new Renderer(800, 600);

var g = new Game("Tanks", renderer);

var a2 = new Actor("actor2", 70, 10, 20, 20, 'Rectangle', '#00ff00');
a2.setCoordinatesUpdater(mouseCoordinatesUpdater);

var a4 = new Actor("actor4", 160, 50, 50, 70, 'Circle', '#ffff00');
a4.setCoordinatesUpdater(keyboardCoordinatesUpdater);

var square = new Square("Square", 100, 30, 30, '#eee', '#0000ff');
square.setCoordinatesUpdater(randomCoordinatesUpdater);

var complexObject = new ComplexActor("actor5", 70, 70, 20, 20, 'Complex', '#00ffff');

complexObject.addComponents([
	new Square("Square", 0, 0, 10, '#0000ff'),
	new Square("Square", 10, 10, 10, '#ff0000')
]);

var text = new Text("fps", "0", 15, 15, "20px Arial", "black");
text.setTextUpdater(fpsTextUpdater);

var s = new Scene("scene", [a2, square, a4, complexObject, text]);

g.setScene(s);
g.start();