var restify = require('restify');
var fs = require('fs');

function displayUnreadText(req, res, next) {
	console.log("UNREAD: [" + req.query.date + "] " + req.query.from + ": " + req.query.body);

	res.send(200);
	next();
}

function displayNewText(req, res, next) {
	console.log("NEW: [" + req.query.date + "] " + req.query.from + ": " + req.query.body);

	res.send(200);
	next();
}


var server = restify.createServer();
server.use(restify.queryParser());

server.get('/text/new', displayNewText);
server.get('/text/unread', displayUnreadText);



server.listen(80, function() {
  console.log('%s listening at %s', server.name, server.url);
});