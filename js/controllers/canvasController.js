'use strict';

var modules = modules || {};

modules.canvasController = (function(debug, document) {
    var module = {};

    module.init = function() {
        debug.log('canvasController init');
    };

    return module;
})(modules.debug, this.document);