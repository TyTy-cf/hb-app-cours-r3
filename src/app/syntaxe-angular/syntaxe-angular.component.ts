import { Component, OnInit } from '@angular/core';
import {Bar} from "../../model/bar";

@Component({
  selector: 'app-syntaxe-angular',
  templateUrl: './syntaxe-angular.component.html',
  styleUrls: ['./syntaxe-angular.component.scss']
})
export class SyntaxeAngularComponent implements OnInit {

  counter: number = 0;
  counterClassCss: string = 'default';
  bar: Bar = new Bar();

  constructor() { }

  ngOnInit(): void {
    this.initBar();
  }

  increment(value: number): void {
    this.counter += value;
    if (this.counter <= -26) {
      this.counterClassCss = 'dark-red';
    } else if (this.counter <= -16) {
      this.counterClassCss = 'default-red';
    } else if (this.counter <= -1) {
      this.counterClassCss = 'light-red';
    } else if (this.counter === 0) {
      this.counterClassCss = 'default';
    } else if (this.counter >= 26) {
      this.counterClassCss = 'dark-green';
    }else if (this.counter >= 16) {
      this.counterClassCss = 'default-green';
    } else if (this.counter >= 1 ) {
      this.counterClassCss = 'light-green';
    }
  }

  reset(): void {
    this.counter = 0;
    this.counterClassCss = 'default';
  }

  initBar(): void {
    this.bar.name = 'Oui';
    this.bar.boissons = [
      {
        name: 'Coca Cola',
        price: 8,
        alcohol: false,
      },
      {
        name: 'Bière pression 50',
        price: 7,
        alcohol: true,
      },
      {
        name: 'Bière pression 25',
        price: 3.80,
        alcohol: true,
      },
      {
        name: 'Perrier menthe',
        price: 4.2,
        alcohol: false,
      },
    ];
  }

}
