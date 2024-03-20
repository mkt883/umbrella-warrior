
/*            PLAYER VARIABLES + OBJECT           */
let playerSprite = [1, 2, 3, 4];

let groundCol;
let leftCol;
let rightCol;
let upperCol;

let isTouching; //is touching rect colliders

/*
Player Anim issue: 
- add individual run, jump, idle variables again. 
- Redefine as
  if(!isMoving && !jumping){
    image(idle)
  }

  New issue: 
  - isMoving is seen as down always
  - isMoving is the main issue
  - make isIdle variable? 
    if(isIdle){
      isMoving = false;
      isJumping = false;
      onGround = true;
    }
    must make if isMoving turn off when jumping ( if(!onGround){isMoving = false;}  )

    isIdle = player !press any buttons, vx && vy = 0

    Afterwards: 
      - Need to add collisions
      - Need to set player directions (lookingL & lookingR, flip in that direction)


  MAIN ISSUES:
    - Collisions are weak & bouncy
    - player now falls but it took away the idle sprite (replaced player w square for now)
    - animations overlay (don't want run animations when jumping)

    - Add attack back in
    - add hearts/lives
      - store hearts in an array, when you lose health use pop();
*/

let player = {
  x: 100,
  y: 100,
  vx: 0, 
  vy: 0,
  w: 32,
  h: 32,
  onGround: false,
  canJump: false,
  jumpCount: 1,
  maxJump: 7,

  isJumping: false,
  isMoving: false,
  isIdle: true,
  // playerSprite: [1, 2, 3, 4],

  draw: function() {
    if(!this.isMoving && !this.isJumping && this.onGround){
      image(playerSprite[0],this.x, this.y, this.w, this.h);
    } 
    push();
      noFill();
      rect(this.x, this.y+5, this.w, this.h-5)
    pop();
  },
  update: function() {
    if(!player.onGround){this.vy += 0.5; }  // Gravity
    /* Jumping:
    different height variables: variable beight based on key press time
    have it so whilst the key is down, player.vy gradualy decreases until it reaches max jump height
    */

    if(keyIsDown(UP_ARROW)&& player.canJump){
      player.jump = true;
      player.onGround = false;
      player.vy = -7;
      player.jumpAmount--;
      player.isJumping = true;
    }

    //console.log(this.onGround);

    this.y += this.vy
    if(keyIsDown(LEFT_ARROW)){
      this.vx -= 0.9
      image(playerSprite[2], this.x, this.y, this.w, this.h)
    }
    if(keyIsDown(RIGHT_ARROW)){
      this.vx += 0.9
      image(playerSprite[1], this.x, this.y, this.w, this.h)
    }
    
    if((keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW)) && this.onGround && !this.isJumping){
      this.isMoving = true;
    }else{
      this.isMoving = false;
    }

    //Declaring the variables for animations
    if(!this.onGround){
      this.isJumping = true;
    }else{
      this.isJumping = false;
    }

    if(this.isJumping){
      image(playerSprite[3], this.x, this.y, this.w, this.h);
    }

    this.x += this.vx;
    this.x *= 0.9;

    if(this.onGround && this.jumpCount === 1){
      this.canJump = true;
    }else{
      this.canJump = false;
    }

    if(!isTouching){
      this.onGround = false;
    }
  },
}

function preload(){
  //PLAYER
  playerSprite[0] = loadImage("ninja_assets copy/ninja_idle.png");
  playerSprite[1] = loadImage("ninja_assets copy/ninja-walk-R.gif");
  playerSprite[2] = loadImage("ninja_assets copy/ninja-walk-L.gif");
  playerSprite[3] = loadImage("ninja_assets copy/ninja_jump.png");
}

function collisionDetection (){
  groundCollision();
  rightCollision();
  leftCollision();
  upCollision();
}
  
function rectangle(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.draw = function(){
      push();
      /*
       This code will let us use a tilemap without having a bunch of rectangles everywhere
        noFill();
        noStroke();
      */
        fill(255)
        rect(this.x, this.y, this.w, this.h)
      pop();
    }
}
  
function setup() {
  createCanvas(500, 500);
  //ground tiles
  r1 = new rectangle(0, 450, 500, 100)

  //tile 5 collisions
    //bottom
    r2 = new rectangle(50, 300, 50, 100)
    r3 = new rectangle(400, 300, 50, 100)
    //top
    r4 = new rectangle(50, 50, 50, 100)
    r5 = new rectangle(400, 50, 50, 100)

  //tile 0 'banner' tiles
  r6 = new rectangle(200, 150, 100, 10)
  r7 = new rectangle(200, 300, 100, 10)

  //window sills
  r8 = new rectangle(50, 240, 50, 5)
  r9 = new rectangle(400, 240, 50, 5)

  // playerSprite[0] = idle;
  // playerSprite[1] = runL;
  // playerSprite[2] = runR;
}
  
function draw() {
  noSmooth();
  rect(player.x, player.y, player.w, player.h)
  background(220);
  r1.draw()
  r2.draw()
  r3.draw();
  r4.draw();
  r5.draw();
  r6.draw();
  r7.draw();
  //r8.draw();
  //r9.draw();

  collisionDetection();
  player.update()
  player.draw();
  // console.log(player.onGround)
}


