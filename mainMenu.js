
let img;
let font;
let rainY = [];
let speeds = []
let currentScreen = 'menu';

function lore() {
    currentScreen = 'lore';
    // I will write the story lore in here.
}
function tutorial() {
    currentScreen = 'tutorial';
    // I will add a tutorial for the game here.
}
function credits() {
    currentScreen = 'credits';
    //I will add simple credits in here.
}
function backToMenu() {
    currentScreen = 'menu';
}
function preload() {
    img = loadImage("umbrellaWarriorMenu.png");
    font = loadFont("8bit16.ttf");
    for (let i = 0; i < 25; i++) {
        rainY[i] = random(-500, -50); // Start above the canvas
        speeds[i] = random(2, 5); // Different speeds for each raindr
    }
}
// function setup() {
//     createCanvas(500,500);
//     background(0);
// }
function draw() {

    switch (currentScreen) {
        case 'menu':
            drawMenu();
            break;
        case 'lore':
            drawLoreScreen();
            break;
        case 'tutorial':
            drawTutorialScreen();
            break;
        case 'credits':
            drawCreditsScreen();
            break;
        case 'play':
            drawGameScreen();
            break;
        default:
            drawBackToMenu();
            break;
    }
}
function drawMenu() {
background (img)
// Draw and update raindrops - taken from a previous art piece I made with falling circles
for (let i = 0; i < rainY.length; i++) {
    let x = random(width); // Random x position each time
    fill(255);
    rect(x, rainY[i], 2, 5); // Small rectangles for raindrops
    rainY[i] = (rainY[i] + speeds[i]);
    if (rainY[i] > height) {
        rainY[i] = random(-100, -10); // Reset above canvas
    }
}
     //I have split the text and the rain into 2 draw functions
     drawMenuText();
  
   function drawMenuText (){
    textFont(font);
    textStyle(BOLD);
    fill(255); //
    textAlign(RIGHT, BOTTOM); // Align text to the bottom right
     
    textSize(52); // Size of the text
    text('PLAY', width - 20, height - 150);
    
    textSize(32);
    text('Lore', width - 20, height - 110);
    text('Tutorial', width - 20, height - 70);
    text('Credits', width - 20, height - 30);
  }
}
//My code below reads the mouse position for clicking thru the menu options
function isMouseOverText(x, y, w, h) {
    return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}
//This is a simple mouse pressed funtion to navigate the menu
function mousePressed() {
    console.log("mouseX: " + mouseX + "mouseY: " + mouseY)
    if (currentScreen === 'menu') {
        if (mouseX > width - 250 && mouseX < width - 20) {
            if (mouseY > height - 130 && mouseY < height - 110) {
                lore();
            } else if (mouseY > height - 90 && mouseY < height - 70) {
                tutorial();
            } else if (mouseY > height - 50 && mouseY < height - 30) {
                credits();
            }
        }
    } else {
        if (mouseX > 130 && mouseX < 370 && mouseY > 430 && mouseY < 450) {
            backToMenu();

            if (currentScreen === 'lore' || currentScreen === 'tutorial' || currentScreen === 'credits') {
    
                if (isMouseOverText(20, height - 50, 200, 30)) {
                    backToMenu();
                }
            }
        }
    }
    //MARK ADDED CODE
    if ((mouseX > 318 && mouseX < 472) && (mouseY > 311 && mouseY < 354)) {
        sceneIndex = 1;
        console.log("you boutta pla...")
    }
}
//this adds a back to menu button on each screen
function drawBackToMenu() {
    background(0);
    textFont(font);
    textStyle(BOLD);
    fill(255);
    textSize(24);
    text('BackToMenu', width/2, 450);
    textAlign (CENTER)
//lore screen function    
}
function drawLoreScreen() {
    drawBackToMenu();
    background(0); 
    textFont("courier new");
    fill(255);
    textSize(14);
    textAlign(CENTER, CENTER);
    text("LORE", width / 2, 40); //screen title
   

    //I've created the text as an array for easier formatting
    let loreText = ["In the shadowed alleys of Edo,",
    "a lone warrior treads silently, fueled by a vengeful heart.",
    "His world was once brightened by his love;",
    "her beauty and grace, only matched buy her kindness.",
    "When she was lost, his world turned to darkness.",
    "He now moves in shadow.",
    "Wielding the umbrella that she once twirled so gently...",
    "He carves through any foe that crosses his path",
    "hellbent on finding the one who struck her down!",
    ,
    ,
    ,
    "Back to Menu"
        ];
    
    let textY = 80; //starting position of text
    for (let i = 0; i < loreText.length; i++) {
        text(loreText[i], width / 2, textY);
        textY += 30; 
    }
   
//tutorial screen function
}
function drawTutorialScreen() {
    background(0); 
    textFont("courier new");
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Tutorial", width / 2, 40);//screen title
   
//I've created the text as an array for easier formatting
    let tutorialText = [,
        "HOW TO PLAY:",
        ,
    "1. USE THE ARROW KEYS TO MOVE",
    "2. PRESS THE UP ARROW TO JUMP",
    "3. PRESS SPACE BAR", 
    "TO SWING YOUR UMBRELLA",
    "4. PRESS X TO FIRE YOUR SHRYUKEN",
    "5. DON'T GET HIT!!",

    "BACK TO MENU"
    ];
    
    let textY = 80; //starting position of text
    for (let i = 0; i < tutorialText.length; i++) {
        text(tutorialText[i], width / 2, textY);
        textY += 40; 
    }
   
}
//credits screen function
function drawCreditsScreen() {
    background(0); 
    textFont("courier new");
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Credits", width / 2, 40); //screen title
    
//I've created the text as an array for easier formatting    
    let creditsText = [,
        "BIG BACKFLIP GAMES:",
        ,
    "MARK TAYLOR-CHACKSFIELD",
    "RAFA HAATAJA",
    "DANNY MATTHEWS",
    "THOMAS JEFFRIES",
    ,
    ,
    "BACK TO MENU"
    ];
    
    let textY = 80; //starting position of text
    for (let i = 0; i < creditsText.length; i++) {
        text(creditsText[i], width / 2, textY);
        textY += 40; 
    }
}

function loadGame(){
    
}
