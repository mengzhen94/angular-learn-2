var express = require('express');
var app = express();

var path = process.cwd();

app.use('/public', express.static(process.cwd() + '/public'));


app.get('/', function(req, res){
	res.sendFile(path + '/public/index.html');
})

var port = process.env.PORT || 8080;
app.listen(8080, function(){
	console.log("Listening on port" + port + '...');
});