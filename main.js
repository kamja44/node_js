// url 검색 -> parse
var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function(request,response){

    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    console.log(url.parse(_url, true));


    if(pathname === '/'){
      if(queryData.id === undefined){
        
        fs.readFile(`data/${queryData.id}`,'utf-8',function(err, description){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var template = `
                <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              <ul>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="?id=JAVASCRIPT">JavaScript</a></li>
              </ul>
              <h2>${title}</h2>
              <p>
              ${description}
              </p>
            </body>
            </html>
    
                `
        response.writeHead(200);
        // response.writeHead(200) -> 데이터가 잘 도착했다.
        response.end(template);
        })
      }else{
        fs.readFile(`data/${queryData.id}`,'utf-8',function(err, description){
          var title = queryData.id;
          var template = `
                <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              <ul>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="?id=JAVASCRIPT">JavaScript</a></li>
              </ul>
              <h2>${title}</h2>
              <p>
              ${description}
              </p>
            </body>
            </html>
    
                `
        response.writeHead(200);
        // response.writeHead(200) -> 데이터가 잘 도착했다.
        response.end(template);
        })
      } 
  }else{
    response.writeHead(404);
    // response.writeHead(404) -> 404 Error
    response.end('Not Found');
  }
    
    
});
app.listen(3000);