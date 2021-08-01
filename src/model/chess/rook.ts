import {AbstractPiece} from "./abstractPiece";

export class Rook extends AbstractPiece {

  constructor(color: string) {
    super('Tour', color);
    this.image = 'assets/chess/tour-blanc.png';
    if (this.color.includes('black')) {
      this.image = 'assets/chess/tour-noir.png';
    }
  }

  move(): void {
    console.log('Move de la tour');
  }
}
