var express = require('express');
var path = require('path');
var app = module.exports.app = exports.app = express();
app.use(require('connect-livereload')());
var rootPath = path.normalize(__dirname + '/../');
app.use(express.static(rootPath + '/app'));
app.use(express.static(rootPath + '/pages'));
app.use(express.static(rootPath + '/build'));
//app.use(express.static(rootPath + '/vendor'));
app.listen(8000);
console.log('the server is running ...')