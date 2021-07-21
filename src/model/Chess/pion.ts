import {Piece} from "./piece";

export class Pion extends Piece {

  constructor(color: string) {
    super('Pion', color);
  }

  move(): void {
    console.log('Move du Pion');
  }

}
