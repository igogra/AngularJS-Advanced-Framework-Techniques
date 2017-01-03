angular.module('app').factory('sessionFactory', ['$window', 'formattingFactory', sessionFactory]);

function sessionFactory($window, formattingFactory) {
    return {
        save: save,
        get: get,
        clear: clear
    };

    function save(key, value) {
        value = formattingFactory.format(value);
        $window.sessionStorage.setItem(key, value);
    }

    function get(key, value) {
        return $window.sessionStorage.getItem(key);
    }

    function clear() {
        $window.sessionStorage.clear();
    }
}
