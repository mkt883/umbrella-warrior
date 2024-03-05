/* prototype goals:
  -codifique the anmimation changes
  -add tiles (add a mess about room)
*/

let tilemap = [];
let numDown = 10;
let numAcross = 10;
let tileSize = 50;
let textures = [];

let graphicMap = [ 
//         
//   0  1  2  3  4  5  6  7  8  9 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // 0
    [2, 5, 0, 11, 10, 10, 11, 0, 5, 2], // 1
    [0, 5, 0, 0, 0, 0, 0, 0, 5, 0], // 2
    [0, 10, 0, 0, 6, 8, 0, 0, 10, 0], // 3
    [0, 12, 0, 0, 7, 9, 0, 0, 12, 0], // 4    
    [0, 10, 0, 0, 0, 0, 0, 0, 10, 0], // 5
    [0, 5, 0, 0, 6, 8, 0, 0, 5, 0], // 6
    [2, 5, 0, 0, 7, 9, 0, 0, 5, 2], // 7
    [3, 13, 11, 0, 0, 0, 0, 11, 13, 3], // 8
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]  // 9
]

/*              ENEMY VARIABLES           */
let rows, cols;
let enemies = [];
let enemyImage;

/*            PLAYER VARIABLES + OBJECT           */
let playerSprite = [1, 2, 3];
let idle;
let runL;
let runR;

let player = {
    x: 100,
    y: 100,
    vx: 0, 
    vy: 0,
    w: 30,
    h: 50,
    onGround: false,
    canJump: false,
    jumpCount: 1,
    maxJump: 7,
    draw: function() {
      image(idle,/* rect(*/this.x, this.y, this.w, this.h)
    },
    update: function() {
      if(!player.onGround) this.vy += 0.5;  // Gravity
      /* Jumping:
      different height variables: variable beight based on key press time
      have it so whilst the key is down, player.vy gradualy decreases until it reaches max jump height
      */

      if(keyIsDown(UP_ARROW)&& player.canJump){
        player.jump = true;
        player.onGround = false;
        player.vy = -7;
        player.jumpAmount--;
        playerSprite = image(idle, this.x, this.y, this.w, this.h)
      }

      //console.log(this.canJump);
 
      this.y += this.vy
      if(keyIsDown(LEFT_ARROW)){
        /*if(player.onGround)*/ this.vx -= 0.9
        playerSprite = image(runL, this.x, this.y, this.w, this.h)
      } 
      if(keyIsDown(RIGHT_ARROW)){
        /*if(player.onGround)*/this.vx += 0.9
        playerSprite = image(runR, this.x, this.y, this.w, this.h)
      }
      
      this.x += this.vx 
      this.x *= 0.9

      if(this.onGround && this.jumpCount === 1){
        this.canJump = true;
      }else{
        this.canJump = false;
      }

    }
}

function preload(){
  /* TILEMAP IMAGES */
  textures[0] = loadImage("meow/wood 2.jpg");
  textures[1] = loadImage("meow/stone.png")
  textures[2] = loadImage("meow/wall.png");
  textures[3] = loadImage("meow/new door.PNG")
  textures[4] = loadImage("meow/Thatch.PNG")
  textures[5] = loadImage("meow/tile window.PNG")
  textures[6] = loadImage("meow/image1x1.PNG")
  textures[7] = loadImage("meow/image1x2.PNG")
  textures[8] = loadImage("meow/image2x1.PNG")
  textures[9] = loadImage("meow/image2x2.PNG")
  textures[10] = loadImage("meow/new tree.png")
  textures[11] = loadImage("meow/234 weapom.png")
  textures[12] = loadImage("meow/wardrobe.PNG")
  textures[13] = loadImage("meow/machine for dojo.png")

  //ENEMY
  enemyImage = loadImage('enemy.png');

  //PLAYER
  idle = loadImage("playerSprites/temp-player.png");
  runR = loadImage("playerSprites/temp-player-run-right.png");
  runL = loadImage("playerSprites/temp-player-run-left.png");
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



     /*                   ENEMY CODE                  */

    rows = graphicMap.length;
    cols = graphicMap[0].length;

    // Create 5 enemy sprites and position them randomly
   for (let i = 0; i < 5; i++) {
    let enemy;
    do {
        enemy = {
            x: random(width),
            y: random(height),
            speed: 1, 
            dx: random(-1, 1),
            dy: random(-1, 1)
        };
    } while (collidesWithWalls(enemy.x + 20, enemy.y + 20)); // Checking the center of the enemy sprite
    enemies.push(enemy);
    
}

    /*                        TILEMAP CODE                     */
    let tileID = 0; 
    
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            let x = across * tileSize; 
            let y = down * tileSize; 

            
            let textureNum = graphicMap[down][across];

    
            tilemap[across][down] = new Tile(textures[textureNum], x, y, tileSize, tileID); 
            tileID++;
        }
    }
  }
  
