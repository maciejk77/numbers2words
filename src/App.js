export function number2words(number) {

  const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  // ==================================
  
  if(number === 0) return 'zero'
  if(number < 10) return get_digit(number)
  
  if(is_teen(number)) {
    return get_teens(number)
  } else {
    return get_hundreds(number)
  }

  // ==================================

  function get_hundreds(n) {
    const word_for_hundreds = digits[Math.floor(n / 100)]
  
    if( is_lower_than_denominator(n, 100) ) return get_tens(n)
    if( is_multiply_of(n, 100) ) return word_for_hundreds + ' hundred'
    if(n % 100 < 10) return word_for_hundreds + ' hundred ' + get_digit(n % 100)
    return word_for_hundreds + ' hundred ' + get_tens(n % 100)
  }

  function get_tens(n) {
    const word_for_tens = tens[Math.floor((n / 10) - 1)];    
  
    if(is_teen(n)) { 
      return get_teens(n);
    } else {
      return ( is_multiply_of(n, 10) ) ? word_for_tens : word_for_tens + ' ' + get_digit(n % 10);
    }

    if( is_lower_than_denominator(n, 100) ) return get_digit(n)
    if( is_multiply_of(n, 10) ) return word_for_tens
  }

  function get_teens(n) {
    return teens[(n % 10) - 1]
  }

  function get_digit(n) {
    return digits[n]
  }

  // ===================================================
  
  function is_teen(n) {
    return (n > 10 && n < 20) ? true : false
  }

  function is_multiply_of(numerator, denominator) { 
    return (numerator % denominator === 0) ? true : false
  }

  function is_lower_than_denominator(numerator, denominator) { 
    return (numerator % denominator === numerator) ? true : false
  }
}