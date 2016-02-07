'use strict';

var modules = modules || {};

modules.gameController = (function(boardModel, fieldModel, tokenModel) {
    var module = {};

    module.init = function(){
        console.log('gameController init');
    };

    return module;
})(modules.board, modules.field, modules.token);