function setup() {
	createCanvas(600, 600);
  background('black');
}

var x = 0;
var y = 0;
var timer = 120;

function draw() {
  stroke('white');
  tenPrint();
}

function tenPrint(){

var num = random(0,1);
  if(num > .5){
    line(x + 0,y + 0,x + 30,y + 30);
  }
  else{
    line(x + 0,y + 30,x + 30,y+ 0);
  }
  x+=30
  if(x >= 600){
    y += 30;
    x = 0;
  }
  if(y >= 600){
    timer--;
    if(timer <= 0){
      background('black');
      x = 0;
      y = 0;
      timer = 120;
    }
  }
}