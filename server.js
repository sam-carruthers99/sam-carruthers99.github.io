
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));

// app.set('view engine', 'ejs'); // if using all ejs

app.set('port', process.env.PORT || 3000);

// changed to similar with process.env.PORT
app.listen(process.env.PORT || 3000, function() {
	console.log("Listening Now");  // to confirm server is listening on port 3000
});

// All Get and Post Requests

app.get('/', function(req, res){

	res.sendFile(path.join(__dirname + '/views/index.html'));

});

app.get('/puzzles', function(req, res){

	res.sendFile(path.join(__dirname + '/views/puzzles.html'));

});