console.log("native js")

let theText = "isnt this neat!"
// pass the button html element into a constant variable
const theButton = document.querySelector("button")
// add event listener to element
theButton.addEventListener('click', myFunction)

let theBody;
// grab the body element and pass into a variable
theBody = document.querySelector("body");

function myFunction(){
 console.log("button click!");
 //js css properties have different syntax than css
 // this is the same as "background-color" but translated in JS
 theBody.style.backgroundColor = "yellow";

}

/// Umia's p5.js code below!!
function setup() {
    console.log("p5.js!")
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220, 2, 150);
  fill(500,700,255)
  circle( mouseX,mouseY, 170, 130, 60);
  fill(23,165,0)
  quad(mouseX,mouseY,300, 31, 96, 50, 123, 200, 60, 76);
  fill( 108, 65, 255)
  rect(windowWidth - 100, 100, 95, 135); 
}
