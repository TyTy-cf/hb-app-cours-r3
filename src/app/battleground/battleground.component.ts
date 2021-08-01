import { Component, OnInit } from '@angular/core';
import {Battleground} from "../../model/rpg/Battleground";
import {ActivatedRoute} from "@angular/router";
import {HeroMakerService} from "../../services/hero-maker.service";

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent implements OnInit {

  battleground!: Battleground;
  startedFight: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroMakerService: HeroMakerService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // On récupère les paramètres de notre route
      // On génère une classe de Hero aléatoirement via le tableau heroesClass
      // On créer un héro de la classe précédente, générée aléatoirement via les paramètres de la route
      this.battleground = new Battleground(
        this.heroMakerService.createHeroByName(params.heroName),
        this.heroMakerService.createHeroByName(params.heroNameDeux),
      );
      for(let i = 0; i < 10; i++) {
        this.battleground.levelUp();
      }
    });
  }

  startFight(): void {
    this.battleground.fight();
    this.startedFight = true;
  }
}
