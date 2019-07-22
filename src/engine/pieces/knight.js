import Piece from './piece';
import Square from "../square";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const knightPlace = board.findPiece(this);
        let knightRow = knightPlace.row;
        let knightCol = knightPlace.col;
        const outputArray = [];
        // need to check there isn't a piece in the way
        // two forward, one left/right
        // two back, one left/right
        // two left, one forward/back
        // two right, one forward/back
        if (knightCol+2 <=7) {
            if (knightRow+1 <=7) {
                outputArray.push(new Square(knightRow+1, knightCol+2));
            }
            if (knightRow-1 >= 0) {
                outputArray.push(new Square(knightRow-1, knightCol+2));
            }
        }
        if (knightCol-2 >= 0) {
            if (knightRow+1 <=7) {
                outputArray.push(new Square(knightRow+1, knightCol-2));
            }
            if (knightRow-1 >= 0) {
                outputArray.push(new Square(knightRow-1, knightCol-2));
            }
        }
        if (knightRow+2 <= 7) {
            if (knightCol+1 <=7) {
                outputArray.push(new Square(knightRow+2, knightCol+1));
            }
            if (knightCol-1 >= 0) {
                outputArray.push(new Square(knightRow+2, knightCol-1));
            }
        }
        if (knightRow-2 >= 0) {
            if (knightCol+1 <=7) {
                outputArray.push(new Square(knightRow-2, knightCol+1));
            }
            if (knightCol-1 >= 0) {
                outputArray.push(new Square(knightRow-2, knightCol-1));
            }
        }
        return outputArray;
    }
}
