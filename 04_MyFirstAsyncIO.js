// my first async I/O
const fs = require("fs");

const fileName = process.argv[2];
if (!fileName) {
  return console.log("Please provide a file name");
}

fs.readFile(fileName, "utf8", (err, data) => {
  // on error
  if (err) {
    return console.error(err);
  }

  // read async
  const lines = data.split("\n").length - 1;
  console.log(lines);
});
