
export class Dice {

  private readonly _value: number;
  private readonly _image: string;
  private _isSelected: boolean = false;

  constructor() {
    this._value = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    this._image = 'assets/yatzee/' + this._value + '.png';
  }

  get isSelected(): boolean {
    return this._isSelected;
  }

  set isSelected(value: boolean) {
    this._isSelected = value;
  }

  get image(): string {
    return this._image;
  }

  get value(): number {
    return this._value;
  }
}
