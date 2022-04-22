import $ from "jquery";
export function errorMessage(error)  {
  hideAll();
  $('#results').html(`<h4>Error ${error}. You may be using an invalid API Key, URL, or Currency Code - For more information visit <a href="https://www.exchangerate-api.com/#support">Exchange Rate API</a></h4>`);
  $("#results").show();
}
export function hideAll() {
  $("#get-exchange-rate").hide();
  $("#amount").hide();
  $("#currency-select").hide();
  $("#results").hide();
}
export function addOptions()  {
  const optionCodes = [
    `AED`,`AFN`,`ALL`, `AMD`, `ANG`, `AOA`, `ARS`, `AUD`, `AWG`, `AZN`,
    `BAM`, `BBD`, `BDT`, `BGN`, `BHD`, `BIF`, `BMD`, `BND`, `BOB`, `BRL`, `BSD`, `BTN`, `BWP`, `BYN`, `BZD`,
    `CAD`, `CDF`, `CHF`, `CLP`,  `CNY`, `COP`, `CRC`, `CUP`, `CVE`, `CZK`,
    `DJF`, `DKK`, `DOP`, `DZD`,
    `EGP`, `ERN`, `ETB`, `EUR`,
    `FJD`, `FKP`, `FOK`,
    `GBP`, `GEL`, `GGP`, `GHS`, `GIP`, `GMD`, `GNF`, `GTQ`, `GYD`,
    `HKD`, `HNL`, `HRK`, `HTG`, `HUF`,
    `IDR`, `ILS`, `IMP`, `INR`, `IQD`, `IRR`, `ISK`,
    `JEP`, `JMD`, `JOD`, `JPY`,
    `KES`, `KGS`, `KHR`, `KID`, `KMF`, `KRW`, `KWD`, `KYD`, `KZT`,
    `LAK`, `LBP`, `LKR`, `LRD`, `LSL`, `LYD`,
    `MAD`, `MDL`, `MGA`, `MKD`, `MMK`, `MNT`, `MOP`, `MRU`, `MUR`, `MVR`, `MWK`, `MXN`, `MYR`, `MZN`,
    `NAD`, `NGN`, `NIO`, `NOK`, `NPR`, `NZD`,
    `OMR`,
    `PAB`, `PEN`, `PGK`, `PHP`, `PKR`, `PLN`, `PYG`,
    `QAR`,
    `RON`, `RSD`, `RUB`, `RWF`,
    `SAR`, `SBD`, `SCR`, `SDG`, `SEK`, `SGD`, `SHP`, `SLL`, `SOS`, `SRD`, `SSP`, `STN`, `SYP`, `SZL`,
    `THB`, `TJS`, `TMT`, `TND`, `TOP`, `TRY`, `TTD`, `TVD`, `TWD`, `TZS`,
    `UAH`, `UGX`, `UYU`, `UZS`,
    `VES`, `VND`, `VUV`,
    `WST`,
    `XAF`, `XCD`, `XDR`, `XOF`, `XPF`,
    `YER`,
    `ZAR`, `ZMW`, `ZWL`
  ];

  const optionNames = [
    `UAE Dirham`, `Afghan Afghani`,`Albanian Lek`, `Armenian Dram`, `Netherlands`, `Angolan Kwanza`, `Argentine Peso`,`Australian Dollar`, `Aruban Florin`, `Azerbaijani Manat`,
    `Bosnia and Herzegovina Mark`, `Barbados Dollar	`, `Bangladeshi Taka`, `Bulgarian Lev`, `Bahraini Dinar`, `Burundian Franc`, `Bermudian Dollar`, `Brunei Dollar`, `Bolivian Boliviano`, `Brazilian Real`, `Bahamian Dollar`, `Bhutanese Ngultrum`, `Botswana Pula`, `Belarusian Ruble	`, `Belize Dollar`,
    `Canadian Dollar`, `Congolese Franc`, `Swiss Franc`, `Chilean Peso`, `Chinese Renminbi`, `Colombian Peso`, `Costa Rican Colon`, `Cuban Peso`, `Cape Verdean Escudo`, `Czech Koruna`,
    `Djiboutian Franc`, `Danish Krone`, `Dominican Peso`, `Algerian Dinar`,
    `Egyptian Pound`, `Eritrean Nakfa`, `Ethiopian Birr`, `Euro`,
    `Fiji Dollar`, `Falkland Islands Pound`, `Faroese Króna`,
    `British Pound`, `Georgian Lari`, `Guernsey Pound`, `Ghanaian Cedi`, `Gibraltar Pound`, `Gambian Dalasi`, `Guinean Franc`, `Guatemalan Quetzal`, `Guyanese Dollar`,
    `Hong Kong Dollar`, `Honduran Lempira`, `Croatian Kuna`, `Haitian Gourde`, `Hungarian Forint`,
    `Indonesian Rupiah`, `Israeli New Shekel`, `Manx Pound`, `Indian Rupee`, `Iraqi Dinar`, `Iranian Rial`, `Icelandic Króna`,
    `Jersey Pound`, `Jamaican Dollar`, `Jordanian Dinar`, `Japanese Yen`,
    `Kenyan Shilling`, `Kyrgyzstani Som`, `Cambodian Riel`, `Kiribati Dollar`, `Comorian Franc`, `South Korean Won`, `Kuwaiti Dinar`, `Cayman Islands Dollar	`, `Kazakhstani Tenge`,
    `Lao Kip`, `Lebanese Pound`, `Sri Lanka Rupee`, `Liberian Dollar`, `Lesotho Loti`, `Libyan Dinar`,
    `Moroccan Dirham`, `Moldovan Leu`, `Malagasy Ariary`, `Macedonian Denar`, `Burmese Kyat`, `Mongolian Tögrög`, `Macanese Pataca`, `Mauritanian Ouguiya`, `Mauritian Rupee`, `Maldivian Rufiyaa`, `Malawian Kwacha`, `Mexican Peso`, `Malaysian Ringgit`, `Mozambican Metical`,
    `Namibian Dollar`, `Nigerian Naira`, `Nicaraguan Córdoba`, `Norwegian Krone`, `Nepalese Rupee`, `New Zealand Dollar`,
    `Omani Rial`,
    `Panamanian Balboa`, `Peruvian Sol`, `Papua New Guinean Kina Papua`, `Philippine Peso	`, `Pakistani Rupee`, `Polish Złoty`, `Paraguayan Guaraní`,
    `Qatari Riyal`,
    `Romanian Leu`, `Serbian Dinar`, `Russian Ruble`, `Rwandan Franc`,
    `Saudi Riyal Saudi`, `Solomon Islands Dollar`, `Seychellois Rupee`, `Sudanese Pound`, `Swedish Krona`, `Singapore Dollar`, `Saint Helena Pound`, `Sierra Leonean Leone`, `Somali Shilling`, `Surinamese Dollar`, `South Sudanese Pound`, `São Tomé and Príncipe Dobra`, `Syrian Pound`, `Eswatini Lilangeni`,
    `Thai Baht`, `Tajikistani Somoni`, `Turkmenistan Manat`, `Tunisian Dinar`, `Tongan Pa'anga`, `Turkish Lira`, `Trinidad and Tobago Dollar`, `Tuvaluan Dollar`, `New Taiwan Dollar`, `Tanzanian Shilling`,
    `Ukrainian Hryvnia`, `Ugandan Shilling`, `Uruguayan Peso`, `Uzbekistani So'm`,
    `Venezuelan Bolívar Soberano`, `Vietnamese Đồng`, `Vanuatu Vatu`,
    `Samoan Tālā`,
    `Central African CFA Franc`, `East Caribbean Dollar`, `Special Drawing Rights`, `West African CFA franc`, `CFP Franc`,
    `Yemeni Rial	Yemen`,
    `South African Rand`, `Zambian Kwacha`, `Zimbabwean Dollar`
  ];
  for (let i = 0; i < optionCodes.length; i++)  {
    $(`#currency-select`).append(`<option value='${optionCodes[i]}'>${optionNames[i]} (${optionCodes[i]})</option>`);
  }
}