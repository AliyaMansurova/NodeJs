const http = require('http');
const fs = require('fs');
const through = require('through2');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const message = 'Message';
  // const data = fs.readFileSync('./index.html').toString();
  // response.end(data.replace('{message}', message));
  const reader = fs.createReadStream('./index.html');
  const transformStream = through(function (chunk, enc, next) {
    const transformedChunk = chunk.toString().replace('{message}', message);
    this.push(transformedChunk);
    next();
  });
  reader.pipe(transformStream).pipe(res);
});

server.listen(3001, () => {
  console.log('Server listening on port 3001');
});
