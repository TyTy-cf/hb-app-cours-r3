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
        // On récupère l'index dans le tableau du hero en cours d'itération + 1
        let indexToFight = heroesShuffled.indexOf(hero) + 1;
        // Si l'index est égal à la taille du tableau, dernier hero du tableau
        if (indexToFight === heroesShuffled.length) {
          // On reset pour qu'il tape le 1er
          indexToFight = 0;
        }
        // Attaque si le hero actuel a tout ses points de vie
        if (hero.currentLifePoint > 0) {
          console.log('Tour de : ' + hero.name);
          hero.attack(heroesShuffled[indexToFight]);
        }
      }
      // Filter pour récupérer un tableau des héros ayant des point de vie > 0
      let tmpShuffledHeroes = heroesShuffled.filter(filterHero => filterHero.currentLifePoint > 0);
      // S'il y a un écart entre les deux tableaux, alors il y a un eu un décé, et on affiche qui est mort
      if (tmpShuffledHeroes.length !== heroesShuffled.length) {
        for (const hero of heroesShuffled) {
          if (hero.currentLifePoint <= 0) {
            console.log(hero.name + ' a décédé');
          }
        }
      }
      heroesShuffled = this.shuffleHeroesOrder(tmpShuffledHeroes);
    }
    console.log('GG à ' + heroesShuffled[0].name);
  }

  /**
   * Fonction permettant de mélanger les héros
   * @param heroes
   */
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

  /**
   * Fonction permettant de monter de niveau tous les héros
   *
   * @param nbLevel, le niveau où monter tous les héros
   */
  levelUp(nbLevel: number = 1): void {
    for(let i = 0; i < nbLevel; i++) {
      for (const hero of this.heroes) {
        hero.levelUp();
      }
    }
  }

}
