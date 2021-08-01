import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Race} from "../../model/rpg/race";
import {RaceService} from "../../services/race.service";

@Component({
  selector: 'app-form-race',
  templateUrl: './form-race.component.html',
  styleUrls: ['./form-race.component.scss']
})
export class FormRaceComponent implements OnChanges {

  @Input()
  race: Race = new Race();
  isEdit: boolean = false;

  constructor(private raceService: RaceService) { }

  onSubmit(): void {
    this.raceService.addRace(this.race);
    this.isEdit = false;
    this.race = new Race();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const oldValue = changes.race.previousValue;
    const newValue = changes.race.currentValue;
    if (oldValue !== newValue && oldValue !== undefined) {
      this.race = newValue;
      this.isEdit = true;
    } else {
      this.isEdit = false;
    }
  }

  reset(): void {
    this.isEdit = false;
    this.race = new Race();
  }
}
