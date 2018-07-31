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