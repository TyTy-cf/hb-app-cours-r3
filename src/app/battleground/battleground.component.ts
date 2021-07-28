import { Component, OnInit } from '@angular/core';
import {Battleground} from "../../model/rpg/Battleground";
import {ConvertActionBindingResult} from "@angular/compiler/src/compiler_util/expression_converter";
import {ActivatedRoute} from "@angular/router";
import {Warrior} from "../../model/rpg/warrior";
import {Mage} from "../../model/rpg/mage";
import {Rogue} from "../../model/rpg/rogue";

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent implements OnInit {

  battleground!: Battleground;
  startedFight: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const heroesClass = [Warrior, Mage, Rogue];
    this.activatedRoute.params.subscribe(params => {
      // On récupère les paramètres de notre route
      // On génère une classe de Hero aléatoirement via le tableau heroesClass
      // On créer un héro de la classe précédente, générée aléatoirement via les paramètres de la route
      this.battleground = new Battleground(
        new heroesClass[this.randomNumber(heroesClass.length-1)](params.heroName),
        new heroesClass[this.randomNumber(heroesClass.length-1)](params.heroNameDeux),
      );
    });
  }

  randomNumber(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  startFight(): void {
    this.battleground.fight();
    this.startedFight = true;
  }
}
