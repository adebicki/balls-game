var modules = modules || {};

ballsGame.modules.app = (function(debug, config, resourceLoader, gameController) {
    'use strict';

    var module = {};

    module.init = function() {
        debug.log('app init');
        debug.init();

        // todo move to gameController?
        resourceLoader.init(config.getResources(),
            function() {
                gameController.init();
            }
        );
    };

    return module;
})(ballsGame.modules.debug, ballsGame.modules.config, ballsGame.modules.resourceLoader, ballsGame.modules.gameController);