var database;
var form,player,game;
var gameState=0, playerCount=0;

function setup(){
  database = firebase.database();
  
  createCanvas(1000,1000);

  game= new Game();
  game.getState();
  game.start();

 
}

function draw(){
  background("white");
 
}


