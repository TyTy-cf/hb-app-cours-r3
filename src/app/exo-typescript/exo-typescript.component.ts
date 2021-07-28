import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo-typescript',
  templateUrl: './exo-typescript.component.html',
  styleUrls: ['./exo-typescript.component.scss']
})
export class ExoTypescriptComponent implements OnInit {

  constructor() {
    // Exo 3 :
    this.exoTrois(20, 3);
    // Exo 4 :
    this.exoQuatre(-10);
    // Exo 6 :
    this.exoSix();
    // Exo 7 :
    this.exoSept();
    // Exo 9 :
    console.log('Exo 9 : ' + this.exoNeuf());
    // Exo 10 :
    this.exoDix();
    // Exo 11 :
    this.exoOnze();
    // Exo 12 :
    this.exoDouze();
  }

  ngOnInit(): void {
  }

  private calculateTTCPrice(price: number, quantity: number): number {
    return (price * quantity) * 1.2;
  }

  private exoTrois(price: number, quantity: number): number {
    return this.calculateTTCPrice(price, quantity);
  }

  private exoQuatre(temperature: number): string {
    let result = temperature >= 0 ? 'liquide' : 'solide';
    if (temperature >= 70) {
      result = 'gaz';
    }
    return result;
  }

  private exoSix() {
    return this.increasePrice(50, 25);
  }

  private increasePrice(price: number, percent: number): number {
    return Math.round(price * (1 + percent/100) * 100)/100;
  }

  private exoSept(): number[] {
    const arrayRemove = [5, 6, 8, 2, 1, 2, 2, 3, 3, 3, 4, 5, 5];
    let arrayTmp: number[] = [];
    for (const element of arrayRemove) {
      // find cherche un élément qui suis la condition de la fonction fléchée
      if (!arrayTmp.find((elem) => elem === element)) {
        arrayTmp.push(element);
      }
    }
    return arrayTmp;
  }

  private exoNeuf(): string {
    const tmpValue = 'Lorem quisque class vestibulum';
    let dottedString = tmpValue;
    if (tmpValue.length > 15) {
      dottedString = tmpValue.substr(0, 15) + '...';
    }
    return dottedString;
  }

  private exoDix(): boolean {
    return this.isBadPassword('zboui@');
  }

  private isBadPassword(password: string): boolean {
    return password.length > 9 && password.includes('@');
  }

  private exoOnze(): string {
    return this.timeConverter(225000);
  }

  private timeConverter(milliSec: number): string {
    const ms = milliSec % 1000;
    const secondsMins = Math.floor(milliSec / 1000);
    const seconds = secondsMins % 60;
    const minutes = Math.floor(secondsMins / 60) % 60;
    let strMins: string = minutes + '';
    if (minutes < 10) {
      strMins = '0' + minutes;
    }
    let strMs: string = ms + '';
    if (ms < 10) {
      strMs = '00' + ms;
    } else if (ms < 100) {
      strMs = '0' + ms;
    }
    let strSec: string = seconds + '';
    if (seconds < 10) {
      strSec = '0' + seconds;
    }
    return strMins + ':' + strSec + '"' + strMs;
  }

  exoDouze(): string {
    const myString = 'Chat';
    let finalString = '';
    for (const letter of myString) {
      finalString += letter;
      if (letter.match(/[aeiouy]/)) {
        finalString += 'fe' + letter;
      }
    }
    return finalString;
  }

}
