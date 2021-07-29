import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPlayer} from "../../model/cards/game/IPlayer";

@Component({
  selector: 'app-poker-player',
  templateUrl: './poker-player.component.html',
  styleUrls: ['./poker-player.component.scss']
})
export class PokerPlayerComponent {

  @Input()
  player!: IPlayer;

  @Output()
  fold: EventEmitter<IPlayer> = new EventEmitter<IPlayer>();

  folding(): void {
    this.fold.emit(this.player);
  }

}
