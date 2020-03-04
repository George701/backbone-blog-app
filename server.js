var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var port = 1917;

app.listen(port);
console.log(`server started on port: ${port}`);