// filtered list
const fs = require("fs");
const path = require("path");

// check parameters
if (process.argv.length < 4) {
  return console.log("Invelid arguments");
}

const folder = process.argv[2];
const filter = `.${process.argv[3]}`;

fs.readdir(folder, (err, list) => {
  // error
  if (err) {
    return console.log(err);
  }

  // list file filtered by extension
  const files = list.filter(f => path.extname(f) === filter);
  files.forEach(console.log);
});
