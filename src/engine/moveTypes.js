import Square from './square.js';

export default  class moveTypes {
    constructor() {
        this.pieceInTheWay = false;
    }

    moveOnce(row, col, rowSteps, colSteps, board) {
        if (row+rowSteps <= 7 && row+rowSteps >= 0 && col+colSteps <= 7 && col+colSteps >= 0) {
            const piece = board.getPiece(new Square(row+rowSteps, col+colSteps));
            if (piece === undefined) {
                return [new Square(row+rowSteps, col+colSteps)];
            } else {
                this.pieceInTheWay = true;
                if (piece.player != board.currentPlayer && piece.pieceType!= "king") {
                    return [new Square(row+rowSteps, col+colSteps)];
                }
            }
        }
    }

    moveContinuously(row, col, rowSteps, colSteps, board) {
        let outputArray = [];
        const rowStepIncrease = rowSteps;
        const colStepIncrease = colSteps;
        while(row+rowSteps <= 7 && row+rowSteps >= 0 && col+colSteps <= 7 && col+colSteps >= 0 && !this.pieceInTheWay) {
            const result = this.moveOnce(row, col, rowSteps, colSteps, board);
            if (result === undefined) {
                break;
            } else {
                outputArray = outputArray.concat(result);
                rowSteps += rowStepIncrease;
                colSteps += colStepIncrease;
            }
        }
        this.pieceInTheWay = false;

        return outputArray;
    }
}
