const path = require('path');
const express = require('express');

const app = express();

app.use('/', express.static(path.join(__dirname, '/dist')));


app.listen(3000, function() {
  console.log('Listening from http://localhost:3000');
})
