import {Card} from "../card/card";

export abstract class AbstractDeck {

  private _deck: Card[] = [];

  get deck(): Card[] {
    return this._deck;
  }

  shuffle(): void {
    this._deck.sort(() => Math.random() - 0.5);
    this._deck.sort(() => Math.random() - 0.5);
    this._deck.sort(() => Math.random() - 0.5);
    this._deck.sort(() => Math.random() - 0.5);
    this._deck.sort(() => Math.random() - 0.5);
  }

  drawCard(): Card {
    return this._deck.splice(0, 1)[0];
  }

  drawCards(nbCards: number): Card[] {
    return this._deck.splice(0, nbCards);
  }

}
