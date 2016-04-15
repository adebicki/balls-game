var ballsGame = ballsGame || {};
ballsGame.modules = ballsGame.modules || {};

ballsGame.modules.canvasController = (function(global, debug, config, tools) {
    'use strict';

    var module = {};

    var _canvas;
    var _ctx;
    var _config;

    module.init = function() {
        debug.log('canvasController init');

        _config = config.getConfig();

        _canvas = global.document.getElementById(config.getMainCanvasId());

        // todo check if canvas object
        _ctx = _canvas.getContext('2d');

    };

    module.getCanvas = function() {
        return _canvas;
    };

    module.getContext2d = function() {
        return _canvas.getContext('2d');
    };

    module.clearCanvas = function() {
        var virtualCanvasWidth = getVirtualCanvasWidth();
        var virtualCanvasHeight = getVirtualCanvasHeight();

        _ctx.fillStyle = _config.colors.clearCanvas; // || 'transparent';
        _ctx.fillRect(0, 0, virtualCanvasWidth, virtualCanvasHeight);
    };

    module.getVirtualCanvasWidth = getVirtualCanvasWidth;
    module.getVirtualCanvasHeight = getVirtualCanvasHeight;
    module.resizeHandler = resizeHandler;

    function resizeHandler() {
        debug.log('canvasController resize handler');

        // todo debounce or throttle !!!

        resizeCanvas(getFullDocumentWidth(), getFullDocumentHeight());
        reorient();
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

    return module;
})(typeof window === 'undefined' ? this : window, ballsGame.modules.debug, ballsGame.modules.config, ballsGame.modules.tools);