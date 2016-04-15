var ballsGame = ballsGame || {};
ballsGame.modules = ballsGame.modules || {};

ballsGame.modules.gameController = (function(debug, canvasController, screenStartModel, screenGameModel) {
    'use strict';

    var module = {};

    module.init = function() {
        debug.log('gameController init');

        canvasController.init();
        screenStartModel.init(screenStartOnExit);

    };

    function screenStartOnExit(exitParam) {
        debug.log(exitParam);

        // todo add some fancy animation?
        canvasController.clearCanvas();

        screenGameModel.init();
    }

    return module;
})(ballsGame.modules.debug, ballsGame.modules.canvasController, ballsGame.modules.screenStartModel, ballsGame.modules.screenGameModel);