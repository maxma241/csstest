var http = require("http");
var fs = require("fs");
var React = require('react');

fs.readFile("./TVRE.html", function(err, html){
	if(err){
		throw err;
	}

	http.createServer(function(request, response){
		response.setHeader('Access-Control-Allow-Origin', '*');
		response.setHeader('Cache-Control', 'no-cache');
		response.writeHead(200, {"Content-type":"text/html"});
		response.write(html);
		response.end();
	}).listen(3000)
});