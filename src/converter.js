export class Converter  {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }
  convert(){
    if(this.currency === undefined) {
      return false;
    } else {
      this.convertedAmount = this.amount * this.currency;
      return true;
    }    
  }
}