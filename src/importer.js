const csv = require('csvtojson');
// const _ = require('lodash');
// const fs = require('fs');

class Importer {
  static import(path) {
    const data = [];
    return new Promise((resolve, reject) => {
      csv()
        .fromFile(path)
        .then((json) => {
          data.push(json);
          resolve(data);
        })
        .catch((error) => {
          console.error('import csv error!', error);
          reject(error);
        });
    });
  }

  // importSync(path) {
  //   const cvsStr = fs.readFileSync(path);
  //   const rows = cvsStr.toString().split('\n');
  //   const keys = rows.shift().split(',');
  //
  //   return rows.map((row) => {
  //     const values = row.split(',');
  //     return _.zipObject(keys, values);
  //   });
  // }
}

module.exports = Importer;
