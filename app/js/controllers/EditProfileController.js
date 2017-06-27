'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder) {
        $scope.user = {
            userName: 'Rick';
        };
        

        $scope.getGravatarUrl = gravatarUrlBuilder.buildGravatarUrl;

    }
);
