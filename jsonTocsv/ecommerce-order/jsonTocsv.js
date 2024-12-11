const fs = require('fs');
const path = require('path');

const { Parser } = require('json2csv');

let jsonFilePath = path.join(__dirname, 'orders.json');

try {
  let orders = fs.readFileSync(jsonFilePath, 'utf-8');
  let data = JSON.parse(orders);

  let jsonParser = new Parser();
  let csv = jsonParser.parse(data);

  let csvFilePath = path.join(__dirname, 'orders.csv');
  fs.writeFileSync(csvFilePath, csv);
  console.log('Conversion successful');
} catch (error) {
  console.error('Error while reading json file ', error);
}
