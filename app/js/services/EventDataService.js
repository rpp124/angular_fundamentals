'use strict';

eventsApp.factory('eventData', function ($http, $resource) {
    var resource = $resource('/data/event/:id', {id: '@id'});
    return {
        getEvent: function(eventId) {
            return resource.get({id:eventId});
                
        },
        saveEvent: function(event) {
            console.log(event);
            return resource.save(event);
        },
        getAllEvents: function () {
            var results = resource.query()
            return results;
        }
    };
});