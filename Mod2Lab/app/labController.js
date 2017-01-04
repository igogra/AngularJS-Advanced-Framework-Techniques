angular.module('app').controller('labController', [function() {
    var vm = this;

    vm.persons = [{
        name: 'Mark Twatin',
        nationality: 'American',
        dates: '1835-1910'
    }, {
        name: 'A. A. Milne',
        nationality: 'English',
        dates: '1882-1956'
    }, {
        name: 'Ernest Hemingway',
        nationality: 'American',
        dates: '1899-1961'
    }, {
        name: 'Charles Dickens',
        nationality: 'English',
        dates: '1812-1870'
    }, {
        name: 'Jane Austen',
        nationality: 'English',
        dates: '1775-1817'
    }];

    vm.show = show;

    function show(person) {
        alert('Show details for: ' + person.name);
    }
}]);
