function Flower(x, y){
  this.x = x;
  this.y = y;
  this.r = 30;
  this.heal = 2;

  this.xdir = 1;


  this.show = function (){
    noStroke();
    fill(255,0,200);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.kill = function(){
    this.r = this.r - 2;
  }

  this.move = function(){
    this.x = this.x + this.xdir;
  }

  this.shiftDown = function(){
    this.xdir *= -1; // this go back . road to left
    this.y += this.r; // go down as Flower's r .
  }
}
