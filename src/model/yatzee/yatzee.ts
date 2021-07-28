import {Dice} from "./dice";

export class Yatzee {

  private readonly _dice: Dice[] = [];
  private _mapDiceResult: Map<number, number>;
  private _numberRoll = 1;

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
    console.log(this._mapDiceResult);
  }

  get dice(): Dice[] {
    return this._dice;
  }

  get numberRoll(): number {
    return this._numberRoll;
  }

  set numberRoll(value: number) {
    this._numberRoll = value;
  }

  getResult(): string {
    // [diceValue, diceQty] = les itérations de la map, où on a :
    // diceValue = valeur du dé
    // diceQty = le nombre de fois où le dé est apparu dans le lancé
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
      || (
        this._mapDiceResult.has(2)
        && this._mapDiceResult.has(3)
        && this._mapDiceResult.has(4)
        && this._mapDiceResult.has(5)
        )
      || (
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

  rerollDice() {
    this._mapDiceResult = new Map<number, number>();
    for (const indexDice in this.dice) {
      if (this.dice[indexDice].isSelected) {
        this.dice[indexDice] = new Dice();
      }
      if (!this._mapDiceResult.has(this.dice[indexDice].value)) {
        this._mapDiceResult.set(this.dice[indexDice].value, 1);
      } else {
        let currentQty = this._mapDiceResult.get(this.dice[indexDice].value)!;
        currentQty++;
        this._mapDiceResult.set(this.dice[indexDice].value, currentQty);
      }
    }
    this.numberRoll++;
  }
}
