/*             MENU VARIABLES            */
let isPaused = false;

function preload(){
  //TILES
  //nullTile (for end)
  textures[28] = loadImage("tiles/tile_.png");
  
//dani-dojo
  danny_dojo = loadImage("danny-dojo.png"); //made using the old tilemap so instead of remaking it I just screenshot it and put it in

  //My files (into-DOJO)
  textures[0] = loadImage("tiles/tile_wood-base.png");
  textures[1] = loadImage("tiles/tile_spikes_glimmer.gif");
  textures[2] = loadImage("tiles/tile_wood-post.png")
  textures[3] = loadImage("tiles/tile_platform_2.png")
  textures[4] = loadImage("tiles/tile_left-edge-wood-post.png")
  textures[22] = loadImage("tiles/tile_right-edge-wood-post.png"); 
  textures[23] = loadImage("tiles/tile_stone-darker.png");
  textures[24] = loadImage("tiles/tile_stone-platform.png");
  textures[25] = loadImage("tiles/tile_wood-platform-to-post-L.png");
  textures[26] = loadImage("tiles/tile_wood-platform-to-post-R.png")
  textures[27] = loadImage("tiles/tile_wood-platform.png");

  //cave1
  textures[10] = loadImage("tiles_pt2/cave bottom.PNG");
  textures[11] = loadImage("tiles_pt2/cave top.PNG")
  textures[12] = loadImage("tiles_pt2/cobble stone 1.PNG");
  textures[13] = loadImage("tiles_pt2/grassy cobble.PNG")
  textures[14] = loadImage("tiles_pt2/wooden plank.PNG")
  textures[15] = loadImage("tiles_pt2/background cave.PNG")
  textures[16] = loadImage("tiles_pt2/ladder.PNG")

  //dungeon
  textures[5] = loadImage("tiles_pt4/Capture.PNG");
  textures[6] = loadImage("tiles_pt4/spike top.PNG")
  textures[7] = loadImage("tiles_pt4/cobble stone 1.PNG");
  textures[8] = loadImage("tiles_pt4/spike.PNG");
  textures[9] = loadImage("tiles_pt4/wall.PNG");

  //moon 
  textures[17] = loadImage("tiles_pt3/grass.PNG");
  textures[18] = loadImage("tiles_pt3/moon.PNG")
  textures[19] = loadImage("tiles_pt3/stars 1.PNG");
  textures[20] = loadImage("tiles_pt3/stars 2.PNG");
  textures[21] = loadImage("tiles_pt3/cloud.PNG");

  //PLAYER
  playerSprite[0] = loadImage("player/ninja_assets copy/ninja_idle.png");
  playerSprite[1] = loadImage("player/ninja_assets copy/ninja-walk-R.gif");
  playerSprite[2] = loadImage("player/ninja_assets copy/ninja-walk-L.gif");
  playerSprite[3] = loadImage("player/ninja_assets copy/ninja_jump.png");
  playerSprite[4] = loadImage("player/ninja_assets copy/attack.gif");
  playerSprite[5] = loadImage("player/ninja_assets copy/ninja_jump_L.png");
  playerSprite[6] = loadImage("player/ninja_assets copy/ninja_idle_L.png");

  //ENEMEY
  enemyImage = loadImage("enemy.png")

}

function collisionDetection (){
  groundCollision();
  rightCollision();
  leftCollision();
  upCollision();

  switchSceneTrigger();
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

  // setSpawn();

  lvl_cave();
  lvl_dojo_1();
  lvl_dojo_2();
  lvl_dojo_3();
  lvl_dungeon();
  lvl_tsuki();
  dannyDojo();

 // enemeyCreate();
}
  
function draw() {
  noSmooth();
  loadScene();
  console.log(sceneIndex)
  //background(220);

  loadTriggers();
  loadColliders();
  displayTiles();

  if(sceneIndex == 5){
    endGameText();
  }


  //HARM OBJS:
  damageToPlayer();
  //console.log(player.playerHealth)

  collisionDetection();
  //playerSuperGlitchRespawn();
  // rect(player.x, player.y, player.w, player.h) to see where player was when there were sprite issues

  //ENEMY
  collisionsEnemyPlayer();
  enemeyDisplay();
  
  player.update();
  player.draw(); //want to draw player over the top of everything

  if(isPaused){
    pauseMenu();
  }

  // console.log(player.onGround)
}
function displayTiles(){
  for (let across = 0; across < numAcross; across++) {
    for (let down = 0; down < numDown; down++) {
        tilemap[across][down].display(); // runs display() method for each tile!
       // tilemap[across][down].debug(); // runs debug() method for each tile!
    }
   }
}
function loadTriggers(){
  trigger_1.draw();
  trigger_2.draw();
  trigger_3.draw();
}
function loadColliders(){
  r1.draw()
  r2.draw()
  r3.draw();
  r4.draw();
  r5.draw();
  r6.draw();
  r7.draw();
  r8.draw();
  r9.draw();
  r10.draw();
  r11.draw();
  r12.draw();
  r13.draw();
  r14.draw();
  r15.draw();
  r16.draw();
  r17.draw();
  r18.draw();
  r19.draw();
  r20.draw();
  r21.draw();

  spikes1.draw();
  spikes2.draw();
  
}



// function sceneSwitchCollisions(){
//   if(rectColliding(player, lv1a2)) {
//     inLVL_2 = true;
//     lvl2();
//     console.log("SCENE SWITCH");
//   }
// }
  
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
/*             MENUS            */
/*              |||             */
/*              vvv             */
/*                              */
//******************************//


function pauseMenu(){
  push();
  fill(0, 100)
    rect(0, 0, 500, 500);
  pop();

  isPaused = true;

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

function mousePressed (){
  if(isPaused && (mouseX > 392 && mouseX < 108) && (mouseY > 284 && mouseY < 310)){
    //sceneIndex = 0;
  }
  console.log(mouseX + "<-- mouseX, mouseY-->" + mouseY)
}

function mainMenu(){
  /*

  */
}

