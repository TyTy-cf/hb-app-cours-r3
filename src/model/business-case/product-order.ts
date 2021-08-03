import {Product} from "./product";

export class ProductOrder {

  private _quantity: number = 0;
  private _product: Product;

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get product(): Product {
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }
}
