import { Injectable } from '@angular/core';
import {Hero} from "../model/rpg/hero";
import {Warrior} from "../model/rpg/warrior";
import {Mage} from "../model/rpg/mage";
import {Rogue} from "../model/rpg/rogue";
import {RandomService} from "./random.service";
import {RaceService} from "./race.service";

@Injectable({
  providedIn: 'root'
})
export class HeroMakerService {

  constructor(
    private randomService: RandomService,
    private raceService: RaceService
  ) { }

  public createHeroByName(name: string): Hero {
    const heroesClass = [Warrior, Mage, Rogue];
    const race = this.raceService.races[this.randomService.randomNumber(this.raceService.races.length-1)];
    return new heroesClass[this.randomService.randomNumber(heroesClass.length-1)](
      name, race
    );
  }

}
