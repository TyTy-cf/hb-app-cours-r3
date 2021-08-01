import {PokerPlayer} from "./PokerPlayer";
import {ClassicDeck} from "../deck/classicDeck";
import {Card} from "../card/card";

export class Poker {

  private _river: Card[] = [];
  private _players: PokerPlayer[] = []
  private _classicDeck: ClassicDeck = new ClassicDeck();

  constructor(... names: string[]) {
    this._classicDeck.shuffle();
    for (const name of names) {
      this._players.push(new PokerPlayer(name));
    }
  }

  get players(): PokerPlayer[] {
    return this._players;
  }

  get classicDeck(): ClassicDeck {
    return this._classicDeck;
  }

  get river(): Card[] {
    return this._river;
  }

  set river(cards: Card[])  {
    this._river = cards;
  }

  dealCards(): void {
    this._classicDeck = new ClassicDeck();
    this._classicDeck.shuffle();
    this.resetPlayerHand();
    let nbCardGiven = 1;
    while (nbCardGiven <= 2) {
      for (const player of this._players) {
        player.hand.push(this._classicDeck.drawCard());
      }
      nbCardGiven++;
    }
    this._river = this._classicDeck.drawCards(3);
  }

  resetPlayerHand(): void {
    for (const player of this._players) {
      player.hand = [];
      player.isFolding = false;
    }
  }

  addRiver(): void {
    if (this._river.length <= 5) {
      this._river.push(this._classicDeck.drawCard());
    }
  }
}
