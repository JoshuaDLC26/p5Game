let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;
let enemyXDir = 1;
let enemyYDir = 1;
let enemyXSpeed = 3;
let enemyYSpeed = 3;

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

function setup() {
    createCanvas(500, 500);
    noStroke();

    rectMode(CENTER);
    enemyXSpeed = random(-5,15);
    enemyYSpeed = random(-5,15);
}

function draw() {
    background(50, 168, 151);

    fill(0, 0, 255);
    rect(enemyXPos, enemyYPos, 50, 50);
    
    // randomizes the enemy movement 
    enemyXPos += enemyXSpeed * enemyXDir
    enemyYPos += enemyYSpeed * enemyYDir
    
    if (enemyXPos < 25 || enemyXPos > 475) {
        enemyXDir *= -1
    }

    if (enemyYPos < 25 || enemyYPos > 475) {
        enemyYDir *= -1
    }

    fill(255, 0, 0);
    rect(myXPos, myYPos, 50, 50);
    

    textSize(20);
    text("Start",30,40)
    fill(255);
    
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
        
    }

    else {

    }
}

// function mouseClicked(){
//     if(mouseX)
    
// }