function setup() {
    createCanvas(600, 600);
    background("purple");
  }
  
  function draw() {
    stroke("white");
    fill("green");
    
    if (mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
    
  }