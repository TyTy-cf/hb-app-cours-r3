import {Card} from "../card/card";

export class PokerPlayer {

  private _name: string;
  private _hand: Card[] = [];
  private _isFolding: boolean = false;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get hand(): Card[] {
    return this._hand;
  }

  set hand(value: Card[]) {
    this._hand = value;
  }

  get isFolding(): boolean {
    return this._isFolding;
  }

  set isFolding(value: boolean) {
    this._isFolding = value;
  }
}
