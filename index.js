const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});

app.use(express.static(__dirname + '/public'));
