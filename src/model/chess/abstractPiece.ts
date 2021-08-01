
export abstract class AbstractPiece {

  protected _color!: string;
  protected _name!: string;
  protected _image!: string;

  protected constructor(name: string, color: string) {
    this._color = color;
    this._name = name;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  abstract move(): void;

}
