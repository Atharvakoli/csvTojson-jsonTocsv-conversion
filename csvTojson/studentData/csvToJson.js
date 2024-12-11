const fs = require('fs');
const path = require('path');

const csv = require('csv-parser');

const filePath = path.join(__dirname, 'students.csv');

let results = [];

fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    let writeFilePath = path.join(__dirname, 'students.json');

    try {
      fs.writeFileSync(writeFilePath, JSON.stringify(results, null, 2));
    } catch (error) {
      console.log('Error while writing json file ', error);
    }
  })
  .on('error', (err) => {
    console.error('Error while reading csv file', err);
  });
