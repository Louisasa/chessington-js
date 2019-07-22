import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {

    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const pawnPlace = board.findPiece(this);
        let pawnRow = pawnPlace.row;
        let pawnCol = pawnPlace.col;
        const outputArray = [];
        if (pawnRow < 7 && this.player === Player.WHITE) {
            if (board.isSquareFree(new Square(pawnRow+1, pawnCol))) {
                outputArray.push(new Square(pawnRow+1, pawnCol));
            }
        }
        if (pawnRow > 0 && this.player === Player.BLACK) {
            if (board.isSquareFree(new Square(pawnRow-1, pawnCol))) {
                outputArray.push(new Square(pawnRow - 1, pawnCol));
            }
        }
        // if on specific row means it is the first move
        if (pawnRow === 1 && this.player === Player.WHITE) {
            if (board.isSquareFree(new Square(pawnRow+2, pawnCol)) && board.isSquareFree(new Square(pawnRow+1, pawnCol))) {
                outputArray.push(new Square(pawnRow + 2, pawnCol));
            }
        }
        if (pawnRow === 6 && this.player === Player.BLACK) {
            if (board.isSquareFree(new Square(pawnRow-2, pawnCol)) && board.isSquareFree(new Square(pawnRow-1, pawnCol))) {
                outputArray.push(new Square(pawnRow - 2, pawnCol));
            }
        }
        return outputArray;
    }
}
