'use strict';

eventsApp.controller('EditEventController', function EditEventController($scope) {
    $scope.saveEvent = function(event) {
    }

    $scope.cancelEdit = function() {
        window.location.href="/eventDetails.html";
    }
})