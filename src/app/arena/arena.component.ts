import { Component, OnInit } from '@angular/core';
import {ArenaGurubashi} from "../../model/rpg/arena_gurubashi";
import {HeroMakerService} from "../../services/hero-maker.service";
import {RandomService} from "../../services/random.service";

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {

  arena!: ArenaGurubashi;

  constructor(
    private heroMakerService: HeroMakerService,
    private randomService: RandomService
  ) { }

  ngOnInit(): void {
   this.arena = new ArenaGurubashi(
     this.heroMakerService,
      this.randomService,
      'Kevin', 'Sebastien', 'Jim', 'Leo', 'Vincent',
     'Marine', 'Andranik', 'Tanguy', 'Laura', 'Alice', 'Morgane',
     'Quentin', 'Alban', 'Vanessa', 'Fares',
    );
    this.arena.levelUp(9);
  }

}
