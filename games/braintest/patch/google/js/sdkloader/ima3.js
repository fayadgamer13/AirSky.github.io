(function () {
    window.ClonerLog= window.ClonerLog || console.log;
    window.ClonerTrace= window.ClonerTrace || console.trace;

    window.google = window.google || {};
    google.ima = google.ima || {};

    google.ima.AdDisplayContainer = class {
        constructor(container, video) {
            this.container = container;
            this.video = video;
            ClonerLog("google.ima.AdDisplayContainer.constructor()");
        }
        initialize() {
            ClonerLog("google.ima.AdDisplayContainer.initialize()");
        }
    };

    google.ima.AdsLoader = class {
        constructor(adDisplayContainer) {
            this.adDisplayContainer = adDisplayContainer;
            this.listeners = {};
            ClonerLog("google.ima.AdsLoader.constructor()");
        }

        getSettings() {
            ClonerLog("google.ima.AdsLoader.getSettings()");
            return new function () {
                this.setVpaidMode = function (mode) {
                    ClonerLog("google.ima.AdsLoader.getSettings().setVpaidMode", mode);
                };

                this.setDisableCustomPlaybackForIOS10Plus = function (val) {
                    ClonerLog("google.ima.AdsLoader.getSettings().setDisableCustomPlaybackForIOS10Plus", val);
                };

                this.setNumRedirects = function (num) {
                    ClonerLog("google.ima.AdsLoader.getSettings().setNumRedirects", num);
                };
            };
        }

        addEventListener(event, callback) {
            this.listeners[event] = callback;
        }

        requestAds(request) {
            ClonerLog("google.ima.AdsLoader.requestAds()", request);

            setTimeout(() => {
                console.log("google.ima.AdsLoader.requestAds().setTimeout");

                if (this.listeners["ADS_MANAGER_LOADED"]) {
                    this.listeners["ADS_MANAGER_LOADED"]({
                        getAdsManager: () => new google.ima.AdsManager()
                    });
                }
            }, 500);
        }
    };

    google.ima.AdsManager = class {
        init(w, h, mode) {
            console.log(`google.ima.AdsManager.init(${w}, ${h}, ${mode})`);
        }
        start() {
            console.log("google.ima.AdsManager.start()");
        }
        addEventListener() {}
    };

    google.ima.AdsRequest = class {
        constructor() {
            ClonerLog("google.ima.AdsRequest.constructor()");
        }
    };

    google.ima.AdsRenderingSettings= class {
        constructor() {
            ClonerLog("google.ima.AdsRenderingSettings.constructor()");
        }
    }

    google.ima.AdsManagerLoadedEvent = {
        Type: {
            ADS_MANAGER_LOADED: "ADS_MANAGER_LOADED"
        }
    };

    google.ima.AdEvent= {
        Type: {
            CONTENT_PAUSE_REQUESTED: "CONTENT_PAUSE_REQUESTED",
            CONTENT_RESUME_REQUESTED: "CONTENT_RESUME_REQUESTED",
            ALL_ADS_COMPLETED: "ALL_ADS_COMPLETED",
        }
    };

    google.ima.AdErrorEvent = {
        Type: {
            AD_ERROR: "AD_ERROR"
        }
    };

    google.ima.ViewMode = {
        NORMAL: "normal"
    };

    google.ima.ImaSdkSettings= {
        VpaidMode: {
            ENABLED: "ENABLED",
        }
    }
})();
