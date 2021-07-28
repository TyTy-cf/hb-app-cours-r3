import {Case} from "./case";
import {AbstractPiece} from "./abstractPiece";
import {Rook} from "./rook";
import {Knight} from "./knight";
import {Bishop} from "./bishop";
import {Queen} from "./queen";
import {King} from "./king";
import {Pawn} from "./pawn";

export class ChessBoard {

  static classBlack = 'class-black';
  static classWhite = 'class-white';
  private _board: Case[] = [];

  constructor() {
    this.generateBoard();
  }

  get board(): Case[] {
    return this._board;
  }

  private generateBoard(): void {
    let color = ChessBoard.classWhite;
    for (let x = 8; x >= 1; x--) {
      for (let y = 8; y >= 1; y--) {
        const aCase = new Case(x, y, color);
        aCase.piece = this.getAbstractPieceFromXY(x, y);
        this._board.push(aCase);
        if (y > 1) {
          if (color === ChessBoard.classWhite) {
            color = ChessBoard.classBlack;
          } else {
            color = ChessBoard.classWhite;
          }
        }
      }
    }
  }

  private getAbstractPieceFromXY(x: number, y: number)
    : AbstractPiece|undefined {
    if (x !== 1 && x !== 2 && x !== 7 && x !== 8) {
      return undefined;
    }
    let classCss = ChessBoard.classBlack;
    if (x === 1 || x === 2) {
      classCss = ChessBoard.classWhite;
    }
    if (x === 2 || x === 7) {
      return new Pawn(classCss);
    }
    if (y === 1 || y === 8) {
      return new Rook(classCss);
    } else if (y === 2 || y === 7) {
      return new Knight(classCss);
    } else if (y === 3 || y === 6) {
      return new Bishop(classCss);
    } else if (y === 4) {
      return new Queen(classCss);
    } else {
      return new King(classCss);
    }
  }
}
