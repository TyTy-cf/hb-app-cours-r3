import {Hero} from "./hero";

export class Warrior extends Hero {

  constructor(name: string) {
    super(name, 375, 42, 45, 4, 'assets/rpg/hero/warrior.png');
  }

  levelUp() {
    super.levelUp();
    this._lifePointMax += 47;
    this._currentLifePoint = this._lifePointMax;
    this._damageMin += 3;
    this._damageMax += 3;
    if (this._level % 3 === 0) {
      this._defense++;
    }
  }

}
