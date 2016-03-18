var modules = modules || {};

modules.screenGame = (function(debug) {
    'use strict';

    var module = {};

    module.getDrawFunction = function() {
        return drawFunction;
    };

    function drawFunction(canvasUtils) {
        //function drawFunction(canvasController) {
        // todo: check parameter object?

        //var canvasUtils = canvasController.getCanvasUtils();

        var virtualCanvasWidth = canvasUtils.getVirtualCanvasWidth();
        var virtualCanvasHeight = canvasUtils.getVirtualCanvasHeight();
        var _ctx = canvasUtils.ctx;

        // clear
        _ctx.fillStyle = 'transparent';
        _ctx.fillRect(0, 0, virtualCanvasWidth, virtualCanvasHeight);
    }

    return module;
})(modules.debug);