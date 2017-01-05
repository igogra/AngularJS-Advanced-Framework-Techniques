angular.module('app').controller('labController', [function() {
    var vm = this;

    vm.alerts = [];
    vm.selectedDate = new Date();
    vm.dateOptions = {
        showWeeks: false,
        minDate: new Date()
    };

    vm.addDanger = addDanger;
    vm.addWarning = addWarning;
    vm.dismissAlert = dismissAlert;

    function addDanger() {
        addAlert('danger', 'Danger, Will Robinson! Danger!');
    }

    function addWarning() {
        addAlert('warning', 'Warning! Warning! Alien approaching!');
    }

    function addAlert(type, text) {
        vm.alerts.push({ type: type, text: text });
    }

    function dismissAlert(index) {
        vm.alerts.splice(index, 1);
    }
}]);
