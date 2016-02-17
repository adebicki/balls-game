var modules = modules || {};

modules.app = (function(debug, resourceLoader, gameController, canvasController) {
    'use strict';

    var module = {};

    module.init = function(canvas) {
        debug.log('app init');
        debug.init();
        resourceLoader.init([
                'img/token-background.png'
            ],
            function() {
                canvasController.init(canvas);
                gameController.init();
            }
        );
    };

    return module;
})(modules.debug, modules.resourceLoader, modules.gameController, modules.canvasController);