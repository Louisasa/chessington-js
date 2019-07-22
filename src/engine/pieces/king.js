import Piece from './piece';
import MoveTypes from '../moveTypes';

export default class King extends Piece {
    constructor(player) {
        super(player);
        this.pieceType = "king";
    }

    getAvailableMoves(board) {
        const kingPlace = board.findPiece(this);
        const row = kingPlace.row;
        const col = kingPlace.col;
        const moveTypes = new MoveTypes();
        let outputArray = moveTypes.moveOnce(row, col, 1, 0, board);
        outputArray = outputArray.concat(moveTypes.moveOnce(row, col, -1, 0, board));
        outputArray = outputArray.concat(moveTypes.moveOnce(row, col, 0, -1, board));
        outputArray = outputArray.concat(moveTypes.moveOnce(row, col, 0, -1, board));
        outputArray = outputArray.concat(moveTypes.moveOnce(row, col, 1, 1, board));
        outputArray = outputArray.concat(moveTypes.moveOnce(row, col, 1, -1, board));
        outputArray = outputArray.concat(moveTypes.moveOnce(row, col, -1, 1, board));
        outputArray = outputArray.concat(moveTypes.moveOnce(row, col, -1, -1, board));

        console.log(outputArray);

        return outputArray;
    }
}
