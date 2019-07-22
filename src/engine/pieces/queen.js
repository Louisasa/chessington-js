import Piece from './piece';
import Square from "../square";

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const queenPlace = board.findPiece(this);
        let queenRow = queenPlace.row;
        let queenCol = queenPlace.col;
        const outputArray = [];
        // need to check there isn't a piece in the way
        for (let index = 1; queenCol+index <= 7; index++) {
            outputArray.push(new Square(queenRow, queenCol+index));
            if (queenRow+index <= 7) {
                outputArray.push(new Square(queenRow+index, queenCol+index));
            }
            if (queenRow-index >= 0) {
                outputArray.push(new Square(queenRow-index, queenCol+index));
            }
        }
        for (let index = 1; queenCol-index >= 0; index++) {
            outputArray.push(new Square(queenRow, queenCol-index));
            if (queenRow+index <= 7) {
                outputArray.push(new Square(queenRow+index, queenCol-index));
            }
            if (queenRow-index >= 0) {
                outputArray.push(new Square(queenRow-index, queenCol-index));
            }
        }
        for (let index = 1; queenRow+index <= 7; index++) {
            outputArray.push(new Square(queenRow+index, queenCol));
        }
        for (let index = 1; queenRow-index >= 0; index++) {
            outputArray.push(new Square(queenRow-index, queenCol));
        }
        return outputArray;
    }
}
