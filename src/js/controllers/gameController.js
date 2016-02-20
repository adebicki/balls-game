var modules = modules || {};

modules.gameController = (function(debug, canvasController) {
    'use strict';

    var module = {};

    module.init = function() {
        debug.log('gameController init');


        // new Board
        // new Field
        // ....
        // new Token
        // ...

        canvasController.init();
        canvasController.drawStartScreen();
        // canvasController.drawAll(); / drawStartScreen();
    };

    return module;
})(modules.debug, modules.canvasController);