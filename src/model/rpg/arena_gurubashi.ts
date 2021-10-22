import {Hero} from "./hero";
import {HeroMakerService} from "../../services/hero-maker.service";
import {RandomService} from "../../services/random.service";

export class ArenaGurubashi {

  private readonly _heroes: Array<Hero>;
  private _startedFight = false;
  private _killedOrder = 1;
  private _maxKilledHero: Hero|undefined = undefined;
  private _maxDamageHero: Hero|undefined = undefined;
  private _maxSingleDmgHero: Hero|undefined = undefined;
  private _maxNbCritHero: Hero|undefined = undefined;
  private _winner: Hero|undefined = undefined;

  /**
   *  Les ... représentent le fait que l'on peut passer 0 au autant que l'on souhaite de paramètres
   *  Ici on peut passer autant de string que l'on veut
   *
   * @param heroMakerService
   * @param randomService
   * @param names, les noms des héros à créer
   */
  constructor(private heroMakerService: HeroMakerService,
              private randomService: RandomService,
              names: string[]
  ) {
    this._heroes = new Array<Hero>();
    console.log(names);
    // On créer les héros aléatoirement
    for (const name of names) {
      this._heroes.push(
        this.heroMakerService.createHeroByName(name)
      );
    }
    console.log(this._heroes);
  }

  get maxSingleDmgHero(): Hero | undefined {
    return this._maxSingleDmgHero;
  }

  set maxSingleDmgHero(value: Hero | undefined) {
    this._maxSingleDmgHero = value;
  }

  get maxNbCritHero(): Hero | undefined {
    return this._maxNbCritHero;
  }

  set maxNbCritHero(value: Hero | undefined) {
    this._maxNbCritHero = value;
  }

  get winner(): Hero | undefined {
    return this._winner;
  }

  set winner(value: Hero | undefined) {
    this._winner = value;
  }

  get killedOrder(): number {
    return this._killedOrder;
  }

  set killedOrder(value: number) {
    this._killedOrder = value;
  }

  get maxKilledHero(): Hero|undefined {
    return this._maxKilledHero;
  }

  set maxKilledHero(value: Hero|undefined) {
    this._maxKilledHero = value;
  }

  get maxDamageHero(): Hero|undefined {
    return this._maxDamageHero;
  }

  set maxDamageHero(value: Hero|undefined) {
    this._maxDamageHero = value;
  }

  get startedFight(): boolean {
    return this._startedFight;
  }

  set startedFight(value: boolean) {
    this._startedFight = value;
  }

  get heroes(): Array<Hero> {
    return this._heroes;
  }

  fight(): void {
    if (this._heroes.length <= 1) {
      return;
    }
    this._maxKilledHero = undefined;
    this._maxDamageHero = undefined;
    this._winner = undefined;
    this.startedFight = true;
    let heroesShuffled = this.shuffleHeroesOrder(this._heroes);
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
          const targetHero = availableHeroes[this.randomService.randomNumber(0, availableHeroes.length - 1)];
          console.log('Tour de : ' + hero.name + ' - cible : ' + targetHero.name);
          // Notre hero tape
          hero.attack(targetHero);
          // Si la cible a des pv > 0, elle peut répliquer
          // if (targetHero.currentLifePoint > 0) {
          //   targetHero.attack(hero);
          // }
        }
      }
      // Filter pour récupérer un tableau des héros ayant des point de vie > 0
      let tmpShuffledHeroes = heroesShuffled.filter(filterHero => filterHero.currentLifePoint > 0);
      // S'il y a un écart entre les deux tableaux, alors il y a un eu un décé, et on affiche qui est mort
      if (tmpShuffledHeroes.length !== heroesShuffled.length) {
        for (const hero of heroesShuffled.filter(filterHero => filterHero.currentLifePoint <= 0)) {
          console.log(hero.name + ' a décédé');
          hero.killedOrder = this._killedOrder;
          this._killedOrder++;
        }
      }
      heroesShuffled = this.shuffleHeroesOrder(tmpShuffledHeroes);
    }
    this.maxDamageHero = this.heroes[0];
    this.maxKilledHero = this.heroes[0];
    this.maxNbCritHero = this.heroes[0];
    this.maxSingleDmgHero = this.heroes[0];
    for (const hero of this.heroes) {
      if (hero.totalDamage > this.maxDamageHero.totalDamage) {
        this.maxDamageHero = hero;
      }
      if (hero.nbHeroKilled > this.maxKilledHero.nbHeroKilled) {
        this.maxKilledHero = hero;
      }
      if (hero.maxDamage > this.maxSingleDmgHero.maxDamage) {
        this.maxSingleDmgHero = hero;
      }
      if (hero.nbCriticalStrike > this.maxNbCritHero.nbCriticalStrike) {
        this.maxNbCritHero = hero;
      }
    }
    this._winner = heroesShuffled[0];
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
      const indexRandom = this.randomService.randomNumber(tmpHeroes.length - 1);
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
      for (const hero of this._heroes) {
        hero.levelUp();
      }
    }
  }

}
