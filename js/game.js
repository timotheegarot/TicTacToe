class Game {
    constructor() {
        this.inProgress = true;
        this.winner = null; //'O' ou 'X'
        this.currentTurn = Game.O;  //Premier joueur
        this.movesMade = 0;
        this.squares = new Array(9).fill().map(s => new Square());
    }
}

Game.O = 'O';
Game.X = 'X';