
export class Race {

  private _name!: string;
  private _code!: string;
  private _damage!: number;
  private _lifePoint!: number;
  private _criticalStrike!: number;
  private _defense!: number;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get damage(): number {
    return this._damage;
  }

  set damage(value: number) {
    this._damage = value;
  }

  get lifePoint(): number {
    return this._lifePoint;
  }

  set lifePoint(value: number) {
    this._lifePoint = value;
  }

  get criticalStrike(): number {
    return this._criticalStrike;
  }

  set criticalStrike(value: number) {
    this._criticalStrike = value;
  }

  get defense(): number {
    return this._defense;
  }

  set defense(value: number) {
    this._defense = value;
  }
}
