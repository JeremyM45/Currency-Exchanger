import  {errorMessage}  from "./UI";
export class ExchangeRate {
  static async getExchangRate() {
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    const response = await fetch(url);
    if (!response.ok) {
      let errorDetails = await response.json();
      let errorType = errorDetails[Object.keys(errorDetails)[3]];
      let apiSite = errorDetails.documentation;
      errorMessage(response.status, errorType, apiSite);
    }
    return response.json();
  }
}