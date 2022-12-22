var util = require("./utils.js")

var x1 = 30
var x2 = 3.5

var w11 = 0.1;
var w12 = 0.5;
var w13 = 0.2;
var w21 = 0.3;
var w22 = 0.4;
var w23 = 0.1;

var ow1 = 0.4
var ow2 = 0.2
var ow3 = 0.1

var h1 = ((x1*w11)+(x2*w21))*ow1;

var h2 = ((x1*w12)+(x2*w22))*ow2;

var h3 = ((x1*w13)+(x2*w23))*ow3;

console.log(util.sigmoid(h1+h2+h3))// == 1 ? 'pass' : 'fail');