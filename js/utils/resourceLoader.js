'use strict';

var modules = modules || {};

modules.resourceLoader = (function(debug) {
    var module = {};
    var resourcesToLoad = [];
    var allResourcesLoadedCallback = function() {};

    module.init = function(callback) {
        debug.log('resourceLoader init');
        resourcesToLoad = [
            'img/token-background.png'
        ];
        if (typeof callback === 'function') {
            allResourcesLoadedCallback = callback;
        }
        loadResources();
    };

    function loadResources() {
        debug.log('loadResources start');

        // http://stackoverflow.com/questions/8682085/can-i-sync-up-multiple-image-onload-calls
        // or (--remaining also on error)
        // http://stackoverflow.com/questions/8921783/cross-browser-solution-for-a-callback-when-loading-multiple-images

        var i;
        var resourcesDownloading = [];
        var resourcesToLoadLength = resourcesToLoad.length;
        var resourcesToLoadLeft = resourcesToLoadLength;

        for (i = 0; i < resourcesToLoadLength; i++) {

            (function(i) {
                resourcesDownloading[i] = new Image();
                resourcesDownloading[i].onload = function() {
                    debug.log('download complete: ' + resourcesToLoad[i]);
                    checkIfAllDownloaded()
                };
                resourcesDownloading[i].onerror = function() {
                    debug.error('download failed: ' + resourcesToLoad[i]);
                    checkIfAllDownloaded()
                };
                resourcesDownloading[i].src = resourcesToLoad[i];

                function checkIfAllDownloaded() {
                    resourcesToLoadLeft--;
                    if(resourcesToLoadLeft === 0) {
                        allResourcesLoadedCallback();
                    }
                }

            })(i);

        }
    }

    return module;
})(modules.debug);