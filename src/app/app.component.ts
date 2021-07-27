import { Component } from '@angular/core';
import {User} from '../model/user';
import {Car} from '../model/car';
import {Student} from '../model/student';
import {Bar} from '../model/bar';
import {Pawn} from '../model/chess/pawn';
import {Rook} from '../model/chess/rook';
import {Battleground} from '../model/rpg/Battleground';
import {Mage} from '../model/rpg/mage';
import {Rogue} from '../model/rpg/rogue';
import {ArenaGurubashi} from '../model/rpg/arena_gurubashi';
import {AbstractPiece} from '../model/chess/abstractPiece';
import {Yatzee} from '../model/yatzee/yatzee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public yatzee: Yatzee;
  public age: number = 25;

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

    // Exo 13 :
    this.exoTreize();

    // Exemple chess:
    this.exempleChess();

    // Exo RPG :
    this.testRpg();

    // Exo Yatzee
    this.yatzee = new Yatzee();
    console.log('Résultat Yatzee : ');
    console.log(this.yatzee.dice);
    console.log(this.yatzee.getResult());
  }

  private exoTrois(price: number, quantity: number) {
    console.log('Résultat exos 3, prix TTC : ' +
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
    console.log('Résultat exos 4, information de la température ' + temperature + ' : ' + result);
  }

  private exoSix() {
    console.log('Résultat exos 6, le prix augmenté est de : ' +
      this.increasePrice(50, 25) + '€')
    ;
  }

  private increasePrice(price: number, percent: number): number {
    return Math.round(price * (1 + percent/100) * 100)/100;
  }

  private exoSept(): void {
    const arrayRemove = [5, 6, 8, 2, 1, 2, 2, 3, 3, 3, 4, 5, 5];
    let arrayTmp: number[] = [];
    for (const element of arrayRemove) {
      // find cherche un élément qui suis la condition de la fonction fléchée
      if (!arrayTmp.find((elem) => elem === element)) {
        arrayTmp.push(element);
      }
    }
    console.log(arrayTmp);
  }

  private exoNeuf(): string {
    const tmpValue = 'Lorem quisque class vestibulum';
    let dottedString = tmpValue;
    if (tmpValue.length > 15) {
      dottedString = tmpValue.substr(0, 15) + '...';
    }
    return dottedString;
  }

  private exoDix(): void {
    const password = 'zboui@';
    console.log('Exo 10 : le password ' + password + ' est ' + this.isBadPassword(password));
  }

  private isBadPassword(password: string): boolean {
    return password.length > 9 && password.includes('@');
  }


  private exoOnze(): void {
    console.log('Exo 11 : ' + this.timeConverter(225000));
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

  exoDouze(): void {
    const wovels = ['a', 'e', 'i', 'o', 'u', 'y'];
    const myString = 'Chat';
    let finalString = '';
    for (const letter of myString) {
      finalString += letter;
      if (letter.match(/[aeiouy]/)) {
        finalString += 'fe' + letter;
      }
      // if (wovels.includes(letter)) {
      //   finalString += 'fe' + letter;
      // }
    }
    console.log('Exo 12 : ' + finalString);
    }

  private exoTreize(): void {
    let bar = new Bar();
    bar.name = 'Oui';
    bar.boissons = [
      {
        name: 'Coca Cola',
        price: 5,
        alcohol: false,
      },
      {
        name: 'Bière pression 50',
        price: 7,
        alcohol: true,
      },
    ];
    bar.snacks = [
      {
        name: 'Saucisson',
        price: 6,
      },
    ];
    console.log(bar.displayMenu());
    console.log(bar.name);
    let bar2 = new Bar();
    bar2.name = 'Oups';
    console.log(bar2.name);
  }

  private exempleChess(): void {
    let pionB = new Pawn('noir');
    let tourB = new Rook('noir');
    const pieces: AbstractPiece[] = [pionB, tourB];
    for (const piece of pieces) {
      piece.move();
    }
  }

  private testRpg(): void {
    // let battle = new Battleground(
    //   new Mage('Alice'),
    //   new Rogue('Tanguy')
    // );
    // battle.levelUp();
    // battle.levelUp();
    // battle.levelUp();
    // battle.levelUp();
    // battle.displayHero();
    // battle.fight();

    let arena = new ArenaGurubashi(
      'Kevin', 'Sebastien', 'Jim', 'Leo', 'Vincent', 'Marine', 'Andranik', 'Tanguy', 'Laura', 'Alice', 'Morgane', 'Quentin', 'Alban', 'Vanessa', 'Fares'
    );
    arena.levelUp(10);
    // arena.fight();
  }

}
