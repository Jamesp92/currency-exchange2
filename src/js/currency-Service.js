export default class CurrencyElement {  
  static currencyApi() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(response =>{
        if (!response.ok){
          throw Error("ERROR");
        }
        return response.json();
      })
      .catch( error => {
        console.log(error)
      });
    }
  }
  console.log(response)