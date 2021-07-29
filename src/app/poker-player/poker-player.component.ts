import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CardPlayer} from "../../model/cards/game/CardPlayer";

@Component({
  selector: 'app-poker-player',
  templateUrl: './poker-player.component.html',
  styleUrls: ['./poker-player.component.scss']
})
export class PokerPlayerComponent {

  @Input()
  player!: CardPlayer;

  @Output()
  fold: EventEmitter<CardPlayer> = new EventEmitter<CardPlayer>();

  folding(): void {
    // Cet output est overkill ! On peut juste dire que this.player.isFolding = true et ça marche...
    this.fold.emit(this.player);
  }

}
