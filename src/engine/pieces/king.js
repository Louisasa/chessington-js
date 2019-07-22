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
        let outputArray = [];
        for (let rowIndex = -1; rowIndex <= 1; rowIndex++) {
            for (let colIndex = -1; colIndex <= 1; colIndex++) {
                if (colIndex != 0 || rowIndex != 0) {
                    const result = moveTypes.moveOnce(row, col, rowIndex, colIndex, board);
                    if (result != undefined) {
                        outputArray = outputArray.concat(result);
                    }
                }
            }
        }

        return outputArray;
    }
}
