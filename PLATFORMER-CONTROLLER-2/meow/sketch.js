
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
    [2, 5, 0, 0, 0, 0, 0, 0, 5, 2], // 2
    [2, 10, 0, 0, 6, 8, 0, 0, 10, 2], // 3
    [2, 12, 0, 0, 7, 9, 0, 0, 12, 2], // 4    
    [2, 10, 0, 0, 0, 0, 0, 0, 10, 2], // 5
    [2, 5, 0, 0, 6, 8, 0, 0, 5, 2], // 6
    [2, 5, 0, 0, 7, 9, 0, 0, 5, 2], // 7
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 8
    [2, 13, 11, 0, 0, 0, 0, 11, 13, 2]  // 9
]

function preload() {
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
}

function setup() {
    createCanvas(500, 500);

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
    background(150, 75);
    
    
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap[across][down].display(); 
            tilemap[across][down].debug(); 
        }
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