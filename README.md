eval-grid
=========
Initializes an n-dimensional array with a specified function.  Useful for plotting and volume visualization.

Installation
============
Via npm:

    npm install eval-grid

Example
=======
Running:

    console.log(require("eval-grid")([3, 3, 3], function(x) {
      return x[0] + x[1] + x[2];
    });
    
Prints:

    [ [ [ 0, 1, 2 ], [ 1, 2, 3 ], [ 2, 3, 4 ] ],
      [ [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ] ],
      [ [ 2, 3, 4 ], [ 3, 4, 5 ], [ 4, 5, 6 ] ] ]
      
`require("eval-grid")(dims, func)`
----------------------------------
This initializes an n-dimensional image, with dimensions `dims` using `func`.

* `dims` are the dimensions of the image to initialize.
* `func` is the function to initialize the grid with.  It takes an array of integer coordinates with length = `dims.length` as input and returns the value to initialize the grid with.

Returns the initialized grid.

Credits
=======
(c) 2013 Mikola Lysenko. BSD License