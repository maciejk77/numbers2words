import { getMaxListeners } from "cluster";

export function number2words(number) {
  const decimals = ['zero', 'one', 'two', 'three', 'four', 
                    'five', 'six', 'seven', 'eight', 'nine'];

  const numbers11to19 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
                        'sixteen', 'seventeen', 'eighteen', 'nineteen']

  const tens = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 
                'sixty', 'seventy', 'eighty', 'ninety'];

  // ==================================

  
  if(number === 0) {
    return 'zero'
  } else if(number < 10) {
    return getDecimals(number);
  } else if(number > 10 && number < 20) {
    return get11to19(number)
  }



  // ==================================

  function getDecimals(n) {
    return decimals[n];
  }

  function get11to19(n) {
    return numbers11to19[(n % 10) - 1]
  }

  // function getTens(n) {
  //   return Math.floor(n / 10);
  // }


}