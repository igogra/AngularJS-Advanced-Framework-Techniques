angular.module('app').controller('ContactUsController', [function() {
    var vm = this;

    vm.contact = contact;

    function contact() {
    	alert('Contact Sent');
    }
}]);
