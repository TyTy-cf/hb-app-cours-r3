import {Piece} from "./piece";

export class Pion extends Piece {

  constructor(color: string) {
    super();
    this._name = 'Pion';
    this._color = color;
  }

  move(): void {
    console.log('Move du Pion');
  }

}
