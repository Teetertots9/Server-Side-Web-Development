// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework

// https://stackoverflow.com/questions/44405448/how-to-allow-cors-with-node-js-without-using-express

// Dependencies

let http = require('http');

let fs = require('fs');

let path = require('path');

// HTTP server consts

const port = 3000;

const www_root = 'www';

const default_doc = 'index.html';

// HTTP Header

let headers = {

'Access-Control-Allow-Origin': '*',

'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',

'Access-Control-Max-Age': 2592000 // 30 days

/** add other headers as per requirement */

};

// Create an HTTP server instance

// request cobject sent from browser

// response sent back to browser

http.createServer(function (request, response) {

console.log('request ', request.url);

// If no file specified, use default - index.hrml

let url = request.url;

if (url == "/") {

url = default_doc;

}

// Locate the file (in ./www folder)

let filePath = `./${www_root}/${url}`;

//if (filePath == './') {

// filePath = './www/index.html';

//}

// Get extension to determine content

let extname = String(path.extname(filePath)).toLowerCase();

let mimeTypes = {

'.html': 'text/html',

'.js': 'text/javascript',

'.css': 'text/css',

'.json': 'application/json',

'.png': 'image/png',

'.jpg': 'image/jpg',

'.gif': 'image/gif',

'.wav': 'audio/wav',

'.mp4': 'video/mp4',

'.woff': 'application/font-woff',

'.ttf': 'application/font-ttf',

'.eot': 'application/vnd.ms-fontobject',

'.otf': 'application/font-otf',

'.svg': 'application/image/svg+xml'

};

// Set content type based on extension

let contentType = mimeTypes[extname] || 'application/octet-stream';

// read the file

fs.readFile(filePath, function(error, content) {

// if not found respond with 404 error

if (error) {

if(error.code == 'ENOENT') {

fs.readFile('./404.html', function(error, content) {

response.writeHead(200, { 'Content-Type': contentType });

response.end(content, 'utf-8');

});

}

else {

// report server error 500

response.writeHead(500);

response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');

response.end();

}

}

else {

// send back the requested resource if found

headers['Content-Type'] = contentType;

response.writeHead(200, headers);

response.end(content, 'utf-8');

}

});

// Start the HTTP server

}).listen(port);

console.log(`Server running at http://127.0.0.1:${port}/`);