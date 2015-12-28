/*

BATTLESHIP RULES

1. 2 players
2. 5 ships per player
3. Grid 10 x 10

SHIPS
    
    Aircraft Carrier    : Size 5 
    Battleship          : Size 4
    Cruiser             : Size 3
    Submarine           : Size 3
    Destroyer           : Size 2

*/

var pc, player,
    pcShips, playerShips,
    
    Player = function (grid, player, size) {
        this.id             = player;
        this.board          = [];
        this.canvas         = document.getElementById(player);
        this.canvas.height  = size;
        this.canvas.width   = size;
        this.context        = this.canvas.getContext("2d");
        // Se inicializa el tablero a 0 en todas las casillas
        for (var i = 0; i < grid; i++){
            this.board[i] = Array(grid).fill(0);
        }
    },

    Ship = function (n, s) {
        this.name = n;
        this.size = s;
    },

    Ships = function () {
        this.boats = [
            new Ship("carrier", 5),
            new Ship("battleship", 4),
            new Ship("cruiser", 3),
            new Ship("submarine", 3),
            new Ship("destroyer", 2)
        ]  
    }
        
Player.prototype.addShip = function (ship, o, x, y) {
    var playerShips = this.ships.boats,
        startX      = x,
        startY      = y,
        toAdd       = true;
    
    x--;
    y--;
    
    if(this.board[y][x] != 1) {
        // Orientación vertical
        if(o == 1) {
            if ((this.board.length - y) >= ship.size) {
                for (var count = 0; count < ship.size; count++){
                    if (this.board[y][x] == 1) {
                        // Si ya hay un barco en esta zona no se agrega
                        toAdd = false;
                    }
                    y++;
                }
                if (toAdd) {
                    y = startY - 1;
                    for (var count = 0; count < ship.size; count++){
                        this.board[y][x] = 1;
                        y++;
                    }
                    console.log("Barco añadido!");
                    playerShips.splice(playerShips.indexOf(ship), 1);
                }
            }
        }
        // Orientación horizontal
        if(o == 0) {
            if ((this.board.length - x) >= ship.size) {
                for (var count = 0; count < ship.size; count++){
                    if (this.board[y][x] == 1) {
                        // Si ya hay un barco en esta zona no se agrega
                        toAdd = false;
                    }
                    x++;
                }
                if (toAdd) {
                    x = startX - 1;
                    for (var count = 0; count < ship.size; count++){
                        this.board[y][x] = 1;
                        x++;
                    }
                    console.log("Barco añadido!");
                    playerShips.splice(playerShips.indexOf(ship), 1);
                }
            }
        }
    }
};

Player.prototype.printBoard = function () {
    var squareSize = this.canvas.width / this.board.length;
    var position = 1;
    // Se dibuja la cuadrícula
    for (var i = 1; i < this.board.length; i++) {
        this.context.beginPath();
        this.context.moveTo(position * squareSize, 0);
        this.context.lineTo(position * squareSize, this.canvas.width);
        this.context.strokeStyle = "#424242";
        this.context.stroke();
        this.context.closePath();
        
        this.context.beginPath();
        this.context.moveTo(0, position * squareSize);
        this.context.lineTo(this.canvas.width, position * squareSize);
        this.context.strokeStyle = "#424242";
        this.context.stroke();
        this.context.closePath();
        
        position++;
    }
    // Se dibujan los puntos en la cuadrícula
    for (var y = 0, yPosition = 1; y < this.board.length; y++, yPosition += 2) {
        for (var x = 0, xPosition = 1; x < this.board.length; x++, xPosition += 2) {
            this.context.beginPath();
            this.context.arc((xPosition * squareSize)/2, (yPosition * squareSize)/2, squareSize/5, 0, 2 * Math.PI);
            this.context.fillStyle = "#424242";
            this.context.fill();
            this.context.closePath();
        }
    }
}

function shoot(x, y, target) {
    var size        = target.canvas.width / target.board.length,
        color       = "",
        shadowColor = "",
        sX          = (x*2) - 1,
        sY          = (y*2) - 1,
        bX          = x - 1,
        bY          = y - 1;
    
    if(target.board[bY][bX] < 2) {
        if (target.board[bY][bX] == 1) {
            target.board[bY][bX] = 3;
            console.log("!Hit at x: " + x + " y: " + y + "!");
            
            color = "#F44336";
            shadowColor = "#EF5350";
        }
        else {
            target.board[bY][bX] = 2;
            console.log("!Miss at x: " + x + " y: " + y + "!");
            
            color = "#9E9E9E";
            shadowColor = "#BDBDBD";
        }
        
        // Se dibuja el disparo en el tablero
        target.context.beginPath();
        target.context.arc((sX * size)/2, (sY * size)/2, size/3.5, 0, 2 * Math.PI);
        target.context.fillStyle = color;
        target.context.shadowColor = shadowColor;
        target.context.shadowBlur = 10;
        target.context.shadowOffsetX = 0;
        target.context.shadowOffsetY = 0;
        target.context.fill();
        target.context.closePath();
    }
}

function clickShoot (e) {
    var elemLeft    = this.offsetLeft,
        elemTop     = this.offsetTop,
        x           = Math.ceil((e.pageX - elemLeft)/50),
        y           = Math.ceil((e.pageY - elemTop)/50);
    
    shoot(x, y, pc);
}

function addRandomShips(target) {
    while (target.ships.boats.length) {
        var randomShip  = Math.floor(Math.random() * (target.ships.boats.length - 0)),
            cS          = target.ships.boats[randomShip],
            cO          = Math.floor(Math.random() * 2),
            cX          = Math.floor(Math.random() * target.board.length + 1),
            cY          = Math.floor(Math.random() * target.board.length + 1);

        target.addShip(cS, cO, cX, cY);
    }
}

function init() {
    player = new Player(10, "player", 300);
    player.ships = new Ships();
    
    pc = new Player(10, "pc", 500);
    pc.ships = new Ships();
    pc.canvas.addEventListener("click", this.clickShoot, false);
    
    player.printBoard();
    pc.printBoard();
    addRandomShips(pc);
}