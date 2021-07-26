import {Hero} from "./hero";
import {Warrior} from "./warrior";
import {Mage} from "./mage";
import { Rogue } from "./rogue";

export class ArenaGurubashi {

  private readonly heroes: Array<Hero>;

  /**
   *  Les ... représentent le fait que l'on peut passer 0 au autant que l'on souhaite de paramètres
   *  Ici on peut passer autant de string que l'on veut
   *
   * @param names, les noms des héros à créer
   */
  constructor(... names: string[]) {
    this.heroes = new Array<Hero>();
    // Tableau des classes disponibles
    const classes = [Warrior, Mage, Rogue];
    // On créer les héros aléatoirement
    for (const name of names) {
      const random = this.randomNumber(classes.length - 1);
      this.heroes.push(new classes[random](name));
    }
    console.log(this.heroes);
  }

  randomNumber(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  fight(): void {
    if (this.heroes.length === 0) {
      return;
    }
    let heroesShuffled = this.shuffleHeroesOrder(this.heroes);
    // Tant qu'il n'en reste pas qu'un, on fait les combats
    while (heroesShuffled.length !== 1) {
      // On parcourt les hero dans un ordre aléatoire
      for (const hero of heroesShuffled) {
        // Attaque si le hero actuel a tout ses points de vie
        if (hero.currentLifePoint > 0) {
          // On récupère un tableau de hero à attaquer, dont le hero courant ne fait pas parti
          // et uniquement avec des hero ayant des points de vie > 0
          const availableHeroes = heroesShuffled.filter(filterHero =>
            filterHero.name !== hero.name && filterHero.currentLifePoint > 0
          );
          // On get le hero à un index déterminé aléatoirement
          const targetHero = availableHeroes[this.randomNumber(0, availableHeroes.length - 1)];
          console.log('Tour de : ' + hero.name + ' - cible : ' + targetHero.name);
          // Notre hero tape
          hero.attack(targetHero);
          // Si la cible a des pv > 0, elle peut répliquer
          if (targetHero.currentLifePoint > 0) {
            targetHero.attack(hero);
          }
        }
      }
      // Filter pour récupérer un tableau des héros ayant des point de vie > 0
      let tmpShuffledHeroes = heroesShuffled.filter(filterHero => filterHero.currentLifePoint > 0);
      // S'il y a un écart entre les deux tableaux, alors il y a un eu un décé, et on affiche qui est mort
      if (tmpShuffledHeroes.length !== heroesShuffled.length) {
        for (const hero of heroesShuffled.filter(filterHero => filterHero.currentLifePoint <= 0)) {
          console.log(hero.name + ' a décédé');
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
