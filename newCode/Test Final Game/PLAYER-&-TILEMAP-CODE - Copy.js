/* prototype goals:
  -codifique the anmimation changes
  -add tiles (add a mess about room)
*/

let tilemap = [];
let numDown = 10;
let numAcross = 10;
let tileSize = 50;
let textures = [];


// Rafa's code //
let enemies = [];
let enemyImage;
//___________//


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

      console.log(this.canJump);
 
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


// RAFA'S CODE //

class Enemy {
  constructor(x, y, size, img) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.img = img;
    this.speed = 0.3 ; // Adjust speed as needed
  }

  update(playerX, playerY) {
    // Calculate the direction towards the player
    let dx = playerX - this.x;
    let dy = playerY - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    // Normalize the direction vector
    dx /= distance;
    dy /= distance;

    // Move the enemy towards the player
    this.x += dx * this.speed;
    this.y += dy * this.speed;

    let choice = floor(random(4));
    if (choice === 0) {
      this.x += this.speed;
    } else if (choice === 1) {
      this.x -= this.speed;
    } else if (choice === 2) {
      this.y += this.speed;
    } else {
      this.y -= this.speed;
    }
    this.x = constrain(this.x, 0, width - this.size);
    this.y = constrain(this.y, 0, height - this.size);

    
  }

  display() {
    image(this.img, this.x, this.y, this.size, this.size);
  }
}


function preload(){
  /* TILEMAP IMAGES */
  enemyImage = loadImage("enemy.png")
  textures[0] = loadImage("wood 2.jpg");
  textures[1] = loadImage("stone.png")
  textures[2] = loadImage("wall.png");
  textures[3] = loadImage("new door.PNG")
  textures[4] = loadImage("Thatch.PNG")
  textures[5] = loadImage("tile window.PNG")
  textures[6] = loadImage("image1x1.PNG")
  textures[7] = loadImage("image1x2.PNG")
  textures[8] = loadImage("image2x1.PNG")
  textures[9] = loadImage("image2x2.PNG")
  textures[10] = loadImage("new tree.png")
  textures[11] = loadImage("234 weapom.png")
  textures[12] = loadImage("wardrobe.PNG")
  textures[13] = loadImage("machine for dojo.png")

  idle = loadImage("temp-player.png");
  runR = loadImage("temp-player-run-right.png");
  runL = loadImage("temp-player-run-left.png");
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

    /*       TILEMAP CODE      */
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
    

  // RAFA'S CODE//
    for (let i = 0; i < 5; i++) {
      let x = random(width);
      let y = random(height);
      let enemy = new Enemy(x, y, 50, enemyImage); // Adjust size as needed
      enemies.push(enemy);
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
    

    /*                    Colisions for windowsills, they were getting in the way so i got rid of them            */
   
    // if(rectColliding(player, r8)) {
    //   player.vy = 0;
    //   player.onGround = true;
    // }
    // if(rectColliding(player, r9)) {
    //   player.vy = 0;
    //   player.onGround = true;
    // }
    //player.draw()

    /*       TILEMAP CODE      */

  for (let across = 0; across < numAcross; across++) {
    for (let down = 0; down < numDown; down++) {
      tilemap[across][down].display(); 
      //tilemap[across][down].debug(); 
    }
  }


  // RAFA'S CODE //
  for (let enemy of enemies) {
    enemy.update(player.x, player.y);
    enemy.display();
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