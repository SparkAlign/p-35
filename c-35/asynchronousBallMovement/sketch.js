var ball,ballPos;
var database;
var pos;
var gameState=0;
var player,form,game;
var playerCount;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    game= new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    
}


