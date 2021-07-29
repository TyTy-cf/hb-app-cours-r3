import { Injectable } from '@angular/core';
import {Race} from "../model/rpg/race";

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private _races: Race[] = [];

  constructor() {
    let orc = new Race();
    orc.name = 'Orc';
    orc.code = 'OR';
    orc.damage = 1.1;
    orc.lifePoint = 1;
    orc.criticalStrike = 1;
    orc.defense = 1;

    let tauren = new Race();
    tauren.name = 'Tauren';
    tauren.code = 'TA';
    tauren.damage = 1;
    tauren.lifePoint = 1.1;
    tauren.criticalStrike = 1;
    tauren.defense = 1;

    let Undead = new Race();
    Undead.name = 'Undead';
    Undead.code = 'UD';
    Undead.damage = 1;
    Undead.lifePoint = 1;
    Undead.criticalStrike = 1.1;
    Undead.defense = 1;

    let be = new Race();
    be.name = 'Blood Elf';
    be.code = 'BE';
    be.damage = 1.05;
    be.lifePoint = 1;
    be.criticalStrike = 1.05;
    be.defense = 1;

    let Dwarf = new Race();
    Dwarf.name = 'Dwarf';
    Dwarf.code = 'DW';
    Dwarf.damage = 1;
    Dwarf.lifePoint = 1;
    Dwarf.criticalStrike = 1;
    Dwarf.defense = 1.1;

    this._races.push(orc);
    this._races.push(tauren);
    this._races.push(Undead);
    this._races.push(be);
    this._races.push(Dwarf);
  }

  get races(): Race[] {
    return this._races;
  }

  getRaceByCode(code: string): Race {
    return this._races.filter(race => race.code === code)[0];
  }

  addRace(race: Race): void {
    this._races.push(race);
  }

}
