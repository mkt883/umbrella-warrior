/*             MENU VARIABLES            */
let isPaused = false;

/*            TILEMAP STUFF              */
let tilemap = [];
let numDown = 20;
let numAcross = 20;
let tileSize = 25;
let textures = [];

function preload(){
  //TILES
  textures[0] = loadImage("tiles/tile_wood-base.png");
  textures[1] = loadImage("tiles/tile_spikes_glimmer.gif");
  textures[2] = loadImage("tiles/tile_wood-post.png")
  textures[3] = loadImage("tiles/tile_platform_2.png")

  //PLAYER
  playerSprite[0] = loadImage("player/ninja_assets copy/ninja_idle.png");
  playerSprite[1] = loadImage("player/ninja_assets copy/ninja-walk-R.gif");
  playerSprite[2] = loadImage("player/ninja_assets copy/ninja-walk-L.gif");
  playerSprite[3] = loadImage("player/ninja_assets copy/ninja_jump.png");
  playerSprite[4] = loadImage("player/ninja_assets copy/attack.gif");
  playerSprite[5] = loadImage("player/ninja_assets copy/ninja_jump_L.png");
  playerSprite[6] = loadImage("player/ninja_assets copy/ninja_idle_L.png")
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

     //SCENE SWITCH
   sceneSwitchCollisions();
   lv1a2.draw();

  // Loops through all tiles each time draw() is called
  for (let across = 0; across < numAcross; across++) {
    for (let down = 0; down < numDown; down++) {
        tilemap[across][down].display(); // runs display() method for each tile!
       // tilemap[across][down].debug(); // runs debug() method for each tile!
    }
   }
  // Finishes looping through all tiles within each draw() loop

  //draw collision platforms
    
//console.log("lvl1 active: "+lvl1+"lvl2 active: "+lvl2);


 
  //HARM OBJS:
  damageToPlayer();

  //console.log(player.playerHealth)

  collisionDetection();
  // rect(player.x, player.y, player.w, player.h)
  player.update()
  player.draw();

  if(isPaused){
    pauseMenu();
  }

  // console.log(player.onGround)
}



function sceneSwitchCollisions(){
  if(rectColliding(player, lv1a2)) {
    inLVL_2 = true;
    lvl2();
    console.log("SCENE SWITCH");
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



