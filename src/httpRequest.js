const http = require("node:http");
const fs = require("fs");
const url = require("node:url");
const path = require("node:path");

const server = http.createServer((req, res) => {
  console.log("Create a Server");
  method = req.method.toLowerCase();
  //   console.log(method);

  const urlName = url.parse(req.url, true).pathname;
  console.log(urlName);

  const pathName = path.join(__dirname, "data.json");
  // console.log(pathName);

  if (method === "get" && urlName === "/api/page/") {
    fs.readFile(pathName, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-type": "application/json" });
        res.end(JSON.stringify({ err: "This is a Internal Servor Error" }));
      } else {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify(data));
      }
    });
  } else if (method === "post" && urlName === "/api/page/") {
    let body = "";

    // Data is Come in a Buffer Format But Convert into a String Format:-
    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", chunk => {
      fs.readFile(pathName, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-type": "application/json" });
          res.end(JSON.stringify({ err: "This is a Internal Servor Error" }));
        } else {
          let bodydata = JSON.parse(data);

          bodydata.push(JSON.parse(body));

          fs.writeFile(pathName, JSON.stringify(bodydata), err => {
            if (err) {
              res.writeHead(500, { "Content-type": "application/json" });
              res.end(
                JSON.stringify({ err: "This is a Internal Servor Error" })
              );
            } else {
              console.log("Data is Updated");
            }
          });
        }
      });
    });
  } else if (method === "put" && urlName === "/api/page/") {
    let dataOne = "";

    req.on("data", chunk => {
      dataOne += chunk;
    });

    req.on("end", () => {
      const id = url.parse(req.url, true).query.id;
      console.log(id);

      if (!isNaN(id)) {
        fs.readFile(pathName, "utf-8", (err, data) => {
          if (err) {
            res.writeHead(404, { "Content-type": "application/json" });
            res.end(JSON.stringify({ err: "This is a Internal Servor Error" }));
          } else {
            let bodydata = JSON.parse(data);
            console.log(bodydata);

            const index = bodydata.findIndex(v => v.id == id);
            console.log(index);

            if (index != -1) {
              bodydata[index] = JSON.parse(dataOne);
              console.log(bodydata);

              try {
                fs.writeFile(pathName, JSON.stringify(bodydata), err => {
                  if (err) {
                  } else {
                    res.writeHead(200, { "Content-type": "application/json" });
                    res.end(JSON.stringify({ message: "Data is UpDated" }));
                  }
                });
              } catch (err) {
                res.writeHead(500, { "Content-type": "application/json" });
                res.end(JSON.stringify({ message: "Internal Server Error" }));
              }
            } else {
            }
            console.log(err);
            if (err) {
              console.log(err);
              console.log("Data is not Updated");
            } else {
              console.log("data is Updated");
            }
          }
        });
      }
    });
  } else if (method === "delete" && urlName === "/api/page/") {
    let dataOne = "";

    req.on("data", chunk => {
      dataOne += chunk;
    });

    req.on("end", () => {
      const id = url.parse(req.url, true).query.id;
      console.log(id);

      if (!isNaN(id)) {
        fs.readFile(pathName, "utf-8", (err, data) => {
          if (err) {
            res.writeHead(404, { "Content-type": "application/json" });
            res.end(JSON.stringify({ err: "This is a Internal Servor Error"}));
          } else {
            let bodydata = JSON.parse(data);
            console.log(bodydata);

          
             let fDeleteData =JSON.parse(dataOne);

             let nData = fDeleteData.filter((v) => v.id !== id);
             console.log(nData);

              try {
                fs.writeFile(pathName, JSON.stringify(nData), err => {
                  if (err) {

                  } else {
                   res.writeHead(200,{"Content-type" :"application/json"});
                   res.end(JSON.stringify({message : "data is Updated"}))
                  }
                });
              } catch (err) {
                res.writeHead(500,{"Content-type" :"application/json"});
                res.end(JSON.stringify({message : "data is Updated"}))
              }
            }
        });
      }
    });
  }
});

server.listen(3000, () => {
  console.log("server started succesfully");
});
