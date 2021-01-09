#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const { main } = require('./utils/main')

program
  .command('number [param]')
  .description('Enter a number')
  .action((param) => {
    const response = main(+param)
    if (Number.isInteger(response)) {
      console.log(`${chalk.green(response)}`)
    } else {
      console.log(`${chalk.red(response)}`)
    }
  })

program.parse(process.argv)