angular.module('app').directive('h3MessageDirective', function() {
    return {
        restrict: 'E',
        scope: {
            title: '@'
        },
        template: '<h3>{{title}}</h3>',
        link: function(scope, element, attrs) {
            element.bind('mouseenter', function() {
                element.css('color', 'red');
            });

            element.bind('mouseleave', function() {
                element.css('color', 'silver');
            });
        }
    };
});
