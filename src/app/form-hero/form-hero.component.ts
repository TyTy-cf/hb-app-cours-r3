import { Component, OnInit } from '@angular/core';
import {Hero} from "../../model/rpg/hero";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {RaceService} from "../../services/race.service";
import {Warrior} from "../../model/rpg/warrior";
import {Mage} from "../../model/rpg/mage";
import {Rogue} from "../../model/rpg/rogue";

@Component({
  selector: 'app-form-hero',
  templateUrl: './form-hero.component.html',
  styleUrls: ['./form-hero.component.scss']
})
export class FormHeroComponent implements OnInit {

  hero!: Hero;
  heroFormGroup!: FormGroup;
  heroClasses = [Warrior, Mage, Rogue];

  constructor(public raceService: RaceService) { }

  ngOnInit(): void {
    this.heroFormGroup = new FormGroup({
        name: new FormControl(
          '', [
            Validators.required, Validators.minLength(3)
          ]
        ),
        race: new FormControl(
          '', [
            Validators.required
          ]
        ),
        heroClass: new FormControl(
          '', [
            Validators.required
          ]
        ),
      }
    )
  }

  get name(): AbstractControl {
    return <AbstractControl>this.heroFormGroup.get('name');
  }

  get race(): AbstractControl {
    return <AbstractControl>this.heroFormGroup.get('race');
  }

  get heroClass(): AbstractControl {
    return <AbstractControl>this.heroFormGroup.get('heroClass');
  }

  createHero(): void {
    this.hero = new this.heroClass.value(this.name.value, this.race.value);
    console.log(this.hero);
  }
}
