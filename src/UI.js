import $ from "jquery";
export function addOptions()  {
  const optionCodes = [`GBP`, `JPY`,  `EUR`, `CAD`, `AUD`];
  const optionNames = [`British Pound`, `Japanese Yen`, `Euro`, `Canadian Dollar`, `Australian Dollar`];
  for (let i = 0; i < optionCodes.length; i++)  {
    $(`#currency-select`).append(`<option value='${optionCodes[i]}'>${optionNames[i]}</option>`);
  }
}