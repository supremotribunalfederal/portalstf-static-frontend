const path = require('path');
const express = require('express');

const app = express();

app.use('/', express.static(path.join(__dirname, '/dist')));

// var uri = url.parse(request.url).pathname
//   , filename = path.join(process.cwd(), uri);
//
// path.exists(filename, function(exists) {
//     if(!exists) {
//       response.writeHead(404, {"Content-Type": "text/plain"});
//       response.write("404 Not Found\n");
//       response.end();
//       return;
//     }

app.listen(3000, function() {
  console.log('Listening from http://localhost:3000');
})
