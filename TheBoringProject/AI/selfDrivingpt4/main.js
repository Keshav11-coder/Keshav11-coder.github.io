const carCanvas = document.getElementById("carCanvas");
carCanvas.width = 500;
carCanvas.height = 5;
const networkCanvas = document.getElementById("networkCanvas");
networkCanvas.width = 500;

const carCtx = carCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");

const road = new Road(carCanvas.width / 2, carCanvas.width * 0.9);

const N = 1;
const cars = generateCars(N);
let bestCar = cars[0];

const canvasHeight = document.documentElement.clientHeight;

/*
if(localStorage.getItem("bestBrain")){
    for(let i=0;i<cars.length;i++){
        cars[i].brain=JSON.parse(
            localStorage.getItem("bestBrain"));
        if(i!=0){
            NeuralNetwork.mutate(cars[i].brain,0.1);
        }
    }
}
*/

/*

scenario support::
const traffic=[
    new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(0),-300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(0),-500,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-500,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-700,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-700,30,50,"DUMMY",2),
];

*/


bestCar.brain = { "levels": [{ "inputs": [0.47804697124414774, 0.13662345981232582, 0, 0, 0.5155757299767153], "outputs": [1, 1, 1, 1, 1, 0], "biases": [-0.2972465794281691, 0.154007511225061, -0.5706816276121213, -0.5510325326701437, -0.46993438345789507, 0.2374618477016292], "weights": [[-0.18365025764687337, 0.3276592387266104, 0.4413079823913059, 0.8658632351050299, 0.0993716057475205, -0.7555221623590626], [-0.6921412510001499, 0.527913858538452, -0.6714747609909099, 0.66115804701874, -0.6036796855971881, -0.06089625069158858], [0.22269710540200802, 0.22087367074836317, 0.4725002148919259, -0.40266248882825806, -0.4176126368130285, 0.4167897700477022], [0.5907959424518245, -0.36324299139807925, 0.41931943884406564, -0.7379935805903236, 0.176271180605567, -0.4825964537291353], [-0.06780016067763457, -0.14223987518227946, -0.5562772556804912, -0.11550857254159386, 0.5333858242949753, 0.5576717772542793]] }, { "inputs": [1, 1, 1, 1, 1, 0], "outputs": [1, 0, 1, 0], "biases": [0.12524308181855087, 0.9485465134091681, 0.22540517919935832, 0.9680263035931924], "weights": [[0.31684664320763595, 0.22291989846088356, -0.8175677992910001, 0.09628651232922003], [-0.9501029471840443, -0.8101950368023462, 0.46288164066068443, -0.6887538026813338], [-0.42653064862846735, 0.48862823421028245, 0.6062314655682155, 0.4190474405086946], [0.471644158010253, 0.39913910052856716, -0.03951763207813102, 0.14400067391929317], [0.8728693988714644, 0.6343114074659673, 0.2407387932914441, -0.02593146897487486], [0.35781560739809104, 0.840686283728249, 0.2881244246652155, 0.5217815950200488]] }] }

var traffic = [
    new Car(road.getLaneCenter(randomize(0, 2)), -100, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(randomize(0, 2)), -300, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(randomize(0, 2)), -300, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(randomize(0, 2)), -500, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(randomize(0, 2)), -500, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(randomize(0, 2)), -700, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(randomize(0, 2)), -700, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(randomize(0, 2)), -800, 30, 50, "DUMMY", 2),
];

animate();

function save() {
    localStorage.setItem("bestBrain",
        JSON.stringify(bestCar.brain));
}

function discard() {
    localStorage.removeItem("bestBrain");
}

function generateCars(N) {
    const cars = [];
    for (let i = 1; i <= N; i++) {
        cars.push(new Car(road.getLaneCenter(1), 100, 30, 50, "AI"));
    }
    return cars;
}

function spawnCar() {
    for(let i=0;i<8;i++){
        traffic.push(new Car(road.getLaneCenter(randomize(0, 2)), cars[0].y - randomize((canvasHeight-50), canvasHeight+1000), 30, 50, "DUMMY", 2))
    }
    //console.log("car spawned")
}

setInterval(() => {
    spawnCar()
}, randomize(3, 10)*1000);

function animate(time) {
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].update(road.borders, []);
    }
    for (let i = 0; i < cars.length; i++) {
        cars[i].update(road.borders, traffic);
    }
    bestCar = cars.find(
        c => c.y == Math.min(
            ...cars.map(c => c.y)
        ));

    carCanvas.height = window.innerHeight;
    networkCanvas.height = window.innerHeight;

    carCtx.save();
    carCtx.translate(0, -bestCar.y + carCanvas.height * 0.7);

    road.draw(carCtx);
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].draw(carCtx, "red");
    }
    carCtx.globalAlpha = 0.2;
    for (let i = 0; i < cars.length; i++) {
        cars[i].draw(carCtx, "blue");
    }
    carCtx.globalAlpha = 1;
    bestCar.draw(carCtx, "blue", true);

    carCtx.restore();

    networkCtx.lineDashOffset = -time / 50;
    Visualizer.drawNetwork(networkCtx, bestCar.brain);
    requestAnimationFrame(animate);

    //console.log(cars[0].y)
}