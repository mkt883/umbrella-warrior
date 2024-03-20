let tileSize = 50;
let rows, cols;
let dungeonMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
let enemies = [];
let enemyImage;


function preload() {
    // Load the image for the enemy sprite
    enemyImage = loadImage('enemy.png');
}

function setup() {
    createCanvas(500, 500);
    rows = dungeonMap.length;
    cols = dungeonMap[0].length;

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

}

function draw() {
    background(220);

    // Draw dungeon tiles
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (dungeonMap[y][x] === 1) {
                fill(50); // Wall color
                rect(x * tileSize, y * tileSize, tileSize, tileSize);
            } else {
                fill(255); // Floor color
                rect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
        }
    }

    // Move each enemy sprite
    for (let enemy of enemies) {
        moveEnemy(enemy);
        // Draw the enemy sprite
        image(enemyImage, enemy.x, enemy.y, 40, 40); // Size
    }
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

// Function to check collision with walls
function collidesWithWalls(x, y) {
    let tileX = floor(x / tileSize);
    let tileY = floor(y / tileSize);
    return dungeonMap[tileY][tileX] === 1;
}
