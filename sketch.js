var canvas;
var music;
var box1,box2,box3,box4,movingBox;
var edges;

function preload(){
    music = loadSound("music.mp3"); 
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(80,590,180,20);
    box1. shapeColor =  "red";

    box2 = createSprite(260,590,180,20);
    box2. shapeColor =  "green";

    box3 = createSprite(440,590,180,20);
    box3. shapeColor = "blue";

    box4 = createSprite(620,590,180,20);
    box4. shapeColor = "yellow";

    movingBox = createSprite(400,300,30,30);
    movingBox. shapeColor = "white";

    movingBox.velocityX = 4;
    movingBox.velocityY = 9 ;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite
    edges = createEdgeSprites ();

    movingBox.bounceOff(edges);
     
    
    
    
    

    if (box1.isTouching(movingBox) && movingBox.bounceOff(box1)) {
        movingBox.shapeColor = "red";
        music.play();
    }

    if (box2.isTouching(movingBox)) {
        movingBox.shapeColor = "green";
        movingBox.velocityX = 0;
        movingBox.velocityY = 0;
        music.stop();
    }

    if (box3.isTouching(movingBox) && movingBox.bounceOff(box3)) {
        movingBox.shapeColor = "blue";
        
    }

    if (box4.isTouching(movingBox) && movingBox.bounceOff(box4)) {
        movingBox.shapeColor = "yellow";
        
    }


    //add condition to check if box touching surface and make it box
    drawSprites();
}
