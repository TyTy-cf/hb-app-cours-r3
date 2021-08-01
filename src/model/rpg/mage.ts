import {Hero} from "./hero";
import {Race} from "./race";

export class Mage extends Hero {

  constructor(name: string, race: Race) {
    super(name, 285, 45, 48, 2, 'assets/rpg/hero/mage.png', 'Mage', race, 'color-mage');
  }

  levelUp(): void {
    super.levelUp();
    this._lifePointMax = Math.round(this._lifePointMax + 25 * this.race.lifePoint);
    this._currentLifePoint = this._lifePointMax;
    this._damageMin = Math.round(this._damageMin + 5 * this.race.damage);
    this._damageMax = Math.round(this._damageMax + 5 * this.race.damage);
    if (this._level % 5 === 0) {
      this._defense = Math.round((this._defense + this.race.defense) * 100) / 100;
    }
  }

}
