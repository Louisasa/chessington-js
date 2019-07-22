import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {

    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const pawnPlace = board.findPiece(this);
        const outputArray = [];
        if (pawnPlace.row < 7 && this.player === Player.WHITE) {
            outputArray.push(new Square(pawnPlace.row+1, pawnPlace.col));
        }
        if (pawnPlace.row > 0 && this.player === Player.BLACK) {
            outputArray.push(new Square(pawnPlace.row-1, pawnPlace.col));
        }
        // if on specific row means it is the first move
        if (pawnPlace.row === 1 && this.player === Player.WHITE) {
            outputArray.push(new Square(pawnPlace.row+2, pawnPlace.col));
        }
        if (pawnPlace.row === 6 && this.player === Player.BLACK) {
            outputArray.push(new Square(pawnPlace.row-2, pawnPlace.col));
        }
        return outputArray;
    }
}
