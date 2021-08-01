import {Hero} from "./hero";
import {Race} from "./race";

export class Rogue extends Hero{

  constructor(name: string, race: Race) {
    super(name, 300, 40, 47, 3, 'assets/rpg/hero/rogue.png', 'Rogue', race, 'color-rogue');
  }

  levelUp() {
    super.levelUp();
    this._lifePointMax = Math.round(this._lifePointMax + 33 * this.race.lifePoint);
    this._currentLifePoint = this._lifePointMax;
    this._damageMin = Math.round(this._damageMin + 4 * this.race.damage);
    this._damageMax = Math.round(this._damageMax + 4 * this.race.damage);
    if (this._level % 4 === 0) {
      this._defense = Math.round((this._defense + this.race.defense) * 100) / 100;
      this._criticalStrike = (this._criticalStrike + .08 * this.race.criticalStrike);
    }
  }

}
