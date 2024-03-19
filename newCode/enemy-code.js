// Rafa's code //

// Needs to be copy and pasted in to main code and modified so that enemy moves faster in higher levels. Also needs to implement score system,
// a dying and resetting level function for the player using collisions, and a dying function for the enemy.//

// So far enemies spawn in at random positions and follow the player wherever he goes.//
let enemies = [];
let enemyImage;



class Enemy {
  constructor(x, y, size, img) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.img = img;
    this.speed = 0.3 ; 
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
 
  enemyImage = loadImage("enemy.png")
}

function setup() {
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let enemy = new Enemy(x, y, 50, enemyImage);
    enemies.push(enemy);
  }

}

function draw() {
   for (let enemy of enemies) {
    enemy.update(player.x, player.y);
    enemy.display();
  }

  player.update()
  player.draw();
}