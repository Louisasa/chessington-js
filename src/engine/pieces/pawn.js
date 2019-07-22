import Piece from './piece';
import Player from "../player";
import MoveTypes from "../moveTypes";
import Square from "../square";

export default class Pawn extends Piece {

    constructor(player) {
        super(player);
        this.pieceType = "pawn";
    }

    getAvailableMoves(board) {
        const pawnPlace = board.findPiece(this);
        let row = pawnPlace.row;
        let col = pawnPlace.col;
        const moveTypes = new MoveTypes();
        let outputArray = [];
        // get available moves forward
        if (row < 7 && this.player === Player.WHITE) {
            let result = moveTypes.moveOnce(row, col, 1, 0, board);
            if (result != undefined) {
                outputArray = outputArray.concat(result);
                if (row === 1) {
                    result = moveTypes.moveOnce(row, col, 2, 0, board);
                    if (result != undefined) {
                        outputArray = outputArray.concat(result);
                    }
                }
            }
            // checking if there are any pieces diagonally to take
            result = moveTypes.moveOnce(row, col, 1, 1, board);
            if (result != undefined) {
                const piece = board.getPiece(result[0]);
                if (piece != undefined) {
                    if (piece.player != board.currentPlayer) {
                        outputArray = outputArray.concat(result);
                    }
                }
            }
            result = moveTypes.moveOnce(row, col, 1, -1, board);
            if (result != undefined) {
                const piece = board.getPiece(result[0]);
                if (piece != undefined) {
                    if (piece.player != board.currentPlayer) {
                        outputArray = outputArray.concat(result);
                    }
                }
            }
        }
        if (row > 0 && this.player === Player.BLACK) {
            let result = moveTypes.moveOnce(row, col, -1, 0, board);
            if (result != undefined) {
                outputArray = outputArray.concat(result);
                if (row === 6) {
                    result = moveTypes.moveOnce(row, col, -2, 0, board);
                    if (result != undefined) {
                        outputArray = outputArray.concat(result);
                    }
                }
            }
            // checking if there are any pieces diagonally to take
            result = moveTypes.moveOnce(row, col, -1, 1, board);
            if (result != undefined) {
                const piece = board.getPiece(result[0]);
                if (piece != undefined) {
                    if (piece.player != board.currentPlayer) {
                        outputArray = outputArray.concat(result);
                    }
                }
            }
            result = moveTypes.moveOnce(row, col, -1, -1, board);
            if (result != undefined) {
                const piece = board.getPiece(result[0]);
                if (piece != undefined) {
                    if (piece.player != board.currentPlayer) {
                        outputArray = outputArray.concat(result);
                    }
                }
            }
        }
        return outputArray;
    }
}
