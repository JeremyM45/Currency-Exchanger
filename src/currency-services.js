import  {errorMessage}  from "./UI";
export class ExchangeRate {
  static async getExchangRate() {
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    try{
      const response = await fetch(url);
      if (!response.ok) {     
        let errorDetails = await response.json();
        let errorType = errorDetails[Object.keys(errorDetails)[3]]; 
        let error = `${response.status} ${errorType}`;
        throw Error(error);
      }
      return response.json();
    } catch(error){
      errorMessage(error.message);
    }
  }
  static async getRateCompare(currency1, currency2) {
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currency1}/${currency2}`;
    try{
      const response = await fetch(url);
      if (!response.ok) {     
        let errorDetails = await response.json();
        let errorType = errorDetails[Object.keys(errorDetails)[3]]; 
        let error = `${response.status} ${errorType}`;
        throw Error(error);
      }
      return response.json();
    } catch(error){
      errorMessage(error.message);
    }
  }
}