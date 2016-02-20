var modules = modules || {};

modules.tools = (function() {
    'use strict';

    var module = {};
    var _emptyFunction = function() {};

    module.getEmptyFunction = function() {
        return _emptyFunction;
    };

    return module;
})();