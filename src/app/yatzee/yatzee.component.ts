import { Component, OnInit } from '@angular/core';
import {Yatzee} from "../../model/yatzee/yatzee";
import {Dice} from "../../model/yatzee/dice";

@Component({
  selector: 'app-yatzee',
  templateUrl: './yatzee.component.html',
  styleUrls: ['./yatzee.component.scss']
})
export class YatzeeComponent implements OnInit {

  yatzee: Yatzee = new Yatzee();

  constructor() { }

  ngOnInit(): void {
  }

  selectedDice(dice: Dice) {
    dice.isSelected = !dice.isSelected;
  }

  rerollDice(): void {
    this.yatzee.rerollDice();
  }
}
