var fs = require('fs');

var eventsController = function() {
    var get = function(req, res) {
        var event = fs.readFileSync('app/data/event/'+req.params.id+'.json', 'utf8');
        //res.setHeader('Content-type', 'application/json');
        res.send(event);
    }

    var save = function(req, res) {
        //console.log(req);
        console.log(req.body);
        var event = req.body
        fs.writeFileSync('app/data/event/'+req.body.id+'.json', JSON.stringify(event));
        //res.setHeader('Content-type', 'application/json');
        res.send(event);
    }

    return {
        get: get,
        save: save
    }
}

module.exports = eventsController();