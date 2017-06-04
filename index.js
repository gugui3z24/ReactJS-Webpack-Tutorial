// Simple Server Setup Using ExpressJS

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
