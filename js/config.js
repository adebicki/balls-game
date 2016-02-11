'use strict';

var modules = modules || {};

modules.config = (function() {
    var module = {};

    var config = {
        debug: true
    };

    module.isDebug = function() {
        return config.debug === true;
    };

    return module;
})();