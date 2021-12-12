// sync I/O
const fs = require("fs");

// read file name from argv
const fileName = process.argv[2];
// read file content
const file = fs.readFileSync(fileName, "utf8");
// count lines
const lines = file.split("\n");
console.log(lines.length - 1);
