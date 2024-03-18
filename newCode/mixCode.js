/*             MENU VARIABLES            */
let isPaused = false;

/*             LEVEL VARIABLES            */
let inLVL_1;
let inLVL_2 = false;

/*            TILEMAP STUFF              */
let tilemap = [];
let numDown = 20;
let numAcross = 20;
let tileSize = 25;
let textures = [];

//SCENES
let lv1_graphicMap = [ 
//          Y AXIS
//   0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 
    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
    [2, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 2
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 4     X AXIS
    [2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 6
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 7
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 9
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 10
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 11
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 12
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 13
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 14    
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2], // 15
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 16
    [2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 17
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 18
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  // 19
]
let lv2_graphicMap = [ 
    //          Y AXIS
    //   0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 2
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 4     X AXIS
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 6
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 7
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 9
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 10
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 11
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 12
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 13
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 14    
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 15
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 16
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 17
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 18
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  // 19
    ]




/*            PLAYER VARIABLES + OBJECT           */
let playerSprite = [1, 2, 3, 4, 5];
// let playerHealthSprite = [1, 2, 3];

let groundCol;
let leftCol;
let rightCol;
let upperCol;

let isTouching; //is touching rect colliders

/*
  MAIN ISSUES:
    - Collisions are weak & bouncy
    - player now falls but it took away the idle sprite (replaced player w square for now)
    - animations overlay (don't want run animations when jumping)

    - Add attack back in
    - add hearts/lives
      - store hearts in an array, when you lose health use pop();
*/

let player = {
  x: 50,
  y: 50,
  vx: 0, 
  vy: 0,
  w: 32*1.25,
  h: 32*1.25,
  onGround: false,
  canJump: false,
  jumpCount: 1,
  maxJump: 7,

  playerHealth: 3,

  isJumping: false,
  isMoving: false,
//   isIdle: true,
  
  //Attack variables
  width: 50, // Temp for testing
  height: 100, // Temp for testing
  hitbox: null, // Hitbox is not visible when not attacking

  draw: function() {
    if(!this.isMoving && !this.isJumping){
      image(playerSprite[0],this.x, this.y, this.w, this.h);
    } 
    push();
      noFill();
      rect(this.x, this.y+5, this.w, this.h-5)
    pop();

    // red square for hitbox
    if (this.hitbox) {
        //fill(255, 0, 0);
        noFill();
        image(playerSprite[4], player.x, player.y, player.w, player.h)
        rect(this.x-8, this.y, this.hitbox.width, this.hitbox.height);
    }
  },
  attack: function() {
    // Here I will make the hitbox
    this.hitbox = {
        x: this.x, // Centering the hitbox on player to attack in both directions
        y: this.y,
        width: player.w+15,
        height: player.h+5
    };

    // Remove the hitbox after press (chose 1/4 a second)
    setTimeout(() => this.hitbox = null, 250);
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
    }
    if(keyIsDown(RIGHT_ARROW)){
      this.vx += 0.9
    }
    
    if((keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW)) && this.onGround && !this.isJumping){
      this.isMoving = true;
    }else{
      this.isMoving = false;
    }

    if(this.isMoving && keyIsDown(LEFT_ARROW)){
        image(playerSprite[2], this.x, this.y, this.w, this.h)
    }else if(keyIsDown(RIGHT_ARROW)){
        image(playerSprite[1], this.x, this.y, this.w, this.h)
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
  //TILES
  textures[0] = loadImage("tiles/tile_wood-base.png");
  textures[1] = loadImage("tiles/tile_spikes_glimmer.gif");
  textures[2] = loadImage("tiles/tile_wood-post.png")

  //PLAYER
  playerSprite[0] = loadImage("player/ninja_assets copy/ninja_idle.png");
  playerSprite[1] = loadImage("player/ninja_assets copy/ninja-walk-R.gif");
  playerSprite[2] = loadImage("player/ninja_assets copy/ninja-walk-L.gif");
  playerSprite[3] = loadImage("player/ninja_assets copy/ninja_jump.png");
  playerSprite[4] = loadImage("player/ninja_assets copy/attack.gif")
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
  if(!inLVL_2){
    lvl1();
    }
}
  
function draw() {

    
    noSmooth();
   //background(220);
   spikes1.draw();

    r1.draw()
    r2.draw()
    r3.draw();
    r4.draw();
    r5.draw();

  // Loops through all tiles each time draw() is called
  for (let across = 0; across < numAcross; across++) {
    for (let down = 0; down < numDown; down++) {
        tilemap[across][down].display(); // runs display() method for each tile!
       // tilemap[across][down].debug(); // runs debug() method for each tile!
    }
   }
  // Finishes looping through all tiles within each draw() loop

  //draw collision platforms
    
    r6.draw();
    r7.draw();
    r8.draw();
    r9.draw();

  //SCENE SWITCH
   sceneSwitchCollisions();
   lv1a2.draw();

  //HARM OBJS:
  damageToPlayer();

  console.log(player.playerHealth)

  collisionDetection();
  rect(player.x, player.y, player.w, player.h)
  player.update()
  player.draw();

  if(isPaused){
    pauseMenu();
  }

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
    //ATTACK
  if (keyCode === 32) {
    player.attack();
  }


  //PAUSE MENU
  if(keyCode === 80){
    isPaused = !isPaused;
    // console.log("PAUSE")
  }
}

function sceneSwitchCollisions(){
  if(rectColliding(player, lv1a2)) {
    inLVL_2 = true;
    lvl2();
    console.log("SCENE SWITCH")
  }
}

function damageToPlayer(){
    if(rectColliding(player, spikes1)){
        player.playerHealth--; 
        if(player.playerHealth <= 0){
            player.x = 50;
            player.y = 50;
            player.playerHealth = 3;
        }         
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
if(rectColliding(groundCol, r8)) {
    player.vy = 0;
    player.onGround = true;
    // console.log("touch r7: "+rectColliding(groundCol, r7))
  }
  if(rectColliding(groundCol, r9)) {
    player.vy = 0;
    player.onGround = true;
    // console.log("touch r7: "+rectColliding(groundCol, r7))
  }

  //SPIKES

  if(rectColliding(groundCol, spikes1)){
    player.vy = 0;
    player.onGround = true;
}
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
  if(rectColliding(upperCol, r8)) {
    player.vy = 0;//-player.vy;
  }
  if(rectColliding(upperCol, r9)) {
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
  if(rectColliding(rightCol, r8)) {
    player.vx-=2;
    // player.vy = 0;
  }
  if(rectColliding(rightCol, r9)) {
    player.vx-=2;
    // player.vy = 0;
  }


    //SPIKES


    if(rectColliding(rightCol, spikes1)){
        player.vx -=4;
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
  if(rectColliding(leftCol, r8)) {
    player.vx+=2;
    // player.vy = 0;
  }
  if(rectColliding(leftCol, r9)) {
    player.vx+=2;
    // player.vy = 0;
  }


  //SPIKES

  if(rectColliding(leftCol, spikes1)){
    player.vx +=4;
}
}



//******************************//
/*                              */
/*          TILE CLASS          */
/*              |||             */
/*              vvv             */
/*                              */
//******************************//


class Tile {
    constructor(texture, x, y, tileSize, tileID) { // we've added a texture parameter at the beginning of our class
        this.texture = texture; // our new key-value pair!
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.tileID = tileID;
    }

    display() {
        //Displays the texture of instance of NPC class
        //noStroke();
        image(this.texture, this.x, this.y, this.tileSize, this.tileSize)
    }

    debug() {
        //TILE
        stroke(245);
        noFill();
        rect(this.x, this.y, this.tileSize, this.tileSize);

        //LABEL
        push();
            noStroke();
            fill(255);
            textAlign(LEFT, TOP);
        pop();

        text(this.tileID, this.x, this.y);
    } // I've hidden the DEBUG method but this is where the code for it goes!
}



//******************************//
/*                              */
/*         MENUS & SCENES       */
/*              |||             */
/*              vvv             */
/*                              */
//******************************//

function pauseMenu(){
    push();
    fill(0, 100)
      rect(0, 0, 500, 500);
    pop();

    push();
        fill(255);
        textAlign(CENTER);
        textSize(100);
        text("PAUSED", width/2, height/2);

        textSize(30);
        text("RETURN TO MENU?",width/2, (height/2)+55);

        textSize(30);
        text("QUIT GAME?",width/2, (height/2)+110);
    pop();

    player.vy = player.vy;
    player.vx = player.vx;
    /* 
    player.canPlay = false;
    enemy.canMove = false
    */
}

function mainMenu(){
    /*

    */
}

function lvl1(){
    if(!inLVL_2){
        player.x = 50;
    player.y = 50;
 
  //CREATING TILES
  let tileID = 0; // sets our tileID for the first tile we'll make

  //Creates all tiles
  for (let across = 0; across < numAcross; across++) {
      tilemap[across] = [];
      for (let down = 0; down < numDown; down++) {
          let x = across * tileSize; // multiplies across value by tileSize to get pixel position on x axis
          let y = down * tileSize; // multiplies down value by tileSize to get pixel position on y axis

          //Setting Texture For Tile
          let textureNum = lv1_graphicMap[down][across];

  
          tilemap[across][down] = new Tile(textures[textureNum], x, y, tileSize, tileID); // THIS LINE CREATES OUR NEW TILE!

          tileID++;
      }
  }
    //Tile creation finished

    


  //ground tiles
  r1 = new rectangle(0, 450, 500, 100)

  //tile 5 collisions
    //bottom
    r2 = new rectangle(0, 0, 25, 500)
    r3 = new rectangle(75, 0, 25, 75)
    //top
    r4 = new rectangle(0, 125, 175, 25)
    r5 = new rectangle(100, 50, 75, 25)

  //tile 0 'banner' tiles
  r6 = new rectangle(200, 150, 100, 10)
  r7 = new rectangle(200, 300, 100, 10)

  //window sills
  r8 = new rectangle(425, 375, 75, 25)
  r9 = new rectangle(400, 240, 50, 5)

  // playerSprite[0] = idle;
  // playerSprite[1] = runL;
  // playerSprite[2] = runR;

  //DANGER ELEMENT RECTANGLES:
  //SPIKES:
  spikes1 = new rectangle(75, 440, 50, 15)

  //SCENE SWITCH RECTANGLE TRIGGERS:
  lv1a2 = new rectangle(475, 400, 50, 75);
    }
}

function lvl2(){
    if(inLVL_2){
        player.x = 100;
    player.y = 100;

  //CREATING TILES
  let tileID = 0; // sets our tileID for the first tile we'll make

  //Creates all tiles
  for (let across = 0; across < numAcross; across++) {
      tilemap[across] = [];
      for (let down = 0; down < numDown; down++) {
          let x = across * tileSize; // multiplies across value by tileSize to get pixel position on x axis
          let y = down * tileSize; // multiplies down value by tileSize to get pixel position on y axis

          //Setting Texture For Tile
          let textureNum = lv2_graphicMap[down][across];

  
          tilemap[across][down] = new Tile(textures[textureNum], x, y, tileSize, tileID); // THIS LINE CREATES OUR NEW TILE!

          tileID++;
      }
  }
    //Tile creation finished

    


//   //ground tiles
  r1 = new rectangle(0, 450, 500, 100)

//   //tile 5 collisions
//     //bottom
//     r2 = new rectangle(0, 0, 25, 500)
//     r3 = new rectangle(75, 0, 25, 75)
//     //top
//     r4 = new rectangle(0, 125, 175, 25)
//     r5 = new rectangle(100, 50, 75, 25)

//   //tile 0 'banner' tiles
//   r6 = new rectangle(200, 150, 100, 10)
//   r7 = new rectangle(200, 300, 100, 10)

//   //window sills
//   r8 = new rectangle(425, 375, 75, 25)
//   r9 = new rectangle(400, 240, 50, 5)

//   // playerSprite[0] = idle;
//   // playerSprite[1] = runL;
//   // playerSprite[2] = runR;

//   //DANGER ELEMENT RECTANGLES:
//   //SPIKES:
//   spikes1 = new rectangle(75, 440, 50, 15)

//   //SCENE SWITCH RECTANGLE TRIGGERS:
//   lv1a2 = new rectangle(475, 400, 50, 75);
    }
}

