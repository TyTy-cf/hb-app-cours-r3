import {Boisson} from "./boisson";
import {Snack} from "./snack";

export class Bar {

  private _name!: string;
  private _boissons: Array<Boisson>;
  private _snacks: Array<Snack>;

  constructor() {
    this._snacks = new Array<Snack>();
    this._boissons = [];
    this._name = 'Bar - ';
  }

  set snacks(value: Snack[]) {
    this._snacks = value;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name += name;
  }

  set boissons(boissons: Boisson[]) {
    this._boissons = boissons;
  }

  get boissons(): Array<Boisson> {
    return this._boissons;
  }

  displayMenu(): string {
    // Afficher la carte des boissons et des snacks du bar
    // Parcourir mes boissons
    // Pour chacune d'entre elle, j'affiche son nom, son prix et si elle est alcoolisée
    // Parcours mes snacks
    // Pour chacun d'entre eux, j'affiche son nom et son prix
    let menu = '';
    for (const boisson of this._boissons) {
      menu += boisson.name + ' ' + boisson.price + '€';
      let alcohol = ' (Alcoolisé)';
      if (!boisson.alcohol) {
        alcohol = ' (Non alcoolisé)';
      }
      menu += alcohol + '\n';
    }
    for (const snack of this._snacks) {
      menu += snack.name + ' ' + snack.price + '€\n';
    }
    return menu;
  }
}
