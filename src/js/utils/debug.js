var modules = modules || {};

modules.debug = (function(config) {
    'use strict';

    var module = {};
    var _emptyFunction = function() {};

    module.init = function() {
        module.log('debug init');
    };

    module.log = (function() {
        if (config.isDebug() === true) {
            return function(txt) {
                console.log(txt);
            }
        } else {
            return _emptyFunction;
        }
    })();

    module.error = (function() {
        if (config.isDebug() === true) {
            return function(txt) {
                console.error(txt);
            }
        } else {
            return _emptyFunction;
        }
    })();

    return module;
})(modules.config);