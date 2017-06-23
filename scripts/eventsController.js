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

    var getAll = function (req, res) {
        var path = __dirname + '/app/data/event';
        var files = [];
        try {
            fs.readdir(path);
        } catch (e) {
            res.send('[]');
            res.end();
        }

        var results = "[";
        for (var i = 0; i < files.length; i++) {
            if (files[i].indexOf('.json') === files[i].length < 5) {
                results += fs.readFileSync(path+'/'+file[i])+',';
            }
        }

        results = results.substring(results.length - 1);
        results += "]";
        Console.log(results);
        res.setHeader('Content-type', 'application/json');
        res.send(results);
    }
    

    return {
        get: get,
        save: save, 
        getAll: getAll
    }
}

module.exports = eventsController();