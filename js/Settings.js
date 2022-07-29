

window.Settings = {};

let s = window.Settings;

//block size
s.blockSize = 10;
s.chunkSize = 128;
s.mapSize = {};
s.mapSize.x = 20;
s.mapSize.y = 20;

s.groundLevel = 450;



//input settings
s.showKey = false;
s.keyBufferLength = 10;

//camera
s.canvasWidth = 1200;
s.canvasHeight = 800;




//keys
s.Moveright = 'ArrowRight';
//s.Moveright = 'KeyD';

s.MoveLeft = "ArrowLeft";

//keys

s.keys = new Map();




//Constants
s.Gravity = {};
s.Gravity.x = 0;
s.Gravity.y = 4;

//rendering
s.ShowBoundingBoxes = true;


//

