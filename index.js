"use strict";

function grid1(nx, func) {
  var result = new Array(nx);
  var x = [0];
  for(var i=0; i<nx; ++i) {
    x[0] = i;
    result[i] = func(x);
  }
  return result;
}

function grid2(nx, ny, func) {
  var result = new Array(ny);
  var x = [0,0];
  for(var i=0; i<nx; ++i) {
    var r = new Array(nx);
    result[i] = r;
    x[0] = i;
    for(var j=0; j<ny; ++j) {
      x[1] = j;
      r[j] = func(x);
    }
  }
  return result;
}

function grid3(nx, ny, nz, func) {
  var result = new Array(nx);
  var x = [0,0,0];
  for(var i=0; i<nx; ++i) {
    var r = new Array(ny);
    result[i] = r;
    x[0] = i;
    for(var j=0; j<ny; ++j) {
      var s = new Array(nz);
      r[j] = s;
      x[1] = j;
      for(var k=0; k<nx; ++k) {
        x[2] = k;
        s[k] = func(x);
      }
    }
  }
  return result;
}


function gridn(dims, func, x, n) {
  var result = new Array(dims[n]);
  if(n+1 === dims.length) {
    for(var i=0; i<dims[n]; ++i) {
      x[n] = i;
      result[i] = func(x);
    }
  } else {
    for(var i=0; i<dims[n]; ++i) {
      x[n] = i;
      result[i] = gridn(dims, func, x, n+1);
    }
  }
  return result;
}

function plotGrid(dims, func) {
  switch(dims.length) {
    case 0:
      return [];
    case 1:
      return grid1(dims[0], func);
    case 2:
      return grid2(dims[0], dims[1], func);
    case 3:
      return grid3(dims[0], dims[1], dims[2], func);
    default:
      return gridn(dims, func, new Array(dims.length), 0);
  }
}

module.exports = plotGrid;