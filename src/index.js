import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { addOptions } from  "./UI";
import { Converter } from "./converter";
// import { ExchangeRate } from "./currency-services";
let exchangeRates = "";
// (async function() {
//   const currancyExchange = await ExchangeRate.getExchangRate();
//   exchangeRates = currancyExchange.conversion_rates;
// })();
$('#start-usd').on('click', async function() {
  $('#display-convert-from-usd').show();
  $('#display-convert-from-any').hide();
  $('#start-usd').hide();
  $('#start-any').show();
  addOptions("currency-select");
});
$('#get-exchange-usd-rate').on('click', (exchangeRates), function()  {
  let usdAmount = $('#amount').val();
  let selectCurrency = $('#currency-select').val();
  let conversion = new Converter(usdAmount, exchangeRates[`${selectCurrency}`]);
  conversion.convert();
  $('#results').text(`$${usdAmount} is ${conversion.convertedAmount} ${selectCurrency}`);
});
$('#start-any').on('click', function()  {
  $('#display-convert-from-any').show();
  $('#display-convert-from-usd').hide();
  $('#start-usd').show();
  $('#start-any').hide();
  addOptions("select-convert-from");
  addOptions("select-convert-to");
});
$('#get-exchange-any-rate').on('click', (exchangeRates), async function() {
  let amount = $('#amount-to-convert').val();
  let convertFrom = $('#select-convert-from').val();
  let convertTo = $('#select-convert-to').val();
  console.log(amount);
  console.log(convertFrom);
  console.log(convertTo);
});