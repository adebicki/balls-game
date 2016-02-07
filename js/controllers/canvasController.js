'use strict';

var modules = modules || {};

modules.canvasController = (function(document) {
    var module = {};

    module.init = function(){
        console.log('canvasController init');
    };

    return module;
})(this.document);