var activeConfig = 1;
var totalConfigs = 1;

var nav = 0;
var numHor;
var numVert;
var from = new Point(0,0);
var to;
var count;
var thickness = 40;
var white = '#fff';
var black = '#000';
var pink = '#EB005A';
var blue = '#009dec';
var yellow = '#FFFF00';
var color = pink;
generate();

function generate(){
    if (activeConfig==1){
        thickness = 7;
        numHor = 40;
        numVert = 25;
        to = (40, 28);
    }
    else if (activeConfig==2){
        thickness = 1;
        numHor = 10;
        numVert = 10;
        to = (0, 3000);
        color = blue;
    }
    else if (activeConfig==3){
        thickness = 35;
        numHor = 20;
        numVert = 10;
        to = (75, 75);
        color = blue;
    }
    else if (activeConfig==4){
        thickness = 1;
        numHor = 20;
        numVert = 10;
        to = (20, 600);
        color = pink;
    }
    else if (activeConfig==5){
        thickness = Math.floor((Math.random() * 30) + 1)
        numHor = Math.floor((Math.random() * 10) + 10);
        numVert = Math.floor((Math.random() * 12) + 5);
        var x = Math.floor((Math.random() * 80) + 20);
        var y = Math.floor((Math.random() * 40) + 20);
        to = (x, y);
        color = blue;
    }

    // if (activeConfig==1){
    //     numHor = 20;
    //     numVert = 10;
    //     to = [20, 20];
    //     color = pink;

    // }
    //unused states
    // else if (activeConfig==3){
    //     numHor = 50;
    //     numVert = 4;
    //     to = [400, 0];
    // }


    count = numHor * numVert;
    var line = new Path.Line(from, to);

    line.style = {strokeColor : white, strokeWidth : thickness, strokeCap : 'square'};
    var symbol = new Symbol(line);
    for (var i = 0; i< numHor; i++){
        for (var j = 0; j< numVert; j++){
           var instance = symbol.place();
             instance.position.x = ((view.size.width-nav)/numHor + 1) * i   +nav;
             instance.position.y = (view.size.height/numVert +1) * j ;
        }
    }
}

function onMouseMove(event){
    for (var i = 0; i < count; i++) {
        var item = project.activeLayer.children[i];
        var vector = event.point - item.position;
        var prevVector = event.lastPoint - item.position;
        item.rotate(vector.angle-prevVector.angle, item.position);
    }
}

//kinda cool but not what I want
// function onResize(){
//     for (var i = 0; i < count; i++) {
//         var item = project.activeLayer.children[i];
//         item.position.y = view.size.width/numVert * i/numHor + 30
//     }
// }

function onMouseDown(event) {
    activeConfig++;
    if (activeConfig>totalConfigs){
        activeConfig = 1;
    }
    project.activeLayer.removeChildren();
    generate();
}

function onResize(event){
   project.activeLayer.removeChildren();
   generate();
}