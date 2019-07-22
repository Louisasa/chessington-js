import Piece from './piece';
import MoveTypes from '../moveTypes';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
        this.pieceType = "queen";
    }

    getAvailableMoves(board) {
        const queenPlace = board.findPiece(this);
        const row = queenPlace.row;
        const col = queenPlace.col;
        const moveTypes = new MoveTypes();
        let outputArray = moveTypes.moveContinuously(row, col, 1, 1, board);
        outputArray = outputArray.concat(moveTypes.moveContinuously(row, col, -1, 1, board));
        outputArray = outputArray.concat(moveTypes.moveContinuously(row, col, 1, -1, board));
        outputArray = outputArray.concat(moveTypes.moveContinuously(row, col, -1, -1, board));
        outputArray = outputArray.concat(moveTypes.moveContinuously(row, col, 1, 0, board));
        outputArray = outputArray.concat(moveTypes.moveContinuously(row, col, -1, 0, board));
        outputArray = outputArray.concat(moveTypes.moveContinuously(row, col, 0, -1, board));
        outputArray = outputArray.concat(moveTypes.moveContinuously(row, col, 0, 1, board));

        return outputArray;
    }
}
