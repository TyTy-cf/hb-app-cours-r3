
export class Card {

  private readonly _color: string;
  private readonly _value: string;
  private readonly _rank: number;
  private readonly _name: string;
  private readonly _image: string;

  constructor(color: string, value: string, rank: number, image: string) {
    this._color = color;
    this._value = value;
    this._rank = rank;
    this._name = this._value + ' ' + this._color;
    this._image = image;
  }

  get color(): string {
    return this._color;
  }

  get value(): string {
    return this._value;
  }

  get rank(): number {
    return this._rank;
  }

  get name(): string {
    return this._name;
  }

  get image(): string {
    return this._image;
  }
}
