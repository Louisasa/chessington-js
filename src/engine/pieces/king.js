import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        /*
        const queenPlace = board.findPiece(this);
        let queenRow = queenPlace.row;
        let queenCol = queenPlace.col;
        const outputArray = [];
        // need to check there isn't a piece in the way
        if (queenCol+1 <= 7) {
            outputArray.push(new Square(queenRow, queenCol+1));
            if (queenRow+1 <= 7) {
                outputArray.push(new Square(queenRow+1, queenCol+1));
            }
            if (queenRow-1 >= 0) {
                outputArray.push(new Square(queenRow-1, queenCol+1));
            }
        }
        if (queenCol-1 >= 0) {
            outputArray.push(new Square(queenRow, queenCol-1));
            if (queenRow+1 <= 7) {
                outputArray.push(new Square(queenRow+1, queenCol-1));
            }
            if (queenRow-1 >= 0) {
                outputArray.push(new Square(queenRow-1, queenCol-1));
            }
        }
        if (queenRow+1 <= 7) {
            outputArray.push(new Square(queenRow+1, queenCol));
        }
        if (queenRow-1 >= 0) {
            outputArray.push(new Square(queenRow-1, queenCol));
        }
        return outputArray;
        * */
        return new Array(0);
    }
}
