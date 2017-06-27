eventsApp.directive('dateField', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr, event) {
            element.on('keydown', function (event) {
                
                if (checkKeyCode(event)) {
                    return true;
                }
                return false;
            });
            element.on('keyup', function (event) {
                if (event.target.value.length === 2 || event.target.value.length === 5) {
                    event.target.value += "/";
                }
            })
        }
    }
});

function checkKeyCode(event) {
    
    if ((event.keyCode >= 48 && event.keyCode <= 57)
        || event.keyCode === 8 || event.keyCode === 46
        || event.keyCode === 35 || event.keyCode === 36
        || (event.keyCode >= 96 && event.keyCode <= 105)
        || (event.keyCode >= 37 && event.keyCode <= 40)) {
        return true;
    }
    return false;
}