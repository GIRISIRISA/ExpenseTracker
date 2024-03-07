const http=require('http');
const fs=require('fs');
http.createServer(function(require,response) {
    response.writeHead(200,{
        'Content-Type':'text/html'
    });
    const file=fs.readFileSync('./index.html');
  response.write(file);
  response.end();
}).listen(2020)
console.log('server listening on');
