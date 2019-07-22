import Piece from './piece';
import Square from "../square";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const bishopPlace = board.findPiece(this);
        let bishopRow = bishopPlace.row;
        let bishopCol = bishopPlace.col;
        const outputArray = [];
        // need to check there isn't a piece in the way
        while(bishopRow+1 <= 7 && bishopCol+1 <= 7) {
            // check piece isn't there
            outputArray.push(new Square(bishopRow+1, bishopCol+1));
            bishopRow++;
            bishopCol++;
        }
        bishopRow = bishopPlace.row;
        bishopCol = bishopPlace.col;
        while (bishopRow+1 <= 7 && bishopCol-1 >= 0) {
            outputArray.push(new Square(bishopRow+1, bishopCol-1));
            bishopRow++;
            bishopCol--;
        }
        bishopRow = bishopPlace.row;
        bishopCol = bishopPlace.col;
        while(bishopRow-1 >= 0 && bishopCol+1 <= 7) {
            outputArray.push(new Square(bishopRow-1, bishopCol+1));
            bishopRow--;
            bishopCol++;
        }
        bishopRow = bishopPlace.row;
        bishopCol = bishopPlace.col;
        while (bishopRow-1 >= 0 && bishopCol-1 >= 0) {
            outputArray.push(new Square(bishopRow-1, bishopCol-1));
            bishopRow--;
            bishopCol--;
        }
        return outputArray;
    }
}
