'use strict';

eventsApp.factory('eventData', function () {
    return {
        event: {
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
                    duration: 3,
                    level: "Beginner",
                    abstract: "This is a beginner level session",
                    upvoteCount: 0

                },
                {
                    name: "Session Two",
                    presenter: "Joe P",
                    duration: 4,
                    level: "Beginner",
                    abstract: "This is a second beginner advanced level session",
                    upvoteCount: 0
                },
                {
                    name: "Session Three",
                    presenter: "Tom J P",
                    duration: 1,
                    level: "Intermediate",
                    abstract: "This is an intermediate level session",
                    upvoteCount: 0
                },
                {
                    name: "Session Four",
                    presenter: "Melisa P",
                    duration: 2,
                    level: "Advanced",
                    abstract: "This is an advanced level session",
                    upvoteCount: 0
                },
            ]
        }
    };
});