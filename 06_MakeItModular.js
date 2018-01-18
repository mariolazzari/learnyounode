// make it modular
var myModule = require('./06_mymodule');

// arguments
var folder = process.argv[2]
var ext = process.argv[3]

// call module
myModule(folder, ext, (err, data) => {
    
    // on error
    if(err) {
        return console.log(err);
    }

    // print result
    data.forEach(file => console.log(file));
});

// soluzione

/*
 var fs = require('fs')
    var path = require('path')

    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }
*/
