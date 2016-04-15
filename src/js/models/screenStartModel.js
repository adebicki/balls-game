var ballsGame = ballsGame || {};
ballsGame.modules = ballsGame.modules || {};

ballsGame.modules.screenStartModel = (function(global, debug, tools, canvasController) {
    'use strict';

    var module = {};

    var _ctx;
    var _canvas;
    var _eventHandlers;
    // callback function from gameController
    var _callback;

    module.init = function(callback) {
        debug.log('screenStartModel init');

        _callback = (typeof callback === 'function' ? callback : tools.getEmptyFunction());
        _canvas = canvasController.getCanvas();
        _ctx = _canvas.getContext('2d');

        _eventHandlers = [
            [global, 'resize', resizeHandler],
            [_canvas, 'click', clickHandler]
        ];

        //addAllEventListeners(true);
        tools.addOrRemoveEventListeners(_eventHandlers, true);
        resizeHandler(); // once on start to set canvas size & orientation and repaint screen
    };

    // todo move it to tools module?
    /**
     * Adds or removes all event listeners from _eventHandlers
     * @param addEventListeners add if true, remove if false
     */
    function addAllEventListeners(addEventListeners) {
        tools.addOrRemoveEventListeners(_eventHandlers, addEventListeners);
    }

    function exitScreen(exitParameters) {
        // remove all event handlers
        // addAllEventListeners(false);
        tools.addOrRemoveEventListeners(_eventHandlers, false);
        _callback(exitParameters);
    }

    function resizeHandler() {
        debug.log('screenStartModel resize handler - why 2 times sometimes? :>');

        canvasController.resizeHandler(); // resize and reorient canvas
        repaint();
    }

    function clickHandler(e) {
        debug.log('Canvas was clicked');
        debug.log(e);

        exitScreen('Canvas was clicked, so let\'s exit');
    }

    function repaint() {

        var i;
        var virtualCanvasWidth = canvasController.getVirtualCanvasWidth();
        var virtualCanvasHeight = canvasController.getVirtualCanvasHeight();

        canvasController.clearCanvas();

        // all
        _ctx.fillStyle = '#abc';
        _ctx.fillRect(0, 0, virtualCanvasWidth, virtualCanvasHeight);

        // rectangle
        _ctx.fillStyle = "#69a";
        _ctx.fillRect(40, 10, virtualCanvasWidth - 80, 20);

        // more rectangles
        _ctx.fillStyle = "#0ba";
        for(i = 0; i < 10; i++) {
            if(i === 5) {
                _ctx.fillStyle = "#96a";
            }
            _ctx.fillRect(40, (i+2) * 10 * 2, virtualCanvasWidth - 80, 10);
        }

        // arrow
        _ctx.fillStyle = '#aa3333';
        _ctx.beginPath();
        _ctx.moveTo(virtualCanvasWidth / 2 , 40);
        _ctx.lineTo(virtualCanvasWidth / 2 + 20, 60);
        _ctx.lineTo(virtualCanvasWidth / 2 - 20, 60);
        _ctx.closePath();
        _ctx.fill();
    }

    return module;
})(typeof window === 'undefined' ? this : window, ballsGame.modules.debug, ballsGame.modules.tools, ballsGame.modules.canvasController);