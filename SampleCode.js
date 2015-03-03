var playerTurn = true;
var NUM_COLS = 3;
var NUM_ROWS = 3;
var SYMBOLS = ["X", "O"];
var won = false;

var tiles = [];

var checkWinner = function(a, b, c) {
    if ((tiles[a].label === tiles[b].label) &&
        (tiles[b].label === tiles[c].label) &&              (tiles[a].label !== "")) {
        var winText = tiles[a].label + " wins!";
        for (var i = 0; i < 9; i++) {
            if ((i !== a) && (i !== b) && (i!==c)) {
                tiles[i].label = "";
            }
        }
        won = true;
    }
};

var checkWin = function() {
    // Check rows
    checkWinner(0,3,6);
    checkWinner(1,4,7);
    checkWinner(2,5,8);
    // Check columns
    checkWinner(0,1,2);
    checkWinner(3,4,5);
    checkWinner(6,7,8);
    // Check diagonals
    checkWinner(0,4,8);
    checkWinner(2,4,6);
};

var Tile = function(x, y) {
    this.x = x;
    this.y = y;
    this.size = width/NUM_COLS;
    this.label = "";
};

Tile.prototype.draw = function() {
    fill(214, 247, 202);
    strokeWeight(2);
    rect(this.x, this.y, this.size, this.size, 10);
    textSize(100);
    textAlign(CENTER, CENTER);
    fill(0, 0, 0);
    text(this.label, this.x+this.size/2, this.y+this.size/2);
};

Tile.prototype.empty = function() {
    return this.label === "";
};

Tile.prototype.onClick = function() {
    // If the tile is not empty, exit the function
    if (!this.empty() || (won)) {
        return;
    }
    // Put the player's symbol on the tile
    if (playerTurn === true) {
        this.label = SYMBOLS[0];
    } else {
        this.label = SYMBOLS[1];
    }
    checkWin();
    
    // Change the turn
    playerTurn = !playerTurn;
};

Tile.prototype.handleMouseClick = function(x, y) {
    // Check for mouse clicks inside the tile
    if ((x > this.x) && (y > this.y) && 
        (x < (this.x + this.size)) && 
        (y < (this.y + this.size))) {
        this.onClick();
    }
};

for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
        tiles.push(new Tile(i * (width/NUM_COLS-1), j * (height/NUM_ROWS-1)));
    }
}

var drawTiles = function() {
    for (var i in tiles) {
        tiles[i].draw();
    }
};

mouseReleased = function() {
    for (var i in tiles) {
        tiles[i].handleMouseClick(mouseX, mouseY);
    }
};

draw = function() {
    background(143, 143, 143);
    drawTiles();
};
