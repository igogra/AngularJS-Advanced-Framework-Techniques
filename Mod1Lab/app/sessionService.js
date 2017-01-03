angular.module('app').service('sessionService', ['$window', sessionService]);

function sessionService($window) {
	this.save = save;
	this.get = get;
	this.clear = clear;

	function save(key, value) {
		$window.sessionStorage.setItem(key, value);
	}

	function get(key, value) {
		return $window.sessionStorage.getItem(key);
    }

    function clear() {
    	$window.sessionStorage.clear();
    }
}
