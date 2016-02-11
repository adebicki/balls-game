'use strict';

var modules = modules || {};

modules.gameController = (function(debug, boardModel, fieldModel, tokenModel) {
    var module = {};

    module.init = function() {
        debug.log('gameController init');
    };

    return module;
})(modules.debug, modules.board, modules.field, modules.token);