var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var fs = require('fs');
var app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/svc', function(request, response) {
    var nameString = request.query.name;
    var historyString = request.query.history;
    
    var jsonContent = [{}];
    
    var outputResult = jsonContent;
    const limit = request.query.limit;
    if(limit && limit <= jsonContent.length){
        outputResult = outputResult.slice(0, limit);
    }
    
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send(JSON.parse(JSON.stringify(outputResult)));
    
});
app.get('/internal-api', function(request, response) {
    var nameString = request.query.name;
    var historyString = request.query.history;
    
    var jsonContent = [{}];
    
    var outputResult = jsonContent;
    const limit = request.query.limit;
    if(limit && limit <= jsonContent.length){
        outputResult = outputResult.slice(0, limit);
    }
    
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send(JSON.parse(JSON.stringify(outputResult)));
    
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
