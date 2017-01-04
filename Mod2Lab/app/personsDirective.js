angular.module('app').directive('persons', function() {
    return {
        restrict: 'E',
        scope: {
            data: '=',
            action: '&'
        },
        template: '<table class="table"><thead><th>Name</th><th>Nationality</th><th>Dates</th><th></th></thead><tbody>' +
            '<tr ng-repeat="person in data"><td>{{person.name}}</td><td>{{person.nationality}}</td><td>{{person.dates}}</td>' +
            '<td><input type="button" ng-click="action({person: person})" value="Details" class="btn btn-primary"/></td></tr>' +
            '</tbody></table>'
    };
});
