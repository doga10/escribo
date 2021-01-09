const { sum, validationNumber, converterArray, calculator, simulator, main } = require('../utils/main')

test('should receive an integer array and return the sum of the same', () => {
  expect(sum([1, 2, 3])).toBe(6)
})

test('should send a positive integer', () => {
  expect(validationNumber(2)).toBe(undefined)
  expect(validationNumber(-1)).toBe('please return a positive integer')
  expect(validationNumber('A')).toBe('please insert an integer')
})

test('should pass a positive number and greater than 0', () => {
  expect(converterArray(2)).toEqual([ 1 ])
  expect(converterArray(0)).toEqual([])
  expect(converterArray(-1)).toEqual([])
  expect(converterArray('A')).toEqual([])
})

test('should inform an integer divisible by 3 or 5', () => {
  expect(calculator(3)).toEqual(3)
  expect(calculator(5)).toEqual(5)
  expect(calculator(0)).toEqual(0)
  expect(calculator(-1)).toEqual(false)
  expect(calculator('A')).toEqual(false)
})

test('should inform an integer and positive number', () => {
  expect(simulator(4)).toEqual([3])
  expect(simulator(5)).toEqual([3])
  expect(simulator(0)).toEqual([])
  expect(simulator(-1)).toEqual([])
  expect(simulator('A')).toEqual([])
})

test('should inform an integer and positive number', () => {
  expect(main(3)).toEqual(0)
  expect(main(5)).toEqual(3)
  expect(main(-20)).toEqual('please return a positive integer')
  expect(main('A')).toEqual('please insert an integer')
})