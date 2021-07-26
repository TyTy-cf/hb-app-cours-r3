import {AbstractPiece} from "./abstractPiece";

export class Knight extends AbstractPiece {

  constructor(color: string) {
    super('Cavalier', color);
    this.image = 'assets/chess/cavalier-blanc.png';
    if (this.color.includes('black')) {
      this.image = 'assets/chess/cavalier-noir.png';
    }
  }

  move(): void {
    console.log('Move du cavalier');
  }
}
