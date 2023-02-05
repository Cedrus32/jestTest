import analyze from './functs.js';

// // CAPITALIZE()
// test('capitalize first char if valid', () => {
//   expect(capitalize('hello world')).toBe('Hello world')
// })
// test('throw error if first char invalid', () => {
//   expect(capitalize('!saymut')).toBe('invalid first char')
// })
// test('reverse string', () => {
//   expect(reverse('hello world')).toBe('dlrow olleh')
// })

// // CALC()
// // test inputs
// test('checks operation string is valid', () => {
//   expect(calc('.', 2, 8)).toBe('invalid operation string')
// })
// test('checks input type is valid', () => {
//   expect(calc('add', 'a', true)).toBe('invalid input type')
// })
// // test add
// test('adds two positive numbers', () => {
//   expect(calc('add', 2, 8)).toBe(10)
// })
// test('adds two negative numbers', () => {
//   expect(calc('+', -2, -8)).toBe(-10)
// })
// test('adds mixed positive/negative numbers', () => {
//   expect(calc('add', -10, 2)).toBe(-8)
// })
// test('adds decimals', () => {
//   expect(calc('+', 2.5, 2.5)).toBeCloseTo(5);
// })
// // test sub
// test('subs two positive numbers', () => {
//   expect(calc('subtract', 8, 2)).toBe(6)
// })
// test('subs two negative numbers', () => {
//   expect(calc('-', -8, -2)).toBe(-6)
// })
// test('subs mixed positive/negative numbers', () => {
//   expect(calc('subtract', -8, 2)).toBe(-10)
// })
// test('subs two numbers crossing into negative', () => {
//   expect(calc('-', 2, 8)).toBe(-6)
// })
// test('subs two numbers crossing into positive', () => {
//   expect(calc('subtract', -2, -8)).toBe(6)
// })
// test('subs two decimals', () => {
//   expect(calc('-', 5.5, 2)).toBeCloseTo(3.5)
// })
// // test div
// test('divs two positive numbers', () => {
//   expect(calc('divide', 6, 2)).toBe(3)
// })
// test('divs two negative numbers', () => {
//   expect(calc('/', -6, -2)).toBe(3)
// })
// test('divs mixed positive/negative numbers', () => {
//   expect(calc('divide', 6, -2)).toBe(-3)
// })
// test('divs decimals', () => {
//   expect(calc('divide', 6, 0.5)).toBeCloseTo(12)
// })
// // test mul
// test('muls two positive numbers', () => {
//   expect(calc('multiply', 5, 3)).toBe(15)
// })
// test('mults two negative numbers', () => {
//   expect(calc('*', -5, -3)).toBe(15)
// })
// test('muls mixed positive/negative numbers', () => {
//   expect(calc('multiply', -5, 3)).toBe(-15)
// })
// test('muls decimals', () => {
//   expect(calc('multiply', .5, 3)).toBeCloseTo(1.5)
// })

// // CEASAR()
// // test inputs
// test('checks that string is valid', () => {
//   expect(ceasar(12123, 1)).toBe('invalid string')
// })
// test('checks that shift factor is valid', () => {
//   expect(ceasar('12123', 'one')).toBe('invalid shift factor')
// })
// // test shift
// test('no shift with 0', () => {
//   expect(ceasar('Hello world!', 0)).toBe('Hello world!')
// })
// test('shifts string by small positive factor', () => {
//   expect(ceasar('Hello world!', 3)).toBe('Khoor zruog!')
// })
// test('shifts string by small negative factor', () => {
//   expect(ceasar('Hello world!', -3)).toBe('Ebiil tloia!')
// })
// test('shifts string by large positive factor', () => {
//   expect(ceasar('Hello world!', 40)).toBe('Vszzc kcfzr!')
// })
// test('shifts string by large negative factor', () => {
//   expect(ceasar('Hello world!', -40)).toBe('Tqxxa iadxp!')
// })

// ANALYZE()
test('throws error', () => {
  expect(() => analyze('this throws an error')).toThrow()
})
test('returns object', () => {
  expect(analyze([0, 1, 2, 3, 4, 5])).toStrictEqual({
    average: 2.5,
    min: 0,
    max: 5,
    length: 6 
  })
})