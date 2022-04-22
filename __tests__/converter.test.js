import {Converter}  from "../src/converter"
describe("Converter", ()  =>  {
  test('it should construct a converter object with amount and currency',  ()  =>  {
    let currency = 3.67;
    let amount = 1;
    let newConverter = new Converter(amount, currency);
    expect(newConverter.currency).toEqual(3.67);
  })
})
describe("convert", ()  =>  {
  test('it should multiply currency by amount', ()  =>  {
    let currency = 3.67;
    let amount = 5;
    let newConverter = new Converter(amount, currency);
    newConverter.convert();
    expect(newConverter.convertedAmount).toEqual(18.35)
  });
})