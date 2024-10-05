// http client
const http = require("http");

const req = process.argv[2];

http
  .get(req, res => {
    res.setEncoding("utf8");
    res.on("error", err => console.log(err));
    res.on("data", data => console.log(data.toString().length));
  })
  .on("error", console.error);
