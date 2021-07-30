import { Component, OnInit } from '@angular/core';
import {Race} from "../../model/rpg/race";
import {RaceService} from "../../services/race.service";

@Component({
  selector: 'app-form-race',
  templateUrl: './form-race.component.html',
  styleUrls: ['./form-race.component.scss']
})
export class FormRaceComponent {

  race: Race = new Race();

  constructor(private raceService: RaceService) { }

  onSubmit(): void {
    this.raceService.addRace(this.race);
  }
}
