let sceneIndex = 1;

let danny_dojo;

/*            TILEMAP STUFF              */
let tilemap = [];
let numDown = 20;
let numAcross = 20;
let tileSize = 25;
let textures = [];

//graphic maps
let cave_graphicMap = [ 
    //          Y AXIS
    //   0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 
    [13, 13, 12, 13, 12, 13, 13, 12, 13, 12, 13, 12, 13, 12, 12, 13, 12, 13, 13, 12], // 0
    [13, 11, 11, 15, 11, 15, 11, 15, 15, 11, 11, 11, 15, 15, 11, 11, 15, 11, 11, 11], // 1
    [12, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15], // 2
    [12, 15, 15, 15, 15, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14], // 3
    [12, 15, 15, 15, 15, 15, 15, 15, 15, 16, 15, 15, 15, 15, 15, 15, 16, 15, 15, 12], // 4     X AXIS
    [12, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 15, 15, 12], // 5
    [12, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 12], // 6
    [12, 15, 15, 16, 15, 15, 15, 15, 15, 16, 15, 15, 14, 14, 14, 15, 15, 15, 15, 12], // 7
    [13, 15, 15, 16, 15, 15, 15, 15, 15, 16, 15, 15, 15, 15, 16, 15, 15, 10, 10, 12], // 8
    [12, 15, 15, 15, 15, 15, 15, 15, 15, 16, 15, 15, 15, 15, 15, 15, 15, 12, 12, 13], // 9
    [12, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 12], // 10
    [12, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 10, 10, 15, 10, 12], // 11
    [12, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 13, 13, 13, 12, 12, 12, 12], // 12
    [13, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 10, 12, 12, 12, 13, 13, 12, 12], // 13
    [13, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 12, 13, 12, 12, 13, 12, 13, 12, 13], // 14    
    [12, 15, 15, 15, 15, 15, 15, 15, 10, 12, 12, 12, 13, 12, 12, 12, 12, 12, 12, 13], // 15
    [12, 15, 15, 15, 15, 15, 15, 13, 12, 12, 12, 12, 12, 13, 13, 12, 13, 12, 12, 12], // 16
    [13, 10, 15, 10, 15, 10, 10, 13, 12, 13, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12], // 17
    [13, 12, 12, 12, 13, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 12, 13, 12], // 18
    [13, 13, 12, 12, 12, 12, 12, 13, 13, 12, 12, 12, 13, 13, 12, 12, 12, 12, 13, 13]  // 19
]

let dungeon_graphicMap = [ 
    //          Y AXIS
    //   0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 
        [7, 7, 6, 6, 6, 5, 5, 6, 6, 5, 5, 6, 6, 5, 5, 6, 6, 6, 7, 7], // 0
        [7, 7, 9, 9, 9, 6, 6, 9, 9, 5, 5, 9, 9, 6, 6, 9, 9, 9, 7, 7], // 1
        [7, 7, 9, 9, 9, 9, 9, 9, 9, 6, 6, 9, 9, 9, 9, 9, 9, 9, 7, 7], // 2
        [7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7], // 3
        [7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7], // 4     X AXIS
        [7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7], // 5
        [7, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7, 7], // 6
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], // 7
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], // 8
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], // 9
        [7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7], // 10
        [7, 7, 7, 6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 6, 7, 7, 7], // 11
        [7, 7, 6, 9, 9, 5, 5, 5, 9, 9, 9, 9, 5, 5, 5, 9, 9, 6, 7, 7], // 12
        [7, 7, 9, 9, 9, 5, 5, 5, 9, 9, 9, 9, 5, 5, 5, 9, 9, 9, 7, 7], // 13
        [7, 7, 9, 9, 9, 5, 5, 5, 9, 9, 9, 9, 5, 5, 5, 9, 9, 9, 7, 7], // 14    
        [7, 7, 9, 9, 9, 5, 5, 5, 9, 9, 9, 9, 5, 5, 5, 9, 9, 9, 7, 7], // 15
        [7, 7, 9, 9, 9, 5, 5, 5, 9, 9, 9, 8, 5, 5, 5, 9, 9, 9, 7, 7], // 16
        [7, 7, 9, 9, 8, 5, 5, 5, 9, 9, 9, 5, 5, 5, 5, 9, 9, 9, 7, 7], // 17
        [7, 7, 9, 8, 5, 5, 5, 5, 8, 9, 9, 5, 5, 5, 5, 8, 9, 8, 7, 7], // 18
        [7, 7, 8, 5, 5, 5, 5, 5, 5, 8, 8, 5, 5, 5, 5, 5, 8, 5, 7, 7]  // 19
]

