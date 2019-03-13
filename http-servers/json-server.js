const http = require('http');

const product = {
  id: 1,
  name: 'Supreme T-Shirt',
  brand: 'Supreme',
  price: 99.99,
  options: [
    { color: 'blue' },
    { size: 'XL' },
  ],
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/json' });
  res.end(JSON.stringify(product));
});

server.listen(3002, () => {
  console.log('Server listening on port 3002');
});
