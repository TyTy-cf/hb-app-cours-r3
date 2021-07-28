import {Hero} from "./hero";

export class Rogue extends Hero{

  constructor(name: string) {
    super(name, 300, 40, 47, 3, 'assets/rpg/hero/rogue.png', 'Rogue');
  }

  levelUp() {
    super.levelUp();
    this._lifePointMax += 33;
    this._currentLifePoint = this._lifePointMax;
    this._damageMin += 4;
    this._damageMax += 4;
    if (this._level % 4 === 0) {
      this._defense++;
    }
    this._criticalStrike += .08;
  }

}
