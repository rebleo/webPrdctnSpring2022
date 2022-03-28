console.log("javascript is here! one might call this the message")
// variables
let myName = "Rebecca" 
let myLastname = "Leopold"
let aNumber = 56;

console.log(myName + myLastname + " " + aNumber)
let theButton = document.querySelector("button");
///
/// p5.js!!! https://p5js.org/
// creating an empty variable to pass data into latere
let theRandom;
// function 
function setup() {
    // this loop runs ONE TIME
console.log("p5.js!")
  createCanvas(windowWidth, windowHeight);
  background(255,200,200);
  //passing a value into the empty variable.
  theRandom = random(0,255);
  
}

function draw() {
    // this loop runs 60 frames a second
 fill(theRandom)
 nofill();
 ellipse(mouseX,mouseY, 100,100)
}