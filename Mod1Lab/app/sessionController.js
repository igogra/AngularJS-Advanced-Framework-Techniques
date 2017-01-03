angular.module('app').controller('sessionController', ['sessionService', 'sessionFactory', sessionController]);

function sessionController(sessionService, sessionFactory) {
    var vm = this;

    vm.getServiceSession = function() {
        vm.model = {
            name: sessionService.get('name'),
            nickname: sessionService.get('nickname'),
            status: 'Retrieved by service on ' + new Date()
        };
    };

    vm.setServiceSession = function() {
        sessionService.save('name', vm.model.name);
        sessionService.save('nickname', vm.model.nickname);
        vm.getServiceSession();
    };

    vm.clearServiceSession = function() {
        sessionService.clear();
        vm.getServiceSession();
    };

    vm.getFactorySession = getFactorySession;
    vm.setFactorySession = setFactorySession;
    vm.clearFactorySession = clearFactorySession;

    function getFactorySession() {
        vm.model = {
            name: sessionFactory.get('name'),
            nickname: sessionFactory.get('nickname'),
            status: 'Retrieved by Factory on ' + new Date()
        };
    }

    function setFactorySession() {
        sessionFactory.save('name', vm.model.name);
        sessionFactory.save('nickname', vm.model.nickname);
        getFactorySession();
    }

    function clearFactorySession() {
        sessionFactory.clear();
        getFactorySession();
    }
}
