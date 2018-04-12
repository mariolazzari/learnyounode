var fs = require('fs');
var path = require('path');


module.exports = (folder, ext, callback) => {
  fs.readdir(folder, (err, data) => {
    // error
    if(err) return callback(err);
    // result
      data = data.filter(file => {
         return path.extname(file) === "." + ext
    })

    callback(null, data)
  });
}

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




