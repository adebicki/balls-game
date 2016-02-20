var modules = modules || {};

modules.screenStart = (function(debug) {
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
        _ctx.fillStyle = '#fff';
        _ctx.fillRect(0, 0, virtualCanvasWidth, virtualCanvasHeight);

        // all
        _ctx.fillStyle = '#abc';
        _ctx.fillRect(0, 0, virtualCanvasWidth, virtualCanvasHeight);

        // rectangle
        _ctx.fillStyle = "#69a";
        _ctx.fillRect(40, 10, virtualCanvasWidth - 80, 20);

        // more rectangles
        _ctx.fillStyle = "#0ba";
        for(var i = 0; i < 10; i++){
            if(i === 5) {
                _ctx.fillStyle = "#96a";
            }
            _ctx.fillRect(40, (i+2) * 10 * 2, virtualCanvasWidth - 80, 10);
        }

        //znacznik pionu
        _ctx.fillStyle = '#aa3333';
        _ctx.beginPath();
        _ctx.moveTo(virtualCanvasWidth / 2 , 40);
        _ctx.lineTo(virtualCanvasWidth / 2 + 20, 60);
        _ctx.lineTo(virtualCanvasWidth / 2 - 20, 60);
        _ctx.closePath();
        _ctx.fill();
    }

    return module;
})(modules.debug);