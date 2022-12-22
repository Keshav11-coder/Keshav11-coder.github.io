var util = require("./utils.js")

var inputs = [0.6, 0.8, 0.8, 0.8, 0.2];

var w11 = 0.2;
var w12 = 0.9;
var w13 = 0.5;
var w14 = 0.8;
var w15 = 0.7;
var w16 = 0.7;

var w21 = 0.2;
var w22 = 0.9;
var w23 = 0.5;
var w24 = 0.8;
var w25 = 0.7;
var w26 = 0.7;

var w31 = 0.2;
var w32 = 0.9;
var w33 = 0.5;
var w34 = 0.8;
var w35 = 0.7;
var w36 = 0.7;

var w41 = 0.2;
var w42 = 0.9;
var w43 = 0.5;
var w44 = 0.8;
var w45 = 0.7;
var w46 = 0.7;

var w51 = 0.2;
var w52 = 0.9;
var w53 = 0.5;
var w54 = 0.8;
var w55 = 0.7;
var w56 = 0.7;

var h1 = ((inputs[0]*w11)+(inputs[1]*w21)+(inputs[2]*w31)+(inputs[3]*w41)+(inputs[4]*w51));
var h2 = ((inputs[0]*w12)+(inputs[1]*w22)+(inputs[2]*w32)+(inputs[3]*w42)+(inputs[4]*w52));
var h3 = ((inputs[0]*w13)+(inputs[1]*w23)+(inputs[2]*w33)+(inputs[3]*w43)+(inputs[4]*w53));
var h4 = ((inputs[0]*w14)+(inputs[1]*w24)+(inputs[2]*w34)+(inputs[3]*w44)+(inputs[4]*w54));
var h5 = ((inputs[0]*w15)+(inputs[1]*w25)+(inputs[2]*w35)+(inputs[3]*w45)+(inputs[4]*w55));
var h6 = ((inputs[0]*w16)+(inputs[1]*w26)+(inputs[2]*w36)+(inputs[3]*w46)+(inputs[4]*w56));

var o1 = ((h1*0.1)+(h2*0.2)+(h3*0.4)+(h4*0.9)+(h5*0.3)+(h6*0.6));
var o2 = ((h1*0.4)+(h2*0.3)+(h3*0.9)+(h4*0.5)+(h5*0.5)+(h6*0.7));
var o3 = ((h1*0.9)+(h2*0.7)+(h3*0.3)+(h4*0.1)+(h5*0.6)+(h6*0.9));
var o4 = ((h1*0.5)+(h2*0.2)+(h3*0.8)+(h4*0.2)+(h5*0.3)+(h6*0.4));

var oo1 = util.sigmoid(o1);
var oo2 = util.sigmoid(o2);
var oo3 = util.sigmoid(o3);
var oo4 = util.sigmoid(o4);

console.log(oo1, oo2, oo3, oo4);

/*
adjust weights using math.random values, 
save the brain and keep doing that until you found a good brain, 
then expand to double layered hidden layers and try again to see if you get better results
*/