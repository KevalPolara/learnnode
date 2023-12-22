const http = require('node:http');
const fs = require('fs');
const url = require('node:url');
const path = require('node:path');

const server = http.createServer((req,res) => {
    console.log('Create a Server');
      method = req.method.toLowerCase();
      console.log(method);

      const urlName = url.parse(req.url,true).pathname
      console.log(urlName);

      const pathName = path.join(__dirname,'data.json');
      console.log(pathName);

      if(method=== 'get' && urlName === '/api/page/'){

        fs.readFile(pathName ,'utf-8', (err,data) => {
            if(err){

                res.writeHead(500,{'Content-type' : 'application/json'})
                res.end(JSON.stringify({err : 'This is a Internal Servor Error'}))

            }else{
                res.writeHead(200,{'Content-type' : 'application/json'})
                res.end(JSON.stringify(data));
            }

        } )

      }else if(method === 'post' && urlName === '/api/page/'){
        
      }else if(method === 'GET'){

      }else if(method === 'PUT'){

      }

})

server.listen(3000, () => {
    console.log('server started succesfully');
})