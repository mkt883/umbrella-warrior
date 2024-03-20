// Rafas code //
let enemies = []; //Empty array to store enemies
let enemyImage; // Variable to hold enemy image




//Function to create the enemies
function enemeyCreate(){
    //Loop to create 5 enemy objects with random positions
    for (let i = 0; i < 5; i++) {
        let x = random(width); //Placed at random x-coordinate within canvas width
        let y = random(height); // Random y-coordinate within canvas height
        let enemy = new Enemy(x, y, 50, enemyImage); // Create a new Enemy object with random position and specified size of 50
        enemies.push(enemy); //This adds the enemy objects to the enemies array
      }
}

//for draw
function enemeyDisplay(){
    // Loop through all enemy objects in the enemies array
  for (let enemy of enemies) {
      // Update the enemy's position based on player's position
    enemy.update(player.x, player.y);
      //Displays enemy
    enemy.display();
  }
}

function collisionsEnemyPlayer(){
  for (let enemy of enemies) {
    enemy.update(player.x, player.y);
    enemy.display();

    // Check collision with player
    if (enemy.checkCollisionWithPlayer(player)) {
      // Reset player position
      player.reset();

      // Reset all enemies
      for (let enemy of enemies) {
        enemy.reset();
      }
    }

    for (let enemy of enemies) {
      if (player.isAttacking && player.hitbox && player.checkAttackCollisionWithEnemy(enemy)) {
          // Remove the enemy from the array
          let index = enemies.indexOf(enemy);
          if (index !== -1) {
              enemies.splice(index, 1);
          }
      }
  }
  }
}

class Enemy {
    constructor(x, y, size, img) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.img = img;
      this.speed = 0.3 ; 
 }

 checkCollisionWithPlayer(player) {
  // Calculate the distance between enemy and player
  let distance = dist(this.x, this.y, player.x, player.y);

  // Check if the distance is less than their size
  if (distance < (this.size + player.size) / 0.5) {
    // Collision detected
    return true;
  }
  return false;
  
}
reset() {
  // Reset enemy to its initial position
  this.x = random(width);
  this.y = random(height);
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

  class Player {
   
  
    reset() {
      // Reset player to its initial position
      this.x = 50;
      this.y = 50;

      player.vx = 0;
      player.vy = 0;
    }
  }
