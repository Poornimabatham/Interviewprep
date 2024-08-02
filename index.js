var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("mynewfile1.txt", function (err, data1) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }

      fs.readFile("demofile2.html", function (err, data2) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not Found");
        }
        fs.readFile("demoFile3.html", function (err, data3) {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end("404 Not Found");
          }

          fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
            if (err) {
              res.writeHead(500, { "Content-Type": "text/html" });
              return res.end(
                "500 Internal Server Error: Unable to append to file"
              );
            }
            console.log("Saved!");

            fs.writeFile("mynewfile3.txt", "This is my text", function (err) {
              if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                return res.end(
                  "500 Internal Server Error: Unable to append to file"
                );
              }

              res.writeHead(200, { "Content-Type": "text/html" });
              res.write(data1);
              res.write(data2);
              res.write(data3);

              return res.end();
            });
          });
        });
      });
    });
  })
  .listen(8080);
