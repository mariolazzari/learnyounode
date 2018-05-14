const http = require('http');

http.get(process.argv[2], res => {
    res.setEncoding("utf8");

    res.on("error", err => {
        console.log(err);
    });

    res.on("data", data => {
        console.log(data);
        console.log;
    });
}).on('error', console.error);
