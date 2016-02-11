'use strict';

var modules = modules || {};

modules.token = (function() {
    //todo wzorzec fabryki?
    var module = {};

    function Token(color) {
        var tokenColor = color;
        //pozycje przekazywane przez field
        var x = 0;
        var y = 0;
        if (typeof color === 'undefined') {
            tokenColor = '#999';
        }

        this.setPosition = function() {

        };
        this.repaint = function() {

        };
    }

    return module;
})();