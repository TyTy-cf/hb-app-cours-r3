import {Hero} from "./hero";

export class Battleground {

  private readonly _heroOne: Hero;
  private readonly _heroTwo: Hero;

  constructor(heroOne: Hero, heroTwo: Hero) {
    this._heroOne = heroOne;
    this._heroTwo = heroTwo;
  }

  get heroOne(): Hero {
    return this._heroOne;
  }

  get heroTwo(): Hero {
    return this._heroTwo;
  }

  displayHero(): void {
    console.log(this._heroOne);
    console.log(this._heroTwo);
  }

  levelUp(): void {
    this._heroOne.levelUp();
    this._heroTwo.levelUp();
  }

  randomNumber(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  fight(): void {
    let heroes = [this.heroOne, this.heroTwo];
    let startIndex = this.randomNumber(1);
    let secondIndex = Math.abs(startIndex - 1);
    while (heroes[startIndex].currentLifePoint > 0
        && heroes[secondIndex].currentLifePoint > 0
      ) {
      console.log('1er joueur : ' + heroes[startIndex].name);
      heroes[startIndex].attack(heroes[secondIndex]);
      if (heroes[secondIndex].currentLifePoint > 0) {
        heroes[secondIndex].attack(heroes[startIndex]);
        startIndex = this.randomNumber(1);
        secondIndex = Math.abs(startIndex - 1);
      }
    }
  }

  infoWinLose(hero: Hero): string {
    if (hero.currentLifePoint <= 0) {
      return hero.name + ' (' + hero.className + ' - ' + hero.race.name + ') a perdu !';
    } else {
     return hero.name + ' (' + hero.className + ' - ' + hero.race.name + ') a gagné !';
    }
  }
}
