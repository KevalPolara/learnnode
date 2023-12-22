const http = require('node:http')
const url = require('node:url');
const file = require('node:fs');
const path = require('node:path');

const server = http.createServer((req,res) => {
    // if(req.method === 'GET'){
    //     if(req.url === '../data'){

    //     }
    // }
    // // console.log(req.method);
    console.log(req.headers);
    // console.log(req.httpVersion);
    // console.log(req.url);
    console.log(url.parse(req.url, true));

    // const filePath = path.join(__dirname, 'data', 'data.txt')
    // console.log(filePath);

            file.readFile('./src/data/data.txt' ,'utf-8',(err,data) =>{
                if(err){
                    res.writeHead(500, { 'Content-Type': 'application/json'});
                    res.end(JSON.stringify({ error: 'Internal Server Error'}));

                }else{
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(data);
                }
            })
    })

    server.listen(3000,()=>{
    console.log('server started succesfully');
})


