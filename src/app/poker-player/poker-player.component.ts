import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PokerPlayer} from "../../model/cards/game/PokerPlayer";

@Component({
  selector: 'app-poker-player',
  templateUrl: './poker-player.component.html',
  styleUrls: ['./poker-player.component.scss']
})
export class PokerPlayerComponent {

  @Input()
  player!: PokerPlayer;

  @Output()
  fold: EventEmitter<PokerPlayer> = new EventEmitter<PokerPlayer>();

  folding(): void {
    // Cet output est overkill ! On peut juste dire que this.player.isFolding = true et ça marche...
    this.fold.emit(this.player);
  }

}