function draw() {
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
    if(rectColliding(player, r1)) {
      player.vy = 0;
      player.onGround = true;
    }
    
    if(rectColliding(player, r2)) {
      player.vy = 0;
      player.onGround = true;
    }

    if(rectColliding(player, r3)) {
      player.vy = 0;
      player.onGround = true;
    }
    if(rectColliding(player, r4)) {
      player.vy = 0;
      player.onGround = true;
    }
    if(rectColliding(player, r5)) {
      player.vy = 0;
      player.onGround = true;
    }
    if(rectColliding(player, r6)) {
      player.vy = 0;
      player.onGround = true;
    }
    if(rectColliding(player, r7)) {
      player.vy = 0;
      player.onGround = true;
    }
    /*
    if(rectColliding(player, r8)) {
      player.vy = 0;
      player.onGround = true;
    }
    if(rectColliding(player, r9)) {
      player.vy = 0;
      player.onGround = true;
    }
    */
    //player.draw()

      // console.log("is touching r1? "+rectColliding(player, r1));
      // console.log("is touching r2? "+rectColliding(player, r2));
      console.log("is touching r3? "+rectColliding(player, r3));

  /*                ENEMY CODE                    */
    // Move each enemy sprite
    for (let enemy of enemies) {
      moveEnemy(enemy);
      // Draw the enemy sprite
      image(enemyImage, enemy.x, enemy.y, 40, 40); // Size
    }

    // Function to move an enemy sprite
function moveEnemy(enemy) {
  let nextX = enemy.x + enemy.dx * enemy.speed;
  let nextY = enemy.y + enemy.dy * enemy.speed;

  // Check for collisions with walls
  if (!collidesWithWalls(nextX + 20, nextY + 20)) {
      enemy.x = nextX;
      enemy.y = nextY;
  } else {
      // Change direction randomly
      enemy.dx = random(-1, 1);
      enemy.dy = random(-1, 1);
  }

  // Keep the enemy within the canvas bounds
  enemy.x = constrain(enemy.x, 0, width - 40); 
  enemy.y = constrain(enemy.y, 0, height - 40);
}
    /*       TILEMAP CODE      */

  for (let across = 0; across < numAcross; across++) {
    for (let down = 0; down < numDown; down++) {
      tilemap[across][down].display(); 
      //tilemap[across][down].debug(); 
    }
  }

  player.update()
  player.draw();
}
  
function rectColliding(rect1, rect2) {
    if (
      rect1.x < rect2.x + rect2.w &&
      rect1.x + rect1.w > rect2.x &&
      rect1.y < rect2.y + rect2.h &&
      rect1.h + rect1.y > rect2.y
    ) {
      return true
    } else {
      return false
    }
}

// // Function to check collision with walls
// function collidesWithWalls(x, y) {
//   let tileX = floor(x / tileSize);
//   let tileY = floor(y / tileSize);
//   return graphicMap[tileY][tileX] === 1;
// }

class Tile {
  constructor(texture, x, y, tileSize, tileID) { 
      this.texture = texture; 
      this.x = x;
      this.y = y;
      this.tileSize = tileSize;
      this.tileID = tileID;
  }

  display() {
      
      noStroke();
      image(this.texture, this.x, this.y, this.tileSize, this.tileSize)
  }

  debug() {
      
      stroke(0);
      noFill();
      rect(this.x, this.y, this.tileSize, this.tileSize); 
  } 
}