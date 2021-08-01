import {Component, Input, OnInit} from '@angular/core';
import {ArenaGurubashi} from "../../model/rpg/arena_gurubashi";

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {

  @Input()
  arena!: ArenaGurubashi;

  constructor() { }

  ngOnInit(): void {
  }

}
