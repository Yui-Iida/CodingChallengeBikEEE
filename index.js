let http = require('http');
let fs = require('fs');

function getType(_url) {
  let types = {
    // For data types
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.jpg': 'image/jpg',
  };
  for (let key in types) {
    if (_url.endsWith(key)) {
      return types[key];
    }
  }
  return 'text/plain';
}

let server = http.createServer((req, res) => {
  let url =
    'public' + (req.url.endsWith('/') ? req.url + 'index.html' : req.url);
  if (fs.existsSync(url)) {
    fs.readFile(url, (err, data) => {
      if (!err) {
        res.writeHead(200, { 'Content-Type': getType(url) });
        res.end(data);
      } else {
        res.statusCode = 500;
        res.end();
      }
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

// Set the port
let port = 8000;
server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
