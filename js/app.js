'use strict';

var modules = modules || {};

modules.app = (function(debug, resourceLoader, gameController, canvasController) {
    var module = {};

    module.init = function() {
        debug.log('app init');
        debug.init();
        resourceLoader.init(function() {
            canvasController.init();
            gameController.init();
        });
    };

    return module;
})(modules.debug, modules.resourceLoader, modules.gameController, modules.canvasController);