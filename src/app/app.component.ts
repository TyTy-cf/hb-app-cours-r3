import { Component } from '@angular/core';
import {User} from "./model/user";
import {Car} from "./model/car";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // public year: number;
  public user: User;
  public car: Car;

  constructor() {
    const piou = 'Jhon';
    this.user = {
      name: piou,
      firstName: 'Doe',
    };
    this.user.name = 'Johny';
    const user = {
      name: 'Tourret',
      firstName: 'Kevin',
    };
    this.user = user;

    this.car = new Car();
    this.car.brand = 'Audi';
  }

  variables(user: User): void {
    const day = 1;

    // this.year = 2021;
  }

}
