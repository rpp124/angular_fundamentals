'use strict';

eventsApp.controller('EventController', function EventController($scope) {
    $scope.query = "";
    $scope.sortOrder;``
    $scope.event = {
        name: 'Ricks Event',
        date: '7/15/2017',
        time: '12:00pm',
        location: {
            address: '14 Sonny Dr',
            city: 'Old Forge',
            'state': 'PA',
            zip: '18518'
        },
        imageUrl: '/img/angularjs-logo.png',
        sessions: [
            {
                name: "Session One",
                presenter: "Rick P",
                duration: "1 hr",
                level: "Beginner",
                abstract: "This is a beginner level session",
                upvoteCount: 0

            },
            {
                name: "Session Two",
                presenter: "Joe P",
                duration: "2 hr",
                level: "Beginner",
                abstract: "This is a second beginner advanced level session",
                upvoteCount: 0
            },
            {
                name: "Session Three",
                presenter: "Tom J P",
                duration: "1.5 hr",
                level: "Intermediate",
                abstract: "This is an intermediate level session",
                upvoteCount: 0
            },
            {
                name: "Session Four",
                presenter: "Melisa P",
                duration: "0.5 hr",
                level: "Advanced",
                abstract: "This is an advanced level session",
                upvoteCount: 0
            },
        ]
    }

    $scope.upvoteSession = function(session) {
        session.upvoteCount++;
    }

    $scope.downvoteSession = function(session) {
        session.upvoteCount--;
    }
})