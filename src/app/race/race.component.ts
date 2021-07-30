import { Component } from '@angular/core';
import {RaceService} from "../../services/race.service";

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent {

  constructor(public raceService: RaceService) { }

}
