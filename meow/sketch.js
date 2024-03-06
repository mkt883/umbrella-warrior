
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
    textures[0] = loadImage("meow/wooden planks.png");
    textures[1] = loadImage("meow/cobblestone.png")
    textures[2] = loadImage("meow/cobblestone.png");
    textures[3] = loadImage("meow/door.png")
    textures[4] = loadImage("meow/roof.png")
    textures[5] = loadImage("meow/japan window.png")
    textures[6] = loadImage("meow/top left corner.png")
    textures[7] = loadImage("meow/bottom left corner.png")
    textures[8] = loadImage("meow/top right corner.png")
    textures[9] = loadImage("meow/bottom right corner.png")
    textures[10] = loadImage("meow/finished tree.PNG")
    textures[11] = loadImage("meow/sword rack.png")
    textures[12] = loadImage("meow/wardrobe new ting.PNG")
    textures[13] = loadImage("meow/vending machen.png")
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