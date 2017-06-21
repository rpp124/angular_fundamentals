'use strict';


eventsApp.filter('duration', function () {
    return function (duration) {
        switch (duration) {
            case 1: return '1/2 Hour';
            case 2: return '1 Hour';
            case 3: return '2 Hours';
            case 4: return "Half Day";
        }
    }
})