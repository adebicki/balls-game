var modules = modules || {};

modules.tools = (function() {
    'use strict';

    var module = {};
    var _emptyFunction = function() {};

    // todo debounce and throttle functions

    module.getEmptyFunction = function() {
        return _emptyFunction;
    };

    module.deepCopy = function(source, target) {
        var i;
        target = target || {};

        for (i in source) {
            if (source.hasOwnProperty(i)) {
                if (typeof source[i] === 'object') {
                    // assuming Array.isArray polyfill is present
                    target[i] = (Array.isArray(source[i]) ? [] : {});
                    module.deepCopy(source[i], target[i]);
                } else {
                    target[i] = source[i];
                }
            }
        }

        return target;
    };

    /**
     * Adds or removes event listeners
     * @param eventHandlers - table of tables containing events info: event target, event type and event handler
     * for example: [[global, 'resize', resizeHandler], [_canvas, 'click', clickHandler]]
     * @param addEventListeners - if true adds event listeners, otherwise removes them
     */
    module.addOrRemoveEventListeners = function(eventHandlers, addEventListeners) {
        var i;
        var evLn = eventHandlers.length;
        var eventHandlerInfo;

        addEventListeners = !!addEventListeners;

        for(i = 0; i < evLn; i++) {
            eventHandlerInfo = eventHandlers[i];
            if(addEventListeners === true) {
                eventHandlerInfo[0].addEventListener(eventHandlerInfo[1], eventHandlerInfo[2], false);
            } else {
                eventHandlerInfo[0].removeEventListener(eventHandlerInfo[1], eventHandlerInfo[2], false);
            }

        }
    };

    /**
     * Inheritance implementation.
     * Be sure to perform adding methods to subConstructor's prototype after calling this function.
     * @param subContructor
     * @param superConstructor
     */
    module.extend = function(subContructor, superConstructor){
        subContructor.prototype = Object.create(superConstructor.prototype, {
            constructor: {
                value: subContructor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    };

    return module;
})();