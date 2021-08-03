
export class Category {

  private _name: string = '';
  // Une category n'a pas forcément une catégorie, cas des categories mère, donc possible undefined
  private _parent: Category | undefined = undefined;
  // Initialiser le beginDate à la date du jour
  private _beginDate: Date = new Date();
  // La  date de fin peut être undefined, par exemple pour les catégories actives
  private _endDate: Date | undefined = undefined;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get parent(): Category|undefined {
    return this._parent;
  }

  set parent(value: Category|undefined) {
    this._parent = value;
  }

  get beginDate(): Date {
    return this._beginDate;
  }

  set beginDate(value: Date) {
    this._beginDate = value;
  }

  get endDate(): Date|undefined {
    return this._endDate;
  }

  set endDate(value: Date|undefined) {
    this._endDate = value;
  }
}
