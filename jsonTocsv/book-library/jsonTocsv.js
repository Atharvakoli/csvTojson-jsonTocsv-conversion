const fs = require('fs');
const path = require('path');

const { Parser } = require('json2csv');

const filePath = path.join(__dirname, 'books.json');

try {
  let books = fs.readFileSync(filePath, 'utf-8');
  let data = JSON.parse(books);

  let jsonParser = new Parser();
  let csv = jsonParser.parse(data);

  let csvFilePath = path.join(__dirname, 'books.csv');
  fs.writeFileSync(csvFilePath, csv);
  console.log('Conversion successful');
} catch (error) {
  console.error('Error while reading json data ', error);
}
