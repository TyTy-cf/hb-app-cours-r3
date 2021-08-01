import {AbstractDeck} from "./abstractDeck";
import {Card} from "../card/card";

export class ClassicDeck extends AbstractDeck {

  protected colors: {name: string, eq: string}[] = [
    {name: 'Coeur', eq: 'h'},
    {name: 'Carreau', eq: 'd'},
    {name: 'Trèfle', eq: 'c'},
    {name: 'Pique', eq: 's'},
  ];
  protected values: { name: string, rank: number}[] = [
    {name: 'A', rank: 14},
    {name: '2', rank: 2},
    {name: '3', rank: 3},
    {name: '4', rank: 4},
    {name: '5', rank: 5},
    {name: '6', rank: 6},
    {name: '7', rank: 7},
    {name: '8', rank: 8},
    {name: '9', rank: 9},
    {name: '10', rank: 10},
    {name: 'J', rank: 11},
    {name: 'Q', rank: 12},
    {name: 'K', rank: 13},
  ];

  constructor() {
    super();
    for (const color of this.colors) {
      for (const value of this.values) {
        this.deck.push(
          new Card(color.name, value.name, value.rank, 'assets/cards/classic/'+value.name+color.eq+'.gif')
        );
      }
    }
  }
}
