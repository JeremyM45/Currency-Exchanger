import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import {addOptions} from  "./UI";
import { Converter } from "./converter";
import { ExchangeRate } from "./currency-services";
let exchangeRates = "";
(async function() {
  const currancyExchange = await ExchangeRate.getExchangRate();
  exchangeRates = currancyExchange.conversion_rates;
  addOptions();
  console.log(exchangeRates);
})();
$('#get-exchange-rate').on('click', (exchangeRates), async function()  {
  let usdAmount = $('#amount').val();
  let selectCurrency = $('#currency-select').val();
  let conversion = new Converter(usdAmount, exchangeRates[`${selectCurrency}`]);
  conversion.convert();
  $('#results').text(`$${usdAmount} is ${conversion.convertedAmount} ${selectCurrency}`);
});
