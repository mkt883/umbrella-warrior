/*             LEVEL VARIABLES            */
let levels = {
    /*
      lvl1,
      lvl2,
     */
}

let inLVL_1 = true;
let inLVL_2 = false;

//SCENES
let sc1_graphicMap = [ 
//          Y AXIS
//   0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 
    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
    [2, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 2
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 4     X AXIS
    [2, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
    [2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0], // 6
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 7
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0], // 9
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 10
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 11
    [2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0], // 12
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 13
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 14    
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2], // 15
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 16
    [2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 17
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 18
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  // 19
]

let sc2_graphicMap = [ 
    //          Y AXIS
    //   0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 0
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 1
        [2, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 2
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 3
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 4     X AXIS
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 5
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 6
        [2, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2], // 7
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 8
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 9
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 10
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 11
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 12
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 13
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 14    
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 15
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 16
        [2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2], // 17
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2], // 18
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  // 19
]

let sc3_graphicMap = [ 
    //          Y AXIS
    //   0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 
        [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 0
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 1
        [0, 3, 3, 3, 3, 0, 0, 3, 3, 3, 0, 2, 3, 3, 3, 0, 0, 0, 0, 2], // 2
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2], // 3
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2], // 4     X AXIS
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2], // 5
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 6
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 7
        [2, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2], // 8
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 9
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 10
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 11
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 12
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 13
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 14    
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 15
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 16
        [2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2], // 17
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2], // 18
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  // 19
]

//******************************//
/*                              */
/*          LEVEL CODE          */
/*              |||             */
/*              vvv             */
/*                              */
//******************************//

function loadLevel(levelToload) {

}

function lvl1(){
    if(inLVL_1){
        inLVL_2 = false;

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
          let textureNum = sc1_graphicMap[down][across];

  
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
  r9 = new rectangle(400, 225, 50, 20)

  // playerSprite[0] = idle;
  // playerSprite[1] = runL;
  // playerSprite[2] = runR;

  //DANGER ELEMENT RECTANGLES:
  //SPIKES:
  spikes1 = new rectangle(75, 440, 50, 15)

  //SCENE SWITCH RECTANGLE TRIGGERS:
  lv1a2 = new rectangle(475, 400, 50, 75);

  spikes1.draw();

   r1.draw()
   r2.draw()
   r3.draw();
   r4.draw();
   r5.draw();
   r6.draw();
   r7.draw();
   r8.draw();
   r9.draw();
    }else if(!inLVL_2){
        lvl2();
    }
}

function lvl2(){
    if(inLVL_2){
        //reset player speed so he doesn't shoot off screen & then reset spawn point
        player.vx = 0;
        player.vy = 0;
        player.x = 25;
        player.y = 25;
    
  //CREATING TILES
  let tileID = 0; // sets our tileID for the first tile we'll make

  //Creates all tiles
  for (let across = 0; across < numAcross; across++) {
      tilemap[across] = [];
      for (let down = 0; down < numDown; down++) {
          let x = across * tileSize; // multiplies across value by tileSize to get pixel position on x axis
          let y = down * tileSize; // multiplies down value by tileSize to get pixel position on y axis

          //Setting Texture For Tile
          let textureNum = sc2_graphicMap[down][across];

  
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