'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute']);

eventsApp.config(function ($routeProvider) {
    $routeProvider
        .when('/editEvent', {
            templateUrl: '/templates/newEvent.html',
            controller: 'EditEventController'
        })
        .when('/', {
            templateUrl: '/templates/eventDetails.html',
            controller: 'EventController'
        })
});
