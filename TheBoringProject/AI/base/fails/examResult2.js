//doesnt work

var util = require("../utils.js")

var x1 = -1;

var w11 = 0.1;
var w12 = 0.5;
var w13 = 0.2;

var ow1 = 0.4
var ow2 = 0.2
var ow3 = 0.1

var h1 = (x1*w11)*ow1;

var h2 = (x1*w12)*ow2;

var h3 = (x1*w13)*ow3;

console.log(Math.round(util.sigmoid(h1+h2+h3)) == 1 ? 'pass' : 'fail')// == 1 ? 'pass' : 'fail');