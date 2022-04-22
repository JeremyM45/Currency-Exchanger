// import {ExchangeRate} from './currency-services';
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import {addOptions} from  "./UI";

addOptions();
$('#get-exchange-rate').on('click', async function()  {
  // let currancyExchange = await ExchangeRate.getExchangRate();
  // let exhangeRates = currancyExchange.conversion_rates;
  // console.log(exhangeRates);
  // console.log(exhangeRates.AED);
  let usdAmount = $('#amount').val();
  let currency = $('#currency-select').val();
  console.log(usdAmount);
  console.log(currency);
});
