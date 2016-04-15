var ballsGame = ballsGame || {};
ballsGame.modules = ballsGame.modules || {};

ballsGame.modules.screenGameModel = (function(global, debug, canvasController) {
    'use strict';

    var module = {};

    var _ctx;
    var _canvas;

    module.init = function() {
        debug.log('screenGameModel init');

        _canvas = canvasController.getCanvas();
        _ctx = _canvas.getContext('2d');

        global.addEventListener('resize', resizeHandler, false);

        resizeHandler(); // once on start
    };

    function resizeHandler() {
        // todo destroy event listener on screen change
        debug.log('screenGameModel resize handler');

        canvasController.resizeHandler(); // resize and reorient canvas
        repaint();
    }

    function repaint() {
        debug.log('screenGameModel repaint');
    }

    return module;
})(typeof window === 'undefined' ? this : window, ballsGame.modules.debug, ballsGame.modules.canvasController);