var express = require('express');
var app = express();

const PORT = process.env.PORT || 9000;

// app.use(function(req, res, next) {
// 	console.log('--- middleware ----');
// 	console.log(req.hostname);
// 	console.log(req.url);
// 	console.log('http header');
// 	console.log(req.headers['x-forwarded-proto']);

// 	if (req.headers['x-forwarded-proto'] === 'http') {
// 		next();
// 	} else {
// 		console.log('http://' + req.hostname + req.url);
// 		res.redirect('http://' + req.hostname + req.url);
// 	}
// });

app.use(express.static("public"));

app.listen(PORT, function() {
	console.log('Express server is up on port ' + PORT + ' !');
});