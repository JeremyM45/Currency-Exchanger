
  

# _Currency Exchanger_

  

#### By _**Jeremy Martin**_

  

#### _A webpage that will convert currency based on input values_

  

## Technologies Used

  

* HTML

* CSS

* Bootstrap

* JavaScript

* JQuery

* NPM

* Webpack

* ESLint

* Babel

* Json

* ExchangeRate API

  

## Description

This webpage has two options, convert from usd into any currency and convert from any currency into any other currency (including usd). Why have both options when the second does everything the first does you ask? Because they make different api calls and the first option only needs to make an api call once whereas the second needs to make an api call for every conversion, so the first option is more efficient if you're only wanting to convert from usd. 

  

## Setup/Installation Requirements

  

* Clone repo from GitHub using this link (https://github.com/JeremyM45/Currency-Exchanger)

  

* Navigate to the Currency-Exchanger folder in terminal

(Users/Username/Desktop/Currency-Exchanger)


* Once in the top level of directory (./Currency-Exchanger) install npm by typing "install npm" in terminal


* Obtain an api key from ExchangeRate API. (If you already have an api key from ExchangeRate API then you can skip this step) Go to [ExchangeRate-API](https://www.exchangerate-api.com/) enter your email in the input field and click "get free key". Then you will be prompted for your email and password to create an account, once you have entered in your information click "accept terms & create api key". You will then be prompted to confirm your email address to activate your account (the confirmation email might go to your promotions or junk folder) open the email and click on the link inside, it should take you to your dashboard where you can see your api key and how many calls you have left for the month.


*  Create a .env file in the top level of directory (./Currency-Exchanger) and type "API_KEY=" and then put in your api key. So if your api key is 12345678910 then you should have API_KEY=12345678910.


* Once npm is installed type "npm run start" in the top level of directory (./Currency-Exchanger) to launch webpage


* Once webpage has opened select which option you want. If you choose "convert from usd" then enter the amount you want converted and select the currency you want to convert to. If you choose "convert any" then select the currency you want to convert from, enter the amount you want converted, and then select the currency you want to convert to.
  

* Once the selection has been made and info is entered click "Get Conversion" and the results will display on the right.
  

## Known Bugs

*  _No known bugs_

  

## License

[MIT](https://opensource.org/licenses/MIT)

  

Copyright (c) _04/22/2022_  _Jeremy Martin_