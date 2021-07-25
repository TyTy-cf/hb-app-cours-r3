import {Dice} from "./dice";

export class Yatzee {

  private readonly _dice: Dice[] = [];
  private readonly _mapDiceResult: Map<number, number>;

  constructor() {
    this._mapDiceResult = new Map<number, number>();
    for(let i = 0; i < 5; i++) {
      let dice = new Dice();
      this._dice.push(dice);
      if (!this._mapDiceResult.has(dice.value)) {
        this._mapDiceResult.set(dice.value, 1);
      } else {
        let currentQty = this._mapDiceResult.get(dice.value)!;
        currentQty++;
        this._mapDiceResult.set(dice.value, currentQty);
      }
    }
  }

  get dice(): Dice[] {
    return this._dice;
  }

  getResult(): string {
    for (const [diceValue, diceQty] of this._mapDiceResult) {
      if (diceQty === 5) {
        return 'Yatzee !';
      }
      if (diceQty === 4) {
        return 'Carré !';
      }
      if (diceQty === 3) {
        if (this._mapDiceResult.size === 2) {
          return 'Full !';
        }
        return 'Brelan';
      }
      // La grande suite : taille de la map de 5 et : soit le 1 est présent et le 6 absent ou le 1 est absent et le 6 présent
      if (this._mapDiceResult.size === 5
        && (
          !this._mapDiceResult.has(1) && this._mapDiceResult.has(6)
          ||
          this._mapDiceResult.has(1) && !this._mapDiceResult.has(6)
        )
      ) {
        return 'Grande suite';
      }
      if (
         (
           this._mapDiceResult.has(1)
           && this._mapDiceResult.has(2)
           && this._mapDiceResult.has(3)
           && this._mapDiceResult.has(4)
         )
      ||
        (
          this._mapDiceResult.has(2)
          && this._mapDiceResult.has(3)
          && this._mapDiceResult.has(4)
          && this._mapDiceResult.has(5)
        )
      ||
        (
          this._mapDiceResult.has(3)
          && this._mapDiceResult.has(4)
          && this._mapDiceResult.has(5)
          && this._mapDiceResult.has(6)
        )
      ) {
        return 'Petite suite';
      }
    }
    return 'NADA !';
  }
}
