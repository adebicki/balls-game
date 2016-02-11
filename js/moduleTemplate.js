'use strict';

var modules = modules || {};

modules.moduleName = (function(debug) {
    var module = {};

    module.init = function() {
        debug.log('init');
    };

    return module;
})(modules.debug);