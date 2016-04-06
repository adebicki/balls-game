var modules = modules || {};

modules.gameController = (function(debug, canvasController, screenStartModel, screenGameModel) {
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
})(modules.debug, modules.canvasController, modules.screenStartModel, modules.screenGameModel);