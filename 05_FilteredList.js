// filtered list
var fs = require('fs');

// check parameters
if(process.argv.length < 4){
    return console.log("Invelid arguments");
}

var folder = process.argv[2];
var filter = process.argv[3];

fs.readdir(folder, (err, list) =>{
    // errror
    if(err) return console.log(err);
    
    // list file filtered by extension
    var files = list.filter(f => f.endsWith('.' + filter));
    
    for(var i = 0; i < files.length; i++){
        console.log(files[i]);
    }    
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