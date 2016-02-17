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

        canvasController.drawBoard();
    };

    return module;
})(modules.debug, modules.canvasController);