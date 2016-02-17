var modules = modules || {};

modules.board = (function(debug, config) {
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
})(modules.debug, modules.config);