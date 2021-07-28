import { Component, OnInit } from '@angular/core';
import {ArenaGurubashi} from "../../model/rpg/arena_gurubashi";

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {

  arena!: ArenaGurubashi;

  ngOnInit(): void {
   this.arena = new ArenaGurubashi(
      'Kevin', 'Sebastien', 'Jim', 'Leo', 'Vincent',
     'Marine', 'Andranik', 'Tanguy', 'Laura', 'Alice', 'Morgane',
     'Quentin', 'Alban', 'Vanessa', 'Fares',
    );
    this.arena.levelUp(9);
  }

}
