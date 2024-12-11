const fs = require('fs');
const path = require('path');
const { Parser } = require('json2csv');

const filePath = path.join(__dirname, 'data.json');

try {
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  // console.log(jsonData);
  const data = JSON.parse(jsonData);
  // console.log(data);

  // create a new csv parser
  const jsonTocsvParser = new Parser();
  const csv = jsonTocsvParser.parse(data);

  // write a csv data to a file
  const csvFilePath = path.join(__dirname, 'convertedData.csv');
  fs.writeFileSync(csvFilePath, csv);
  console.log('Conversion successfull');
} catch (error) {
  console.error('Error while reading file to csv ', error);
}
