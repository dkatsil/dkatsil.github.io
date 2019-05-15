let dkSpeed = 50;
let woooo;



//only runs once (setuP)
function setup() {
  createCanvas(500, 500);

  woooo = new p5.Oscillator('square');


//  console.log('going back to 2002');


//drew racecar body

  fill(0);
  random(233,13,13);
  strokeWeight(5);
  ellipse(60,350,20,20);
  ellipse(90,350,20,20);

  if (dkSpeed !== 60){
    console.log("2002istruth");
  }
  //drew wheels
}

function draw() {
  console.log(frameCount);

  background(20, 20, 220,15);
  console.log("yeehaw dkSpeed is " + dkSpeed);
if (frameCount > 180){


  woooo.freq(dkSpeed);


//  x = x + 1;
dkSpeed +=3;

if (dkSpeed > 500) {
  dkSpeed = -50;
}else if (dkSpeed > 400) {
  dkSpeed+=6;

} else {
  dkSpeed += 3;
}



} else {
  woooo.freq(0);

}
noStroke();
fill(125, 209, 39);
rect(dkSpeed,300, 60, 30);
}

function mouseClicked() {
  dkSpeed = 0;
  console.log("I CLICKED MOUSE YAY ");
  woooo.stop();
}
