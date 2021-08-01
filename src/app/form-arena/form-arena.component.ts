import { Component, OnInit } from '@angular/core';
import {ArenaGurubashi} from "../../model/rpg/arena_gurubashi";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RandomService} from "../../services/random.service";
import {HeroMakerService} from "../../services/hero-maker.service";

@Component({
  selector: 'app-form-arena',
  templateUrl: './form-arena.component.html',
  styleUrls: ['./form-arena.component.scss']
})
export class FormArenaComponent implements OnInit {

  arena!: ArenaGurubashi;
  formGroupHero!: FormGroup;
  formSubmitted: boolean = false;

  constructor(private randomService: RandomService, private heroMakerService: HeroMakerService) { }

  ngOnInit(): void {
    this.formGroupHero = new FormGroup(
      {
        names: new FormArray([
          new FormControl('', Validators.required),
        ]),
      }
    );
  }

  get names(): FormArray {
    return this.formGroupHero.get('names') as FormArray;
  }

  addNameField(): void {
    this.names.push(new FormControl('', Validators.required));
  }

  deleteNameField(index: number): void {
    if (this.names.length !== 1) {
      this.names.removeAt(index);
    }
  }

  createHeroes(): void {
    this.formSubmitted = true;
    this.arena = new ArenaGurubashi(
      this.heroMakerService,
      this.randomService,
      this.formGroupHero.value.names
    );
    this.arena.levelUp(9);
  }
}
