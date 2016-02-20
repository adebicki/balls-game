var modules = modules || {};

modules.debug = (function(config, tools) {
    'use strict';

    var module = {};

    module.init = function() {
        module.log('debug init');
    };

    module.log = (function() {
        if (config.isDebug() === true) {
            return function(txt) {
                console.log(txt);
            }
        } else {
            return tools.getEmptyFunction();
        }
    })();

    module.error = (function() {
        if (config.isDebug() === true) {
            return function(txt) {
                console.error(txt);
            }
        } else {
            return tools.getEmptyFunction();
        }
    })();

    return module;
})(modules.config, modules.tools);