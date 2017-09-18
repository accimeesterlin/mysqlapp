var express = require("express"),
	app = express(),
	port = process.env.PORT || 8080,
	path = require("path"),
	bodyParser = require("body-parser"),
	mysql = require('mysql');


app.use(express.static("public"));

app.use(bodyParser());

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : ''
});


require("./routes/routes")(app, path, connection);



app.listen(port, function(){
	console.log("Yayyy, magic is about to happy");
});