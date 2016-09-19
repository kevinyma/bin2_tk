var gridSize = 12;
var spacing = 1.2;

function Array2D(x, y) {
    var array2D = new Array(x);
    for(var i = 0; i < array2D.length; i++)
    {
        array2D[i] = new Array(y);
    }
    return array2D;
}

var array = [1];
array[1] = new Point(10, 5);
print array[1];

var raster = new Raster('starry-night');

// Move the raster to the center of the view
raster.position = view.center;

// Create a circle shaped path at {x: 50, y: 50}
// with a radius of 30:
var path = new Path.Circle({
	center: [50, 50],
	radius: 30,
	strokeColor: 'white'
});

function onMouseMove(event) {
	// Set the fill color of the path to the average color
	// of the raster at the position of the mouse:
	path.fillColor = raster.getAverageColor(event.point);
}
