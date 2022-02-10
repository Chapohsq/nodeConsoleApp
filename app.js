"use strict"

const fs = require('fs')

const {Parser, PartialInvalidStringError, InvalidStringError, EmptyStringError} = require('./parser.js')
console.log(process.argv.slice(2));

const arg = process.argv.slice(2)

const fileToRead = arg[0]

const fileToWrite = arg[1]
let data
try {
  data = fs.readFileSync(fileToRead, 'utf-8')

  console.log(data);
} catch (err) {
  console.error(err);
}






let array =[]
try {
  array = Parser.parseCSVLine(data);
  console.log("array", array);

console.log("sum", array.reduce((p,c) => p+c));
} catch (error) {
  console.log(error.message);
}

// if (error instanceof PartialInvalidStringError) {
//   array = error.partialResult;
// }
try {
  fs.writeFileSync(fileToWrite , JSON.stringify(array))
} catch (error) {
  console.log(error);
}



