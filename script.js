// API to pull currency Data https://exchangeratesapi.io/
// Api-key:9acaa3b48899a68b380cd5ebedc7da24

class CurrencyExchangeAPI {
    constructor(apiKey) {
      this.apiKey 
  = apiKey;
      this.baseURL = "https://api.exchangeratesapi.io";
    }
  
    async getExchangeRate(baseCurrency, targetCurrency) {
      const response = await fetch(
        `${this.baseURL}/latest?access_key=${this.apiKey}&base=${baseCurrency}`
      );
      const data = await response.json();
      const exchangeRate = data.rates[targetCurrency];
      if (exchangeRate) {
        return exchangeRate;
      } else {
        throw new Error(`Could not get exchange rate for ${targetCurrency}`);
      }
    }
  
    async convertCurrency(baseCurrency, targetCurrency, amount) {
      const exchangeRate = await this.getExchangeRate(baseCurrency, targetCurrency);
      return amount * exchangeRate;
    }
  }
  
  // Example usage:
  const apiKey = "9acaa3b48899a68b380cd5ebedc7da24";
  const api = new CurrencyExchangeAPI(apiKey);
  api.convertCurrency("USD", "EUR", 1)
    .then(result => console.log(result))
    .catch(error => console.error(error));