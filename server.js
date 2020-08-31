var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var fs = require('fs');
var app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/customerSearch', function(request, response) {
    
    
    var jsonContent = [
    {
        "system": "SVC",
        "docIdType": "HKID",
        "docIdNo": "A123456(7)",
        "name": "Chan, Tai Man",
        "serviceStatus": "Active"
    }, 
    {
        "system": "Ruby",
        "docIdType": "HKID",
        "docIdNo": "A123456(7)",
        "name": "Chan, Tai Man",
        "serviceStatus": "Active"
    }
];
    
    var outputResult = jsonContent;
    
    setTimeout(function(){
        response.setHeader('Access-Control-Allow-Origin','*');
        response.send(JSON.parse(JSON.stringify(outputResult)));
    }, 3000);
    
 });

// app.get('/svc', function(request, response) {
//     var nameString = request.query.name;
//     var historyString = request.query.history;
    
//     var jsonContent = [{}];
    
//     var outputResult = jsonContent;
//     const limit = request.query.limit;
//     if(limit && limit <= jsonContent.length){
//         outputResult = outputResult.slice(0, limit);
//     }
    
//     response.setHeader('Access-Control-Allow-Origin','*');
//     response.send(JSON.parse(JSON.stringify(outputResult)));
    
// });

// app.get('/other', function(request, response) {
//     var nameString = request.query.name;
//     var historyString = request.query.history;
    
//     var jsonContent = [{}];
    
//     var outputResult = jsonContent;
//     const limit = request.query.limit;
//     if(limit && limit <= jsonContent.length){
//         outputResult = outputResult.slice(0, limit);
//     }
    
//     response.setHeader('Access-Control-Allow-Origin','*');
//     response.send(JSON.parse(JSON.stringify(outputResult)));
    
// });

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
