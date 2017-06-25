'use strict';
eventsApp.controller('EventListController', function EventListController($scope, eventData) {
    $scope.sortOrder = '';

    eventData.getAllEvents().$promise
    .then(function(events) {
        
        $scope.events = events;
        console.log($scope.events[0].name);
    })
    .catch(function(response) {
        console.error(results);
    });
});