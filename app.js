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
import {MainSprite} from './src/actors/sprite';
import {Renderer} from './src/renderer';

var g = new Game("Tanks", new Renderer(800, 600));

var a2 = new Actor("actor2", 70, 10, 20, 20, 'Rectangle', '#00ff00');
a2.setPositionUpdater(mousePositionUpdater);

var a4 = new Square("Square", 200, 200, 32, '#0000ff');
a4.position.speed = 1;
a4.setPositionUpdater(keyboardPositionUpdater);

var square = new Square("Square", 100, 30, 30, '#eee', '#0000ff');

var complexObject = new ComplexActor("actor5", 70, 70, 20, 20, 'Complex', '#00ffff');

complexObject.addComponents([
	new Square("Square", 0, 0, 10, '#0000ff'),
	new Square("Square", 10, 10, 10, '#ff0000') 
]);

var text = new Text("fps", "0", 760, 25, "16px Arial", "black");
text.setTextUpdater(fpsTextUpdater);

var sprite = new MainSprite(200,200,32,32);

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
	[2,2,2,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2],
	[2,2,5,5,5,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
])

g.setScene(s);
g.start();