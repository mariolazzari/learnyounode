// make it modular
const myModule = require("./06_mymodule");

// arguments
const folder = process.argv[2];
const ext = process.argv[3];

// call module
myModule(folder, ext, (err, data) => {
  // on error
  if (err) {
    return console.log(err);
  }

  // print result
  data.forEach(file => console.log(file));
});
