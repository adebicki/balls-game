var modules = modules || {};

modules.token = (function(debug, config) {
    'use strict';

    //todo wzorzec fabryki?
    var module = {};
    var _p;

    // coordinates.x and coordinates.y - real canvas coordinates?
    module.Token = function(coordinates, color) {

        // todo ensure new

        var _tokenColor;
        var _coordinates;
        var _ctx;

        checkCoordinatesParameter(coordinates);
        if (typeof color === 'undefined') {
            throw new Error('color is not an defined!');
        }

        _tokenColor = color;
        _coordinates = {
            x: coordinates.x,
            y: coordinates.y
        };

        this.getColor = function() {
            return _tokenColor;
        };

        this.getCoordinates = function() {
            return {
                x: _coordinates.x,
                y: _coordinates.y
            }
        };

        this.setCoordinates = function(coordinates) {
            checkCoordinatesParameter(coordinates);
            _coordinates.x = coordinates.x;
            _coordinates.y = coordinates.y;
        };

        function checkCoordinatesParameter(coordinates){
            if (typeof coordinates !== 'object') {
                throw new Error('coordinates is not an object!');
            }
            if (typeof coordinates.x !== 'number') {
                throw new Error('coordinates.x is not a number!');
            }
            if (typeof coordinates.y !== 'number') {
                throw new Error('coordinates.y is not a number!');
            }
        }
    };

    _p = module.Token.prototype;

    _p.draw = function(canvasContext) {
        var ctx;
        var coordinates;
        var color;

        if (Object.prototype.toString.call(canvasContext) !== '[object CanvasRenderingContext2D]') {
            throw new TypeError('canvasContext is not CanvasRenderingContext2D type!');
        }

        ctx = canvasContext;
        coordinates = this.getCoordinates();

        ctx.fillStyle = this.getColor();
        ctx.fillRect(coordinates.x, coordinates.y, 10, 10);
    };

    return module;
})(modules.debug, modules.config);