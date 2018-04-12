// my first async I/O
var fs = require('fs');
var fileName = process.argv[2];

fs.readFile(fileName,"utf8", (err, data) => {
    // on error
    if(err) return console(err);

    // read async
    console.log(data.split('\n').length - 1);
});