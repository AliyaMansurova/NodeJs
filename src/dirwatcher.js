const fs = require('fs');
const EventEmitter = require('events');

class DirWatcher extends EventEmitter {
  watch(path, delay){
    const csvFiles = [];

    setInterval(() => {
      fs.readdir(path, (error, result) => {
        if(error) {
          console.error(error.message);
        }
        if(result) {
          result.forEach(file => {
            if(!csvFiles.includes(file)) {
              csvFiles.push(file);
              this.emit('dirwatcher:changed', file);
            }
          });
        }
      });
    }, delay);
  }
}

module.exports = DirWatcher;
