import {AbstractPiece} from "./abstractPiece";

export class Queen extends AbstractPiece {

  constructor(color: string) {
    super('Reine', color);
    this.image = 'assets/chess/reine-blanc.png';
    if (this.color.includes('black')) {
      this.image = 'assets/chess/reine-noir.png';
    }
  }

  move(): void {
    console.log('Move du cavalier');
  }
}
