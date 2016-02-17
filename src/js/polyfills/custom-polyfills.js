(function(){
    'use strict';

    // Array.isArray
    if (typeof Array.isArray === 'undefined') {
        Array.isArray = function(possibleArray) {
            return Object.prototype.toString.call(possibleArray) === '[object Array]';
        }
    }

})();
