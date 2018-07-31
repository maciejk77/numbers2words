export function number2words(number) {
  const digits = [null, 'one', 'two', 'three', 'four', 
                    'five', 'six', 'seven', 'eight', 'nine'];

  const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
                        'sixteen', 'seventeen', 'eighteen', 'nineteen']

  const tens = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 
                'sixty', 'seventy', 'eighty', 'ninety'];

  // ==================================

  
  if(number === 0) {
    return 'zero'
  } else if(number < 10) {
    return getDigit(number);
  } else if(number > 10 && number < 20) {
    return getTeens(number)
  } else {
    return getTens(number);
  }

  // ==================================

  function getTeens(n) {
    return teens[(n % 10) - 1]
  }

  function getTens(n) {
    const condition = tens[Math.floor((n/10)-1)];
    
    if(n % 10 === n) { 
      getDigit(n)
    } else if(n % 10 === 0) {
      return condition
    } else {
      return condition + ' ' + getDigit(n % 10)
    }
  }

  function getDigit(n) {
    return digits[n];
  }

}