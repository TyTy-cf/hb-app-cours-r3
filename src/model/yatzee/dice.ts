
export class Dice {

  private readonly _value: number;
  private readonly _image: string;

  constructor() {
    this._value = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    this._image = 'assets/yatzee/' + this._value + '.png';
  }

  get image(): string {
    return this._image;
  }

  get value(): number {
    return this._value;
  }
}
