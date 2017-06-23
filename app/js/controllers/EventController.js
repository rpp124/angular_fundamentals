'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData, $log, $anchorScroll) {
    $scope.query = "";
    $scope.sortOrder; ``
    eventData.getEvent()
        .$promise
            .then(function(event) {
                $scope.event = event;
                console.log(event);
            })
            .catch(function(response) {
                console.log(response);
            });

    $scope.upvoteSession = function (session) {
        session.upVoteCount++;
    }

    $scope.downvoteSession = function (session) {
        session.upVoteCount--;
    }

    $scope.scrollToSession = function() {
        $anchorScroll();
    }
})