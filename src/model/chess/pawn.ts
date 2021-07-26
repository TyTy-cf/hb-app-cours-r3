import {AbstractPiece} from "./abstractPiece";

export class Pawn extends AbstractPiece {

  constructor(color: string) {
    super('Pion', color);
    this.image = 'assets/chess/pion-blanc.png';
    if (this.color.includes('black')) {
      this.image = 'assets/chess/pion-noir.png';
    }
  }

  move(): void {
    console.log('Move du Pion');
  }

}
