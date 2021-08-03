import {Category} from "./category";

export class Product {

  // Un product a plusieurs category, donc on a un tableau de categories
  private _categories: Category[] = [];
  private _title: string = '';
  private _description: string = '';
  // Date de fin pour dire que notre produit n'est plus actif, depuis une certaine date
  private _endDate: Date | undefined = undefined;
  private _HTprice: number = 0.0;
  private _image: string = '';

  get categories(): Category[] {
    return this._categories;
  }

  set categories(value: Category[]) {
    this._categories = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get endDate(): Date | undefined {
    return this._endDate;
  }

  set endDate(value: Date | undefined) {
    this._endDate = value;
  }

  get HTprice(): number {
    return this._HTprice;
  }

  set HTprice(value: number) {
    this._HTprice = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }
}
