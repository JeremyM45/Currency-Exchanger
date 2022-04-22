export class Converter  {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }
  convert(){
    console.log(this.currency);
    if(this.currency === undefined) {
      console.log("test");
      return false;
    } else {
      console.log("test2");
      this.convertedAmount = this.amount * this.currency;
      return true;
    }    
  }
}