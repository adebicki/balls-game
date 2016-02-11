'use strict';

var modules = modules || {};

modules.debug = (function(config) {
    var module = {};
    var emptyFunction = function() {};

    module.init = function() {
        module.log('debug init');
    };

    module.log = (function() {
        if (config.isDebug() === true) {
            return function(txt) {
                console.log(txt);
            }
        } else {
            return emptyFunction;
        }
    })();

    module.error = (function() {
        if (config.isDebug() === true) {
            return function(txt) {
                console.error(txt);
            }
        } else {
            return emptyFunction;
        }
    })();

    return module;
})(modules.config);