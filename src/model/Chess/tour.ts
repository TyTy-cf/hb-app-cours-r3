import {Piece} from "./piece";

export class Tour extends Piece {

  constructor(color: string) {
    super();
    this._name = 'Tour';
    this._color = color;
  }

  move(): void {
    console.log('Move de la tour');
  }
}
