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
  private startingCase: Case|undefined = undefined;

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

  movePiece(clickedCase: Case): void {
    // Premier passage : on vient de cliquer sur une case, et on a aucune case de départ
    if (clickedCase.piece && !this.startingCase) {
      // on indique que startingCase prend la valeur du click
      this.startingCase = clickedCase;
      this.startingCase.isSelected = true;
    // Si on a de nouveau cliqué sur la même case : on définit startingCase à undefined
    } else if (clickedCase.getName() === this.startingCase?.getName()) {
      this.startingCase.isSelected = false;
      this.startingCase = undefined;
    // Cas du déplacement : on peut se déplacer sur une case, si startingCase existe
    // Et s'il existe une piece sur la case d'arrivée, qu'elle ne soit pas de la même couleur que la pièce
    // de la case startingCase
    } else if (this.startingCase && clickedCase.piece?.color !== this.startingCase?.piece?.color) {
      clickedCase.piece = this.startingCase.piece;
      this.startingCase.isSelected = false;
      this.startingCase.piece = undefined;
      this.startingCase = undefined;
    }
  }
}
