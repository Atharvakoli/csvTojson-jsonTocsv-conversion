const fs = require('fs');
const path = require('path');

const { Parser } = require('json2csv');

const filePath = path.join(__dirname, 'movie.json');

try {
  let movieData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(movieData);

  const jsonParser = new Parser();
  const csv = jsonParser.parse(data);

  let csvFilePath = path.join(__dirname, 'movie.csv');
  fs.writeFileSync(csvFilePath, csv);
  console.log('Conversion successful of json to csv files');
} catch (error) {
  console.log('Error while reading json data: ', error);
}
