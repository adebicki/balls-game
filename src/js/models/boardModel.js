var ballsGame = ballsGame || {};
ballsGame.modules = ballsGame.modules || {};

ballsGame.modules.board = (function(debug, config) {
    'use strict';

    var module = {};

    function Board() {
        var dimensions = {
            x: 0,
            y: 0
        };
        var fields = [];
        this.repaint = function() {

        };
    }

    return module;
})(ballsGame.modules.debug, ballsGame.modules.config);