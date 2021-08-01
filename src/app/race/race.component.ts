import { Component } from '@angular/core';
import {RaceService} from "../../services/race.service";
import {Race} from "../../model/rpg/race";

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent {

  editedRace: Race = new Race();

  constructor(public raceService: RaceService) { }

}
