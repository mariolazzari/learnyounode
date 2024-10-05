const fs = require("fs");
const path = require("path");

module.exports = (folder, ext, callback) => {
  fs.readdir(folder, (err, data) => {
    // error
    if (err) {
      return callback(err);
    }

    // result
    data = data.filter(file => path.extname(file) === "." + ext);

    callback(null, data);
  });
};
