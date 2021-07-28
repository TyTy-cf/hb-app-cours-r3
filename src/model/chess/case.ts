import {AbstractPiece} from "./abstractPiece";

export class Case {

  private readonly _x: number;
  private readonly _y: number;
  private readonly _color: string;
  private _piece: AbstractPiece|undefined;

  constructor(
    x: number, y: number, color: string
  ) {
    this._x = x;
    this._y = y;
    this._color = color;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get color(): string {
    return this._color;
  }

  get piece(): AbstractPiece | undefined {
    return this._piece;
  }

  set piece(value: AbstractPiece | undefined) {
    this._piece = value;
  }

  getName(): string {
    return this.x + ';' + this.y;
  }
}
