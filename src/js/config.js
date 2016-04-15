var modules = modules || {};

ballsGame.modules.config = (function(tools) {
    'use strict';

    // todo: write util to deep copy object

    var module = {};

    var _config = {
        debug: true,
        mainCanvasId: 'mainCanvas',
        constantScreenOrientation: true,
        game: {
            boardFieldsCountX: 7,
            boardFieldsCountY: 5
        },
        resources: {
            gameResources: [
                'img/token-background.png'
            ]
        },
        colors: {
            clearCanvas: '#fff'
        }
    };

    module.getConfig = function() {
        return tools.deepCopy(_config);
    };

    module.isDebug = function() {
        return _config.debug === true;
    };

    module.getMainCanvasId = function() {
        return _config.mainCanvasId;
    };

    module.isConstantScreenOrientation = function() {
        return _config.constantScreenOrientation;
    };

    module.getBoardFieldCount = function(){
        return {
            countX: _config.game.boardFieldsCountX,
            countY: _config.game.boardFieldsCountY
        };
    };

    module.getGameResources = function() {
        return _config.resources.gameResources;
    };

    return module;
})(ballsGame.modules.tools);