let sc1_graphicMap = [ 
    //          Y AXIS
    //   0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 
        [4, 0, 0, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 26], // 0
        [4, 0, 0, 27, 27, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22], // 1
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22], // 2
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22], // 3
        [4, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 3, 0, 3, 3, 0, 0, 0, 22], // 4     X AXIS
        [25, 27, 27, 27, 27, 3, 3, 24, 24, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 22], // 5
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 22], // 6
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 22], // 7
        [4, 0, 0, 0, 25, 27, 3, 3, 3, 27, 26, 0, 0, 0, 0, 0, 0, 0, 0, 22], // 8
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 22], // 9
        [4, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 22], // 10
        [4, 3, 0, 0, 0, 2, 0, 0, 0, 0, 25, 27, 27, 27, 3, 3, 3, 3, 27, 26], // 11
        [4, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22], // 12
        [4, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22], // 13
        [4, 0, 0, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22], // 14    
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22], // 15
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], // 16
        [25, 27, 27, 27, 27, 27, 27, 27, 27, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0], // 17
        [25, 27, 27, 27, 27, 27, 27, 27, 27, 23, 23, 23, 0, 0, 0, 0, 0, 0, 0, 0], // 18
        [25, 27, 27, 27, 27, 27, 27, 27, 27, 23, 23, 23, 27, 27, 27, 27, 27, 27, 27, 26]  // 19
]
    
