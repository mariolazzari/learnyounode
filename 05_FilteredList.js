// filtered list
var fs = require('fs');
var path = require('path');

// check parameters
if (process.argv.length < 4) {
  return console.log("Invelid arguments");
}

var folder = process.argv[2];
var filter = process.argv[3];

fs.readdir(folder, (err, list) => {
  // error
  if (err) return console.log(err);

  // list file filtered by extension
  var files = list.filter(f => path.extname(f) === "." + filter);
  files.forEach(file => console.log(file));
})


// versione ufficiale
/*

    var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })


*/