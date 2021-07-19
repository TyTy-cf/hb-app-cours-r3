import { Component } from '@angular/core';
import {User} from "../model/user";
import {Car} from "../model/car";
import {Student} from "../model/student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // public year: number;
  public user: User;
  public car: Car;
  public students: Student[];

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

    // Exo 1 :
    this.exoUn(42);

    // Exo 2 :
    this.exoDeux([ 12, 15, 19, 2]);

    // Exo 3 :
    this.exoTrois(20, 3);

    // Exo 4 :
    this.exoQuatre(-10);

    // Exo 5 :
    this.students = [
      {
        name: 'Albert',
        notes: new Array<number>(12, 8, 9, 7, 13),
      },
      {
        name: 'Michel',
        notes: new Array<number>(14, 13, 12, 11, 10),
      },
      {
        name: 'Vincent',
        notes: new Array<number>(17, 16, 15, 18, 13),
      },
    ];
    this.exoCinq();

    // Exo 6 :
    this.exoSix();
  }

  private exoUn(age: number): void {
    const currentDate = new Date();
    const birthYear = currentDate.getFullYear() - age;
    console.log('Résultat exo 1 pour l age : ' + age + ' est ' + birthYear);
    // console.log('Résultat exo 1 pour l age : ' + age + ' est ' + (new Date()).getFullYear() - age);
  }

  private exoDeux(numbers: number[]): void {
    console.log('Résultat exo 2, la moyenne est de : ' +
      this.calculateAverage(numbers))
    ;
  }

  private calculateAverage(notes: number[]): number {
    let sumNotes = 0;
    for (const note of notes) {
      sumNotes += note;
    }
    // numbers.forEach((note) => {
    //   sumNotes += note;
    // });
    return sumNotes/notes.length;
  }

  private exoTrois(price: number, quantity: number) {
    console.log('Résultat exo 3, prix TTC : ' +
      this.calculateTTCPrice(price, quantity)+ '€')
    ;
  }

  private calculateTTCPrice(price: number, quantity: number): number {
    return (price * quantity) * 1.2;
  }

  private exoQuatre(temperature: number): void {
    let result = temperature >= 0 ? 'liquide' : 'solide';
    if (temperature >= 70) {
      result = 'gaz';
    }
    console.log('Résultat exo 4, information de la température ' + temperature + ' : ' + result);
  }

  private exoCinq(): void {
    console.log('Résultat exo 5 : ');
    for (const student of this.students) {
      console.log('La moyenne de : ' + student.name + ' est de ' +
        this.calculateAverage(student.notes))
      ;
    }
  }

  private exoSix() {
    console.log('Résultat exo 6, le prix augmenté est de : ' +
      this.increasePrice(50, 25) + '€')
    ;
  }

  private increasePrice(price: number, percent: number): number {
    return Math.round(price * (1 + percent/100) * 100)/100;
  }
}