let sc2_graphicMap = [ 
    //          Y AXIS
    //   0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 0
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 1
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

let tsuki_graphicMap = [ 
    //          Y AXIS
    //   0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 
    [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21], // 0
    [21, 21, 21, 21, 21, 21, 19, 19, 19, 19, 19, 19, 19, 19, 21, 21, 21, 21, 21, 21], // 1
    [19, 19, 19, 20, 19, 19, 19, 20, 19, 19, 19, 19, 19, 20, 19, 19, 19, 19, 19, 19], // 2
    [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19], // 3
    [19, 19, 20, 19, 20, 19, 19, 20, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19], // 4     X AXIS
    [19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 19, 19, 20, 20, 20, 21, 21, 19, 19, 19], // 5
    [19, 19, 20, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 21, 21, 21, 21, 19, 19], // 6
    [19, 19, 19, 19, 21, 19, 19, 19, 20, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19], // 7
    [19, 19, 19, 21, 21, 21, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19], // 8
    [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 19, 19], // 9
    [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19], // 10
    [19, 19, 19, 20, 19, 19, 19, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19], // 11
    [19, 19, 19, 19, 19, 19, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19], // 12
    [19, 20, 19, 19, 19, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19], // 13
    [20, 19, 19, 19, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 20], // 14    
    [20, 20, 19, 19, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 20, 20], // 15
    [20, 20, 20, 19, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 20, 20, 20], // 16
    [17, 17, 17, 20, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 20, 17, 17, 17], // 17
    [17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17], // 18
    [17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17]  // 19
]

let sc5 = [ 
    //          Y AXIS
    //   0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 0
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 1
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 2
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 3
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 4     X AXIS
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 5
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 6
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 7
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 8
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 9
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 10
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 11
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 12
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 13
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 14    
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 15
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 16
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 17
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // 18
    [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28]  // 19
]


function loadScene(){
    if(sceneIndex === 0){
        inMainMenu = true;
    } 
    if(sceneIndex === 1){
        lvl_cave();
    }
    if(sceneIndex === 2){
        lvl_dojo_1();
    }
    /*
    Other levels with the dojo tileset i was going to make but didn't have enough time
    
        if(sceneIndex === 3){
            lvl_dojo_2();  
        }
        if(sceneIndex === 4){
            lvl_dojo_3();
        } 
    */
    if(sceneIndex === 3){
        lvl_dungeon();
    }
    if(sceneIndex === 4){
        lvl_tsuki();
    }
    if(sceneIndex === 5){
        lvl_sc5();
    }
    if(sceneIndex === 6){
        dannyDojo();
    }

    if(sceneIndex > 0){
        inMainMenu = false;
    }
}

/*for debug purposes
function mousePressed(){
    // sceneIndex++
}*/
// function setSpawn(){
//     if(sceneIndex === 1){
//         player.x = 25;
//         player.y = 350;
//         player.vx = 0;
//         player.vy = 0;
//     }
// }

function switchSceneTrigger(){
    // if(sceneIndex === 1){
     
    // }
    if(rectColliding(player, trigger_1)&& sceneIndex === 1){
        sceneIndex = 2;

        player.x = 50;
        player.y = 50;
        player.vx = 0;
        player.vy = 0;
        enemeyDisplay();
        enemeyCreate();
    }
    if(rectColliding(player, trigger_2)&& sceneIndex === 2){
        sceneIndex = 6;

        player.x = 50;
        player.y = 300;
        player.vx = 0;
        player.vy = 0;
        enemeyDisplay();
        enemeyCreate();
    }
    if(rectColliding(player, trigger_4)&& sceneIndex === 6){
        sceneIndex = 3;

        player.x = 25;
        player.y = 190;
        player.vx = 0;
        player.vy = 0;
        enemeyDisplay();
        enemeyCreate();
    }
    if(rectColliding(player, trigger_3) && sceneIndex === 3){
        sceneIndex = 4;

        player.x = 25;
        player.y = 300;
        player.vx = 0;
        player.vy = 0;
        // enemeyDisplay();
        // enemeyCreate();
    }
    if(rectColliding(player, trigger_4) && sceneIndex === 4){
        sceneIndex = 5;
        // enemeyDisplay();
        // enemeyCreate();
    }
}

//******************************//
/*                              */
/*        LEVEL FUNCTIONS       */
/*              |||             */
/*              vvv             */
/*                              */
//******************************//

function lvl_cave(){
    //generate tilemap
    let tileID = 0;
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            let x = across * tileSize; // multiplies across value by tileSize to get pixel position on x axis
            let y = down * tileSize; // multiplies down value by tileSize to get pixel position on y axis

            //Setting Texture For Tile
            let textureNum = cave_graphicMap[down][across];

            tilemap[across][down] = new Tile(textures[textureNum], x, y, tileSize, tileID); // THIS LINE CREATES OUR NEW TILE!

            tileID++;
        }
    }

    r1 = new rectangle(0, 450, 175, 100); //GROUND 1

    r2 = new rectangle(-25, 0, 50, 500); //left wall
    r3 = new rectangle(0, -25, 500, 50); //ceiling
    r4 = new rectangle(475, 75, 50, 475); //right wall

    r5 = new rectangle(175, 400, 50, 125); //step 1
    r6 = new rectangle(225, 375, 50, 150); //step 2
    r7 = new rectangle(275, 350, 50, 175); //step 3
    r8 = new rectangle(325, 300, 150, 250); //step 4
    r9 = new rectangle(425, 225, 75, 25); //stone platform

    r10 = new rectangle(25, 150, 275, 25); //wood planks platform 1a (long)
    r11 = new rectangle(300, 175, 75, 25); //wood planks platform 1b (short)
    r12 = new rectangle(225, 75, 250, 25); //wood planks platform 2

    trigger_1 = new rectangle(475, 25, 75, 75);

    //inactive
    spikes1 = new rectangle(-500, 440, 50, 15)
    spikes2 = new rectangle(-500, 440, 50, 15)

    r13 = new rectangle(600, 350, 50, 15) 
    r14 = new rectangle(600, 375, 75, 25)
    r15 = new rectangle(600, 225, 50, 20)
    r16 = new rectangle(600, 350, 50, 15) 
    r17 = new rectangle(600, 375, 75, 25)
    r18 = new rectangle(600, 225, 50, 20)
    r19 = new rectangle(600, 300, 100, 10)
    r20 = new rectangle(600, 375, 75, 25)
    r21 = new rectangle(600, 225, 50, 20)

}
function lvl_dojo_1(){ 
    r1 = new rectangle(0, 425, 300, 100)//ground a
    r2 = new rectangle(300, 475, 200, 50) //ground b

    r3 = new rectangle(-25, 0, 50, 500) //left wall
    r4 = new rectangle(475, 0, 50, 400) //right wall

    r5 = new rectangle(75, -25, 75, 75) //ceiling a
    r6 = new rectangle(0, -25, 500, 50) //cieling b - stopping player from jumping out of bounds
     
    r7 = new rectangle(25, 125, 200, 25) //platforms 1
    r8 = new rectangle(275, 100, 50, 15) //small platform 1
    r9 = new rectangle(350, 100, 50, 15) //small platform 2

    r10 = new rectangle(325, 125, 25, 75) //wood post 1 (seperator)

    r11 = new rectangle(250, 275, 225, 25) //layer 2 platforms (1)
    r12 = new rectangle(250, 200, 25, 100) //wood posts 2
    r13 = new rectangle(100, 200, 150, 25) // layer 2 platform (2)
    r14 = new rectangle(25, 275, 25, 15) //mini platform
    r15 = new rectangle(125, 250, 25, 125) // wood post
    r16 = new rectangle(75, 350, 50, 15) // mini platform 2

    spikes1 = new rectangle(175, 110, 50, 15);
    spikes2 = new rectangle(225, 410, 75, 15);


    trigger_2 = new rectangle(475, 400, 50, 75);

    //not using
    r17 = new rectangle(600, 375, 75, 25)
    r18 = new rectangle(600, 225, 50, 20)
    r19 = new rectangle(600, 300, 100, 10)
    r20 = new rectangle(600, 375, 75, 25)
    r21 = new rectangle(600, 225, 50, 20)
    

    
    

    //generate tilemap
    let tileID = 0;
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

    if(outOfBounds){
        player.x = 0;
        player.y = 0;
        player.vx = 0;
        player.vy = 0;
    }
  
}
function lvl_dojo_2(){
    

    r1 = new rectangle(0, 450, 375, 100) //floor left 
    r2 = new rectangle(450, 450, 50, 50) //right floor 

    r3 = new rectangle(0, 50, 25, 450) //left wall
    r4 = new rectangle(475, 0, 25, 450) //right wall 

    r5 = new rectangle(25, 50, 125, 15) //platform 1
    r6 = new rectangle(125, 175, 350, 15) //platform 2

    /*
    Displaying the unused colliders underneath the 
    */
    r7 = new rectangle(600, 300, 100, 10) 
    r8 = new rectangle(600, 240, 50, 5)
    r9 = new rectangle(600, 240, 50, 5)
    
    trigger_3 = new rectangle(375, 475, 75, 75);
   
    

    let tileID = 0;
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
    if(outOfBounds){
        player.x = 0;
        player.y = 0;
        player.vx = 0;
        player.vy = 0;
    }
}
function lvl_dojo_3(){
   
    //ground tiles
    r1 = new rectangle(0, 450, 375, 100) //floor left 
    r2 = new rectangle(450, 450, 50, 50) //right floor 

    r3 = new rectangle(0, 50, 25, 450) //left wall
    r4 = new rectangle(475, 0, 25, 450) //right wall 

    r5 = new rectangle(25, 50, 125, 15) //platform 1
    r6 = new rectangle(125, 200, 350, 15) //platform 2

    r7 = new rectangle(175, 50, 75, 15) //platform 3

    //window sills
    r8 = new rectangle(50, 350, 50, 5)
    r9 = new rectangle(400, 325, 50, 5)

    trigger_4 = new rectangle(375, 475, 75, 75);
    

    let tileID = 0;
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            let x = across * tileSize; // multiplies across value by tileSize to get pixel position on x axis
            let y = down * tileSize; // multiplies down value by tileSize to get pixel position on y axis

            //Setting Texture For Tile
            let textureNum = sc3_graphicMap[down][across];


            tilemap[across][down] = new Tile(textures[textureNum], x, y, tileSize, tileID); // THIS LINE CREATES OUR NEW TILE!

            tileID++;
        }
    }

    if(outOfBounds){
        player.x = 0;
        player.y = 0;
        player.vx = 0;
        player.vy = 0;
    }

}
function lvl_dungeon(){
    r1 = new rectangle(125, 300, 75, 175)//post 1
    r2 = new rectangle(300, 300, 75, 175) //post 2

    r3 = new rectangle(-25, 0, 50, 500) //left wall //am not dividing the wall so I can stop players from going out of bounds
    r4 = new rectangle(450, 0, 50, 175) //right wall_a
    r9 = new rectangle(0, 0, 50, 175) //left upper wall
    r10 = new rectangle(450, 250, 50, 225) //right wall_b
    r11 = new rectangle(0, 250, 50, 225) //left lower wall
    r12 = new rectangle(50, 275, 25, 25) //block (left lower wall)
    r13 = new rectangle(425, 275, 25, 25) //block (right lower wall)

    r5 = new rectangle(25, 250, 75, 25) //left ledge (LOW)
    r6 = new rectangle(400, 250, 75, 25) //right ledge (LOW)
    r7 = new rectangle(25, 150, 50, 25) // left ledge (HIGH)
    r8 = new rectangle(425, 150, 50, 25) // right ledge (HIGH)

    
    r14 = new rectangle(225, 25, 50, 25) //top buckteeth spikes
    r15 = new rectangle(275, 425, 25, 25) //bottom loner spike thing

    spikes1 = new rectangle(0, 450, 500, 50); //have just set the majority of the floor & ceiling as the spike hitbox to save making loads of spikes
    spikes2 = new rectangle(0, -25, 500, 50);

    trigger_3 = new rectangle(475, 175, 50, 75);

    //not using
    r16 = new rectangle(600, 350, 50, 15) 
    r17 = new rectangle(600, 375, 75, 25)
    r18 = new rectangle(600, 225, 50, 20)
    r19 = new rectangle(600, 300, 100, 10)
    r20 = new rectangle(600, 375, 75, 25)
    r21 = new rectangle(600, 225, 50, 20)

    //generate tilemap
    let tileID = 0;
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            let x = across * tileSize; // multiplies across value by tileSize to get pixel position on x axis
            let y = down * tileSize; // multiplies down value by tileSize to get pixel position on y axis

            //Setting Texture For Tile
            let textureNum = dungeon_graphicMap[down][across];


            tilemap[across][down] = new Tile(textures[textureNum], x, y, tileSize, tileID); // THIS LINE CREATES OUR NEW TILE!

            tileID++;
        }
    }
}
function lvl_tsuki(){
    //generate tilemap
    let tileID = 0;
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            let x = across * tileSize; // multiplies across value by tileSize to get pixel position on x axis
            let y = down * tileSize; // multiplies down value by tileSize to get pixel position on y axis

            //Setting Texture For Tile
            let textureNum = tsuki_graphicMap[down][across];


            tilemap[across][down] = new Tile(textures[textureNum], x, y, tileSize, tileID); // THIS LINE CREATES OUR NEW TILE!

            tileID++;
        }
    }

    r2 = new rectangle(0, 425, 75, 75) //floor_a
    r3 = new rectangle(-25, 0, 50, 500) //floor_b
    r4 = new rectangle(425, 425, 75, 75) //floor_c
    r5 = new rectangle(0, 450, 500, 125); //floor??

    trigger_4 = new rectangle(475, 0, 75, 500);

    //inactive
    r1 = new rectangle(600, 0, 50, 500)//left wall, don't want player going back

    r6 = new rectangle(600, 375, 50, 150); //step 2
    r7 = new rectangle(600, 350, 50, 175); //step 3
    r8 = new rectangle(600, 300, 150, 250); //step 4
    r9 = new rectangle(600, 225, 75, 25); //stone platform
    r10 = new rectangle(600, 150, 275, 25); //wood planks platform 1a (long)
    r11 = new rectangle(600, 175, 75, 25); //wood planks platform 1b (short)
    r12 = new rectangle(600, 75, 250, 25); //wood planks platform 2
    r13 = new rectangle(600, 350, 50, 15) 
    r14 = new rectangle(600, 375, 75, 25)
    r15 = new rectangle(600, 225, 50, 20)
    r16 = new rectangle(600, 350, 50, 15) 
    r17 = new rectangle(600, 375, 75, 25)
    r18 = new rectangle(600, 225, 50, 20)
    r19 = new rectangle(600, 300, 100, 10)
    r20 = new rectangle(600, 375, 75, 25)
    r21 = new rectangle(600, 225, 50, 20)

    spikes1 = new rectangle(-500, 440, 50, 15)
    spikes2 = new rectangle(-500, 440, 50, 15)
}
function lvl_sc5(){
    //generate tilemap
    let tileID = 0;
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            let x = across * tileSize; // multiplies across value by tileSize to get pixel position on x axis
            let y = down * tileSize; // multiplies down value by tileSize to get pixel position on y axis

            //Setting Texture For Tile
            let textureNum = sc5[down][across];


            tilemap[across][down] = new Tile(textures[textureNum], x, y, tileSize, tileID); // THIS LINE CREATES OUR NEW TILE!

            tileID++;
        }
    }
}
function dannyDojo(){
    image(danny_dojo, 0, 0, 500, 500);

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

  //left wall && ceiling (stop player from going out of bounds)
  r10 = new rectangle(-45, 0, 50, 500); 
  r11 = new rectangle(0, -45, 500, 50); 


  trigger_5 = new rectangle(450, 0, 75, 500);


  //inactive
    r12 = new rectangle(600, 75, 250, 25); 
    r13 = new rectangle(600, 350, 50, 15) 
    r14 = new rectangle(600, 375, 75, 25)
    r15 = new rectangle(600, 225, 50, 20)
    r16 = new rectangle(600, 350, 50, 15) 
    r17 = new rectangle(600, 375, 75, 25)
    r18 = new rectangle(600, 225, 50, 20)
    r19 = new rectangle(600, 300, 100, 10)
    r20 = new rectangle(600, 375, 75, 25)
    r21 = new rectangle(600, 225, 50, 20)

    spikes1 = new rectangle(-500, 440, 50, 15)
    spikes2 = new rectangle(-500, 440, 50, 15)
}



