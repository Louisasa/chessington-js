import Piece from './piece';
import MoveTypes from '../moveTypes';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
        this.pieceType = "bishop";
    }

    getAvailableMoves(board) {
        const bishopPlace = board.findPiece(this);
        const row = bishopPlace.row;
        const col = bishopPlace.col;
        const moveTypes = new MoveTypes();
        let outputArray = moveTypes.moveContinuously(row, col, 1, 1, board);
        outputArray = outputArray.concat(moveTypes.moveContinuously(row, col, -1, 1, board));
        outputArray = outputArray.concat(moveTypes.moveContinuously(row, col, -1, -1, board));
        outputArray = outputArray.concat(moveTypes.moveContinuously(row, col, 1, -1, board));

        return outputArray;
    }
}
