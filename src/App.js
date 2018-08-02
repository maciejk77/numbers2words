export function number2words(number) {

  const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  // ==================================
  
  if(number === 0) return 'zero'
  if(number < 10) return get_digit(number)
  
  if(is_teen(number)) {
    return get_teens(number)
  } else {
    return get_ten_thousands(number)
  }

  // ==================================
  
  function get_ten_thousands(n) {
    const word_for_ten_thousands =  tens[Math.floor((n / 10000) - 1)]
    const thousands = Math.floor(n / 1000)

    if( is_lower_than_denominator(n, 10000) ) return get_thousands(n)
    if( is_multiply_of(n, 10000) ) return word_for_ten_thousands + ' thousand'
    if( n % 10000 < 10 ) return word_for_ten_thousands + ' thousand ' + get_digit(n % 10000)
    if( is_teen(n / 1000 )) return get_teens(thousands) + ' thousand ' + get_hundreds(n % 1000)
    return word_for_ten_thousands + ' ' + get_digit(thousands % 10)  + ' thousand ' + get_hundreds(n % 1000)
  }

  function get_thousands(n) {
    const word_for_thousands = digits[Math.floor(n / 1000)]

    if( is_lower_than_denominator(n, 1000) ) return get_hundreds(n)
    if( is_multiply_of(n, 1000) ) return word_for_thousands + ' thousand'
    if( n % 1000 < 10 ) return word_for_thousands + ' thousand ' + get_digit(n % 1000)
    return word_for_thousands + ' thousand ' + get_hundreds(n % 1000)
  }

  function get_hundreds(n) {
    const word_for_hundreds = digits[Math.floor(n / 100)]
  
    if( is_lower_than_denominator(n, 100) ) return get_tens(n)
    if( is_multiply_of(n, 100) ) return word_for_hundreds + ' hundred'
    if( n % 100 < 10 ) return word_for_hundreds + ' hundred ' + get_digit(n % 100)
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