import {ProductOrder} from "./product-order";

export class Order {

  static taxesRate: number = 1.196;
  private _productOrder: ProductOrder[] = [];

  get productOrder(): ProductOrder[] {
    return this._productOrder;
  }

  set productOrder(value: ProductOrder[]) {
    this._productOrder = value;
  }

  public getHTPrice(): number {
    let sum = 0;
    for (const productOrder of this._productOrder) {
      sum += productOrder.product.HTprice * productOrder.quantity;
    }
    return sum;
  }

  public getTTCPrice(): number {
    return this.getHTPrice() * Order.taxesRate;
  }
}
