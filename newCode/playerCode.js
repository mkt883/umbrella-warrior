/*            PLAYER VARIABLES + OBJECT           */


/*
  MAIN ISSUES:
    - Collisions are weak & bouncy
    - animations overlay sometimes (e.g. don't want run animation when jumping)
    - Difficluty w flipping the player (for now have independent sprites but they overlay still)

    - add hearts/lives
      - store hearts in an array, when you lose health use pop();
*/


let playerSprite = [1, 2, 3, 4, 5, 6];
// let playerHealthSprite = [1, 2, 3];

let groundCol;
let leftCol;
let rightCol;
let upperCol;

let isTouching; //is touching rect colliders

let isFacingLeft;
let isFacingRight = true;

//Main player object
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
    isAttacking: false,
  //   isIdle: true,
    
    //Attack variables
    width: 50, // Temp for testing
    height: 100, // Temp for testing
    hitbox: null, // Hitbox is not visible when not attacking
  
    draw: function() {
      if(!this.isMoving && !this.isJumping && !this.isAttacking){
        if(isFacingRight){
            image(playerSprite[0],this.x, this.y, this.w, this.h);
        }
        if(isFacingLeft){
            image(playerSprite[6],this.x, this.y, this.w, this.h);
        }
      }
    //   if(!this.isMoving && !this.isJumping && !this.isAttacking && isFacingLeft){
    //   }
      push();
        noFill();
        rect(this.x, this.y+5, this.w, this.h-5)
      pop();
      //console.log(this.isAttacking)
      
      // red square for hitbox --> changed to attack anim
      if (this.hitbox) {
          //fill(255, 0, 0);
          noFill();
          noStroke();
          image(playerSprite[4], player.x, player.y, player.w, player.h)
          rect(this.x-8, this.y, this.hitbox.width, this.hitbox.height);
      }else{
        this.isAttacking = false;
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
      this.isAttacking = true;
      // Remove the hitbox after press (chose 1/2 a second)
      setTimeout(() => this.hitbox = null, 500);
    },
    update: function() {
      if(!player.onGround){this.vy += 0.5; }  // Gravity
     
      //Jumping
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
        // scale(-1, 1)
      }
      if(keyIsDown(RIGHT_ARROW)){
        this.vx += 0.9
      }
      
      if((keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW)) && this.onGround && !this.isJumping && !this.isAttacking){
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
      if(!this.onGround && !this.isAttacking){
        this.isJumping = true;
      }else{
        this.isJumping = false;
      }
  
      if(this.isJumping && isFacingLeft){
        image(playerSprite[5], this.x, this.y, this.w, this.h);
      }else if(this.isJumping && isFacingRight){ 
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
//Trying to detect which direction the player is facing
function keyReleased(){
  if(keyCode === 37) /*&& (player.isJumping || !player.onGround)*/{
    // image(playerSprite[5], player.x, player.y, player.w, player.h);
    isFacingLeft = true;
    isFaingRight = false;
  }else if(keyCode === 39){
    isFacingRight = true;
    isFacingLeft = false;
  }
}

//******************************//
/*                              */
/*     PLAYER COLLISION CODE    */
/*              |||             */
/*              vvv             */
/*                              */
//******************************//


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