//******************************//
/*                              */
/*       EXTRA PLAYER CODE      */
/*              |||             */
/*              vvv             */
/*                              */
//******************************//


function keyPressed() {
  if (keyCode === 32) {
      player.attack();
  }
}

function rectColliding(rect1, rect2) {
    if (
      rect1.x < rect2.x + rect2.w &&
      rect1.x + rect1.w > rect2.x &&
      rect1.y < rect2.y + rect2.h &&
      rect1.h + rect1.y > rect2.y
    ) {
      isTouching = true;
      return true
    } else {
      isTouching = false;
      return false
    }
}

function groundCollision(){
//rectCol for ground
groundCol = new rectangle(player.x+3, player.y+30, player.w-5, player.h-27)

if(rectColliding(groundCol, r1)) {
  player.vy = 0;
  player.onGround = true;
  // console.log("touch r1: "+rectColliding(groundCol, r1))
}/*else{
  player.onGround = false;
}*/
if(rectColliding(groundCol, r2)) {
  player.vy = 0;
  player.onGround = true;
  // console.log("touch r2: "+rectColliding(groundCol, r2))
}/*else{
  player.onGround = false;
}*/
if(rectColliding(groundCol, r3)) {
  player.vy = 0;
  player.onGround = true;
  // console.log("touch r3: "+rectColliding(groundCol, r3))
}/*else{
  player.onGround = false;
}*/
if(rectColliding(groundCol, r4)) {
  player.vy = 0;
  player.onGround = true;
  // console.log("touch r4: "+rectColliding(groundCol, r4))
}/*else{
  player.onGround = false;
}*/
if(rectColliding(groundCol, r5)) {
  player.vy = 0;
  player.onGround = true;
  // console.log("touch r5: "+rectColliding(groundCol, r5))
}/*else{
  player.onGround = false;
}*/
if(rectColliding(groundCol, r6)) {
  player.vy = 0;
  player.onGround = true;
  // console.log("touch r6: "+rectColliding(groundCol, r6))
}/*else{
  player.onGround = false;
}*/
if(rectColliding(groundCol, r7)) {
  player.vy = 0;
  player.onGround = true;
  // console.log("touch r7: "+rectColliding(groundCol, r7))
}/*else{
  player.onGround = false;
}*/
}

function upCollision(){
  //rectCol for ground
  upperCol = new rectangle(player.x+3, player.y+5, player.w-5, player.h-25)
  
  if(rectColliding(upperCol, r1)) {
    player.vy = 0;//-player.vy;
  }
  if(rectColliding(upperCol, r2)) {
    player.vy = 0;//-player.vy;
  }
  if(rectColliding(upperCol, r3)) {
    player.vy = 0;//-player.vy;
  }
  if(rectColliding(upperCol, r4)) {
    player.vy = 0;//-player.vy;
  }
  if(rectColliding(upperCol, r5)) {
    player.vy = 0;//-player.vy;
  }
  if(rectColliding(upperCol, r6)) {
    player.vy = 0;//-player.vy;
  }
  if(rectColliding(upperCol, r7)) {
    player.vy = 0;//-player.vy;
  }
}

function rightCollision(){
  rightCol = new rectangle(player.x+27, player.y+5, player.w-30, player.h-8)

  if(rectColliding(rightCol, r1)) {
    player.vx-=2;
    // player.vy = 0;

  }
  if(rectColliding(rightCol, r2)) {
    player.vx-=2;
    // player.vy = 0;

  }
  if(rectColliding(rightCol, r3)) {
    player.vx-=2;
    // player.vy = 0;

  }
  if(rectColliding(rightCol, r4)) {
    player.vx-=2;
    // player.vy = 0;

  }
  if(rectColliding(rightCol, r5)) {
    player.vx-=2;
    // player.vy = 0;

  }
  if(rectColliding(rightCol, r6)) {
    player.vx-=2;
    // player.vy = 0;

  }
  if(rectColliding(rightCol, r7)) {
    player.vx-=2;
    // player.vy = 0;

  }
}

function leftCollision (){
  leftCol = new rectangle(player.x+5, player.y+5, player.w-30, player.h-8)

  if(rectColliding(leftCol, r1)) {
    player.vx +=2;
    // player.vy = 0;
  }
  if(rectColliding(leftCol, r2)) {
    player.vx+=2;
    // player.vy = 0;
  }
  if(rectColliding(leftCol, r3)) {
    player.vx+=2;
    // player.vy = 0;
  }
  if(rectColliding(leftCol, r4)) {
    player.vx+=2;
    // player.vy = 0;
  }
  if(rectColliding(leftCol, r5)) {
    player.vx+=2;
    // player.vy = 0;
  }
  if(rectColliding(leftCol, r6)) {
    player.vx+=2;
    // player.vy = 0;
  }
  if(rectColliding(leftCol, r7)) {
    player.vx+=2;
    // player.vy = 0;
  }
}

