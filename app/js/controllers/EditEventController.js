'use strict';

eventsApp.controller('EditEventController', function EditEventController($scope) {
    $scope.saveEvent = function (event, editEventForm) {
        if (editEventForm.$valid) {
            alert(event.name);
        }
    }

    $scope.cancelEdit = function() {
        window.location.href="/eventDetails.html";
    }
})