var modules = modules || {};

modules.canvasController = (function(global, debug, config, tools, screenStart, screenGame) {
    'use strict';

    var module = {};

    var _canvas;
    var _ctx;

    // depends on actual game state (start screen, game, outcome screen, etc.)
    // it is defined in proper model
    var _repaintFunction;

    module.init = function() {
        debug.log('canvasController init');

        _canvas = global.document.getElementById(config.getMainCanvasId());

        // todo check if canvas object
        _ctx = _canvas.getContext('2d');

        _repaintFunction = tools.getEmptyFunction();

        global.addEventListener('resize', function() {
            repaint();
        });
    };

    module.drawStartScreen = function() {

        // todo get drawing function just once?
        _repaintFunction = screenStart.getDrawFunction();

        repaint();
    };

    module.drawGameScreen = function() {

        // todo get drawing function just once?
        _repaintFunction = screenGame.getDrawFunction();

        repaint();
    };

    function repaint() {
        debug.log('canvasController repaint (WHY 2 TIMES SOMETIMES :) ?)');

        resizeCanvas(getFullDocumentWidth(), getFullDocumentHeight());
        reorient();
        useRepaintFunction();
    }

    function reorient() {
        var angle;
        var rot;
        var translateX;
        var translateY;

        if( ! config.isConstantScreenOrientation()) {
            // let the browser handle orientation
            return;
        }

        angle = getScreenOrientation();

        if(angle) {
            rot = - Math.PI * (angle / 180); // radians
            translateX = (angle === -90 ? getFullDocumentWidth() : 0); // -90 - right
            translateY = (angle === 90 ? getFullDocumentHeight() : 0); // 90 - left

            _ctx.translate(translateX, translateY);
            _ctx.rotate(rot);
        }
    }

    function useRepaintFunction() {
        if(typeof _repaintFunction === 'function') {

            debug.log('CIEKAWOSTKA - MOŻNA PRZEKAZAĆ CAŁY MODUŁ canvasController - do przemyślenia');

            _repaintFunction(getCanvasUtils());
            //_repaintFunction(modules.canvasController);
        }
    }

    function resizeCanvas(width, height) {
        _canvas.width = width;
        _canvas.height = height;
    }

    function getVirtualCanvasWidth() {
        return config.isConstantScreenOrientation() ? (getScreenOrientation() ? _canvas.height : _canvas.width) : _canvas.width;
    }

    function getVirtualCanvasHeight() {
        return config.isConstantScreenOrientation() ? (getScreenOrientation() ? _canvas.width : _canvas.height) : _canvas.height
    }

    function getScreenOrientation() {
        return (global.orientation || (typeof global.screen.orientation !== "undefined" ? global.screen.orientation.angle : 0));
    }

    function getFullDocumentWidth() {
        return global.document.width || global.document.body.clientWidth;
    }

    function getFullDocumentHeight() {
        return global.document.height || global.document.body.clientHeight;
    }

    function getCanvasUtils() {
        return {
            ctx: _ctx,
            getVirtualCanvasWidth: getVirtualCanvasWidth,
            getVirtualCanvasHeight: getVirtualCanvasHeight
        }
    }

    //module.getCanvasUtils = getCanvasUtils;

    return module;
})(typeof window === 'undefined' ? this : window, modules.debug, modules.config, modules.tools, modules.screenStart, modules.screenGame);