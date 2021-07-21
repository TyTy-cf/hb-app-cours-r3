import {Hero} from "./hero";
import {Warrior} from "./warrior";
import {Mage} from "./mage";
import { Rogue } from "./rogue";

export class ArenaGurubashi {

  private readonly heroes: Array<Hero>;

  constructor(... names: string[]) {
    this.heroes = new Array<Hero>();
    const classes = [Warrior, Mage, Rogue];
    for (const name of names) {
      const random = this.randomNumber(classes.length - 1);
      this.heroes.push(new classes[random](name));
    }
    console.log(this.heroes);
    this.fight();
  }

  randomNumber(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  fight(): void {
    let heroesShuffled = this.shuffleHeroesOrder(this.heroes);
    while (heroesShuffled.length !== 1) {
      for (const hero of heroesShuffled) {
        console.log('Tour de : ' + hero.name);
        // On récupère l'index dans le tableau du hero en cours d'itération + 1
        let indexToFight = heroesShuffled.indexOf(hero) + 1;
        // Si l'index est égal à la taille du tableau, dernier hero du tableau
        if (indexToFight === heroesShuffled.length) {
          // On reset pour qu'il tape le 1er
          indexToFight = 0;
        }
        if (hero.currentLifePoint > 0) {
          hero.attack(heroesShuffled[indexToFight]);
        }
      }
      let tmpShuffledHeroes: Hero[] = [];
      tmpShuffledHeroes.push(... heroesShuffled);
      for (const hero of tmpShuffledHeroes) {
        if (hero.currentLifePoint <= 0) {
          const index = heroesShuffled[tmpShuffledHeroes.indexOf(hero)];
          heroesShuffled.slice(tmpShuffledHeroes.indexOf(hero), 1);
          console.log(hero.name + ' a décédé');
        }
      }
      heroesShuffled = this.shuffleHeroesOrder(heroesShuffled);
    }
    console.log('Félicitation à ' + heroesShuffled[0].name);
  }

  shuffleHeroesOrder(heroes: Hero[]): Hero[] {
    const tmpHeroes = new Array<Hero>();
    let shuffledHeroes: Hero[] = [];
    tmpHeroes.push(... heroes);
    while(tmpHeroes.length > 0) {
      const indexRandom = this.randomNumber(tmpHeroes.length - 1);
      shuffledHeroes.push(tmpHeroes[indexRandom]);
      tmpHeroes.splice(indexRandom, 1);
    }
    return shuffledHeroes;
  }

  levelUp(nbLevel: number = 1): void {
    for(let i = 0; i < nbLevel; i++) {
      for (const hero of this.heroes) {
        hero.levelUp();
      }
    }
  }

}
