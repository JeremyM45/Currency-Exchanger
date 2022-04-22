export class Converter  {
  constructor(amount, currency) {
    this.amount = amount
    this.currency = currency
  }
  convert(){
    this.convertedAmount = this.amount * this.currency
  }
}