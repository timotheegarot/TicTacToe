class Game {
    constructor() {
        this.inProgress = true; //Le jeu est en cours
        this.winner = null; //'O' ou 'X'
        this.currentTurn = Game.O;  //Premier joueur est toujours 'O'
        this.movesMade = 0; //'O' ou 'X' sur le morpion
        this.squares = new Array(9).fill().map(s => new Square());  //Construction de l'aire de jeu
    }

    makeMove(i) {
        if (this.inProgress && !this.squares[i].value) {
            this.squares[i].value = this.currentTurn;

            this.movesMade; //Incrémentation du nombre de 'O' ou 'X' faits
            this.checkForWinner();  //On vérifie s'il un joueur a gagné

            //Si 'O' a joué, alors c'est au tour de 'X' de jouer
            this.currentTurn = (this.currentTurn == Game.O) ? Game.X : Game.O
        }
    }

    checkForWinner() {
        const winningCombinations = [
            [0, 1, 2],  //a = 0, b = 1, c = 2
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        winningCombinations.forEach((winComb) => {
            const [a, b, c] = winComb;
            const sqA = this.squares[a];
            const sqB = this.squares[b];
            const sqC = this.squares[c];

            if(sqA.value && sqA.value == sqB.value && sqA.value == sqC.value) {
                //Si a, b et c sont un 'O' ou 'X'...
                this.inProgress = false;    //Le jeu s'arrête
                this.winner = sqA.value; //'O' ou 'X' est le symbole gagnant
                sqA.isHighLighted = sqB.isHighLighted = sqC.isHighLighted = true;   //Ligne gagnante en surbrillance
            }
        });

        //Égalités = toutes les cases sont remplies par les "moves" des joueurs
        if(this.movesMade == this.squares.length) {
            this.inProgress = false;    //Le jeu s'arrête
        }
    }
}

Game.O = 'O';
Game.X = 'X';