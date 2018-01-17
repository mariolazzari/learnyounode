// filtered list
var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(folder, "utf8", (err, data) => {
    // error
    if(err) return console.log(err);
    // filter path
    console.log(data.filter(f => f.endsWith(ext)));

});