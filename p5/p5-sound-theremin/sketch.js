'use strict'

// coding train sound synth tutorial https://www.youtube.com/watch?v=Bk8rLzzSink&t=0s&index=7&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW

let woooo;

function setup() {
  createCanvas(400, 400);
  woooo = new p5.Oscillator('square');
}

function draw() {
  background(220);
  woooo.freq(60 + mouseX);
  woooo.amp(map(mouseY, 0, 100, 0, 1000));
  // to draw shape
  // rect(50, 50, map(mouseX, 0, width, 0, 200), map(mouseY, 0, height, 0, 200));
}

function mousePressed() {
  woooo.start();
}

function mouseReleased() {
  woooo.stop();
}
