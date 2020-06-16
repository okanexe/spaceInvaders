function Drop(x, y){
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;

  this.show = function(){
    noStroke();
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.move = function(){
    this.y = this.y - 5;
  }

  this.evaporate = function(){
    this.toDelete = true;
  }

  this.hits = function(flower){
    var distance = dist(this.x, this.y, flower.x, flower.y);
    if(distance < this.r + flower.r){
      return true;
    }else{
      return false;
    }
  }
}
