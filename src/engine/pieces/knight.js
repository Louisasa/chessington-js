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
        // const steps = [2,1,-2,-1];
        let outputArray = [];

        const possibleMoves = [[1, 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];
        for (let [rowStep, colStep] of possibleMoves) {
            const result = moveTypes.moveOnce(row, col, rowStep, colStep, board);
            if (result !== undefined) {
                outputArray = outputArray.concat(result);
            }
        }

        // for (let rowIndex = 0; rowIndex < steps.length; rowIndex++) {
        //     for (let colIndex = 0; colIndex < steps.length; colIndex++) {
        //         if ((rowIndex % 2 === 0 && colIndex % 2 === 1) || (rowIndex % 2 === 1 && colIndex % 2 === 0)) {
        //             const result = moveTypes.moveOnce(row, col, steps[rowIndex], steps[colIndex], board);
        //             if (result != undefined) {
        //                 outputArray = outputArray.concat(result);
        //             }
        //         }
        //     }
        // }


        return outputArray;
    }
}
