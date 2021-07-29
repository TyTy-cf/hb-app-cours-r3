import { Component } from '@angular/core';
import {Yatzee} from "../../model/yatzee/yatzee";
import {Dice} from "../../model/yatzee/dice";

@Component({
  selector: 'app-yatzee',
  templateUrl: './yatzee.component.html',
  styleUrls: ['./yatzee.component.scss']
})
export class YatzeeComponent {

  yatzee: Yatzee = new Yatzee();

  selectedDice(dice: Dice) {
    dice.isSelected = !dice.isSelected;
  }

  rerollDice(): void {
    this.yatzee.rerollDice();
    this.yatzee.getResult();
  }

  rollDice(): void {
    this.yatzee.updateScore();
    this.yatzee.rollDice();
  }
}
