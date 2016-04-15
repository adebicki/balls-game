var modules = modules || {};

ballsGame.modules.moduleName = (function(debug) {
    'use strict';

    var module = {};

    module.init = function() {
        debug.log('init');
    };

    return module;
})(ballsGame.modules.debug);