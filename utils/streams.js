const program = require('commander');
const fs = require('fs');
const path = require('path');
const through = require('through2');
const csv = require('csvtojson');

function reverse() {
  process.stdin.on('data', (data) => {
    process.stdout.write(data.toString().split('').reverse().join(''));
  });
}

function transform() {
  const transformStream = through(write, end);

  function write(chunk, enc, next) {
    const transformedChunk = chunk.toString().toUpperCase();
    this.push(transformedChunk);
    next();
  }

  function end(done) {
    done();
  }

  process.stdin.pipe(transformStream).pipe(process.stdout);
}

function outputFile(filePath) {
  fs.createReadStream(filePath).pipe(process.stdout);
}

function convertFromFile(filePath) {
  if (!filePath.endsWith('.csv')) {
    console.log('File should be with .csv format');
  }
  fs.createReadStream(filePath)
    .pipe(csv())
    .pipe(process.stdout);
}

function convertToFile(filePath) {
  if (!filePath.endsWith('.csv')) {
    console.log('File should be with .csv format');
  }
  const jsonFileName = filePath.replace('.csv', '.json');

  fs.createReadStream(filePath)
    .pipe(csv())
    .pipe(fs.createWriteStream(jsonFileName));
}

function cssBundler(filePath) {
  const writer = fs.createWriteStream(path.join(filePath, 'bundle.css'));

  fs.readdir(filePath, (err, files) => {
    if (err) throw err;

    if (files.length) {
      const cssFiles = files.filter(file => file.match(/.css/) && file !== 'bundle.css');

      cssFiles.forEach((file) => {
        fs.readFile(path.join(filePath, file), 'utf-8', (err, data) => {
          if (err) throw err;
          writer.write(`${data}\n`);
        });
      });
    } else {
      console.log('Directory is empty');
    }
  });
}

function printHelp() {
  console.log(`You can use following commands:
    -a=name, --action=name    do an action: reverse, transform, convertFromFile, convertToFile, bundleCss
    -f=name, --file=name      provide a file for processing with 'convertFromFile, convertToFile' actions
    -p=name, --path=name      provide a path for using with 'bundleCss' action
    -h, --help                show this message`);
  process.exit();
}

function specify(option) {
  console.log(`You should specify a ${option} option.`);
}
program
  .version('0.0.1')
  .option('-a, --action <actionName>', 'Action')
  .option('-f, --file [filePath]', 'File')
  .option('-p, --path [path]', 'File path')
  .option('-h, --help', 'Show help')
  .parse(process.argv);

switch (program.action) {
  case 'reverse':
    reverse();
    break;
  case 'transform':
    transform();
    break;
  case 'outputFile':
    if (program.file) outputFile(program.file);
    else specify('file');
    break;
  case 'convertFromFile':
    if (program.file) convertFromFile(program.file);
    else specify('file');
    break;
  case 'convertToFile':
    if (program.file) convertToFile(program.file);
    else specify('file');
    break;
  case 'cssBundler':
    if (program.path) cssBundler(program.path);
    else specify('path');
    break;
  default:
    printHelp();
}

module.exports = {
  reverse,
  transform,
  outputFile,
  convertFromFile,
  convertToFile,
};
