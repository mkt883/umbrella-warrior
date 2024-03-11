//Player attack action - needs to be integrated within main code


//This is my basic attack ation that we will integrate into the game. 
//The hitbox appears in both directions as player enemies may attack from both sides.
//Need to add collision mechanics with enemies 
// class Enemy {
//   constructor(x, y) {
//       this.x = x;
//       this.y = y;
//       this.width = 50;
//       this.height = 100;
//       this.isAlive = true;
//   }

//   show() {
//       if (this.isAlive) {
//           fill(0, 255, 0); // Green for enemy
//           rect(this.x, this.y, this.width, this.height);
//       }
//   }
// }

class Player {
  constructor() {
      this.x = 125; // player does not move for now
      this.y = 100;
      this.width = 50; // Temp for testing
      this.height = 100; // Temp for testing
      this.hitbox = null; // Hitbox is not visible when not attacking
  
    //   // checkCollision(enemy); {
    //     if (this.hitbox && enemy.isAlive) {
    //         if (this.hitbox.x < enemy.x + enemy.width &&
    //             this.hitbox.x + this.hitbox.width > enemy.x &&
    //             this.hitbox.y < enemy.y + enemy.height &&
    //             this.hitbox.y + this.hitbox.height > enemy.y) {
                
    //             // if collision detected, null the enemy
    //             enemy.isAlive = false;
    //         }
    //     }
    // }  
}

  attack() {
      // Here I will make the hitbox
      this.hitbox = {
          x: this.x - 25, // Centering the hitbox on player to attack in both directions
          y: this.y,
          width: 100,
          height: this.height
      };

      // Remove the hitbox after press (chose 1/4 a second)
      setTimeout(() => this.hitbox = null, 250);
  }

  show() {
      // basic blue rectangle for player
      fill(0, 0, 255);
      rect(this.x, this.y, this.width, this.height);

      // red square for hitbox
      if (this.hitbox) {
          fill(255, 0, 0);
          rect(this.hitbox.x, this.hitbox.y, this.hitbox.width, this.hitbox.height);
      }
  }
}

let player;
// let enemy;

function setup() {
  //made a basic canvas to show how the attack works 
  createCanvas(300, 300); 
  background(128, 128, 128); 
  player = new Player();
  // enemy = new Enemy(190, 100);
}

function draw() {
  background(128, 128, 128); // Redraw background to clear previous frames
  player.show();
  // player.checkCollision(enemy);
  // enemy.show ();
}

function keyPressed() {
  if (keyCode === 32) {
      player.attack();
  }
}
