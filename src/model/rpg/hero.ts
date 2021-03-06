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
  protected _classColor: string;
  protected _totalDamage: number;
  protected _nbHeroKilled: number;
  protected _killedOrder: number;
  private _nbCriticalStrike: number;
  private _maxDamage: number;

  protected constructor(
    name: string, lifePointMax: number, damageMin: number,
    damageMax: number, defense: number, image: string, className: string, race: Race, classColor: string
  ) {
    this._race = race;
    this._name = name;
    this._currentLifePoint = Math.round(lifePointMax * race.lifePoint);
    this._lifePointMax = Math.round(lifePointMax * race.lifePoint);
    this._damageMin = Math.round(damageMin * race.damage * 100) / 100;
    this._damageMax = Math.round(damageMax * race.damage * 100) / 100;
    this._defense = Math.round(defense * race.defense * 100) / 100;
    this._criticalStrike =  Math.round(5 * race.criticalStrike * 100) / 100;
    this._level = 1;
    this._image = image;
    this._className = className;
    this._classColor = classColor;
    this._totalDamage = 0;
    this._nbHeroKilled = 0;
    this._killedOrder = 0;
    this._nbCriticalStrike = 0;
    this._maxDamage = 0;
  }

  get nbCriticalStrike(): number {
    return this._nbCriticalStrike;
  }

  set nbCriticalStrike(value: number) {
    this._nbCriticalStrike = value;
  }

  get maxDamage(): number {
    return this._maxDamage;
  }

  set maxDamage(value: number) {
    this._maxDamage = value;
  }

  get nbHeroKilled(): number {
    return this._nbHeroKilled;
  }

  set nbHeroKilled(value: number) {
    this._nbHeroKilled = value;
  }

  get killedOrder(): number {
    return this._killedOrder;
  }

  set killedOrder(value: number) {
    this._killedOrder = value;
  }

  get totalDamage(): number {
    return this._totalDamage;
  }

  set totalDamage(value: number) {
    this._totalDamage = value;
  }

  get classColor(): string {
    return this._classColor;
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
    this._criticalStrike =  Math.round((this._criticalStrike + .25  * this.race.criticalStrike) * 100) / 100;
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
      this._nbCriticalStrike++;
    }
    damages = Math.round(damages * (100 - target._defense) / 100);
    target._currentLifePoint -= damages;
    if (target._currentLifePoint < 0) {
      target._currentLifePoint = 0;
      this._nbHeroKilled = this._nbHeroKilled + 1;
      this.levelUp();
    }
    if (damages > this._maxDamage) {
      this._maxDamage = damages;
    }
    this._totalDamage += damages;
    console.log('Le hero ' + target._name + ' a subit ' + damages + infoCc);
  }

}
