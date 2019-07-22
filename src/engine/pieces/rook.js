import Piece from './piece';
import Square from "../square";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const rookPlace = board.findPiece(this);
        let rookRow = rookPlace.row;
        let rookCol = rookPlace.col;
        const outputArray = [];
        // need to check there isn't a piece in the way
        while(rookRow+1 <= 7 && board.isSquareFree(new Square(rookRow+1, rookCol))) {
            // check piece isn't there
            outputArray.push(new Square(rookRow+1, rookCol));
            rookRow++;
        }
        rookRow = rookPlace.row;
        while (rookCol+1 <= 7 && board.isSquareFree(new Square(rookRow, rookCol+1))) {
            outputArray.push(new Square(rookRow, rookCol+1));
            rookCol++;
        }
        rookCol = rookPlace.col;
        while(rookRow-1 >= 0 && board.isSquareFree(new Square(rookRow-1, rookCol))) {
            outputArray.push(new Square(rookRow-1, rookCol));
            rookRow--;
        }
        rookRow = rookPlace.row;
        while (rookCol-1 >= 0 && board.isSquareFree(new Square(rookRow, rookCol-1))) {
            outputArray.push(new Square(rookRow, rookCol-1));
            rookCol--;
        }
        return outputArray;
    }
}
