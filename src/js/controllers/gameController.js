var modules = modules || {};

modules.gameController = (function(debug, canvasController, screenStartModel, screenGameModel) {
    'use strict';

    var module = {};

    module.init = function() {
        debug.log('gameController init');

        canvasController.init();
        screenStartModel.init();

    };

    return module;
})(modules.debug, modules.canvasController, modules.screenStartModel, modules.screenGameModel);