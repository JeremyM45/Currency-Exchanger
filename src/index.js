// import {ExchangeRate} from './currency-services';
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import {addOptions} from  "./UI";
import { Converter } from "./converter";
import { ExchangeRate } from "./currency-services";

addOptions();
$('#get-exchange-rate').on('click', async function()  {
  let currancyExchange = await ExchangeRate.getExchangRate();
  let exhangeRates = currancyExchange.conversion_rates;
  console.log(exhangeRates);
  let usdAmount = $('#amount').val();
  let selectCurrency = $('#currency-select').val();
  let conversion = new Converter(usdAmount, exhangeRates[`${selectCurrency}`]);
  conversion.convert();
  $('#results').text(conversion.convertedAmount);
});
