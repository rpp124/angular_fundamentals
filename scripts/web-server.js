var express = require('express');
var path = require('path');
var app = express();
var eventsController = require('./eventsController');
var bodyParser = require('body-parser');

var rootPath = path.normalize(__dirname+'/../');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath+'/app'))

app.get('/data/event/:id', eventsController.get);
app.post('/data/event/:id', function(req, res) {
    eventsController.save(req, res);
});
app.get('/data/event', function (req, res) {
    eventsController.getAll(req, res);
});
app.get('*', function(req, res) {
    res.sendFile(rootPath+'/app/index.html');
})


app.listen(8000, function(err) {
    if(err) {
        console.error(err);
    
    } else {
        console.log("App Started on port 8000");
    }
});