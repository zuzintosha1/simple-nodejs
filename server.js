var express = require('express');
var app = express();

app.get('/', function (req, res){
	res.send("Hello World!");
});

app.get('/rest1', function (req, res) {
	res.send("Hello from rest1!");
});

app.get('/rest/2', function (req, res) {
	res.send("Hello from rest/2");
});

app.listen(8080, "0.0.0.0", function () {
	console.log("Example app listening on port 8080!");
});