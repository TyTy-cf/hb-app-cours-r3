import {Piece} from "./piece";

export class Tour extends Piece {

  constructor(color: string) {
    super('Tour', color);
  }

  move(): void {
    console.log('Move de la tour');
  }
}
