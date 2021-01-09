const sum = (array) => {
  return array.reduce((acc, cur) => (acc + cur), 0)
}

const validationNumber = (param) => {
  if (!Number.isInteger(param)) {
    return 'please insert an integer'
  }
  if (param < 0) {
    return 'please return a positive integer'
  }
}

const converterArray = (param) => {
  var array = []
  for (let index = 1; index <= (param-1); index++) {
    array.push(index)
  }
  return array
}

const calculator = (param) => {
  if (param % 3 === 0) {
    return param
  }
  if (param % 5 === 0) {
    return param
  }
  return false
}

const simulator = (param) => {
  let groupNumbers = []
  const array = converterArray(param)
  for (let index = 0; index < array.length; index++) {
    const response = calculator(array[index])
    if (response) {
      groupNumbers.push(response)
    }
  }
  return groupNumbers
}

const main = (param) => {
  const error = validationNumber(param)
  if (error) {
    return error
  }

  const logic = simulator(param)
  const response = sum(logic)
  return response
}

module.exports = { sum, validationNumber, converterArray, calculator, simulator, main }