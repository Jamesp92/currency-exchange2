import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyElement from './currency-Service.js';

 
function getElements(response){
   if (response.ok){
    let userCurrency = $("#userDollar")
    let convertTo = $("#currencySelect")
    $('#answer').text(parseInt(response.conversion_rates[convertTo] * userCurrency));
   }
   else
   {
    $(".showErrors").text(' please try again ')
   }
}

async function makeApiCall(){
  const response = await CurrencyElement.currencyApi(convertTo);
  getElements(response)
}

$(document).ready(function() {
  $('#button').click(function() {
 event.preventDefault();
    makeApiCall(convertTo);
    $(".showErrors")
  });
});
