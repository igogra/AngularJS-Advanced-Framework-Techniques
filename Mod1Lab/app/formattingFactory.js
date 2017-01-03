angular.module('app').factory('formattingFactory', [formattingFactory]);

function formattingFactory() {
    return {
        format: format
    };

    function format(value) {
        if (value.length % 2 === 0) {
            return value.toUpperCase();
        } else {
            return value.toLowerCase();
        }
    }
}
