import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {Poker} from '../../model/cards/game/poker';
import {IPlayer} from "../../model/cards/game/IPlayer";

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.scss']
})
export class PokerComponent implements AfterViewInit, OnDestroy {

  poker: Poker = new Poker('Quentin', 'Alban', 'Morgane', 'Alice', 'Fares', 'Leo');

  ngAfterViewInit() {
    document.querySelector('body')!.classList.add('poker');
  }

  ngOnDestroy() {
    document.querySelector('body')!.classList.remove('poker');
  }

  foldPlayer(foldingPLayer: IPlayer) {
    console.log(foldingPLayer.name + ' folding...');
  }
}
