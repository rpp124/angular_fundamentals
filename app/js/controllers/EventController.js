'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData) {
    $scope.query = "";
    $scope.sortOrder;``
    $scope.event = eventData.event;

    $scope.upvoteSession = function(session) {
        session.upvoteCount++;
    }

    $scope.downvoteSession = function(session) {
        session.upvoteCount--;
    }
})