function endGameText(){
    let highlightedText = [0, 0, 0]
    push();
        fill(255)
        textAlign(CENTER);
        textSize(40);
        text("YOU HAVE WON", width/2, (height/2)-30);
        textSize(20);
        text("...for now", width/2, height/2);
        if(mouseX > 189 && mouseX < 310 && mouseY > 282 && mouseY < 303){
            highlightedText = [255, 0, 0];
            if(mouseIsPressed){
                location.reload() //since we cant go to the main menu, this is easier as it just refreshes the page
            }
        }else{
            highlightedText = [255, 255, 255, 80];
        }
        push();
        fill(highlightedText)
        textSize(20);
        text("main menu?", width/2, (height/2)+50);
        pop();
    pop();
}

//******************************//
/*                              */
/*          TILE CLASS          */
/*              |||             */
/*              vvv             */
/*                              */
//******************************//

class Tile {
    constructor(texture, x, y, tileSize, tileID) { // we've added a texture parameter at the beginning of our class
        this.texture = texture; // our new key-value pair!
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.tileID = tileID;
    }

    display() {
        //Displays the texture of instance of NPC class
        //noStroke();
        image(this.texture, this.x, this.y, this.tileSize, this.tileSize)
    }

    debug() {
        //TILE
        stroke(245);
        noFill();
        rect(this.x, this.y, this.tileSize, this.tileSize);

        //LABEL
        push();
            noStroke();
            fill(255);
            textAlign(LEFT, TOP);
        pop();

        text(this.tileID, this.x, this.y);
    } // I've hidden the DEBUG method but this is where the code for it goes!
}

