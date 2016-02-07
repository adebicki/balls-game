'use strict';

var modules = modules || {};

modules.app = (function(gameController, canvasController) {
    var module = {};

    module.init = function(){
        console.log('app init');
        canvasController.init();
        gameController.init();
    };

    return module;
})(modules.gameController, modules.canvasController);