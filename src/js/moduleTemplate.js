var modules = modules || {};

modules.moduleName = (function(debug) {
    'use strict';

    var module = {};

    module.init = function() {
        debug.log('init');
    };

    return module;
})(modules.debug);