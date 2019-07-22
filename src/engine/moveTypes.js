import Square from './square.js';

export default  class moveTypes {
    constructor() {
    }

    moveOnce(row, col, rowSteps, colSteps, board) {
        const piece = board.getPiece(new Square(row+rowSteps, col+colSteps));
        if (piece === undefined) {
            return new Square(row+rowSteps, col+colSteps);
        } else {
            if (piece.player === board.currentPlayer || piece.pieceType === "king") {
                return undefined;
            } else {
                return new Square(row+rowSteps, col+colSteps);
            }
        }
    }

    moveContinuously(row, col, rowSteps, colSteps, board) {
        const outputArray = [];
        const rowStepIncrease = rowSteps;
        const colStepIncrease = colSteps;
        while(row+rowSteps <= 7 && row+rowSteps >= 0 && col+colSteps <= 7 && col+colSteps >= 0) {
            const result = this.moveOnce(row, col, rowSteps, colSteps, board);
            if (result === undefined) {
                break;
            } else {
                outputArray.push(result);
                rowSteps += rowStepIncrease;
                colSteps += colStepIncrease;
            }
        }

        return outputArray;
    }
}
