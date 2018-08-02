import { number2words } from './App';

describe('0-9 numbers to matching word/s', () => {

  it('should output ZERO, when 0 provided', () => {
    expect(number2words(0)).toBe('zero');
  })

  it('should output TWO, when 2 provided', () => {
    expect(number2words(2)).toBe('two');
  })

  it('should output FIVE, when 5 provided', () => {
    expect(number2words(5)).toBe('five');
  })

  it('should output NINE, when 9 provided', () => {
    expect(number2words(9)).toBe('nine');
  })

})


describe('11-19 numbers to matching word/s', () => {

  it('should output TWELVE, when 12 provided', () => {
    expect(number2words(12)).toBe('twelve');
  })

  it('should output SIXTEEN, when 16 provided', () => {
    expect(number2words(16)).toBe('sixteen');
  })

  it('should output NINETEEN, when 19 provided', () => {
    expect(number2words(19)).toBe('nineteen');
  })

})


describe('10,20, ...90 numbers to matching word/s', () => {

  it('should output TWENTY, when 20 provided', () => {
    expect(number2words(20)).toBe('twenty');
  })

  it('should output FIFTY, when 50 provided', () => {
    expect(number2words(50)).toBe('fifty');
  })

  it('should output NINETY, when 90 provided', () => {
    expect(number2words(90)).toBe('ninety');
  })

})


describe('21-99 mixed numbers to matching word/s', () => {

  it('should output TWENTY TWO, when 22 provided', () => {
    expect(number2words(22)).toBe('twenty two');
  })

  it('should output THIRTY SEVEN, when 37 provided', () => {
    expect(number2words(37)).toBe('thirty seven');
  })

  it('should output EIGHTY NINE, when 89 provided', () => {
    expect(number2words(89)).toBe('eighty nine');
  })
 
  it('should output NINETY NINE, when 99 provided', () => {
    expect(number2words(99)).toBe('ninety nine');
  })

})

describe('100-900 mutiple hundred numbers to matching word/s', () => {

  it('should output HUNDRED, when 100 provided', () => {
    expect(number2words(100)).toBe('one hundred');
  })

  it('should output FIVE HUNDRED, when 500 provided', () => {
    expect(number2words(500)).toBe('five hundred');
  })
 
  it('should output NINE HUNDRED, when 900 provided', () => {
    expect(number2words(900)).toBe('nine hundred');
  })

})

describe('100-999 mixed hundred numbers to matching word/s', () => {

  it('should output ONE HUNDRED ONE when 101 provided', () => {
    expect(number2words(101)).toBe('one hundred one');
  })

  it('should output THREE HUNDRED TWELVE, when 312 provided', () => {
    expect(number2words(312)).toBe('three hundred twelve');
  })
 
  it('should output SIX HUNDRED NINTY NINE, when 699 provided', () => {
    expect(number2words(699)).toBe('six hundred ninety nine');
  })

  it('should output NINE HUNDRED NINTY NINE, when 999 provided', () => {
    expect(number2words(999)).toBe('nine hundred ninety nine');
  })

})

describe('1000-9999 mixed hundred numbers to matching word/s', () => {

  it('should output ONE THOUSAND ONE when 1001 provided', () => {
    expect(number2words(1001)).toBe('one thousand one');
  })

  it('should output THREE THOUSAND HUNDRED TWELVE, when 3112 provided', () => {
    expect(number2words(3112)).toBe('three thousand one hundred twelve');
  })
 
  it('should output SIX THOUSAND NINTY NINE, when 6099 provided', () => {
    expect(number2words(6099)).toBe('six thousand ninety nine');
  })

  it('should output NINE THOUSAND NINE HUNDRED NINTY NINE, when 9999 provided', () => {
    expect(number2words(9999)).toBe('nine thousand nine hundred ninety nine');
  })

  it('should output ONE THOUSAND TWO HUNDRED THIRTY FOUR, when 1234 provided', () => {
    expect(number2words(1234)).toBe('one thousand two hundred thirty four');
  })

  it('should output SIX THOUSAND SEVEN HUNDRED EIGHTY NINE, when 6789 provided', () => {
    expect(number2words(6789)).toBe('six thousand seven hundred eighty nine');
  })

})

describe('10.000-99.999 mixed hundred numbers to matching word/s', () => {

  it('should output TWELVE THOUSAND THREE HUNDRED FOURTY FIVE, when 12.345 provided', () => {
    expect(number2words(12345)).toBe('twelve thousand three hundred fourty five');
  })

  it('should output SIXTY SEVEN THOUSAND EIGHT HUNDRED NINETY, when 67.890 provided', () => {
    expect(number2words(67890)).toBe('sixty seven thousand eight hundred ninety');
  })

  it('should output FIFTY THOUSAND, when 50.000 provided', () => {
    expect(number2words(50000)).toBe('fifty thousand');
  })

  it('should output EIGHTY THOUSAND FIVE, when 80.005 provided', () => {
    expect(number2words(80005)).toBe('eighty thousand five');
  })

  it('should output NINETY TWO THOUSAND FIVE HUNDRED SEVENTEEN, when 92.517 provided', () => {
    expect(number2words(92517)).toBe('ninety two thousand five hundred seventeen');
  })

})