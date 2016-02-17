var modules = modules || {};

modules.config = (function() {
    'use strict';

    var module = {};

    var _config = {
        debug: true,
        game: {
            boardFieldsCountX: 7,
            boardFieldsCountY: 5
        }
    };

    module.isDebug = function() {
        return _config.debug === true;
    };

    module.getBoardFieldCount = function(){
        return {
            countX: _config.game.boardFieldsCountX,
            countY: _config.game.boardFieldsCountY
        };
    };

    return module;
})();