import fs from 'fs';
import os from 'os';
import csv from 'csvtojson';

const readStream = fs.createReadStream("./csv/example.csv");
const writeStream = fs.createWriteStream("./csv/example.txt");

csv({
    delimiter: [";"],
    noheader: false,
	headers: ["Book", "Author",	"Amount", "Price"],
})
  .fromStream(readStream)
  .subscribe(function(jsonObj){
    const newObj = {};
    for (let obj in jsonObj) {
        if (obj !== 'Amount') {
            newObj[obj.toLowerCase()] = jsonObj[obj];
        }
    }

    const line = JSON.stringify(newObj) + os.EOL;
    writeStream.write(line, 'utf8', (error) => {
        if (error) {
            console.log("Error happened: ${error}");
        } 
    });
  });
