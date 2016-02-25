import {Scene} from './src/scene';
import {Actor} from './src/actor';
import {Square} from './src/actors/square';
import {Text} from './src/actors/text';
import {ComplexActor} from './src/actors/complexActor';
import {Game} from './src/game';
import {randomPositionUpdater} from './src/positionUpdater/randomPositionUpdater';
import {mousePositionUpdater} from './src/positionUpdater/mousePositionUpdater';
import {keyboardPositionUpdater} from './src/positionUpdater/keyboardPositionUpdater';
import {fpsTextUpdater} from './src/textUpdater/fpsTextUpdater';
import {Renderer} from './src/renderer';


var renderer = new Renderer(800, 600);

var g = new Game("Tanks", renderer);

var a2 = new Actor("actor2", 70, 10, 20, 20, 'Rectangle', '#00ff00');
a2.setPositionUpdater(mousePositionUpdater);

var a4 = new Actor("actor4", 160, 50, 40, 40, 'Circle', 'red');
a4.setPositionUpdater(keyboardPositionUpdater);

var square = new Square("Square", 100, 30, 30, '#eee', '#0000ff');
//square.setPositionUpdater(randomPositionUpdater);

var complexObject = new ComplexActor("actor5", 70, 70, 20, 20, 'Complex', '#00ffff');

complexObject.addComponents([
	new Square("Square", 0, 0, 10, '#0000ff'),
	new Square("Square", 10, 10, 10, '#ff0000') 
]);

var text = new Text("fps", "0", 760, 25, "16px Arial", "black");
text.setTextUpdater(fpsTextUpdater);

var s = new Scene("scene", [a2, square, a4, complexObject, text]);

s.setBgFromMap([
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
	[2,2,3,4,2,1,1,1,1,1,1,1,1,1,1,1,5,2],
	[2,2,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,2,3,4,2,1,1,1,1,1,1,1,1,1,2,1,1,2],
	[2,2,3,4,1,1,1,1,1,1,1,1,1,5,5,1,1,2],
	[2,2,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,2,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,2,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,2,5,5,5,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,2,3,5,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
])

g.setScene(s);
g.start();