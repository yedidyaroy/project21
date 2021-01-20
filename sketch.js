var music;
var box;
var edges;
var surface1;
var surface2;
var surface3;
var surface4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
 createCanvas(400,400);
 box = createSprite(200,250,20,20);
 box.shapeColor="white";
 box.velocityY=4;
 box.velocityX=4;

 surface1 = createSprite(350,390,100,20);
 surface1.shapeColor="red";

 surface2 = createSprite(250,390,100,20);
 surface2.shapeColor="yellow";

 surface3 = createSprite(150,390,100,20);
 surface3.shapeColor="pink";

 surface4 = createSprite(50,390,100,20);
 surface4.shapeColor="lightgreen";
 edges = createEdgeSprites();
}

function draw() {
    background("lightblue");
    box.bounceOff(edges[0]);
    box.bounceOff(edges[1]);
    box.bounceOff(edges[2]);
    box.bounceOff(edges[3]);
    music.loop();
    if (surface1.isTouching(box) && box.bounceOff(surface1)){
       box.shapeColor="red";
    }

    if (surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor="yellow";
    }

    if (surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor="lightgreen";
    }

    if (surface3.isTouching(box)){
        box.velocityX=0;
        box.velocityY=0;
        box.shapeColor="pink";
        music.stop();
    }
    drawSprites();
}
