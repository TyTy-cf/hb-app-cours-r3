import {AbstractPiece} from "./abstractPiece";

export class King extends AbstractPiece {

  constructor(color: string) {
    super('Roi', color);
    this.image = 'assets/chess/roi-blanc.png';
    if (this.color.includes('black')) {
      this.image = 'assets/chess/roi-noir.png';
    }
  }

  move(): void {
    console.log('Move du cavalier');
  }
}
