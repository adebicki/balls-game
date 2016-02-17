var modules = modules || {};

modules.canvasController = (function(debug, token) {
    'use strict';
    
    var module = {};

    var _canvas;
    var _ctx;

    module.init = function(canvasObject) {
        debug.log('canvasController init');

        _canvas = canvasObject;
        _ctx = canvasObject.getContext('2d');
    };

    module.drawBoard = function() {
        // just test
        _ctx.fillStyle = '#fff';
        _ctx.fillRect(0, 0, _canvas.width, _canvas.height);

        var tok1 = new token.Token({x:15, y:15}, 'red');

        tok1.draw(_ctx);
    };

    //module.getContext = function() {
    //    _canvas.getContext('2d');
    //};
    //
    //function clearAll() {
    //
    //}
    //
    //function setSize() {
    //
    //}

    // todo implement canvas rotate (or not [config?]) from examples/resizableCanvasExample

    return module;
})(modules.debug, modules.token);