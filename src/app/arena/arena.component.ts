import {Component, Input } from '@angular/core';
import {ArenaGurubashi} from "../../model/rpg/arena_gurubashi";

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent {

  @Input()
  arena!: ArenaGurubashi;

}
