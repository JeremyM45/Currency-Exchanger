import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { addOptions, hideAll } from  "./UI";
import { Converter } from "./converter";
import { ExchangeRate } from "./currency-services";

let exchangeRates = "";
(async function() {
  const currancyExchangeUsd = await ExchangeRate.getExchangRate();
  exchangeRates = currancyExchangeUsd.conversion_rates;
})();
$('#start-usd').on('click', async function() {
  hideAll();
  $('#display-convert-from-usd').show();
  $('#start-any').show();
  addOptions("currency-select");
});
$('#get-exchange-usd-rate').on('click', (exchangeRates), function()  {
  let usdAmount = $('#amount').val();
  let selectCurrency = $('#currency-select').val();
  let convertUsd = new Converter(usdAmount, exchangeRates[`${selectCurrency}`]);
  if(!convertUsd.convert()) {
    $('#results').text(`Error: Invalid currency selection`);
  } else{
    $('#results').text(`$${usdAmount} is ${convertUsd.convertedAmount} ${selectCurrency}`);
    $('#results').show();
  }
});
$('#start-any').on('click', function()  {
  hideAll();
  $('#display-convert-from-any').show();
  $('#start-usd').show();
  addOptions("select-convert-from");
  addOptions("select-convert-to");
});
$('#get-exchange-any-rate').on('click', (exchangeRates), async function() {
  let amount = $('#amount-to-convert').val();
  let convertFrom = $('#select-convert-from').val();
  let convertTo = $('#select-convert-to').val();
  console.log(amount);
  let currancyExchangeAny = await ExchangeRate.getRateCompare(convertFrom, convertTo);
  let conversionRate = currancyExchangeAny.conversion_rate;
  let convertAny = new Converter(amount, conversionRate);
  convertAny.convert();
  $('#results').text(`${amount} ${convertFrom} is ${convertAny.convertedAmount} ${convertTo}`);
  $('#results').show();
});