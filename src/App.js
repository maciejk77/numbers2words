export function number2words(number) {

  const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  // ==================================
  
  if(number === 0) return 'zero'
  if(number < 10) return getDigit(number)
  
  if(number > 10 && number < 20) {
    return getTeens(number)
  } else {
    return getHundreds(number)
  }

  // ==================================

  function getHundreds(n) {
    const condition = digits[Math.floor(n / 100)]
  
    if(n % 100 === n) return getTens(n)
    if(n % 100 === 0) return condition + ' hundred'
    return condition + ' hundred ' + getTens(n % 100)
  }

  function getTens(n) {
    const condition = tens[Math.floor((n / 10) - 1)];
    
    if(n % 10 === n) return getDigit(n)
    if(n % 10 === 0) return condition
    return condition + ' ' + getDigit(n % 10)
    
  }

  function getTeens(n) {
    return teens[(n % 10) - 1]
  }

  function getDigit(n) {
    return digits[n]
  }

}