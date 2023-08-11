let time;
let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;
let enemyXDir = 1;
let enemyYDir = 1;
let enemyXSpeed;
let enemyYSpeed;


let ghostImage;
let pacmanImage;

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

function preload(){
    ghostImage= loadImage("./images/ghost2.png");
    pacmanImage= loadImage("./images/pacman2.png");
}
function setup() {
    createCanvas(500, 500);
    noStroke();

    rectMode(CENTER);

    enemyXSpeed = random(-5,5)
    enemyYSpeed = random(-5,5)
}

function mouseClicked(){
    if(mouseX>0 && mouseX<50 && mouseY>0 && mouseY<50){
        enemyXPos = random(500)
        enemyYPos = random(500)
        enemyXSpeed = random(-15,15)
        enemyYSpeed = random(-15,15) 
    }
    
}

function draw() {
    background(16, 6, 92);
    image(ghostImage,myXPos-25, myYPos-25, 50,50);
    fill(0, 0, 255);
    rect(enemyXPos, enemyYPos, 50, 50);
    

    image(pacmanImage, enemyXPos-25, enemyYPos-25, 50,50);
    // randomizes the enemy movement 
    enemyXPos += enemyXSpeed * enemyXDir;
    enemyYPos += enemyYSpeed * enemyYDir;
    if(enemyXSpeed==0){
        enemyXSpeed = random(-15,15);
    }
    if(enemyYSpeed==0){
        enemyYSpeed = random(-15,15);
    }
    if (enemyXPos < 25 || enemyXPos > 475) {
        enemyXDir *= -1;
    }

    if (enemyYPos < 25 || enemyYPos > 475) {
        enemyYDir *= -1;
    }

    // fill(255, 0, 0);
    // rect(myXPos, myYPos, 50, 50);

    fill(242, 250, 15);
    textSize(40);
    text("Reverse Pac-man", 101, 55);
    

    fill(255);
    textSize(20);
    text("Restart",15,30);

   
    
    if (keyIsDown(LEFT_ARROW)) {
        myXPos -= 3;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        myXPos += 3;
    }

    if (keyIsDown(UP_ARROW)) {
        myYPos -= 3;
    }

    if (keyIsDown(DOWN_ARROW)) {
        myYPos += 3;
    }


    myLeft = myXPos - 25;
    myRight = myXPos + 25;
    myTop = myYPos - 25;
    myBottom = myYPos + 25;

    enemyLeft = enemyXPos - 25;
    enemyRight = enemyXPos + 25;
    enemyTop = enemyYPos - 25;
    enemyBottom = enemyYPos + 25;

    if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
        time +=1;
    }

    else {
        enemyXSpeed = 0;
        enemyYSpeed = 0;
        textSize(36);
        fill(255);
        text("The power pellets will be mine.", 20,  100);
        text("Suffer.", 24, 200);
        text("Time survived:" + time.toString() ,24,400);
    }
}
