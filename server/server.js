var express = require('express');
var app = express();
var path = require('path');
const serve = require('express-static');

// console.log(path.join(__dirname, '/src'));
// app.use('/rhythmApp', express.static(path.join(__dirname, '/src')));

app.use(serve(path.join(__dirname, '../dist')));

app.listen(3105)
console.log('listening to port 3105');