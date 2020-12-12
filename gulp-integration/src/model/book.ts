import Marketable from './marketable';

export default class Book implements Marketable {
  constructor(
    public name: string,
    public readonly price: number,
    public readonly discount: number) {}

    discountPrice() {
      return this.price * (1 - this.discount);
    }
}