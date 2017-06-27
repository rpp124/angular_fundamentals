eventsApp.directive('votingWidget', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/directiveTemplates/votingWidgetTemplate.html',
        scope: {
            upvote: "&",
            downvote: "&",
            count: "="
        }
    }
})