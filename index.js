var http = require('http');

var port = process.env.PORT;
if (!port)
	throw new Error("Can't read port configuration");

http.createServer(function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(ip + '\n');
}).listen(port, '0.0.0.0');

console.log('Server running at http://0.0.0.0:' + port);
