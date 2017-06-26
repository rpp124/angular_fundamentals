eventsApp.directive('eventThumbnail', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/directiveTemplates/eventThumbnail.html',
        scope: {
            event: "=event"
        }
    }
})