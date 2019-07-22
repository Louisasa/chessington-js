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
        while(queenRow+1 <= 7 && queenCol+1 <= 7 && board.isSquareFree(new Square(queenRow+1, queenCol+1))) {
            // check piece isn't there
            outputArray.push(new Square(queenRow+1, queenCol+1));
            queenRow++;
            queenCol++;
        }
        queenRow = queenPlace.row;
        queenCol = queenPlace.col;
        while (queenRow+1 <= 7 && queenCol-1 >= 0 && board.isSquareFree(new Square(queenRow+1, queenCol-1))) {
            outputArray.push(new Square(queenRow+1, queenCol-1));
            queenRow++;
            queenCol--;
        }
        queenRow = queenPlace.row;
        queenCol = queenPlace.col;
        while(queenRow-1 >= 0 && queenCol+1 <= 7 && board.isSquareFree(new Square(queenRow-1, queenCol+1))) {
            outputArray.push(new Square(queenRow-1, queenCol+1));
            queenRow--;
            queenCol++;
        }
        queenRow = queenPlace.row;
        queenCol = queenPlace.col;
        while (queenRow-1 >= 0 && queenCol-1 >= 0 && board.isSquareFree(new Square(queenRow-1, queenCol-1))) {
            outputArray.push(new Square(queenRow-1, queenCol-1));
            queenRow--;
            queenCol--;
        }
        queenRow = queenPlace.row;
        queenCol = queenPlace.col;
        while(queenRow+1 <= 7 && board.isSquareFree(new Square(queenRow+1, queenCol))) {
            // check piece isn't there
            outputArray.push(new Square(queenRow+1, queenCol));
            queenRow++;
        }
        queenRow = queenPlace.row;
        while (queenCol+1 <= 7 && board.isSquareFree(new Square(queenRow, queenCol+1))) {
            outputArray.push(new Square(queenRow, queenCol+1));
            queenCol++;
        }
        queenCol = queenPlace.col;
        while(queenRow-1 >= 0 && board.isSquareFree(new Square(queenRow-1, queenCol))) {
            outputArray.push(new Square(queenRow-1, queenCol));
            queenRow--;
        }
        queenRow = queenPlace.row;
        while (queenCol-1 >= 0 && board.isSquareFree(new Square(queenRow, queenCol-1))) {
            outputArray.push(new Square(queenRow, queenCol-1));
            queenCol--;
        }
        return outputArray;
    }
}
