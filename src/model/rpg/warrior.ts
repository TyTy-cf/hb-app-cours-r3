import {Hero} from "./hero";
import {Race} from "./race";

export class Warrior extends Hero {

  constructor(name: string, race: Race) {
    super(name, 375, 42, 45, 4, 'assets/rpg/hero/warrior.png', 'Warrior', race, 'color-warrior');
  }

  levelUp(): void {
    super.levelUp();
    this._lifePointMax = Math.round(this._lifePointMax + 47 * this.race.lifePoint);
    this._currentLifePoint = this._lifePointMax;
    this._damageMin = Math.round(this._damageMin + 3 * this.race.damage);
    this._damageMax = Math.round(this._damageMax + 3 * this.race.damage);
    if (this._level % 3 === 0) {
      this._defense = Math.round((this._defense + this.race.defense) * 100) / 100;
    }
  }

}
