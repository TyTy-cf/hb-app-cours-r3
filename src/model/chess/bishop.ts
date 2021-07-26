import {AbstractPiece} from "./abstractPiece";

export class Bishop extends AbstractPiece {

  constructor(color: string) {
    super('Fou', color);
    this.image = 'assets/chess/fou-blanc.png';
    if (this.color.includes('black')) {
      this.image = 'assets/chess/fou-noir.png';
    }
  }

  move(): void {
    console.log('Move du cavalier');
  }
}
