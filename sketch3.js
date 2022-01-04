// Simulating Forces
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/Uibl0UE4VH8
// https://thecodingtrain.com/learning/nature-of-code/2.1-simulating-forces.html
// https://editor.p5js.org/codingtrain/sketches/kYWcOmch

let movers = [];
// let moverB;
let mu = 0.1;

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 10; i++){
      movers[i] = new Mover(random(width), 200, random(1,8));
  }
  
//   moverB = new Mover(300, 200, 4);
}

function draw() {
  background(0);

  for(let mover of movers){
    if (mouseIsPressed) {
        let wind = createVector(0.1, 0);
        mover.applyForce(wind);
        // moverB.applyForce(wind);
    }

    let gravity = createVector(0, 0.2);
    let weight = p5.Vector.mult(gravity, mover.mass);
    //   let weightB = p5.Vector.mult(gravity, moverB.mass);
    mover.applyForce(weight);
    //   moverB.applyForce(gravity);

    mover.update();
    mover.edges();
    mover.show(); 
    mover.friction();  
  }

}