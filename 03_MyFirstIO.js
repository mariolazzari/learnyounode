// sync I/O
var fs = require('fs');
var fileName = process.argv[2];

var file = fs.readFileSync(fileName, 'utf8');

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

var lines = file.split('\n');
console.log(lines.length - 1);