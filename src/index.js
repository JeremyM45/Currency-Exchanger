import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import {addInputs, addOptions} from  "./UI";
import { Converter } from "./converter";
import { ExchangeRate } from "./currency-services";
let exchangeRates = "";
addInputs();
(async function() {
  const currancyExchange = await ExchangeRate.getExchangRate();
  exchangeRates = currancyExchange.conversion_rates;
  addOptions();
})();
$('#get-exchange-rate').on('click', (exchangeRates), function()  {
  let usdAmount = $('#amount').val();
  let selectCurrency = $('#currency-select').val();
  let conversion = new Converter(usdAmount, exchangeRates[`${selectCurrency}`]);
  conversion.convert();
  $('#results').text(`$${usdAmount} is ${conversion.convertedAmount} ${selectCurrency}`);
});
