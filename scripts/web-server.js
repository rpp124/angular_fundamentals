var express = require('express');
var path = require('path');
var app = express();

var rootPath = path.normalize(__dirname+'/../');

app.use(express.static(rootPath+'/app'))

app.listen(8000, function(err) {
    if(err) {
        console.error(err);
    
    } else {
        console.log("App Started on port 8000");
    }
});