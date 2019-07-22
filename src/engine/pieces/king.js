import Piece from './piece';
import Square from "../square";

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const kingPlace = board.findPiece(this);
        let kingRow = kingPlace.row;
        let kingCol = kingPlace.col;
        const outputArray = [];
        // need to check there isn't a piece in the way
        if (kingCol+1 <= 7) {
            outputArray.push(new Square(kingRow, kingCol+1));
            if (kingRow+1 <= 7) {
                outputArray.push(new Square(kingRow+1, kingCol+1));
            }
            if (kingRow-1 >= 0) {
                outputArray.push(new Square(kingRow-1, kingCol+1));
            }
        }
        if (kingCol-1 >= 0) {
            outputArray.push(new Square(kingRow, kingCol-1));
            if (kingRow+1 <= 7) {
                outputArray.push(new Square(kingRow+1, kingCol-1));
            }
            if (kingRow-1 >= 0) {
                outputArray.push(new Square(kingRow-1, kingCol-1));
            }
        }
        if (kingRow+1 <= 7) {
            outputArray.push(new Square(kingRow+1, kingCol));
        }
        if (kingRow-1 >= 0) {
            outputArray.push(new Square(kingRow-1, kingCol));
        }
        return outputArray;
    }
}
