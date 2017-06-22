'use strict';

eventsApp.controller('EditEventController', function EditEventController($scope, eventData) {
    $scope.saveEvent = function (event, editEventForm) {
        if (editEventForm.$valid) {
            event.id = 999;
            eventData.saveEvent(event)
            .$promise
                .then(function(response) {
                    console.log('success');
                    console.log(response);
                })
                .catch(function(response) {
                    console.error('failure: '+response);
                })
        }
    }

    $scope.cancelEdit = function() {
        window.location.href="/eventDetails.html";
    }
})