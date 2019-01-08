const fs = require('fs');
const EventEmitter = require('events');
const _ = require('lodash');

class DirWatcher extends EventEmitter {
  watch(path, delay){
    let csvFiles = [];

    setInterval(() => {
      fs.readdir(path, (error, result) => {
        if(error) {
          console.error(error.message);
        }
        if(result) {
          const diffAdd = _.differenceWith(result, csvFiles, _.isEqual);
          const diffDelete = _.differenceWith(csvFiles, result, _.isEqual);
          if(diffAdd.length || diffDelete.length) {
            csvFiles = [];
            csvFiles.push(...result);
          }
          if(diffAdd.length) {
            diffAdd.forEach(file => {
              this.emit('dirwatcher:changed', file);
            })
          }
        }
      });
    }, delay);
  }
}

module.exports = DirWatcher;
