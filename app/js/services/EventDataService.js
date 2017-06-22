'use strict';

eventsApp.factory('eventData', function ($http, $resource) {
    var resource = $resource('/data/event/:id', {id: '@id'});
    return {
        getEvent: function(success) {
            return resource.get({id:1});
                
        },
        saveEvent: function(event) {
            console.log(event);
            return resource.save(event);
        }
    };
});