import fs from 'fs';
import csv from 'csvtojson';

const readStream = fs.createReadStream("./helpers/users.csv");
const users = new Array();

csv({
    checkType: true,
    delimiter: [";"],
})
  .fromStream(readStream)
  .subscribe((json) => {
    users.push(json);
  })
  .then(function () {}, function(err) { console.error(err)});

export default users;