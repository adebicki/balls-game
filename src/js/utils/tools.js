var modules = modules || {};

modules.tools = (function() {
    'use strict';

    var module = {};
    var _emptyFunction = function() {};

    module.getEmptyFunction = function() {
        return _emptyFunction;
    };

    module.deepCopy = function(source, target) {
        var i;
        target = target || {};

        for (i in source) {
            if (source.hasOwnProperty(i)) {
                if (typeof source[i] === 'object') {
                    target[i] = (Array.isArray(source[i]) ? [] : {});
                    module.deepCopy(source[i], target[i]);
                } else {
                    target[i] = source[i];
                }
            }
        }

        return target;
    }

    return module;
})();