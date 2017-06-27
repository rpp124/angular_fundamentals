'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute']);

eventsApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/editEvent', {
            templateUrl: '/templates/newEvent.html',
            controller: 'EditEventController'
        })
        .when('/events', {
            templateUrl: '/templates/EventList.html',
            controller: 'EventListController'
        })
        .when('/events/:eventId', {
            templateUrl: '/templates/EventDetails.html',
            controller: 'EventController'
        })
        .when('/editProfile', {
            templateUrl: '/templates/editProfile.html',
            controller: 'EditProfileController'
        })
        .otherwise({redirectTo: '/events'});
        
        $locationProvider.html5Mode(true);
});
