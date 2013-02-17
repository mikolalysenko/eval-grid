var initGrid = require("../index.js");

console.log(initGrid([10], function(x) { return x[0]; }));

console.log(initGrid([4,4], function(x) { return x[0]+x[1]; }));

console.log(initGrid([3,3,3], function(x) { return x[0]+x[1]+x[2]; }));

console.log(initGrid([2,2,2,2], function(x) { return x[0]+x[1]+x[2]+x[3]; }));

