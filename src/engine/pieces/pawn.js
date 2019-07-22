import Piece from './piece';
import Board from '../../../src/engine/board';
import Square from '../../../src/engine/square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const pawnPlace = board.findPiece(this);
        const outputArray = [];
        if (pawnPlace.row < 7) {
            outputArray.push(new Square(pawnPlace.row+1, pawnPlace.col));
        }
        if (pawnPlace.row > 0) {
            outputArray.push(new Square(pawnPlace.row-1, pawnPlace.col));
        }
        return outputArray;
    }
}
