import {Hero} from "./hero";
import {Race} from "./race";

export class Mage extends Hero{

  constructor(name: string, race: Race) {
    super(name, 285, 45, 48, 2, 'assets/rpg/hero/mage.png', 'Mage', race);
  }

  levelUp() {
    super.levelUp();
    this._lifePointMax += 25;
    this._currentLifePoint = this._lifePointMax;
    this._damageMin += 4;
    this._damageMax += 4;
    if (this._level % 5 === 0) {
      this._defense++;
    }
  }

}
