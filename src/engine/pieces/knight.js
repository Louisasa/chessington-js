import Piece from './piece';
import MoveTypes from '../moveTypes';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
        this.pieceType = "knight";
    }

    getAvailableMoves(board) {
        const knightPlace = board.findPiece(this);
        const row = knightPlace.row;
        const col = knightPlace.col;
        const moveTypes = new MoveTypes();
        let outputArray = moveTypes.moveOnce(row, col, 1, 2, board);
        outputArray = outputArray.concat(moveTypes.moveOnce(row, col, -1, 2, board));
        outputArray = outputArray.concat(moveTypes.moveOnce(row, col, 2, -1, board));
        outputArray = outputArray.concat(moveTypes.moveOnce(row, col, 2, 1, board));
        outputArray = outputArray.concat(moveTypes.moveOnce(row, col, 1, -2, board));
        outputArray = outputArray.concat(moveTypes.moveOnce(row, col, -1, -2, board));
        outputArray = outputArray.concat(moveTypes.moveOnce(row, col, -2, -1, board));
        outputArray = outputArray.concat(moveTypes.moveOnce(row, col, -2, 1, board));

        console.log(outputArray);
        return outputArray;
    }
}
