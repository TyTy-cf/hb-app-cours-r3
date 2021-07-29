import {Race} from "./race";

export abstract class Hero {

  protected _name: string;
  protected _currentLifePoint: number;
  protected _lifePointMax: number;
  protected _damageMin: number;
  protected _damageMax: number;
  protected _level: number;
  protected _defense: number;
  protected _criticalStrike: number;
  protected _image: string;
  protected _className: string;
  protected _race: Race;

  protected constructor(
    name: string, lifePointMax: number, damageMin: number,
    damageMax: number, defense: number, image: string, className: string, race: Race
  ) {
    this._race = race;
    this._name = name;
    this._currentLifePoint = lifePointMax * race.lifePoint;
    this._lifePointMax = lifePointMax * race.lifePoint;
    this._damageMin = damageMin * race.damage;
    this._damageMax = damageMax * race.damage;
    this._defense = defense * race.defense;
    this._criticalStrike = 5 * race.criticalStrike;
    this._level = 1;
    this._image = image;
    this._className = className;
  }

  get race(): Race {
    return this._race;
  }

  get className(): string {
    return this._className;
  }

  get name(): string {
    return this._name;
  }

  get currentLifePoint(): number {
    return this._currentLifePoint;
  }

  get lifePointMax(): number {
    return this._lifePointMax;
  }

  get damageMin(): number {
    return this._damageMin;
  }

  get damageMax(): number {
    return this._damageMax;
  }

  get level(): number {
    return this._level;
  }

  get defense(): number {
    return this._defense;
  }

  get criticalStrike(): number {
    return this._criticalStrike;
  }

  get image(): string {
    return this._image;
  }

  levelUp(): void {
    this._level++;
    this._criticalStrike += .25;
  }

  randomNumber(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  attack(target:Hero): void {
    let damages = this.randomNumber(this._damageMin, this._damageMax);
    let infoCc = '';
    if (this.randomNumber(100) <= this._criticalStrike) {
      damages *= 1.5;
      infoCc = ' (coup critique)';
    }
    damages = Math.round(damages * (100 - target._defense) / 100);
    target._currentLifePoint -= damages;
    console.log('Le hero ' + target._name + ' a subit ' + damages + infoCc);
  }

}
