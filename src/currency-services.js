export class ExchangeRate {
  static async getExchangRate() {
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.error);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}