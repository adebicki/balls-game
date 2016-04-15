var ballsGame = ballsGame || {};
ballsGame.modules = ballsGame.modules || {};

ballsGame.modules.resourceLoader = (function(debug, tools) {
    'use strict';

    var module = {};
    //var allResourcesLoadedCallback = function() {};

    module.loadResources = function(resourcesToLoad, callback) {
        debug.log('loadResources start');

        if (typeof callback !== 'function') {
            callback = tools.getEmptyFunction();
        }

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
                    if(typeof callback === 'function' && resourcesToLoadLeft === 0) {
                        callback();
                    }
                }

            })(i);

        }
    }

    return module;
})(ballsGame.modules.debug, ballsGame.modules.tools);