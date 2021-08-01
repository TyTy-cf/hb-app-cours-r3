import {Dice} from "./dice";
import {IYatzeeResult} from "./IYatzeeResult";

export class Yatzee {

  private _dice: Dice[] = [];
  private _mapDiceResult: Map<number, number> = new Map<number, number>();
  private _numberRoll = 1;
  private _currentRound = 1;
  private _score: number = 0;
  private _currentResult!: IYatzeeResult;

  constructor() {
    this.rollDice();
  }

  get score(): number {
    return this._score;
  }

  get dice(): Dice[] {
    return this._dice;
  }

  get numberRoll(): number {
    return this._numberRoll;
  }

  get currentRound(): number {
    return this._currentRound;
  }

  get currentResult(): IYatzeeResult {
    return this._currentResult;
  }

  getResult(): void {
    this._currentResult = {
      name: 'Nada !', points: 0
    };
    for (const [diceValue, diceQty] of this._mapDiceResult) {
      if (diceQty === 5) {
        this._currentResult = {
          name: 'Yatzee', points: 50
        };
        break;
      }
      if (diceQty === 4) {
        this._currentResult = {
          name: 'Carré', points: this.sumDiceValue()
        };
        break;
      }
      if (diceQty === 3) {
        if (this._mapDiceResult.size === 2) {
          this._currentResult = {
            name: 'Full', points: 25
          };
          break;
        }
        this._currentResult = {
          name: 'Brelan', points: this.sumDiceValue()
        };
        break;
      }
      // La grande suite : taille de la map de 5 et : soit le 1 est présent et le 6 absent ou le 1 est absent et le 6 présent
      if (this._mapDiceResult.size === 5
        && (
          !this._mapDiceResult.has(1) && this._mapDiceResult.has(6)
          ||
          this._mapDiceResult.has(1) && !this._mapDiceResult.has(6)
        )
      ) {
        this._currentResult = {
          name: 'Grande suite', points: 40
        };
        break;
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
        this._currentResult = {
          name: 'Petite suite', points: 30
        };
        break;
      }
    }
  }

  rerollDice(): void {
    this._mapDiceResult = new Map<number, number>();
    for (const indexDice in this.dice) {
      if (this.dice[indexDice].isSelected) {
        this.dice[indexDice] = new Dice();
      }
      this.updateMapDiceQuantity(this.dice[indexDice].value);
    }
    this._numberRoll++;
  }

  keepRoll(): void {
    this._numberRoll = 3;
  }

  updateScore(): void {
    this._score += this._currentResult.points;
    this._currentRound++;
  }

  rollDice(): void {
    this._dice = [];
    this._numberRoll = 1;
    this._mapDiceResult = new Map<number, number>();
    for(let i = 0; i < 5; i++) {
      let dice = new Dice();
      this._dice.push(dice);
      this.updateMapDiceQuantity(dice.value);
    }
    this.getResult();
  }

  private sumDiceValue(): number {
    let sumDice = 0;
    for (const dice of this.dice) {
      sumDice += dice.value;
    }
    return sumDice;
  }

  private updateMapDiceQuantity(value: number): void {
    if (!this._mapDiceResult.has(value)) {
      this._mapDiceResult.set(value, 1);
    } else {
      let currentQty = this._mapDiceResult.get(value)!;
      currentQty++;
      this._mapDiceResult.set(value, currentQty);
    }
  }
}
