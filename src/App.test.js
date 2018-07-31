import { number2words } from './App';

describe('Numbers to be replaced with matching word/s', () => {

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

  // ============================

  it('should output TWELVE, when 12 provided', () => {
    expect(number2words(12)).toBe('twelve');
  })

  it('should output SIXTEEN, when 16 provided', () => {
    expect(number2words(16)).toBe('sixteen');
  })

  it('should output TWENTY, when 20 provided', () => {
    expect(number2words(20)).toBe('twenty');
  })

  it('should output FIFTY, when 50 provided', () => {
    expect(number2words(50)).toBe('fifty');
  })

  it('should output NINETY, when 90 provided', () => {
    expect(number2words(90)).toBe('ninety');
  })

  // ============================

  it('should output TWENTY TWO, when 22 provided', () => {
    expect(number2words(12)).toBe('twenty two');
  })

  it('should output THIRTY SEVEN, when 37 provided', () => {
    expect(number2words(16)).toBe('thirty seven');
  })

  it('should output EIGHTY NINE, when 89 provided', () => {
    expect(number2words(20)).toBe('eighty nine');
  })

})