var ship;
var flowers = [];
var drops = [];

function setup(){
  createCanvas(600,400);
  //ship = new Ship();
  ship = new Ship();

  for(var i = 0; i < 6; i++){  //create 6 flowers in Canvas
    flowers[i] = new Flower(i*80+80,60);
  }
  //drop = new Drop(width/2, height/2);
}

function draw(){
  background(51);
  //ship.show();
  ship.show();
  ship.move();

  for(var i = 0; i < drops.length; i++){ // show drops that how many pieces in canvas .
    drops[i].show();
    drops[i].move();
    for(var j = 0; j < flowers.length; j++){
      if (drops[i].hits(flowers[j])) {
        flowers[j].kill();  // if drops intersect the flowers then flower will grow .
        drops[i].evaporate();  // delete drops
        flowers[j].heal -= 1; // decrease heal of the item and if heal = 0 then game end .
        if(flowers[j].heal == 0){
          flowers.splice(j,1); // if item be hit two times and heal = 0 then this item delete in the flowers array .
        }
        if(flowers.length == 0 ){
          alert("Win !")
        }
      }
    }
  }
  var edge = false;

  for(var i = 0; i < flowers.length; i++){ // show all flowers at canvas
    flowers[i].show();
    flowers[i].move();
    if (flowers[i].x > width || flowers[i].x < 0){
      edge = true;
    }
  }

  if(edge){
    for (var i = 0; i < flowers.length; i++){
      flowers[i].shiftDown();
    }
  }

  for(var i = 0; i< drops.length; i++){
    if (drops[i].toDelete){
      drops.splice(i, 1);   // delete the drops when intersect the flowers.
    }
  }

}

function keyReleased(){
  if (key != ' '){
    ship.setDir(0);
  }
}

function keyPressed() {
  if ( key ===' '){ // if press the space button at keyboard . new drop be created and push it drops's array.
    drop = new Drop(ship.x, height);
    drops.push(drop);
  }
  if(keyCode === RIGHT_ARROW){
    ship.setDir(1);
  }else if(keyCode === LEFT_ARROW){
    ship.setDir(-1);
  }
}
