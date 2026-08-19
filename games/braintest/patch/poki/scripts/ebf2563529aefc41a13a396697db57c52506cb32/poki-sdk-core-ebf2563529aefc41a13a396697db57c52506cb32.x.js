( () => {
    var e = {
        721: () => {
            Promise.allSettled = Promise.allSettled || (e => Promise.all(e.map((e => e.then((e => ({
                status: "fulfilled",
                value: e
            }))).catch((e => ({
                status: "rejected",
                reason: e
            })))))))
        }
        ,
        871: () => {
            const e = document.createElement("style");
            e.innerHTML = "\n\t\n\tcanvas{\n\t\ttouch-action: none;\n\t\t-webkit-touch-callout: none;\n\t\t-webkit-user-select: none;\n\t\t-moz-user-select: none;\n\t\t-ms-user-select: none;\n\t\tuser-select: none;\n\t}\n\n",
            document.head.appendChild(e)
        }
    }
      , t = {};
    function i(n) {
        var o = t[n];
        if (void 0 !== o)
            return o.exports;
        var a = t[n] = {
            exports: {}
        };
        return e[n](a, a.exports, i),
        a.exports
    }
    ( () => {
        "use strict";
        const e = {
            ready: "pokiAppReady",
            failed: "pokiAppFailed",
            startLoading: "pokiAppStartLoading",
            ads: {
                startTimer: "pokiStartTimer",
                completed: "pokiAdsCompleted",
                error: "pokiAdsError",
                impression: "pokiAdsImpression",
                durationChange: "pokiAdsDurationChange",
                limit: "pokiAdsLimit",
                ready: "pokiAdsReady",
                requested: "pokiAdsRequested",
                prebidRequested: "pokiAdsPrebidRequested",
                skipped: "pokiAdsSkipped",
                started: "pokiAdsStarted",
                stopped: "pokiAdsStopped",
                busy: "pokiAdsBusy",
                loaded: "pokiAdsLoaded",
                position: {
                    preroll: "PP",
                    midroll: "PM",
                    rewarded: "PR",
                    display: "DP"
                },
                video: {
                    clicked: "pokiVideoAdsClicked",
                    firstQuartile: "pokiVideoAdsFirstQuartile",
                    midPoint: "pokiVideoAdsMidPoint",
                    thirdQuartile: "pokiVideoAdsThirdQuartile",
                    error: "pokiVideoAdsError",
                    loaderError: "pokiVideoAdsLoaderError",
                    paused: "pokiVideoAdsPauseTriggered",
                    resumed: "pokiVideoAdsResumedTriggered",
                    progress: "pokiVideoAdsProgress",
                    buffering: "pokiVideoAdsBuffering",
                    startHouseAdFlow: "pokiVideoAdsStartHouseAdFlow"
                },
                display: {
                    error: "pokiDisplayAdsError"
                },
                extendedVideoError: "pokiAdsExtendedVideoError",
                debugging: "pokiAdsDebugging"
            },
            info: {
                messages: {
                    timeLimit: "The ad-request was not processed, because of a time constraint",
                    prerollLimit: "The ad-request was cancelled, because we're not allowed to show a preroll (PokiSDK.commercialBreak before PokiSDK.gameplayStart)",
                    disabled: "The ad-request was cancelled, because we've disabled this format for this specific configuration"
                }
            },
            playtest: {
                startVideo: "pokiPlaytestStartVideo",
                stopVideo: "pokiPlaytestStopVideo"
            },
            message: {
                event: "pokiMessageEvent",
                sdkDetails: "pokiMessageSdkDetails",
                setPokiURLParams: "pokiMessageSetPokiURLParams",
                sendGameScreenshot: "pokiMessageSendScreenshot",
                sendGameRawScreenshot: "pokiMessageSendRawScreenshot",
                sendUploadScreenshot: "pokiMessageSendUploadScreenshot",
                sendCommand: "pokiMessageSendCommand",
                sendInspectorEvent: "pokiMessageInspectorEvent",
                sendInspectorCookies: "pokiMessageSendInspectorCookies",
                sendInspectorConsole: "pokiMessageSendInspectorConsole"
            },
            tracking: {
                custom: "pokiTrackingCustom",
                debugTrueInProduction: "pokiMessageDebugTrueProduction",
                screen: {
                    gameplayStart: "pokiTrackingScreenGameplayStart",
                    gameplayStop: "pokiTrackingScreenGameplayStop",
                    gameLoadingFinished: "pokiTrackingScreenGameLoadingFinished",
                    commercialBreak: "pokiTrackingScreenCommercialBreak",
                    rewardedBreak: "pokiTrackingScreenRewardedBreak",
                    firstRound: "pokiTrackingScreenFirstRound",
                    displayAd: "pokiTrackingScreenDisplayAdRequest",
                    destroyAd: "pokiTrackingScreenDisplayAdDestroy",
                    playerActive: "pokiTrackingScreenPlayerActive"
                },
                playtest: {
                    showModal: "pokiTrackingPlaytestShowModal",
                    accepted: "pokiTrackingPlaytestAccepted",
                    rejected: "pokiTrackingPlaytestRejected",
                    noCanvas: "pokiTrackingPlaytestNoCanvas",
                    notLoaded: "pokiTrackingPlaytestNotLoaded",
                    starting: "pokiTrackingPlaytestStarting",
                    closed: "pokiTrackingPlaytestClosed",
                    error: "pokiTrackingPlaytestError"
                },
                playerfittest: {
                    starting: "pokiTrackingPlayerFitStarting"
                },
                sdk: {
                    status: {
                        initialized: "pokiTrackingSdkStatusInitialized",
                        failed: "pokiTrackingSdkStatusFailed"
                    }
                },
                ads: {
                    ay: {
                        failed: "pokiTrackingAdsAYFailed"
                    },
                    status: {
                        busy: "pokiTrackingAdsStatusBusy",
                        completed: "pokiTrackingAdsStatusCompleted",
                        error: "pokiTrackingAdsStatusError",
                        impression: "pokiTrackingAdsStatusImpression",
                        limit: "pokiTrackingAdsStatusLimit",
                        ready: "pokiTrackingAdsStatusReady",
                        requested: "pokiTrackingAdsStatusRequested",
                        prebidRequested: "pokiTrackingAdsStatusPrebidRequested",
                        skipped: "pokiTrackingAdsStatusSkipped",
                        started: "pokiTrackingAdsStatusStarted",
                        buffering: "pokiTrackingAdsStatusBuffering"
                    },
                    video: {
                        clicked: "pokiTrackingAdsVideoClicked",
                        error: "pokiTrackingAdsVideoError",
                        loaderError: "pokiTrackingAdsVideoLoaderError",
                        progress: "pokiTrackingAdsVideoProgress",
                        paused: "pokiTrackingAdsVideoPaused",
                        resumed: "pokiTrackingAdsVideoResumed",
                        extendedVideoError: "pokiTrackingAdsVideoExtendedVideoError"
                    },
                    display: {
                        requested: "pokiTrackingScreenDisplayAdRequested",
                        impression: "pokiTrackingScreenDisplayAdImpression",
                        notFilled: "pokiTrackingAdsDisplayNotFilled"
                    },
                    rewardedWeb: {
                        request: "pokiTrackingRewardedWebRequest",
                        ready: "pokiTrackingRewardedWebReady",
                        impression: "pokiTrackingRewardedWebImpression",
                        closedGranted: "pokiTrackingRewardedWebClosedGranted",
                        closedDeclined: "pokiTrackingRewardedWebclosedDeclined",
                        empty: "pokiTrackingRewardedWebEmpty"
                    },
                    debugging: "pokiTrackingAdsDebugging",
                    h5GamingEnabled: "pokiTrackingH5GamingEnabled"
                }
            },
            accounts: {
                openAuthPanel: "pokiAccountsOpenAuthPanel",
                authPanelClosed: "pokiAccountsAuthPanelClosed",
                getUserInfo: "pokiAccountsGetUserInfo",
                getUserToken: "pokiAccountsGetUserToken",
                userToken: "pokiAccountsUserToken",
                userInfo: "pokiAccountsUserInfo"
            }
        };
        var t = 15552e3;
        function n(e) {
            var t = new RegExp("".concat(e, "=([^;]+)(?:;|$)")).exec(document.cookie);
            return t ? t[1] : ""
        }
        function o(e, i, n) {
            document.cookie = "".concat(e, "=").concat(i, "; path=/; samesite=lax; max-age=").concat(Math.min(n || t, t))
        }
        function a() {
            for (var e = Math.floor(Date.now() / 1e3), t = "", i = 0; i < 4; i++)
                t = String.fromCharCode(255 & e) + t,
                e >>= 8;
            if (window.crypto && crypto.getRandomValues && Uint32Array) {
                var n = new Uint32Array(12);
                crypto.getRandomValues(n);
                for (var o = 0; o < 12; o++)
                    t += String.fromCharCode(255 & n[o])
            } else
                for (var a = 0; a < 12; a++)
                    t += String.fromCharCode(Math.floor(256 * Math.random()));
            return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
        }
        function r(e, t, i) {
            console.error(e);
            var n = [{
                k: "where",
                v: t
            }, {
                k: "error",
                v: e.name && e.message ? "".concat(e.name, ": ").concat(e.message) : JSON.stringify(e)
            }];
            if (void 0 !== i) {
                var o = i;
                "string" != typeof e && (o = JSON.stringify(e)),
                n.push({
                    k: "extra",
                    v: o
                })
            }
            !function(e, t) {
                fetch(e, {
                    method: "POST",
                    headers: {
                        "Content-Type": "text/plain"
                    },
                    body: t,
                    mode: "no-cors",
                    keepalive: !0,
                    credentials: "omit"
                }).catch((function(i) {
                    console.error(i);
                    try {
                        var n = "XMLHttpRequest"in window ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                        n.open("POST", e, !0),
                        n.setRequestHeader("Content-Type", "text/plain"),
                        n.send(t)
                    } catch (e) {}
                }
                ))
            }("https://t.poki.io/l", JSON.stringify({
                c: "observer-error",
                ve: 7,
                d: n
            }))
        }
        var s = "poki_uid"
          , d = "poki_uid_new"
          , c = "poki_uid_version"
          , l = "poki_uid_ttl"
          , p = 15552e3;
        function A(e) {
            if (!e)
                return "";
            try {
                var t = /^[a-zA-Z][a-zA-Z0-9+\-.]*:\/\//.test(e);
                return new URL(t ? e : "https://".concat(e)).hostname || ""
            } catch (e) {
                return ""
            }
        }
        function m(e) {
            if (/^\d{1,3}(\.\d{1,3}){3}$/.test(e) || e.includes(":"))
                return e;
            if ("gemini.google.com" === e)
                return "gemini-google";
            if ("bard.google.com" === e)
                return "bard-google";
            if ("com.google.android.googlequicksearchbox" === e)
                return e;
            var t = function(e) {
                if (!e)
                    return "";
                if (/^\d{1,3}(\.\d{1,3}){3}$/.test(e) || e.includes(":"))
                    return e;
                var t = e.split(".").filter(Boolean);
                if (t.length <= 2)
                    return e;
                var i = new Set(["co.uk", "gov.uk", "ac.uk", "sch.uk", "com.au", "net.au", "org.au", "com.br", "com.mx", "com.tr", "com.ar", "com.cn", "com.hk", "com.tw", "com.sg", "com.my", "com.id", "co.nz", "co.in", "co.kr", "co.za"])
                  , n = t.slice(-2).join(".")
                  , o = t.slice(-3).join(".");
                return i.has(n) ? t.slice(-3).join(".") : i.has(o) ? t.slice(-4).join(".") : n
            }(e);
            return t ? t.split(".")[0] || t : e || ""
        }
        function u(e, t) {
            var i = e.getAll(t);
            return i && 0 !== i.length ? i[i.length - 1] : ""
        }
        window._pokiUserGlobalName = window._pokiUserGlobalName || "user";
        var g = new Set(["authorize.roblox.com", "accounts.google.com", "appleid.apple.com", "idmsa.apple.com", "login.microsoftonline.com", "login.live.com"])
          , h = new Set(["doubleclick", "googlesyndication", "googleapis", "googleadservices"])
          , w = new Set(["doubleclick", "googlesyndication", "googleapis", "googleadservices", "adsenseformobileapps"])
          , v = new Set(["google", "bing", "brave", "yahoo", "baidu", "yandex", "duckduckgo", "aol", "ask", "avg", "babylon", "googleweblight", "info", "izito", "msn", "myway", "naver", "qo-search", "searchencrypt", "search-results", "searchlock", "seznam", "so", "sogou", "startpage", "startpagina", "startsiden", "virgilio", "wp", "zapmeta", "100searchengines", "dailysearches", "easyfindanswers", "ecosia", "findretro", "geniol", "gsearch", "gosearcresults", "gosrch", "juniorsafesearch", "karmasearch", "keyboardsearch", "kvasir", "metager", "mojeek", "mysearcheasy", "onlineradiok", "panda-search", "petalsearch", "presearch", "qwant", "rammerhead", "relatedsearches", "search", "search-browser", "searchbip", "searcheira", "search-io", "search-load", "searchmusic-online", "search-redirect", "searchsafe", "searchsail", "search-sprint", "search-tab", "searchspear", "sosearcher", "srchoffer", "syndicatedsearch", "trojanwall", "voicecommandsearcher", "web-explore", "webcrawler", "yellow-search", "ziyuan", "ziyuanm", "zuiben", "coccoc", "zhanlian"])
          , f = 18e5
          , b = "poki_session";
        window._pokiSessionGlobalName = window._pokiSessionGlobalName || "session";
        var y = ["poki.at", "poki.be", "poki.by", "poki.ch", "poki.cn", "poki.co.id", "poki.co.il", "poki.com.br", "poki.com", "poki.cz", "poki.de", "poki.dk", "poki.fi", "poki.it", "poki.jp", "poki.nl", "poki.pl", "poki.pt", "poki.se", "www.trochoi.net"];
        function k() {
            try {
                var e = new URL(document.referrer).hostname;
                return y.indexOf(e) > -1 ? "poki" : e
            } catch (e) {}
            return ""
        }
        function x(e, t) {
            if (!e)
                return !1;
            if (!(e && e.page && e.landing_page && e.previous_page))
                return !1;
            if (!e.tab_id)
                return !1;
            if (!e.expire || Date.now() > e.expire)
                return !1;
            if (e.expire > Date.now() + f)
                return !1;
            if (t) {
                if (void 0 !== e.referrer_domain) {
                    var i = k()
                      , n = g.has(i);
                    if ("poki" !== i && !n && i !== e.referrer_domain)
                        return !1
                }
                var o = new URLSearchParams(window.location.search);
                if (["gclid", "msclkid", "yclid", "ttclid", "fbclid", "utm_campaign", "campaign", "adgroup", "creative", "utm_term"].some((function(e) {
                    return o.has(e)
                }
                )) || "web_app_manifest" === o.get("utm_source") || "bing" === o.get("utm_source") || "cpc" === o.get("utm_medium") || "rtb-cpm" === o.get("utm_medium"))
                    return !1
            }
            return !0
        }
        function _() {
            var e = null;
            x(window[window._pokiSessionGlobalName], !1) && (e = window[window._pokiSessionGlobalName]);
            try {
                var t = sessionStorage.getItem(b);
                if (t) {
                    var i = JSON.parse(t);
                    x(i, !0) && (!e || i.depth > e.depth) && (e = i)
                }
            } catch (e) {
                try {
                    r(e, "getSession", sessionStorage.getItem(b))
                } catch (t) {
                    r(e, "getSession", t)
                }
            }
            return e
        }
        function I() {
            var e = 0;
            window[window._pokiSessionGlobalName] && window[window._pokiSessionGlobalName].count && (e = window[window._pokiSessionGlobalName].count);
            try {
                var t = sessionStorage.getItem(b);
                if (t) {
                    var i = JSON.parse(t);
                    i && i.count && i.count > e && (e = i.count)
                }
            } catch (e) {
                try {
                    r(e, "getPreviousSessionCount", sessionStorage.getItem(b))
                } catch (t) {
                    r(e, "getPreviousSessionCount", t)
                }
            }
            try {
                var o = n(b);
                if (o) {
                    var a = JSON.parse(o);
                    a && a.count && a.count > e && (e = a.count)
                }
            } catch (e) {
                try {
                    r(e, "getPreviousSessionCount", n(b))
                } catch (t) {
                    r(e, "getPreviousSessionCount", t)
                }
            }
            return e
        }
        function S() {
            if (window[window._pokiSessionGlobalName] && window[window._pokiSessionGlobalName].tab_id)
                return window[window._pokiSessionGlobalName].tab_id;
            try {
                var e = sessionStorage.getItem(b);
                if (e) {
                    var t = JSON.parse(e);
                    if (t && t.tab_id)
                        return t.tab_id
                }
            } catch (e) {}
            return a()
        }
        function E() {
            var e = 0
              , t = _();
            t && (e = t.depth);
            try {
                var i = n(b);
                if (i) {
                    var o = JSON.parse(i);
                    !x(o, !0) || t && o.id !== t.id || (e = Math.max(e, o.depth))
                }
            } catch (e) {
                var a = null;
                try {
                    a = n(b) || null
                } catch (e) {}
                r(e, "getSessionDepth", a)
            }
            return e
        }
        function C(e, t, i) {
            var s, c = null;
            try {
                (c = _()) ? (c.previous_page.path = c.page.path,
                c.previous_page.type = c.page.type,
                c.previous_page.id = c.page.id,
                c.previous_page.start = c.page.start,
                c.previous_page.pageview_id = c.page.pageview_id,
                c.page.path = e,
                c.page.type = t,
                c.page.id = i,
                c.page.start = Date.now(),
                c.page.pageview_id = a(),
                c.depth = E() + 1,
                c.expire = Date.now() + f) : c = function(e, t, i) {
                    try {
                        var s = n(b);
                        if (s) {
                            var d = JSON.parse(s);
                            if (x(d, !0))
                                return d.previous_page.path = d.page.path,
                                d.previous_page.type = d.page.type,
                                d.previous_page.id = d.page.id,
                                d.previous_page.start = d.page.start,
                                d.previous_page.pageview_id = d.page.pageview_id,
                                d.page.path = e,
                                d.page.type = t,
                                d.page.id = i,
                                d.page.start = Date.now(),
                                d.page.pageview_id = a(),
                                d.depth = E() + 1,
                                d.expire = Date.now() + f,
                                d.tab_id = S(),
                                o(b, JSON.stringify(d)),
                                d
                        }
                    } catch (e) {
                        var c = null;
                        try {
                            c = n(b) || null
                        } catch (e) {}
                        r(e, "getSessionDepth", c)
                    }
                    var l = a()
                      , p = function() {
                        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = t.search, n = void 0 === i ? "" : i, o = t.referrer, a = void 0 === o ? "" : o, r = new URLSearchParams(n), s = A(a), d = m(s), c = "" !== a, l = r.has("tt"), p = r.has("sc"), f = u(r, "utm_source"), b = u(r, "utm_medium"), y = u(r, "utm_term"), k = u(r, "poki_source"), x = u(r, "placement"), _ = u(r, "gclid"), I = u(r, "msclkid"), S = u(r, "yclid"), E = u(r, "ttclid"), C = u(r, "fbclid"), P = u(r, "adgroup"), B = u(r, "creative"), T = u(r, "network");
                        e = d || ("" === s && "" !== a ? "" : a);
                        var D, M, R = !c || "poki" === e || w.has(e), L = (D = (a || "").match(/^android-app:\/\/([^/]+)/i)) ? D[1].toLowerCase() : null, O = function(e) {
                            var t = (e || "").match(/^ios-app:\/\/([^/]+)/i);
                            return t ? t[1].toLowerCase() : null
                        }(a), N = function(e) {
                            var t = (e || "").match(/^mobileapp::\d+-([^/]+)/i);
                            return t ? t[1].toLowerCase() : null
                        }(a), z = R && x.includes("mobileapp::") && x.includes("mobileapp::2-") ? function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /^mobileapp::2-([^/]+)/
                              , i = (e || "").match(t);
                            return i ? i[1] : null
                        }(x) : null;
                        M = "chrome_extension" === f ? "poki_chrome_extension" : "edge_extension" === f ? "poki_edge_extension" : l ? "tiktok" : p ? "snapchat" : "android_app" === k ? "poki_android_app" : "web_app_manifest" === f ? "pwa" : L || O || N || (!c && f ? f : z || (R && x ? m(A(x)) || x : "g" === T ? "google" : "ytv" === T ? "youtube" : c || _ || I || S || E || C || P || B ? !c && _ && /^\d+$/.test(_) ? "direct" : "" === e && c ? "unknown" : e || "unknown" : "direct"));
                        var U, j = h.has(M) || !!(_ || I || S || E || C || P || B) || "cpc" === b || "rtb-cpm" === b || "ppc" === b || "paid" === b, F = (s || "").toLowerCase(), G = !g.has(F) && (v.has(M) || /^com\.google\.android\.googlequicksearchbox$/.test(F) || /^webcache\.googleusercontent\.com$/.test(F) || !!y && "share" !== b);
                        return U = "snapchat" === f ? "cpc" : C && !f ? "organic" : j ? "cpc" : G ? "organic" : g.has(F) ? "oauth" : "pwa" === M || "poki_android_app" === M || c || "social" === b || "email" === b ? "referral" : M ? "unknown" : "direct",
                        "direct" === M && "direct" !== U && "unknown" !== U && "referral" !== U && (M = "unknown"),
                        h.has(M) && (M = "unknown"),
                        "poki" === M && "cpc" === U && (M = "unknown"),
                        {
                            source: M,
                            medium: U
                        }
                    }({
                        referrer: document.referrer,
                        search: window.location.search
                    })
                      , y = p.source
                      , _ = p.medium;
                    return {
                        id: a(),
                        expire: Date.now() + f,
                        tab_id: S(),
                        depth: 1,
                        count: I() + 1,
                        page: {
                            path: e,
                            type: t,
                            id: i,
                            start: Date.now(),
                            pageview_id: l
                        },
                        previous_page: {},
                        landing_page: {
                            path: e,
                            type: t,
                            id: i,
                            start: Date.now(),
                            pageview_id: l
                        },
                        referrer_domain: k(),
                        source: y,
                        medium: _
                    }
                }(e, t, i),
                c.count > 1 && (s = parseInt(n(l), 10) || p,
                o(d, "0", s),
                window[window._pokiUserGlobalName] && (window[window._pokiUserGlobalName].is_new = !1));
                var y = JSON.stringify(c);
                try {
                    sessionStorage.setItem(b, y)
                } catch (e) {
                    r(e, "updateSession-1")
                }
                window[window._pokiSessionGlobalName] = c;
                try {
                    o(b, y)
                } catch (e) {
                    r(e, "updateSession-4")
                }
            } catch (e) {
                r(e, "updateSession-2")
            }
            return c
        }
        const P = (e, t) => {
            let i = !1;
            return Object.keys(t).forEach((n => {
                t[n] === e && (i = !0)
            }
            )),
            i
        }
          , B = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "GB", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO"];
        function T(e) {
            return B.includes(e)
        }
        const D = (e, t) => {
            if ("undefined" == typeof window && !t)
                return "";
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            const i = new RegExp(`(?:[\\?&]|^)${e}=([^&#]*)`).exec(t || window?.location?.search || "");
            return null === i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
        }
          , M = () => "undefined" != typeof navigator && /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera mini|avantgo|mobilesafari|docomo|kaios)/i.test(navigator.userAgent)
          , R = () => "undefined" != typeof navigator && /(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i.test(navigator.userAgent)
          , L = () => M() ? "mobile" : R() ? "tablet" : "desktop";
        var O;
        !function(e) {
            e.ON = "on",
            e.NOT_APPLICABLE = "not_applicable",
            e.DISABLED = "disabled",
            e.PBS_ONLY = "pbs_only",
            e.DPF_ONLY = "dpf_only",
            e.CSTS_ONLY = "csts_only",
            e.PBS_DPF_CSTS = "pbs_dpf_csts"
        }(O || (O = {}));
        const N = D("referrer") || ""
          , z = D("ccpaApplies") || ""
          , U = {
            bot: "1" === D("bot"),
            categories: D("categories") || "",
            device: L(),
            experiment: D("experiment") || "",
            forceAd: D("force_ad") || !1,
            isPokiIframe: (parseInt(D("site_id"), 10) || 0) > 0,
            isPokiExternal: !!window.isPokiExternal,
            siteID: parseInt(D("site_id"), 10) || 3,
            tag: D("tag") || "",
            versionID: D("game_version_id"),
            debugMode: "true" === D("pokiDebug"),
            logMode: "" !== D("pokiLogging"),
            testVideos: "true" === D("testVideos"),
            referrerParam: N,
            isPlayground: !!window.isPokiPlayground,
            isInspector: "inspector-uploads.poki-user-content.com" === window?.location?.host || document?.referrer?.includes("inspector.poki.dev") || "1" === D("inspector"),
            houseAdsOnly: !1,
            adOverrideMode: !1,
            googlePreview: !!D("google_preview"),
            ccpaApplies: "1" === z || "0" !== z && void 0,
            country: (D("country") || "").toUpperCase(),
            gameID: D("game_id"),
            gdprApplies: T((D("country") || "").toUpperCase()),
            contentGameID: void 0,
            specialCondition: D("special_condition"),
            nonPersonalized: "y" === D("nonPersonalized"),
            familyFriendly: "y" === D("familyFriendly"),
            kioskMode: "y" === D("kioskMode") || !!window?.kioskMode,
            forceBidder: D("force_bidder") || "",
            cloudSaveGames: "y" === D("cloudsavegames"),
            AYMode: O.ON,
            forceStartAY: "y" === D("forceStartAY")
        }
          , j = (e, t) => {
            U[e] = t
        }
          , F = U;
        class G {
            static sendMessage(t, i, n=window.parent) {
                if (!P(t, e.message)) {
                    const t = Object.keys(e.message).map((e => `poki.message.${e}`));
                    throw new TypeError(`Argument 'type' must be one of ${t.join(", ")}`)
                }
                const o = i || {};
                F.gameID && F.versionID && (o.pokifordevs = {
                    game_id: F.gameID,
                    game_version_id: F.versionID
                }),
                n?.postMessage({
                    type: t,
                    content: o
                }, "*")
            }
        }
        class V {
            static debug = !1;
            static log = !1;
            static init = (e, t) => {
                const {hostname: i} = window.location;
                void 0 === e && ("test" === window?.process?.env?.NODE_ENV ? (e = !1,
                void 0 === t && (t = !1)) : "localhost" === i || "127.0.0.1" === i || "[::1]" === i || "launch.playcanvas.com" === i ? (e = !0,
                void 0 === t && (t = !1)) : (e = !1,
                void 0 === t && (t = !1))),
                F.isInspector ? (e = !0,
                t = !0) : i.endsWith(".poki-gdn.com") && (e = !1,
                t = !1),
                F.debugMode && (e = !0),
                F.logMode && (t = !0),
                void 0 === t && (t = e),
                V.debug = e,
                V.log = t
            }
        }
        const H = e => {
            let t = [];
            return Object.keys(e).forEach((i => {
                "object" == typeof e[i] ? t = t.concat(H(e[i])) : t.push(e[i])
            }
            )),
            t
        }
          , q = H;
        class Q {
            static listeners = {};
            static videoDataAnnotations = {};
            static clearEventListeners() {
                this.listeners = {}
            }
            static removeEventListener(e, t) {
                if (!Object.prototype.hasOwnProperty.call(this.listeners, e))
                    return;
                const i = this.listeners[e].indexOf(t);
                -1 !== i && this.listeners[e].splice(i, 1)
            }
            static addEventListener(e, t, i=!1) {
                if (i = !!i,
                Object.prototype.hasOwnProperty.call(this.listeners, e) || (this.listeners[e] = []),
                i) {
                    const i = n => {
                        this.removeEventListener.bind(this)(e, i),
                        t(n)
                    }
                    ;
                    this.listeners[e].push(i)
                } else
                    this.listeners[e].push(t)
            }
            static dispatchEvent(e, t={}) {
                const i = Object.keys(this.listeners);
                for (let n = 0; n < i.length; n++) {
                    const o = i[n];
                    if (e === o) {
                        const e = this.listeners[o];
                        for (let i = 0; i < e.length; i++)
                            e[i]({
                                ...this.videoDataAnnotations,
                                ...t
                            })
                    }
                }
            }
            static addVideoDataAnnotations(e) {
                this.videoDataAnnotations = {
                    ...this.videoDataAnnotations,
                    ...e
                }
            }
            static getVideoDataAnnotations() {
                return this.videoDataAnnotations
            }
            static clearVideoDataAnnotations() {
                this.videoDataAnnotations = {}
            }
        }
        const W = e => {
            if ("undefined" == typeof window || "undefined" == typeof fetch)
                return;
            const t = Q.getVideoDataAnnotations();
            let {size: i} = e;
            e.event?.startsWith("video-") && (i = "640x360v");
            const n = {
                ...e,
                size: i,
                adBreakId: e.adBreakId || t.adBreakId,
                currentAdNumber: e.currentAdNumber || t.currentAdNumber,
                totalAdAmount: e.totalAdAmount || t.totalAdAmount,
                opportunity_id: e.opportunityId || t.opportunityId,
                ad_unit_path: e.adUnitPath || t.adUnitPath,
                p4d_game_id: F.gameID,
                p4d_version_id: F.versionID,
                bidder: e.bidder || t.bidder,
                bid: e.bid || t.bid || 0,
                error_code: e.errorCode,
                creative_id: e.creativeId || t.creativeId,
                experiment: F.experiment
            };
            fetch("https://t.poki.io/adserver", {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify(n)
            }).catch((e => {
                console.warn("%cPOKI:%c adserver error", "font-weight: bold", "", e)
            }
            ))
        }
        ;
        function K(e, ...t) {
            console.info(`%cPOKI:%c ${e}`, "background-color: green; border-radius: 3px; color: white; padding: 1px 5px", "", ...t)
        }
        function $(e, ...t) {
            console.warn(`%cPOKI:%c ${e}`, "background-color: red; border-radius: 3px; color: white; padding: 1px 5px", "", ...t)
        }
        function Z(e, ...t) {
            console.error(`%cPOKI:%c ${e}`, "background-color: red; border-radius: 3px; color: white; padding: 1px 5px", "", ...t)
        }
        const X = (e, t=!1) => new Promise(( (i, n) => {
            const o = document.createElement("script");
            o.type = t ? "module" : "text/javascript",
            o.async = !0,
            o.src = e;
            const a = () => {
                o.readyState && "loaded" !== o.readyState && "complete" !== o.readyState || (i(),
                o.onload = null,
                o.onreadystatechange = null)
            }
            ;
            o.onload = a,
            o.onreadystatechange = a,
            o.onerror = n,
            document.head.appendChild(o)
        }
        ));
        let Y = null;
        const J = q(e.tracking)
          , ee = window;
        class te {
            static logToObserver = !1;
            static cmpRequired = void 0;
            static cmpIndex = void 0;
            static eventQueue = [];
            static track(t, i={}) {
                try {
                    let n = {
                        ...i
                    };
                    if (-1 === J.indexOf(t))
                        throw new TypeError(`Invalid 'event', must be one of ${J.join(", ")}`);
                    if ("object" != typeof n)
                        throw new TypeError("Invalid data, must be an object");
                    const o = Q.getVideoDataAnnotations();
                    if (o?.pokiAdServer)
                        switch (t) {
                        case e.tracking.ads.status.started:
                            {
                                const {creativeId: e} = o;
                                Q.addVideoDataAnnotations({
                                    houseAdId: e
                                }),
                                n.houseAdId = e;
                                break
                            }
                        case e.tracking.ads.status.impression:
                            {
                                const e = n?.creativeId;
                                W({
                                    ...n,
                                    event: "video-impression",
                                    creativeId: e
                                }),
                                Q.addVideoDataAnnotations({
                                    houseAdId: e
                                }),
                                n.houseAdId = e;
                                break
                            }
                        case e.tracking.ads.video.error:
                            W({
                                ...n,
                                event: "video-error",
                                errorCode: n?.errorCode
                            });
                            break;
                        case e.tracking.ads.video.loaderError:
                            W({
                                ...n,
                                event: "video-adsloader-error",
                                errorCode: n?.errorCode
                            });
                            break;
                        case e.tracking.ads.status.completed:
                            W({
                                ...n,
                                event: "video-complete"
                            })
                        }
                    if (t.includes("pokiTrackingRewardedWeb") && (n = o),
                    V.log) {
                        if ("test" === window?.process?.env?.NODE_ENV)
                            return;
                        Object.keys(n).length ? console.info(`%cPOKI_TRACKER:%c Tracked event '${t}' with data:`, "font-weight: bold", "", n) : console.info(`%cPOKI_TRACKER:%c Tracked event '${t}'`, "font-weight: bold", "")
                    }
                    if (Y?.({
                        event: t,
                        data: n
                    }),
                    G.sendMessage(e.message.event, {
                        event: t,
                        data: n
                    }),
                    !(F.isPokiIframe || F.isInspector || F.isPlayground || F.isPokiExternal)) {
                        const i = "sdk"
                          , o = "message"
                          , a = {
                            content: {
                                event: t,
                                data: n,
                                pokifordevs: {
                                    game_id: F.gameID,
                                    game_version_id: void 0
                                }
                            },
                            type: e.message.event
                        };
                        te.logToObserver ? te.pushEvent(i, o, a) : (te.eventQueue.push([i, o, a]),
                        te.eventQueue.length > 100 && te.eventQueue.shift())
                    }
                } catch (e) {
                    Z("error while tracking event", e)
                }
            }
            static setupDefaultEvents() {
                const t = {
                    [e.ready]: e.tracking.sdk.status.initialized,
                    [e.failed]: e.tracking.sdk.status.failed,
                    [e.ads.busy]: e.tracking.ads.status.busy,
                    [e.ads.completed]: e.tracking.ads.status.completed,
                    [e.ads.error]: e.tracking.ads.status.error,
                    [e.ads.impression]: e.tracking.ads.status.impression,
                    [e.ads.limit]: e.tracking.ads.status.limit,
                    [e.ads.ready]: e.tracking.ads.status.ready,
                    [e.ads.requested]: e.tracking.ads.status.requested,
                    [e.ads.prebidRequested]: e.tracking.ads.status.prebidRequested,
                    [e.ads.skipped]: e.tracking.ads.status.skipped,
                    [e.ads.started]: e.tracking.ads.status.started,
                    [e.ads.video.clicked]: e.tracking.ads.video.clicked,
                    [e.ads.video.error]: e.tracking.ads.video.error,
                    [e.ads.video.loaderError]: e.tracking.ads.video.loaderError,
                    [e.ads.video.buffering]: e.tracking.ads.status.buffering,
                    [e.ads.video.progress]: e.tracking.ads.video.progress,
                    [e.ads.video.paused]: e.tracking.ads.video.paused,
                    [e.ads.video.resumed]: e.tracking.ads.video.resumed,
                    [e.ads.extendedVideoError]: e.tracking.ads.video.extendedVideoError
                };
                Object.keys(t).forEach((e => {
                    Q.addEventListener(e, (i => {
                        te.track(t[e], i)
                    }
                    ))
                }
                ))
            }
            static pushEvent(e, t, i) {
                ee.pokiGTM.push({
                    event: `${e}-${t}`,
                    eventNoun: e,
                    eventVerb: t,
                    eventData: i || {}
                })
            }
            static setRequireConsent(e) {
                te.cmpRequired = e,
                te.setupObserverIfCMP()
            }
            static setupObserverWithCMP(e) {
                te.cmpIndex = e,
                te.setupObserverIfCMP()
            }
            static setupObserverIfCMP() {
                if (void 0 !== te.cmpRequired && void 0 !== te.cmpIndex)
                    if (te.cmpRequired) {
                        if (!window.__tcfapi)
                            return void console.error("%cPOKI:%c PokiSDK.enableEventTracking() was called but no CMP is present.", "font-weight: bold", "");
                        window.__tcfapi("addEventListener", 2, ( (e, t) => {
                            !t || "tcloaded" !== e.eventStatus && "useractioncomplete" !== e.eventStatus || (window.__tcfapi("getNonIABVendorConsents", 2, (e => {
                                e && e.nonIabVendorConsents && e.nonIabVendorConsents[te.cmpIndex || 0] && te.setupObserver()
                            }
                            )),
                            window.__tcfapi("removeEventListener", 2, ( () => {}
                            ), e.listenerId))
                        }
                        ))
                    } else
                        te.setupObserver()
            }
            static setupObserver() {
                for (ee._pokiSessionGlobalName = "pokiSession",
                ee._pokiUserGlobalName = "pokiUser",
                ee._pokiContextGlobalName = "pokiContext",
                ee._pokiTrackerGlobalName = "pokiTracker",
                C(window.location.pathname, "external", F.contentGameID),
                function() {
                    var e, t, i, r, A = null === (e = window[window._pokiUserGlobalName]) || void 0 === e ? void 0 : e.id, m = (null === (t = window[window._pokiUserGlobalName]) || void 0 === t ? void 0 : t.is_new) || !1, u = (null === (i = window[window._pokiUserGlobalName]) || void 0 === i ? void 0 : i.version) || 0, g = (null === (r = window[window._pokiUserGlobalName]) || void 0 === r ? void 0 : r.ttl) || p;
                    A || (A = n(s),
                    m = "1" === n(d),
                    u = parseInt(n(c), 10) || 0,
                    g = parseInt(n(l), 10) || g),
                    A && function(e) {
                        if (!/^[A-Za-z0-9-_]+$/.test(e))
                            return !1;
                        try {
                            return 16 === atob(e.replace(/-/g, "+").replace(/_/g, "/")).length
                        } catch (e) {
                            return !1
                        }
                    }(A) || (A = a(),
                    m = !0,
                    u = 2,
                    g = p),
                    o(s, A, g),
                    o(d, m ? "1" : "0", g),
                    o(c, u, g),
                    o(l, g, g),
                    window[window._pokiUserGlobalName] = {
                        id: A,
                        is_new: m,
                        version: u,
                        ttl: g
                    }
                }(),
                ee[ee._pokiSessionGlobalName].referrer = F.referrerParam,
                ee[ee._pokiContextGlobalName] = {
                    tag: null,
                    site: {
                        id: null,
                        domain: window.location.hostname,
                        prefix: ""
                    },
                    page: {
                        id: F.contentGameID,
                        type: "external",
                        path: window.location.pathname,
                        pageview_id: a()
                    },
                    user: ee[ee._pokiUserGlobalName],
                    session: ee[ee._pokiSessionGlobalName]
                },
                ee.pokiGTM = ee.pokiGTM || [],
                X("https://a.poki-cdn.com/t2.js"),
                te.logToObserver = !0; te.eventQueue.length; ) {
                    const [e,t,i] = te.eventQueue.shift();
                    te.pushEvent(e, t, i)
                }
            }
        }
        i(721);
        const ie = Math.random().toString(36).substring(2);
        async function ne() {
            const e = await window.cookieStore.getAll()
              , t = window.indexedDB.databases ? await window.indexedDB.databases() : [];
            return [...e.map((e => ({
                name: e.name,
                expire_seconds: Math.round((e.expires - Date.now()) / 1e3),
                type: "cookie",
                domain: e.domain
            }))), ...Object.keys(window.localStorage).map((e => ({
                name: e,
                expire_seconds: 15552e3,
                type: "localStorage"
            }))), ...t.map((e => ({
                name: e.name,
                expire_seconds: 0,
                type: "idb"
            })))]
        }
        class oe {
            static async collectAndLog() {
                try {
                    const e = {
                        cookies: await ne(),
                        p4d_game_id: F.gameID,
                        user_id: ie
                    };
                    fetch("https://t.poki.io/game-cookies", {
                        method: "post",
                        body: JSON.stringify(e)
                    }).catch()
                } catch {}
            }
            static trackSavegames() {
                window.cookieStore && window.cookieStore.getAll && F.gameID && (Math.random() > .01 || navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") <= -1 || (oe.collectAndLog(),
                setInterval(oe.collectAndLog, 12e4)))
            }
        }
        let ae, re, se = !1, de = !1, ce = 0;
        const le = () => {
            ce++,
            ae = setTimeout(le, 100 * ce),
            window.__tcfapi && window.__tcfapi("ping", 2, ( (e, t) => {
                t && e?.cmpLoaded && (se = !0,
                clearTimeout(ae))
            }
            ))
        }
          , pe = () => {
            ce++,
            re = setTimeout(pe, 100 * ce),
            window.__uspapi && window.__uspapi("uspPing", 1, ( () => {
                de = !0,
                clearInterval(re)
            }
            ))
        }
          , Ae = () => {
            F.gdprApplies ? (!function() {
                if (window.__tcfapi || F.isPlayground || F.familyFriendly)
                    return;
                const e = window.top
                  , t = {};
                let i = !1;
                const n = [];
                window.__tcfapi = (o, a, r, s) => {
                    if (!i)
                        return n.push([o, a, r, s]),
                        !0;
                    const d = `${Math.random()}`
                      , c = {
                        __tcfapiCall: {
                            command: o,
                            parameter: s,
                            version: a,
                            callId: d
                        }
                    };
                    return t[d] = r,
                    e.postMessage(c, "*"),
                    !0
                }
                ,
                window.addEventListener("message", (function(e) {
                    let i = {};
                    try {
                        i = "string" == typeof e.data ? JSON.parse(e.data) : e.data
                    } catch {}
                    const n = i.__tcfapiReturn;
                    n && "function" == typeof t[n.callId] && (t[n.callId](n.returnValue, n.success),
                    delete t[n.callId])
                }
                ), !1);
                const o = `${Math.random()}`;
                let a = null;
                t[o] = (e, t) => {
                    i || t && (i = !0,
                    clearInterval(a),
                    n.forEach((e => {
                        window.__tcfapi(...e)
                    }
                    )),
                    n.length = 0)
                }
                ,
                a = setInterval(( () => {
                    e.postMessage({
                        __tcfapiCall: {
                            command: "ping",
                            version: 2,
                            callId: o
                        }
                    }, "*")
                }
                ), 500),
                setTimeout(( () => {
                    clearInterval(a)
                }
                ), 1e4)
            }(),
            te.setRequireConsent(!0),
            le(),
            setTimeout(( () => {
                se || F.isPlayground || F.isPokiIframe || console.warn("%cPOKI:%c GDPC - No __tcfapi callback after 2s, verify implementation!", "font-weight: bold", "")
            }
            ), 2e3)) : te.setRequireConsent(!1),
            F.ccpaApplies && (!function() {
                if (window.__uspapi || F.isPlayground || F.familyFriendly)
                    return;
                const e = window.top
                  , t = {};
                window.__uspapi = (i, n, o) => {
                    const a = `${Math.random()}`
                      , r = {
                        __uspapiCall: {
                            command: i,
                            version: n,
                            callId: a
                        }
                    };
                    t[a] = o,
                    e.postMessage(r, "*")
                }
                ,
                window.addEventListener("message", (function(e) {
                    const i = e && e.data && e.data.__uspapiReturn;
                    i && i.callId && "function" == typeof t[i.callId] && (t[i.callId](i.returnValue, i.success),
                    t[i.callId] = null)
                }
                ), !1)
            }(),
            pe(),
            setTimeout(( () => {
                de || F.isPlayground || F.isPokiIframe || console.warn("%cPOKI:%c USPrivacy - No __uspapi callback after 2s, verify implementation!", "font-weight: bold", "")
            }
            ), 2e3))
        }
          , me = () => F.gdprApplies && !se && !V.debug && !F.familyFriendly
          , ue = () => F.ccpaApplies && !de && !V.debug && !F.familyFriendly
          , ge = () => "undefined" != typeof navigator && /(iPad|iPhone|iPod)/gi.test(navigator.userAgent)
          , he = "MacIntel" === window.navigator.platform && void 0 !== window.navigator.standalone && navigator.maxTouchPoints > 1
          , we = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
          , ve = {
            adTagUrl: "//pubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=/1053551/Pub-Poki-Generic&ciu_szs&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}&nofb=1",
            adTiming: {
                preroll: !1,
                timeBetweenAds: 12e4,
                timePerTry: 7e3,
                startAdsAfter: 12e4
            },
            waterfallRetries: 2
        };
        class fe {
            #e;
            #t;
            constructor(t={}) {
                this.setTimings(t),
                this.#t = {
                    timePerTry: void 0,
                    timeBetweenAds: void 0,
                    startAdsAfter: void 0
                },
                t?.fake || Q.addEventListener(e.ads.startTimer, this.startTimeBetweenAdsTimer.bind(this))
            }
            setTimings(e) {
                const t = ve.adTiming
                  , {preroll: i=t.preroll, timePerTry: n=t.timePerTry, timeBetweenAds: o=t.timeBetweenAds, startAdsAfter: a=t.startAdsAfter} = e;
                this.#e = {
                    preroll: !1 !== i,
                    timePerTry: n,
                    timeBetweenAds: o,
                    startAdsAfter: a
                }
            }
            resetAll() {
                this.stopTimer("timePerTry"),
                this.stopTimer("timeBetweenAds"),
                this.stopTimer("startAdsAfter")
            }
            startTimeBetweenAdsTimer(e) {
                e?.overwriteTimeBetweenAds ? this.startTimer("timeBetweenAds", ( () => {}
                ), e.overwriteTimeBetweenAds) : this.startTimer("timeBetweenAds")
            }
            startStartAdsAfterTimer() {
                this.startTimer("startAdsAfter")
            }
            requestPossible() {
                return F.videoAdDebug?.noWaitVideo || !this.#t.timeBetweenAds && !this.#t.startAdsAfter
            }
            startWaterfallTimer(e) {
                this.startTimer("timePerTry", e)
            }
            stopWaterfallTimer() {
                this.stopTimer("timePerTry")
            }
            stopTimer(e) {
                this.#t[e] && (clearTimeout(this.#t[e]),
                this.#t[e] = void 0)
            }
            startTimer(e, t= () => {}
            , i) {
                const n = i || this.#e[e];
                n <= 0 ? t() : (this.#t[e] && clearTimeout(this.#t[e]),
                this.#t[e] = window.setTimeout(( () => {
                    this.stopTimer(e),
                    t()
                }
                ), n))
            }
            prerollPossible() {
                return this.#e.preroll
            }
        }
        const be = () => {
            const e = new URL(window.location.href);
            e.hash = "";
            const t = [];
            return e.searchParams.forEach(( (e, i) => t.push(i))),
            t.forEach((t => {
                e.searchParams.delete(t)
            }
            )),
            e.toString()
        }
          , ye = e => {
            let t = "";
            return Object.keys(e).forEach((i => {
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                    let n = e[i];
                    Array.isArray(n) && (n = n.join()),
                    t += `${i}=${n}&`
                }
            }
            )),
            t = encodeURIComponent(t),
            `&cust_params=${t}`
        }
        ;
        async function ke(e, t={}, i=5e3) {
            const n = new AbortController
              , {signal: o} = n
              , a = {
                ...t,
                signal: o
            };
            let r = null;
            const s = new Promise(( (e, t) => {
                r = setTimeout(( () => {
                    n.abort(),
                    t(new DOMException(`Signal timed out after ${i}ms`,"AbortError"))
                }
                ), i)
            }
            ));
            try {
                const t = await Promise.race([fetch(e, a), s]);
                return r && clearTimeout(r),
                t
            } catch (t) {
                throw r && clearTimeout(r),
                t instanceof Error && "AbortError" === t.name ? (console.error(`%cPOKI:%c fetchWithTimeout: Fetch aborted for ${e}. Error: ${t.message}`),
                t) : t instanceof Error ? (console.error(`%cPOKI:%c fetchWithTimeout: Fetch error for ${e}:`, t.message),
                t) : (console.error(`%cPOKI:%c fetchWithTimeout: An unexpected error occurred for ${e}:`, t),
                new Error("An unexpected fetch error occurred."))
            }
        }
        const xe = {
            v_k0treo: 2.5,
            v_qr1wxs: 7.5,
            v_9diccg: 19,
            v_13q0xkw: .25,
            v_dn33ls: 1,
            v_z07u2o: 1.5,
            v_1400iyo: 2.25,
            v_9w8kxs: 3,
            v_ufej9c: 3.5,
            v_10960ao: 4.25,
            v_1ksbym8: 4.75,
            v_1ag9340: 5.25,
            v_1tbhh4w: 5.75,
            v_jjcgzk: 6.5,
            v_brnu9s: 7,
            v_1wscef4: 7.75,
            v_q22xhc: 8.5,
            v_f8irk0: 9,
            v_1rik45c: 9.75,
            v_lxhyww: 10.5,
            v_a9z0u8: 11,
            v_1yhiww0: 11.75,
            v_10mwg74: 12.25,
            v_1ji4u80: 12.75,
            v_wm2c5c: 13.5,
            v_2na6tc: 14,
            v_1myzri8: 14.75,
            v_3pzm68: 6,
            v_16kerr4: 6.25,
            v_1mdrmkg: 6.75,
            v_1ga0k5c: 7.25,
            v_5iwz5s: 8,
            v_12tk934: 8.25,
            v_1hsybr4: 8.75,
            v_1cj61hc: 9.25,
            v_y3r5kw: 9.5,
            v_94ow0: 10,
            v_15woqgw: 10.25,
            v_1orx4hs: 10.75,
            v_1d4e6f4: 11.25,
            v_t57ev4: 11.5,
            v_783hmo: 12,
            v_m7hkao: 12.5,
            v_hmo9hc: 13,
            v_19djnr4: 13.25,
            v_1twpm2o: 13.75,
            v_17zlou8: 14.25,
            v_ign1mo: 14.5,
            v_ccvz7k: 15,
            v_1f7b4sg: 15.25,
            v_snq4g0: 15.5,
            v_5wnf28: 16,
            v_137aozk: 16.25,
            v_1j0njsw: 16.75,
            v_1b8yx34: 17.25,
            v_yhhlhc: 17.5,
            v_25swe8: 18,
            v_15081z4: 18.25,
            v_1pje0ao: 18.75,
            v_1eptudc: 19.25,
            v_1xl28e8: 19.75,
            v_gfliio: 21,
            v_3y3sao: 22,
            v_ixhuyo: 22.5,
            v_ro52io: 23.5,
            v_qa73ls: 24.5,
            v_emo5j4: 25,
            v_yq5fk: 26,
            v_aobxts: 27,
            v_6shmgw: 28,
            v_natgqo: 28.5,
            v_x0f94w: 29.5,
            v_d2hfr4: 31,
            v_dch14w: 33,
            v_1jyadc: 34,
            v_8p5tz4: 36,
            v_fwv9xc: 37,
            v_c60r9c: 39,
            v_58awow: 40,
            v_bbcow: 42,
            v_a0x534: 43,
            v_hdmdq8: 45,
            v_2e8b28: 46,
            v_5nljb4: 48,
            v_1wr0n4: 50,
            v_pam1og: .5,
            v_1ipf08w: .75,
            v_1axqdj4: 1.25,
            v_1qr38cg: 1.75,
            v_15ldds: 2,
            v_1q248w0: 2.75,
            v_1eelatc: 3.25,
            v_1x9tou8: 3.75,
            v_8iam0w: 4,
            v_nhooow: 4.5,
            v_fq01z4: 5,
            v_w0u77k: 5.5,
            v_1vi5a0w: 15.75,
            v_orvt34: 16.5,
            v_dybn5s: 17,
            v_1q8czr4: 17.75,
            v_l11af4: 18.5,
            v_uqn2tc: 19.5,
            v_7zkdfk: 20,
            v_o7a58g: 20.5,
            v_vezl6o: 21.5,
            v_b5t88w: 23,
            v_4x2d4w: 24,
            v_xhwjk0: 25.5,
            v_lhw3r4: 26.5,
            v_tjkbuo: 27.5,
            v_h72ebk: 29,
            v_31n3sw: 30,
            v_64rl6o: 32,
            v_9lmigw: 35,
            v_3fdjpc: 38,
            v_fapfcw: 41,
            v_7o0lc0: 44,
            v_clbdvk: 47,
            v_ee8qv4: 49
        }
          , _e = {
            "11s3rwg": 2.49,
            "1uhxr0g": 2.87,
            qr1wxs: 7.5,
            "15xxon4": .01,
            o6no5c: .02,
            fb0nwg: .04,
            "1etkow0": .05,
            x2aoe8: .06,
            "1wkupds": .07,
            "11i46io": .09,
            jqu60w: .1,
            "1j9e70g": .11,
            "1adr6rk": .13,
            smh69s: .14,
            "1s5179c": .15,
            "8naeps": .16,
            qekf7k: .18,
            "1px4g74": .19,
            hixeyo: .2,
            za7fgg: .22,
            "1ysrgg0": .23,
            lyqx34: .26,
            "16hwveo": 1.13,
            "1fdjvnk": 1.17,
            "2jjcao": 1.2,
            "1jtdds0": 1.23,
            t6gd1c: 1.26,
            "65e29s": 1.28,
            "1nf83r4": 1.31,
            wsb30g: 1.34,
            jgukn4: 1.38,
            al7ke8: 1.4,
            "1a3rlds": 1.41,
            "8datc0": 1.44,
            "1pn4utc": 1.47,
            z07u2o: 1.5,
            "13g1c74": 1.53,
            ct4bgg: 1.56,
            ukeby8: 1.58,
            mspp8g: 1.62,
            "1dfmpz4": 1.65,
            lm6m8: 1.68,
            icw740: 1.7,
            "18zt7uo": 1.73,
            "79cfsw": 1.76,
            "1oj6ha8": 1.79,
            "1xethj4": 1.83,
            "12c2yo0": 1.85,
            bp5xxc: 1.88,
            "1syzzeo": 1.91,
            ncow00: 1.94,
            "1dzlwqo": 1.97,
            "15ldds": 2,
            "10o5edc": 2.009999,
            a18dmo: 2.04,
            "1rb2f40": 2.069999,
            pkln28: 2.1,
            "1g7insw": 2.13,
            "12w25fk": 2.17,
            c954ow: 2.2,
            "1brp5og": 2.21,
            "1400iyo": 2.25,
            v4dips: 2.3,
            hsx0cg: 2.34,
            "18fu134": 2.37,
            "167xa0w": 2.41,
            "1f3ka9s": 2.45,
            "1d5n4lc": 1.01,
            "1uwx534": 1.03,
            bml8g: 1.04,
            i2wlq8: 1.06,
            "979lhc": 1.08,
            "18ptmgw": 1.09,
            "1qh3myo": 1.11,
            "6zcuf4": 1.12,
            oqmuww: 1.14,
            fuzuo0: 1.16,
            xm9v5s: 1.18,
            "1x4tw5c": 1.19,
            "1223da8": 1.21,
            katcsg: 1.22,
            bf6cjk: 1.24,
            "1axqdj4": 1.25,
            "1sp0e0w": 1.27,
            "15ny39c": 1.29,
            nwo2rk: 1.3,
            f112io: 1.32,
            "1ejl3i8": 1.33,
            "1pkk5c": 1.36,
            "1184l4w": 1.37,
            "1izelmo": 1.39,
            schkw0: 1.42,
            "1rv1lvk": 1.43,
            "17vuubk": 1.45,
            q4ktts: 1.46,
            h8xtkw: 1.48,
            "1yirv28": 1.51,
            "3xhb7k": 1.52,
            lorbpc: 1.54,
            "1l7bcow": 1.55,
            "1cbocg0": 1.57,
            "1u2ycxs": 1.59,
            "51foqo": 1.6,
            "14jzpq8": 1.61,
            "1mb9q80": 1.63,
            dx2ozk: 1.64,
            vocphc: 1.66,
            "1v6wqgw": 1.67,
            "10467ls": 1.69,
            "1hvg83k": 1.71,
            "9h96v4": 1.72,
            r8j7cw: 1.74,
            "1qr38cg": 1.75,
            "16rwgsg": 1.77,
            p0mgao: 1.78,
            g4zg1s: 1.8,
            "1fnjh1c": 1.81,
            xw9gjk: 1.82,
            "2tixog": 1.84,
            kksy68: 1.86,
            "1k3cz5s": 1.87,
            "1b7pyww": 1.89,
            tgfyf4: 1.9,
            "5levi8": 1.92,
            "153ywhs": 1.93,
            "1mv8wzk": 1.95,
            eh1vr4: 1.96,
            w8bw8w: 1.98,
            iwvdvk: 2.02,
            "1iffev4": 2.029999,
            "19jsem8": 2.049999,
            rsie4g: 2.06,
            "7tbmkg": 2.08,
            "17bvnk0": 2.089999,
            "1p35o1s": 2.11,
            goymtc: 2.12,
            "1xysoao": 2.15,
            "3di4g0": 2.16,
            l4s4xs: 2.18,
            "1knc5xc": 2.19,
            u0f56o: 2.22,
            "1tiz668": 2.23,
            "4hghz4": 2.24,
            m8qigw: 2.26,
            dd3i80: 2.28,
            "1cvnj7k": 2.29,
            "1umxjpc": 2.31,
            "1mzuo": 2.32,
            zk70u8: 2.33,
            "1hbh1c0": 2.35,
            "8xa03k": 2.36,
            qok0lc: 2.38,
            "1q741kw": 2.39,
            "6pd91c": 2.4,
            ogn9j4: 2.42,
            "1wuuark": 2.47,
            k0treo: 2.5,
            "1jjdse8": 2.51,
            swgrnk: 2.54,
            "162xhc0": 2.57,
            fg0glc: 2.6,
            l11af4: 18.5,
            "9diccg": 19,
            "7zkdfk": 20,
            gfliio: 21,
            b5t88w: 23,
            "4x2d4w": 24,
            emo5j4: 25,
            aobxts: 27,
            "6shmgw": 28,
            "31n3sw": 30,
            "64rl6o": 32,
            dch14w: 33,
            "9lmigw": 35,
            "1yv9csg": 5.35,
            o42yo: 6.8,
            q22xhc: 8.5,
            d2hfr4: 31,
            "1np7p4w": .03,
            "1zk5j4": .08,
            av75s0: .12,
            "185ufpc": .17,
            "1h1hfy8": .21,
            "47gwlc": .24,
            d33wu8: .28,
            uudxc0: .3,
            "14tzb40": .33,
            e72adc: .36,
            "1vgwbuo": .39,
            "10e5szk": .41,
            "1i5fthc": .43,
            "1r12tq8": .47,
            pam1og: .5,
            gez1fk: .52,
            "1xot2ww": .55,
            kusjk0: .58,
            bz5jb4: .6,
            tqfjsw: .62,
            "5vegw0": .64,
            "1n58idc": .67,
            wibhmo: .7,
            "1fkyrk": .72,
            "1ipf08w": .75,
            s2hzi8: .78,
            pul8g0: .82,
            "1ghi96o": .85,
            "3nhpts": .88,
            lerqbk: .9,
            uaeqkg: .94,
            "14a04cg": .97,
            dn33ls: 1,
            ved43k: 1.02,
            zu6m80: 1.05,
            "1hlgmps": 1.07,
            qyjlz4: 1.1,
            "1lhay2o": .27,
            "1clnxts": .29,
            "1ucxybk": .31,
            "5bfa4g": .32,
            n2pam8: .34,
            "1ml9bls": .35,
            "1dpmbcw": .37,
            vycav4: .38,
            vls00: .4,
            imvshs: .42,
            "9r8s8w": .44,
            "199st8g": .45,
            "7jc16o": .48,
            "171w268": .49,
            "1ot62o0": .51,
            "1fxj2f4": .53,
            y691xc: .54,
            "33ij28": .56,
            "12m2k1s": .57,
            "1kdckjk": .59,
            "1t8zksg": .63,
            "15dyhvk": .65,
            nmohds: .66,
            er1h4w: .68,
            "1e9li4g": .69,
            "1w0vim8": .71,
            "10y4zr4": .73,
            j6uz9c: .74,
            ab7z0g: .76,
            "19ts000": .77,
            "1rl20hs": .79,
            "83b7y8": .8,
            "17lv8xs": .81,
            "1pd59fk": .83,
            gyy874: .84,
            yq88ow: .86,
            "1y8s9og": .87,
            "1361qtc": .89,
            "1kxbrb4": .91,
            "1c1or28": .93,
            "1tsyrk0": .95,
            "4rg3cw": .96,
            miq3uo: .98,
            "1m1a4u8": .99,
            "11x3klc": 5.05,
            "1nrplhc": 5.15,
            "1ag9340": 5.25,
            qh2bk0: 5.3,
            "14wh7gg": 5.45,
            w0u77k: 5.5,
            "7ltxj4": 5.6,
            kxafwg: 5.7,
            "1tbhh4w": 5.75,
            "110mw3k": 5.85,
            "1pfn5s0": 5.95,
            "3pzm68": 6,
            ml8074: 6.1,
            "1uzf1fk": 6.15,
            "16kerr4": 6.25,
            "1jvva4g": 6.35,
            "67vym8": 6.4,
            jjcgzk: 6.5,
            hbfpxc: 6.6,
            "13ij8jk": 6.65,
            "1mdrmkg": 6.75,
            p34cn4: 6.9,
            "1xhbdvk": 6.95,
            "1ihxb7k": 7.15,
            "1ga0k5c": 7.25,
            dflekg: 7.4,
            "1o1p6v4": 7.55,
            "2c1n9c": 7.6,
            "1wscef4": 7.75,
            zhp4hs: 7.9,
            "5iwz5s": 8,
            f8irk0: 9,
            y3r5kw: 9.5,
            lxhyww: 10.5,
            a9z0u8: 11,
            "783hmo": 12,
            m7hkao: 12.5,
            wm2c5c: 13.5,
            "2na6tc": 14,
            ign1mo: 14.5,
            snq4g0: 15.5,
            "5wnf28": 16,
            dybn5s: 17,
            yhhlhc: 17.5,
            testbid: 0,
            "1nz7aio": 2.43,
            xca9s0: 2.46,
            b56r5s: 2.52,
            obngu8: 2.58,
            "24jy80": 2.64,
            "1jedzpc": 2.67,
            "18au8e8": 2.73,
            hnx7nk: 2.76,
            "13v0q9s": 2.81,
            "10lkow": 2.96,
            "156gsu8": 7.05,
            "1tlh2io": 7.35,
            "1aq8ohs": 7.65,
            "1losn40": 7.95,
            "1sf0sn4": 2.55,
            "1eykhkw": 2.61,
            srgyyo: 2.7,
            "1yxr94w": 2.79,
            d83pj4: 2.84,
            n7p3b4: 2.9,
            "1dum41s": 2.93,
            "1iafm68": 2.99,
            "7vtiww": 7.2,
            b2outc: 7.8,
            "13q0xkw": .25,
            riisqo: .46,
            "1bhpkao": .61,
            cj4q2o: .92,
            "1o96vwg": 1.15,
            "1wav400": 1.35,
            "1grhukg": 1.49,
            "1vqvx8g": 1.99,
            yg8nb4: 2.14,
            "1lrajgg": 2.27,
            fl09a8: 2.44,
            "1h6h8n4": 2.77,
            "1m69xj4": 3.55,
            rdj01s: 4.3,
            "29jqww": 2.48,
            "1anqs5c": 2.53,
            "6kdgcg": 2.56,
            "1nu7hts": 2.59,
            "1wpui2o": 2.63,
            jvtyps: 2.66,
            "1sa0zy8": 2.71,
            "1q248w0": 2.75,
            "4cgpa8": 2.8,
            "1cqnqio": 2.85,
            "5gf2tc": 2.88,
            ec2328: 2.92,
            "1vlw4jk": 2.95,
            "9w8kxs": 3,
            "176vuv4": 3.05,
            "1kicd8g": 3.15,
            jbury8: 3.3,
            h3y0w0: 3.4,
            gmdxc: 3.6,
            ovmnls: 3.7,
            "15sxvy8": 3.85,
            "1j4eebk": 3.95,
            "1gwhn9c": 4.05,
            e22hog: 4.2,
            "1oo69z4": 4.35,
            nhooow: 4.5,
            "17gvg8w": 4.65,
            "1ksbym8": 4.75,
            hxwt1c: 4.9,
            t1gkcg: 5.1,
            "2221vk": 5.2,
            d5lt6o: 5.4,
            "1i7xpts": 5.55,
            "1g00yrk": 5.65,
            etjdhc: 5.8,
            s4zvuo: 5.9,
            "1c46neo": 6.05,
            "99rhts": 6.2,
            xorri8: 6.3,
            "1em2zuo": 6.45,
            "1rxji80": 6.55,
            umw8ao: 6.7,
            "192b474": 6.85,
            brnu9s: 7,
            x7ah34: 2.62,
            "11n3z7k": 2.65,
            b06ygw: 2.68,
            "1aiqzgg": 2.69,
            "8sa7eo": 2.72,
            qjk7wg: 2.74,
            zf785c: 2.78,
            m3qps0: 2.82,
            "1lmaqrk": 2.83,
            uzdq0w: 2.86,
            "14yz3sw": 2.89,
            "1mq94ao": 2.91,
            w3c3k0: 2.94,
            "10j5log": 2.97,
            irvl6o: 2.98,
            yb8um8: 3.1,
            "60e9kw": 3.2,
            "1eelatc": 3.25,
            "1rq1t6o": 3.35,
            "13b1ji8": 3.45,
            ufej9c: 3.5,
            "18utf5s": 3.65,
            "1x9tou8": 3.75,
            bk658g: 3.8,
            wxavpc: 3.9,
            "8iam0w": 4,
            ltr4e8: 4.099999,
            "1u7y5mo": 4.15,
            "10960ao": 4.25,
            "2yiqdc": 4.4,
            "1bcprls": 4.45,
            "1vvvpxc": 4.55,
            a686bk: 4.6,
            yl8g00: 4.7,
            "4mgao0": 4.8,
            "1d0nbwg": 4.85,
            "1qc3u9s": 4.95,
            fq01z4: 5,
            watslc: 7.1,
            l7a1a8: 7.3,
            zmox6o: 7.45,
            oe5d6o: 7.7,
            "18dc4qo": 7.85,
            "94ow0": 10,
            t57ev4: 11.5,
            hmo9hc: 13,
            ccvz7k: 15,
            orvt34: 16.5,
            "25swe8": 18,
            uqn2tc: 19.5,
            "3y3sao": 22,
            yq5fk: 26,
            h72ebk: 29,
            "1jyadc": 34,
            testBid: 50
        }
          , Ie = {
            hgfim8: "Amazon - DistrictM",
            qc2iv4: "Amazon - Magnite",
            "183cjcw": "Amazon - AppNexus",
            "8ksidc": "Amazon - OpenX",
            "1s2jaww": "Amazon - PubMatic",
            "1pumjuo": "Amazon - EMX",
            "12jknpc": "Amazon - Conversant UAM",
            "1kauo74": "Amazon - Amobee DSP",
            "15bglj4": "Amazon - PubMatic UAM APAC",
            "5swkjk": "Amazon - PubMatic UAM EU",
            "1d32f4": "Amazon - Simpli.fi",
            ksan7k: "Amazon - Index Exchange",
            urw0zk: "Amazon - Smaato",
            "1dn4f0g": "Amazon - AdGeneration",
            vvueio: "Amazon - DMX",
            "1veefi8": "Amazon - Yieldmo",
            "1i2xx4w": "Amazon - Yahoo Japan",
            rg0we8: "Amazon - UnrulyX_SSP_APS",
            y3r5kw: "Amazon - Verizon Media Group",
            "1xmb6kg": "Amazon - GumGum UAM",
            "1t6hog0": "Amazon - Acuity",
            "1n2qm0w": "Amazon - Sharethrough",
            j4d2ww: "Amazon - EMX UAM",
            "1imx3wg": "Amazon - LoopMe_UAM",
            z7pj40: "Amazon - Pulsepoint",
            p845c0: "Amazon - SmartRTB+"
        };
        function Se(e) {
            return Ie[e] || "Amazon"
        }
        let Ee, Ce = [];
        const Pe = e => Ce.includes(e) || Ce.includes(`www.${e}`) || e?.includes?.("game");
        function Be() {
            let e;
            return Ee && (e = Ee.join(";")),
            Ee = void 0,
            e
        }
        const Te = () => "undefined" != typeof navigator && /MSIE \\d|Trident.*rv:/i.test(navigator.userAgent)
          , De = F.AYMode === O.DPF_ONLY || F.AYMode === O.PBS_DPF_CSTS
          , Me = "rewarded"
          , Re = "video"
          , Le = De ? {
            desktop: {
                "160x600": "RGjLwUuLJpFowG0HnC9poTmR",
                "300x250": "EcwwLdbNTzELxa4qcd9d060O",
                "320x50": "kKvCaOdMrYSNPdizhUX5FLch",
                "728x90": "IR8yJgBz7GF45aIQY0zFBiBN",
                "970x250": "MO7cOKSWWir2LKsAOxZ6dkIp",
                midroll: "SbURP42RHjzFNKkUeaPcwM29",
                rewarded: "PtqCLLsXZVRo5Hj7lhb9MB3o"
            },
            tablet: {
                "320x50": "7V4dBacaZLpJNTxep4Ks5PEX",
                midroll: "50WRe2wy7WRtTvopS7MinCAG",
                rewarded: "fY4eZNUpf1InC3YSRgThyD6r"
            },
            mobile: {
                "320x50": "1VeYl3yQOPHg0digg7vBePbF",
                midroll: "50WRe2wy7WRtTvopS7MinCAG",
                rewarded: "GBsiqQg5Y3yh0RkjarOmf58V"
            }
        } : {
            desktop: {
                "160x600": "pHhFwvUCUJQKwwA7iy4fAk2F",
                "300x250": "c3GnFrB8rylhgQwXfD5VTq8P",
                "320x50": "9DvtR4XBxhm8JoliuTxyVz3L",
                "728x90": "v6NMslR400yh8RzvRiRLpwvH",
                "970x250": "EWsiZSpdRTxOym1GzRvUmzNW",
                midroll: "4Hy6nGZMC66xUwMP5cl1hCTE",
                rewarded: "dNQuJjmJrj6ZdQMVxklBfduh"
            },
            tablet: {
                "320x50": "f8V9c0yVZENi5WNpSqvEgunY",
                midroll: "zFsaqtEiGSRs5zXx8U3N3IzK",
                rewarded: "3e3zEB2v1HZGMtSTr9bVm1op"
            },
            mobile: {
                "320x50": "jJuityvxj0Xu0AKku01W2eKX",
                midroll: "zFsaqtEiGSRs5zXx8U3N3IzK",
                rewarded: "qqlfsqZLNfx0YdnQoeTTx13y"
            }
        }
          , Oe = De ? {
            desktop: {
                "160x600": "3344122-9",
                "300x250": "3344124-15",
                "320x50": "3344126-43",
                "728x90": "3344128-2",
                "970x250": "3344130-57",
                midroll: 3344138,
                rewarded: 3344140
            },
            tablet: {
                "320x50": "3344136-43",
                midroll: 3344144,
                rewarded: 3344146
            },
            mobile: {
                "320x50": "3344134-43",
                midroll: 3344144,
                rewarded: 3344142
            }
        } : {
            desktop: {
                "160x600": 2969680,
                "300x250": 2969676,
                "320x50": 2969674,
                "728x90": 2969668,
                "970x250": 2969678,
                midroll: 2969664,
                rewarded: 2969666
            },
            tablet: {
                "320x50": 2969690,
                midroll: 3344110,
                rewarded: 2969688
            },
            mobile: {
                "320x50": 2969684,
                midroll: 3344110,
                rewarded: 2969682
            }
        }
          , Ne = De ? {
            desktop: {
                "160x600": "5883933",
                "300x250": "5883934",
                "320x50": "5883935",
                "728x90": "5883936",
                "970x250": "5883937",
                midroll: "5883941",
                rewarded: "5883942"
            },
            tablet: {
                "320x50": "5883940",
                midroll: "5883943",
                rewarded: "5883945"
            },
            mobile: {
                "320x50": "5883939",
                midroll: "5883943",
                rewarded: "5883944"
            }
        } : {
            desktop: {
                "160x600": "5883917",
                "300x250": "5883918",
                "320x50": "5883919",
                "728x90": "5883920",
                "970x250": "5883921",
                midroll: "5883925",
                rewarded: "5883926"
            },
            tablet: {
                "320x50": "5883924",
                midroll: "5883927",
                rewarded: "5883929"
            },
            mobile: {
                "320x50": "5883923",
                midroll: "5883927",
                rewarded: "5883928"
            }
        }
          , ze = De ? {
            desktop: {
                "160x600": "1097616",
                "300x250": "1097617",
                "320x50": "1097618",
                "728x90": "1097619",
                "970x250": "1097620",
                midroll: "1097624",
                rewarded: "1097625"
            },
            tablet: {
                "320x50": "1097623",
                midroll: "1097627",
                rewarded: "1097629"
            },
            mobile: {
                "320x50": "1097622",
                midroll: "1097627",
                rewarded: "1097626"
            }
        } : {
            desktop: {
                "160x600": "1097600",
                "300x250": "1097601",
                "320x50": "1097602",
                "728x90": "1097603",
                "970x250": "1097604",
                midroll: "1097608",
                rewarded: "1097609"
            },
            tablet: {
                "320x50": "1097607",
                midroll: "1097611",
                rewarded: "1097612"
            },
            mobile: {
                "320x50": "1097606",
                midroll: "1097611",
                rewarded: "1097610"
            }
        }
          , Ue = De ? {
            desktop: {
                "160x600": "BzoTmh4NGZ",
                "300x250": "lcmX1jq1Lj",
                "320x50": "iowki7KCLk",
                "728x90": "RGlldqn551",
                "970x250": "ohcXUNESA6",
                midroll: "tqA7KwGzJP",
                rewarded: "innweoOi9C"
            },
            tablet: {
                "320x50": "HI8chf3nOw",
                midroll: "SLZIt97iqi",
                rewarded: "pWV7sSiv1v"
            },
            mobile: {
                "320x50": "o0HIu0ypvx",
                midroll: "SLZIt97iqi",
                rewarded: "DMtCvhStDo"
            }
        } : {
            desktop: {
                "160x600": "EcE3bPtcQ7",
                "300x250": "z4419hyP3D",
                "320x50": "iO0r99GJyD",
                "728x90": "eNHLwil1Sz",
                "970x250": "VV8quyp9Uc",
                midroll: "r2YIBgLder",
                rewarded: "qphbf73F9j"
            },
            tablet: {
                "320x50": "USm2WyRzQM",
                midroll: "vzAXcywC8m",
                rewarded: "lLev33Pjr2"
            },
            mobile: {
                "320x50": "EZVAmOVfTC",
                midroll: "vzAXcywC8m",
                rewarded: "STZwixwqOK"
            }
        }
          , je = De ? {
            desktop: {
                "160x600": "desktop_ingame_160x600_B",
                "300x250": "desktop_ingame_300x250_B",
                "320x50": "desktop_ingame_320x50_B",
                "728x90": "desktop_ingame_728x90_B",
                "970x250": "desktop_ingame_970x250_B",
                midroll: "desktop_ingame_midroll_1_B",
                rewarded: "desktop_ingame_roll_1_B"
            },
            tablet: {
                "320x50": "tablet_ingame_320x50_B",
                midroll: "mobile_ingame_midroll_1_B",
                rewarded: "tablet_ingame_roll_1_B"
            },
            mobile: {
                "320x50": "mobile_ingame_320x50_B",
                midroll: "mobile_ingame_midroll_1_B",
                rewarded: "mobile_ingame_roll_1_B"
            }
        } : {
            desktop: {
                "160x600": "desktop_ingame_160x600",
                "300x250": "desktop_ingame_300x250",
                "320x50": "desktop_ingame_320x50",
                "728x90": "desktop_ingame_728x90",
                "970x250": "desktop_ingame_970x250",
                midroll: "desktop_ingame_midroll_1",
                rewarded: "desktop_ingame_roll_1"
            },
            tablet: {
                "320x50": "tablet_ingame_320x50",
                midroll: "mobile_ingame_midroll_1",
                rewarded: "tablet_ingame_roll_1"
            },
            mobile: {
                "320x50": "mobile_ingame_320x50",
                midroll: "mobile_ingame_midroll_1",
                rewarded: "mobile_ingame_roll_1"
            }
        }
          , Fe = De ? {
            desktop: {
                "160x600": "560728457",
                "300x250": "560728458",
                "320x50": "560728459",
                "728x90": "560728460",
                "970x250": "560728461",
                midroll: "560728517",
                rewarded: "560728518"
            },
            tablet: {
                "320x50": "560728464",
                midroll: "560728520",
                rewarded: "560728521"
            },
            mobile: {
                "320x50": "560728463",
                midroll: "560728520",
                rewarded: "560728519"
            }
        } : {
            desktop: {
                "160x600": "560728446",
                "300x250": "560728447",
                "320x50": "560728448",
                "728x90": "560728449",
                "970x250": "560728450",
                midroll: "560728512",
                rewarded: "560728513"
            },
            tablet: {
                "320x50": "560728453",
                midroll: "560728515",
                rewarded: "560728516"
            },
            mobile: {
                "320x50": "560728452",
                midroll: "560728515",
                rewarded: "560728514"
            }
        }
          , Ge = "lcpgaTLqkd6gRi8AVtVr0gLe"
          , Ve = "PIsUL8EJvXXA1thcFkCPWdhi"
          , He = "KQ3P2qVndkjlesGkzM5Rknma"
          , qe = "Ydwhf5DPoJBinldgPdkD9okm"
          , Qe = {
            desktop: {
                "160x600": "desktop_ingame_160x600_B_PBc2s",
                "300x250": "desktop_ingame_300x250_B_PBc2s",
                "320x50": "desktop_ingame_320x50_B_PBc2s",
                "728x90": "desktop_ingame_728x90_B_PBc2s",
                "970x250": "desktop_ingame_970x250_B_PBc2s",
                midroll: "desktop_ingame_midroll_1_B_PBc2s",
                rewarded: "desktop_ingame_roll_1_B_PBc2s"
            },
            tablet: {
                "320x50": "tablet_ingame_320x50_B_PBc2s",
                midroll: "tablet_ingame_roll_1_B_PBc2s",
                rewarded: "tablet_ingame_roll_1_B_PBc2s"
            },
            mobile: {
                "320x50": "mobile_ingame_320x50_B_PBc2s",
                midroll: "mobile_ingame_roll_1_B_PBc2s",
                rewarded: "mobile_ingame_midroll_1_B_PBc2s"
            }
        }
          , We = {
            desktop: {
                "160x600": "desktop_ingame_160x600",
                "300x250": "desktop_ingame_300x250",
                "320x50": "desktop_ingame_320x50",
                "728x90": "desktop_ingame_728x90",
                "970x250": "desktop_ingame_970x250",
                midroll: "desktop_ingame_midroll_1",
                rewarded: "desktop_ingame_roll_1"
            },
            tablet: {
                "320x50": "tablet_ingame_320x50",
                midroll: "mobile_ingame_midroll_1",
                rewarded: "tablet_ingame_roll_1"
            },
            mobile: {
                "320x50": "mobile_ingame_320x50",
                midroll: "mobile_ingame_midroll_1",
                rewarded: "mobile_ingame_roll_1"
            }
        }
          , Ke = {
            desktop: {
                "160x600": "kxdXhK55R",
                "300x250": "NMbNcWnpk",
                "320x50": "n5dvsxvQx",
                "728x90": "akrRIM4QE",
                "970x250": "o5RlS3ZY7",
                midroll: "g5jktrDoe",
                rewarded: "Vk3ghA4LN"
            },
            tablet: {
                "320x50": "EWkpckMj1",
                midroll: "yy8xim2eP",
                rewarded: "xxzASKyeE"
            },
            mobile: {
                "320x50": "d5Glh812r",
                midroll: "yy8xim2eP",
                rewarded: "3RymHd5oA"
            }
        }
          , $e = {
            desktop: {
                "160x600": "3835087834583080987",
                "300x250": "3835087834784407580",
                "320x50": "3835087835002511389",
                "728x90": "3835087835195449374",
                "970x250": "3835087835396775967",
                midroll: "3835087836277579811",
                rewarded: "3835087836436963364"
            },
            tablet: {
                "320x50": "3835087836042698786",
                midroll: "3835087836814450726",
                rewarded: "3835087837015777319"
            },
            mobile: {
                "320x50": "3835087835816206369",
                midroll: "3835087836814450726",
                rewarded: "3835087836613124133"
            }
        }
          , Ze = {
            desktop: {
                "160x600": 290341,
                "300x250": 290342,
                "320x50": 290343,
                "728x90": 290344,
                "970x250": 290345,
                midroll: 290349,
                rewarded: 290350
            },
            tablet: {
                "320x50": 290348,
                midroll: 290352,
                rewarded: 290353
            },
            mobile: {
                "320x50": 290347,
                midroll: 290352,
                rewarded: 290351
            }
        }
          , Xe = {
            desktop: {
                "160x600": "438521132",
                "300x250": "769455733",
                "320x50": "145372942",
                "728x90": "366541117",
                "970x250": "286062721",
                midroll: "167479838",
                rewarded: "411121126"
            },
            tablet: {
                "320x50": "522120183",
                midroll: "658862036",
                rewarded: "843141535"
            },
            mobile: {
                "320x50": "957718076",
                midroll: "658862036",
                rewarded: "236673747"
            }
        }
          , Ye = {
            desktop: {
                "160x600": "PBS_desktop_ingame_160x600_PBs2s",
                "300x250": "PBS_desktop_ingame_300x250_PBs2s",
                "320x50": "PBS_desktop_ingame_320x50_PBs2s",
                "728x90": "PBS_desktop_ingame_728x90_PBs2s",
                "970x250": "PBS_desktop_ingame_970x250_PBs2s",
                midroll: "PBS_desktop_instream_PBs2s",
                rewarded: "PBS_desktop_instream_PBs2s"
            },
            tablet: {
                "320x50": "PBS_tablet_ingame_320x50_PBs2s",
                midroll: "PBS_tablet_instream_PBs2s",
                rewarded: "PBS_tablet_instream_PBs2s"
            },
            mobile: {
                "320x50": "PBS_mobile_ingame_320x50_PBs2s",
                midroll: "PBS_mobile_instream_PBs2s",
                rewarded: "PBS_mobile_instream_PBs2s"
            }
        }
          , Je = {
            desktop: {
                "160x600": "w94NCQZPkvMe9abEANk3j9UM",
                "300x250": "2j1V0jSoGrQcQPZ6wjcjDc1v",
                "320x50": "JCzEzMwjMCqgNH9mVSCgLbFM",
                "728x90": "PhpWXPWg4o3y6FlY0qwH7fRy",
                "970x250": "DNOO90lGmA22jVxRo4meiTOX",
                midroll: "jdbFspMsO3380VFGH56aQSPT",
                rewarded: "EOxLPMBPLxUim1O5YYjgJ3zV"
            },
            tablet: {
                "320x50": "hW9BnmYxpqIlMHb1TyfDXhgb",
                midroll: "0LJiuzsOrsiZypi2Hp6aGHz3",
                rewarded: "6ZMiHSLfdWgTA8JQUtBvLb2p"
            },
            mobile: {
                "320x50": "8CHGo2XPaoLDBXnfgeZHPDp2",
                midroll: "0LJiuzsOrsiZypi2Hp6aGHz3",
                rewarded: "YEfxtSaAovu1QuPW3b2GGreQ"
            }
        }
          , et = {
            desktop: {
                "160x600": 3451892,
                "300x250": 3451894,
                "320x50": 3451896,
                "728x90": 3451898,
                "970x250": 3451900,
                midroll: 3451908,
                rewarded: 3451910
            },
            tablet: {
                "320x50": 3451906,
                midroll: 3451914,
                rewarded: 3451916
            },
            mobile: {
                "320x50": 3451904,
                midroll: 3451914,
                rewarded: 3451912
            }
        }
          , tt = {
            desktop: {
                "160x600": "6031290",
                "300x250": "6031291",
                "320x50": "6031292",
                "728x90": "6031293",
                "970x250": "6031294",
                midroll: "6031300",
                rewarded: "6031301"
            },
            tablet: {
                "320x50": "6031297",
                midroll: "6031302",
                rewarded: "6031304"
            },
            mobile: {
                "320x50": "6031296",
                midroll: "6031302",
                rewarded: "6031303"
            }
        }
          , it = {
            desktop: {
                "160x600": "1119460",
                "300x250": "1119461",
                "320x50": "1119462",
                "728x90": "1119463",
                "970x250": "1119464",
                midroll: "1119468",
                rewarded: "1119469"
            },
            tablet: {
                "320x50": "1119467",
                midroll: "1119471",
                rewarded: "1119472"
            },
            mobile: {
                "320x50": "1119466",
                midroll: "1119471",
                rewarded: "1119470"
            }
        }
          , nt = {
            desktop: {
                "160x600": "joqZdjrS44",
                "300x250": "A5WslvYq3U",
                "320x50": "jeJTT1JQc1",
                "728x90": "HUdxaDxmjN",
                "970x250": "MFOfbG0BvV",
                midroll: "8Ktl6U8ziM",
                rewarded: "Na5xNjU0Nc"
            },
            tablet: {
                "320x50": "YZvrrtjbzK",
                midroll: "0EFXGI0X4R",
                rewarded: "dGO6uV5f0u"
            },
            mobile: {
                "320x50": "ZjGxFZU4bI",
                midroll: "0EFXGI0X4R",
                rewarded: "0KnEmI2AtO"
            }
        }
          , ot = {
            desktop: {
                "160x600": "PBS_desktop_ingame_160x600",
                "300x250": "PBS_desktop_ingame_300x250",
                "320x50": "PBS_desktop_ingame_320x50",
                "728x90": "PBS_desktop_ingame_728x90",
                "970x250": "PBS_desktop_ingame_970x250",
                midroll: "PBS_desktop_ingame_midroll_1",
                rewarded: "PBS_desktop_ingame_roll_1"
            },
            tablet: {
                "320x50": "PBS_tablet_ingame_320x50",
                midroll: "PBS_mobile_ingame_midroll_1",
                rewarded: "PBS_tablet_ingame_roll_1"
            },
            mobile: {
                "320x50": "PBS_mobile_ingame_320x50",
                midroll: "PBS_mobile_ingame_midroll_1",
                rewarded: "PBS_mobile_ingame_roll_1"
            }
        }
          , at = {
            desktop: {
                "160x600": "560923015",
                "300x250": "560923016",
                "320x50": "560923017",
                "728x90": "560923018",
                "970x250": "560923019",
                midroll: "560923023",
                rewarded: "560923024"
            },
            tablet: {
                "320x50": "560923022",
                midroll: "560923026",
                rewarded: "560923027"
            },
            mobile: {
                "320x50": "560923021",
                midroll: "560923026",
                rewarded: "560923025"
            }
        }
          , rt = {
            desktop: {
                "160x600": "3835087837804306475",
                "300x250": "3835087838022410284",
                "320x50": "3835087838223736877",
                "728x90": "3835087838408286254",
                "970x250": "3835087838643167279",
                midroll: "3835087839507193907",
                rewarded: "3835087839691743284"
            },
            tablet: {
                "320x50": "3835087839289090098",
                midroll: "3835087840035676214",
                rewarded: "3835087840211836983"
            },
            mobile: {
                "320x50": "3835087839096152113",
                midroll: "3835087840035676214",
                rewarded: "3835087839867904053"
            }
        }
          , st = {
            desktop: {
                "160x600": 290357,
                "300x250": 290358,
                "320x50": 290359,
                "728x90": 290360,
                "970x250": 290361,
                midroll: 290365,
                rewarded: 290366
            },
            tablet: {
                "320x50": 290364,
                midroll: 290368,
                rewarded: 290369
            },
            mobile: {
                "320x50": 290363,
                midroll: 290368,
                rewarded: 290367
            }
        }
          , dt = {
            desktop: {
                "160x600": 0,
                "300x250": 0,
                "320x50": 0,
                "728x90": 0,
                "970x250": 0,
                midroll: 23376910,
                rewarded: 23376911
            },
            tablet: {
                "320x50": 0,
                midroll: 23376913,
                rewarded: 23376914
            },
            mobile: {
                "320x50": 0,
                midroll: 23376913,
                rewarded: 23376912
            }
        }
          , ct = {
            desktop: {
                "160x600": "713546197",
                "300x250": "867637267",
                "320x50": "583885567",
                "728x90": "893736105",
                "970x250": "913415691",
                midroll: "610540710",
                rewarded: "952913225"
            },
            tablet: {
                "320x50": "520050148",
                midroll: "549443128",
                rewarded: "851115187"
            },
            mobile: {
                "320x50": "965851866",
                midroll: "549443128",
                rewarded: "517687166"
            }
        }
          , lt = "playground"
          , pt = "ingame"
          , At = "external";
        function mt() {
            return F.isPokiIframe || F.isPlayground ? F.isPlayground ? lt : pt : At
        }
        const ut = {
            skyscraper: "160x600",
            rectangle: "300x250",
            leaderboard: "728x90",
            smallLeaderboard: "320x50",
            billboard: "970x250",
            midroll: "midroll",
            rewarded: "rewarded",
            gamebar: "gamebar",
            externalSkyscraper: "300x600"
        };
        const gt = () => {
            const e = window;
            e.floorModuleLoaded = !1,
            window.assertive = {
                entityId: "5Lgx5W5CGs9PYyu8u",
                analytics: {
                    integrations: {
                        ivt: !1,
                        webVitals: !1,
                        webAnalytics: !1,
                        nativo: !1,
                        taboola: !1,
                        outbrain: !1,
                        adsense: !1,
                        reconciliation: !1,
                        custom: {
                            custom_1: e.parent.pokiExperiment,
                            custom_2: e.parent.pokiAYMode
                        }
                    }
                },
                storage: {
                    keyPrefix: "pvay_"
                },
                floor: {
                    enabled: !1,
                    addToHashKey: !1,
                    currency: "EUR",
                    priceBuckets: [{
                        min: .03,
                        max: .25,
                        increment: .01
                    }, {
                        min: .25,
                        max: 2,
                        increment: .05
                    }, {
                        min: 2,
                        max: 5,
                        increment: .1
                    }, {
                        min: 5,
                        max: 20,
                        increment: .15
                    }],
                    prebidMinFloor: .15,
                    exploreRate: "auto",
                    readyCallback: () => {
                        e.floorModuleLoaded = !0
                    }
                }
            };
            const t = document.createElement("script");
            t.src = "https://5lgx5w5cgs9pyyu8u.ay.delivery/client-v2.js",
            t.async = !0,
            document.body.appendChild(t)
        }
        ;
        let ht;
        const wt = () => F.isPlayground && ["US", "CA", "DE", "BR", "FR", "AU", "MX", "JP", "ES", "CH", "PL", "KR", "GB", "BE", "IT", "AE", "NL", "SE", "DK", "SA", "NZ", "RO", "ZA", "TH", "AT", "NO", "MY", "CL", "SG", "CZ", "IL", "HU", "FI", "SK", "IE", "HK", "BG", "PT", "UY", "TW", "CR", "GR", "OM", "PR", "JO", "PA", "HR", "UZ", "KE", "KW", "LV", "LU", "SI", "EE", "MM", "QA", "LT", "BH", "IS", "JM", "TT", "NA", "MT", "BS", "MO", "AW", "AS", "VI", "KY", "LI", "BQ", "JE", "BM", "PW", "VG", "GG", "MP", "MC", "NU", "NF", "TV"].includes(F.country) || F.forceStartAY;
        function vt(e="display") {
            return !!F.forceStartAY || (F.AYMode === O.PBS_ONLY || [O.ON, O.PBS_DPF_CSTS].includes(F.AYMode) && wt())
        }
        function ft() {
            return [O.ON, O.PBS_DPF_CSTS, O.DPF_ONLY].includes(F.AYMode) && ["US", "MX", "DE", "FR", "AU", "ES", "IT", "NZ"].includes(F.country) || F.forceStartAY
        }
        function bt() {
            return !!window?.assertive?.addAmazonFloors && ft()
        }
        async function yt() {
            const {AYMode: e, country: t} = F;
            if (!F.isPlayground && !F.forceStartAY)
                return;
            if (e === O.NOT_APPLICABLE || e === O.DISABLED)
                return;
            const i = vt()
              , n = ft()
              , o = [O.ON, O.PBS_DPF_CSTS, O.CSTS_ONLY].includes(e) || F.forceStartAY;
            window.assertive = {
                entityId: "US" === t ? "GQP4knBP4M2tmmbDA" : "CsX5Xy7uK2mDtHD7e",
                analytics: {
                    integrations: {
                        ima: !1
                    },
                    logUnfilled: !0,
                    useHistoryChangeTrigger: !0,
                    custom: {
                        custom_1: F.experiment,
                        custom_2: e
                    },
                    sampleRate: .1,
                    override: {
                        normalizeSlotId: (e, t) => t || e
                    }
                },
                hash: {
                    generator: "server",
                    values: 1,
                    key: "control"
                },
                reduction: {
                    enabled: o,
                    limit: {
                        percentage: o ? 1 : 0
                    }
                },
                floor: {
                    enabled: n,
                    addToHashKey: !1,
                    currency: "EUR",
                    gptHook: !1,
                    priceBuckets: [{
                        min: .03,
                        max: .25,
                        increment: .01
                    }, {
                        min: .25,
                        max: 2,
                        increment: .05
                    }, {
                        min: 2,
                        max: 5,
                        increment: .1
                    }, {
                        min: 5,
                        max: 20,
                        increment: .15
                    }],
                    exploreRate: "auto",
                    limit: {
                        excludeSlotIds: ["video", "rewarded"]
                    }
                }
            },
            function() {
                try {
                    if (ht = document.createElement("iframe"),
                    ht.id = "ay-video-optimizer",
                    ht.setAttribute("frameborder", "0"),
                    ht.setAttribute("scrolling", "no"),
                    ht.setAttribute("allowtransparency", "true"),
                    ht.setAttribute("width", "1"),
                    ht.setAttribute("height", "1"),
                    ht.style.position = "absolute",
                    ht.style.left = "-9999px",
                    document.body.appendChild(ht),
                    ht.contentDocument) {
                        window.pokiGetDPFEnabledResult = ft(),
                        window.pokiAYMode = F.AYMode,
                        window.pokiExperiment = F.experiment;
                        const e = ht.contentDocument.createElement("script");
                        e.textContent = `(${gt.toString()})();`,
                        ht.contentDocument.body.appendChild(e)
                    }
                } catch (e) {
                    console.error("Error creating video optimizer:", e)
                }
            }(),
            n && window.googletag.cmd.push(( () => {
                window.googletag.pubads().setTargeting("ay_hb_house", "1")
            }
            )),
            await X("https://a.poki-cdn.com/ay/client-v2_2dc0d61692f444998190571ae893366936a09ab8.js"),
            i && (await X("https://a.poki-cdn.com/ay/s2s-client-v1_62824ed91fc4aa2592d4f576012b2466329c8cef.js"),
            window?.ayS2STag?.init({
                orgId: "saWdJc9SuSG9wLYDz",
                entityId: "WxopjWtNMn2mCEStE",
                bidders: ["ix", "onetag", "openx", "pubmatic", "richaudience", "rubicon", "sharethrough", "triplelift", "unruly", "improvedigital", "amx", "medianet", "yieldmo"],
                serverOnlyBidders: [],
                pbjs: "pbjs",
                continent: {
                    AF: "AS",
                    AL: "EU",
                    AQ: "AN",
                    DZ: "AF",
                    AS: "OC",
                    AD: "EU",
                    AO: "AF",
                    AG: "NA",
                    AZ: "AS",
                    AR: "SA",
                    AU: "OC",
                    AT: "EU",
                    BS: "NA",
                    BH: "AS",
                    BD: "AS",
                    AM: "AS",
                    BB: "NA",
                    BE: "EU",
                    BM: "NA",
                    BT: "AS",
                    BO: "SA",
                    BA: "EU",
                    BW: "AF",
                    BV: "AN",
                    BR: "SA",
                    BZ: "NA",
                    IO: "AF",
                    SB: "OC",
                    VG: "NA",
                    BN: "AS",
                    BG: "EU",
                    MM: "AS",
                    BI: "AF",
                    BY: "EU",
                    KH: "AS",
                    CM: "AF",
                    CA: "NA",
                    CV: "AF",
                    KY: "NA",
                    CF: "AF",
                    LK: "AS",
                    TD: "AF",
                    CL: "SA",
                    CN: "AS",
                    TW: "AS",
                    CX: "AS",
                    CC: "AS",
                    CO: "SA",
                    KM: "AF",
                    YT: "AF",
                    CG: "AF",
                    CD: "AF",
                    CK: "OC",
                    CR: "NA",
                    HR: "EU",
                    CU: "NA",
                    CY: "AS",
                    CZ: "EU",
                    BJ: "AF",
                    DK: "EU",
                    DM: "NA",
                    DO: "NA",
                    EC: "SA",
                    SV: "NA",
                    GQ: "AF",
                    ET: "AF",
                    ER: "AF",
                    EE: "EU",
                    FO: "EU",
                    FK: "SA",
                    GS: "AN",
                    FJ: "OC",
                    FI: "EU",
                    AX: "EU",
                    FR: "EU",
                    GF: "SA",
                    PF: "OC",
                    TF: "AF",
                    DJ: "AF",
                    GA: "AF",
                    GE: "AS",
                    GM: "AF",
                    DE: "EU",
                    GH: "AF",
                    GI: "EU",
                    KI: "OC",
                    GR: "EU",
                    GL: "NA",
                    GD: "NA",
                    GP: "NA",
                    GU: "OC",
                    GT: "NA",
                    GN: "AF",
                    GY: "SA",
                    HT: "NA",
                    HM: "AN",
                    VA: "EU",
                    HN: "NA",
                    HK: "AS",
                    HU: "EU",
                    IS: "EU",
                    IN: "AS",
                    ID: "AS",
                    IR: "AS",
                    IQ: "AS",
                    IE: "EU",
                    IL: "AS",
                    IT: "EU",
                    CI: "AF",
                    JM: "NA",
                    JP: "AS",
                    KZ: "AS",
                    JO: "AS",
                    KE: "AF",
                    KP: "AS",
                    KR: "AS",
                    XK: "EU",
                    KW: "AS",
                    KG: "AS",
                    LA: "AS",
                    LB: "AS",
                    LS: "AF",
                    LV: "EU",
                    LR: "AF",
                    LY: "AF",
                    LI: "EU",
                    LT: "EU",
                    LU: "EU",
                    MO: "AS",
                    MG: "AF",
                    MW: "AF",
                    MY: "AS",
                    MV: "AS",
                    ML: "AF",
                    MT: "EU",
                    MQ: "NA",
                    MR: "AF",
                    MU: "AF",
                    MX: "NA",
                    MC: "EU",
                    MN: "AS",
                    MD: "EU",
                    ME: "EU",
                    MS: "NA",
                    MA: "AF",
                    MZ: "AF",
                    OM: "AS",
                    NA: "AF",
                    NR: "OC",
                    NP: "AS",
                    NL: "EU",
                    CW: "NA",
                    AW: "NA",
                    SX: "NA",
                    BQ: "NA",
                    NC: "OC",
                    VU: "OC",
                    NZ: "OC",
                    NI: "NA",
                    NE: "AF",
                    NG: "AF",
                    NU: "OC",
                    NF: "OC",
                    NO: "EU",
                    MP: "OC",
                    UM: "OC",
                    FM: "OC",
                    MH: "OC",
                    PW: "OC",
                    PK: "AS",
                    PS: "AS",
                    PA: "NA",
                    PG: "OC",
                    PY: "SA",
                    PE: "SA",
                    PH: "AS",
                    PN: "OC",
                    PL: "EU",
                    PT: "EU",
                    GW: "AF",
                    TL: "AS",
                    PR: "NA",
                    QA: "AS",
                    RE: "AF",
                    RO: "EU",
                    RU: "EU",
                    RW: "AF",
                    BL: "NA",
                    SH: "AF",
                    KN: "NA",
                    AI: "NA",
                    LC: "NA",
                    MF: "NA",
                    PM: "NA",
                    VC: "NA",
                    SM: "EU",
                    ST: "AF",
                    SA: "AS",
                    SN: "AF",
                    RS: "EU",
                    SC: "AF",
                    SL: "AF",
                    SG: "AS",
                    SK: "EU",
                    VN: "AS",
                    SI: "EU",
                    SO: "AF",
                    ZA: "AF",
                    ZW: "AF",
                    ES: "EU",
                    SS: "AF",
                    SD: "AF",
                    EH: "AF",
                    SR: "SA",
                    SJ: "EU",
                    SZ: "AF",
                    SE: "EU",
                    CH: "EU",
                    SY: "AS",
                    TJ: "AS",
                    TH: "AS",
                    TG: "AF",
                    TK: "OC",
                    TO: "OC",
                    TT: "NA",
                    AE: "AS",
                    TN: "AF",
                    TR: "AS",
                    TM: "AS",
                    TC: "NA",
                    TV: "OC",
                    UG: "AF",
                    UA: "EU",
                    MK: "EU",
                    EG: "AF",
                    GB: "EU",
                    GG: "EU",
                    JE: "EU",
                    IM: "EU",
                    TZ: "AF",
                    US: "NA",
                    VI: "NA",
                    BF: "AF",
                    UY: "SA",
                    UZ: "AS",
                    VE: "SA",
                    WF: "OC",
                    WS: "OC",
                    YE: "AS",
                    ZM: "AF",
                    XD: "AS",
                    XS: "AS"
                }[F.country] || "NA",
                analytics: !1,
                aliasRegistry: null,
                suffix: "_s2s",
                abPercentage: 100,
                customEndpoint: {
                    us: "pbs-poki-us",
                    eu: "pbs-poki-eu"
                }
            }))
        }
        function kt(e, t) {
            if (ft() && ht?.contentWindow?.floorModuleLoaded)
                try {
                    return ht.contentWindow.assertive?.getAdServerFloorTargeting?.(e, t)
                } catch (e) {
                    console.warn("%cPOKI:%c error getting dynamic video floors GAM criteria:", "font-weight: bold", "", e)
                }
        }
        function xt(e, t, i, n, o) {
            let a = Et("AdSystem", "Poki", {
                version: "0.1"
            });
            return t && (a += function(e) {
                return St("VASTAdTagURI", e)
            }(t)),
            i && (a += _t(i, n)),
            o && (a += It(o)),
            function(e, t) {
                return Et("VAST", e, {
                    version: t
                })
            }(function(e, t) {
                return Et("Ad", e, {
                    id: t
                })
            }(Et("Wrapper", a), e), "4.2")
        }
        function _t(e, t) {
            return St("Impression", e, {
                id: t
            })
        }
        function It(e) {
            return St("Error", e)
        }
        function St(e, t, i={}) {
            return Et(e, `<![CDATA[${t}]]>`, i)
        }
        function Et(e, t, i={}) {
            const n = function(e, t) {
                if (!t || 0 === Object.keys(t).length)
                    return e;
                return Object.keys(t).reduce(( (e, i) => {
                    const n = t[i];
                    return n ? `${e} ${i}="${n}"` : e
                }
                ), e)
            }(e, i);
            return `<${n}>${t}</${e}>`
        }
        function Ct(e) {
            const t = e;
            return {
                getVastXmlWithTracking: function(e, n, o, a, r) {
                    const s = function(e, i) {
                        if (!e)
                            return;
                        const n = _t(e, i);
                        return t.parse(n)
                    }(o, a)
                      , d = function(e) {
                        if (!e)
                            return;
                        const i = It(e);
                        return t.parse(i)
                    }(r);
                    if (!n && !s && !d)
                        return e;
                    const c = t.parse(e);
                    return function(e, t, n) {
                        const o = e.querySelectorAll("InLine,Wrapper")
                          , a = o.length;
                        for (let e = 0; e < a; e++) {
                            const r = o[e]
                              , s = e < a - 1;
                            i(r, t, s),
                            i(r, n, s)
                        }
                    }(c, s, d),
                    function(e, t) {
                        if (!t)
                            return;
                        const i = e.querySelector("Ad");
                        if (!i)
                            return;
                        i.id = t
                    }(c, n),
                    t.serialize(c)
                },
                buildVastWrapper: xt
            };
            function i(e, t, i) {
                if (!t)
                    return;
                const n = i ? t.cloneNode(!0) : t;
                e.appendChild(n.documentElement)
            }
        }
        function Pt() {
            let e, t;
            return {
                parse: function(t) {
                    return (e || (e = new DOMParser),
                    e).parseFromString(t, "application/xml")
                },
                serialize: function(e) {
                    return (t || (t = new XMLSerializer),
                    t).serializeToString(e)
                }
            }
        }
        const Bt = () => {
            let e = Math.floor(Date.now() / 1e3)
              , t = "";
            for (let i = 0; i < 4; i++)
                t = String.fromCharCode(255 & e) + t,
                e >>= 8;
            if (window.crypto && crypto.getRandomValues && Uint32Array) {
                const e = new Uint32Array(12);
                crypto.getRandomValues(e);
                for (let i = 0; i < 12; i++)
                    t += String.fromCharCode(255 & e[i])
            } else
                for (let e = 0; e < 12; e++)
                    t += String.fromCharCode(Math.floor(256 * Math.random()));
            return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
        }
          , Tt = Ct(Pt())
          , Dt = function() {
            const e = {};
            return {
                store: function(t, i) {
                    e[t] = i
                },
                remove: function(t) {
                    const i = e[t];
                    if (i)
                        return delete e[t],
                        i
                }
            }
        }();
        function Mt() {
            const e = Q.getVideoDataAnnotations()
              , t = function(e) {
                const t = function(e) {
                    if (!e || !e.length)
                        return;
                    for (let t = 0; t < e.length; t++) {
                        const i = e[t]
                          , n = Dt.remove(i);
                        if (n)
                            return n
                    }
                }(e);
                if (!t)
                    return;
                const {adUnitCode: i, requestId: n, auctionId: o} = t
                  , a = t.adId
                  , {bids: r} = window.pbjs.getBidResponsesForAdUnitCode(i);
                return r.find((e => e.adId === a && e.requestId === n && e.auctionId === o))
            }(e?.IMAWrapperIDs || []);
            if (t) {
                Q.addVideoDataAnnotations({
                    HBPrebidLikelyWon: !0,
                    HBPrebidWon: !0,
                    HBBid: JSON.stringify(t)
                });
                try {
                    window.pbjs.markWinningBidAsUsed({
                        ...t,
                        events: !0
                    })
                } catch (e) {
                    Z("Error marking winning bid as used", e)
                }
            }
        }
        const Rt = e => {
            const {adId: t, adUnitCode: i, requestId: n, auctionId: o} = e
              , a = `poki_${Bt()}`;
            Dt.store(a, {
                adId: t,
                adUnitCode: i,
                requestId: n,
                auctionId: o
            });
            let {vastXml: r} = e;
            const {vastUrl: s} = e;
            return r ? r = Tt.getVastXmlWithTracking(r, a, void 0, void 0, void 0) : s && (r = Tt.buildVastWrapper(a, s, void 0, void 0, void 0)),
            e.vastXml = r,
            a
        }
        ;
        const Lt = {}
          , Ot = ["IAB7-3", "IAB7-5", "IAB7-8", "IAB7-9", "IAB7-10", "IAB7-11", "IAB7-14", "IAB7-17", "IAB7-18", "IAB7-19", "IAB7-21", "IAB7-22", "IAB7-24", "IAB7-25", "IAB7-26", "IAB7-27", "IAB7-28", "IAB7-29", "IAB7-30", "IAB7-31", "IAB7-34", "IAB7-37", "IAB7-39", "IAB7-41", "IAB7-42", "IAB7-43", "IAB7-44", "IAB7-45", "IAB8-5", "IAB8-18", "IAB9-9", "IAB11-1", "IAB11-4", "IAB11-5", "IAB14-1", "IAB14-2", "IAB14-3", "IAB15-5", "IAB17-18", "IAB18-2", "IAB23", "IAB23-1", "IAB23-2", "IAB23-3", "IAB23-4", "IAB23-5", "IAB23-6", "IAB23-7", "IAB23-8", "IAB23-9", "IAB23-10", "IAB24", "IAB25", "IAB25-1", "IAB25-2", "IAB25-3", "IAB25-4", "IAB25-5", "IAB25-6", "IAB25-7", "IAB26", "IAB26-1", "IAB26-2", "IAB26-3", "IAB26-4"];
        let Nt, zt = !1, Ut = {}, jt = !1;
        const Ft = (e="display") => ("video" !== e || "desktop" === F.device) && zt
          , Gt = () => jt
          , Vt = (e, t) => {
            if (void 0 === Nt && (Nt = (e => {
                const {country: t} = F
                  , i = e?.[t]?.video?.amazon;
                return !!i && Math.random() > i
            }
            )(t)),
            !Nt && (Ut = e,
            window.apstag))
                try {
                    const e = "1--"
                      , t = "1YN"
                      , i = t => {
                        const i = {
                            pubID: "e32f1423-28bc-43ed-8ab0-5ae6b4449cf8",
                            adServer: "googletag",
                            videoAdServer: "GAM",
                            ...F.gdprApplies ? {
                                gdpr: {
                                    cmpTimeout: 1e4
                                }
                            } : {},
                            ...F.ccpaApplies ? {
                                params: {
                                    aps_privacy: t || e
                                }
                            } : {},
                            signals: Ut
                        };
                        window.apstag.init(i, ( () => {
                            zt = !0
                        }
                        ))
                    }
                    ;
                    F.ccpaApplies ? window.__uspapi("uspPing", 1, ( () => {
                        window.__uspapi("getUSPData", 1, ( (e, n) => {
                            if (n) {
                                let t = e?.uspString?.charAt(2) || "N";
                                "-" === t && (t = "N"),
                                i(`1Y${t}`)
                            } else
                                i(t)
                        }
                        ))
                    }
                    )) : i(e)
                } catch {
                    zt = !1,
                    window.apstag = void 0
                }
        }
          , Ht = (t, i) => {
            const n = {
                "728x90": `/21682198607/${F.device}_ingame_728x90/${F.siteID}_${F.device}_ingame_728x90`,
                "300x250": `/21682198607/${F.device}_ingame_300x250/${F.siteID}_${F.device}_ingame_300x250`,
                "970x250": `/21682198607/${F.device}_ingame_970x250/${F.siteID}_${F.device}_ingame_970x250`,
                "160x600": `/21682198607/${F.device}_ingame_160x600/${F.siteID}_${F.device}_ingame_160x600`,
                "320x50": `/21682198607/${F.device}_ingame_320x50/${F.siteID}_${F.device}_ingame_320x50`,
                "728x90_external": `/21682198607/external_${F.device}_display_ingame/external_${F.device}_ingame_728x90`,
                "300x250_external": `/21682198607/external_${F.device}_display_ingame/external_${F.device}_ingame_300x250`,
                "970x250_external": `/21682198607/external_${F.device}_display_ingame/external_${F.device}_ingame_970x250`,
                "160x600_external": `/21682198607/external_${F.device}_display_ingame/external_${F.device}_ingame_160x600`,
                "320x50_external": `/21682198607/external_${F.device}_display_ingame/external_${F.device}_ingame_320x50`,
                "300x600_external_platform": `/21682198607/external_${F.device}_display_platform`
            }
              , o = e => {
                const t = {
                    mimes: Te() || M() || R() ? ["video/mp4", "application/javascript"] : ["video/mp4", "video/webm", "video/ogg", "application/javascript"],
                    minduration: 1,
                    protocols: [2, 3, 5, 6, 7, 8, 11, 12, 13, 14],
                    w: 640,
                    h: 480,
                    placement: 1,
                    linearity: 1,
                    boxingallowed: 1,
                    pos: 1,
                    api: [2, 7, 8],
                    ...e ? {
                        maxduration: 30,
                        maxextended: 10
                    } : {
                        maxduration: 15
                    },
                    playbackmethod: [3],
                    skip: 0,
                    startdelay: -1
                };
                return {
                    bids: [{
                        bidder: "openx",
                        params: {
                            delDomain: "poki-d.openx.net",
                            unit: e ? Fe[F.device].rewarded : Fe[F.device].midroll
                        }
                    }, {
                        bidder: "ix",
                        params: {
                            siteId: e ? ze[F.device].rewarded : ze[F.device].midroll,
                            video: {}
                        }
                    }, {
                        bidder: "richaudience",
                        params: {
                            pid: e ? Ue[F.device].rewarded : Ue[F.device].midroll,
                            supplyType: "site"
                        }
                    }, {
                        bidder: "onetag",
                        bidSource: {
                            server: 0,
                            client: 100
                        },
                        params: {
                            pubId: "6da09f566a9dc06",
                            ext: {
                                placement_name: e ? je[F.device].rewarded : je[F.device].midroll
                            }
                        }
                    }, {
                        bidder: "rubicon",
                        params: {
                            accountId: 18608,
                            siteId: 498726,
                            zoneId: e ? Oe[F.device].rewarded : Oe[F.device].midroll,
                            position: "atf",
                            video: {
                                size_id: 204
                            },
                            bcat: Ot
                        }
                    }, {
                        bidder: "pubmatic",
                        params: {
                            publisherId: "156838",
                            adSlot: e ? Ne[F.device].rewarded : Ne[F.device].midroll,
                            bcat: Ot
                        }
                    }, {
                        bidder: "sharethrough",
                        params: {
                            pkey: e ? Le[F.device].rewarded : Le[F.device].midroll,
                            bcat: Ot
                        }
                    }, {
                        bidder: "triplelift",
                        params: {
                            inventoryCode: e ? Qe[F.device].rewarded : Qe[F.device].midroll,
                            video: {
                                ...t
                            }
                        }
                    }, {
                        bidder: "amx",
                        params: {
                            tagId: e ? Ke[F.device].rewarded : Ke[F.device].midroll,
                            adUnitId: e ? We[F.device].rewarded : We[F.device].midroll
                        }
                    }, {
                        bidder: "yieldmo",
                        params: {
                            placementId: e ? $e[F.device].rewarded : $e[F.device].midroll
                        }
                    }, {
                        bidder: "unruly",
                        params: {
                            siteId: e ? Ze[F.device].rewarded : Ze[F.device].midroll
                        }
                    }, {
                        bidder: "medianet",
                        params: {
                            cid: "8CU2QB97K",
                            crid: e ? Xe[F.device].rewarded : Xe[F.device].midroll
                        }
                    }, ...vt("video") ? [{
                        bidder: "openx_s2s",
                        params: {
                            delDomain: "poki-d.openx.net",
                            unit: e ? at[F.device].rewarded : at[F.device].midroll
                        }
                    }, {
                        bidder: "ix_s2s",
                        params: {
                            siteId: e ? it[F.device].rewarded : it[F.device].midroll,
                            video: {}
                        }
                    }, {
                        bidder: "richaudience_s2s",
                        params: {
                            pid: e ? nt[F.device].rewarded : nt[F.device].midroll,
                            supplyType: "site"
                        }
                    }, {
                        bidder: "rubicon_s2s",
                        params: {
                            accountId: 18608,
                            siteId: 551606,
                            zoneId: e ? et[F.device].rewarded : et[F.device].midroll,
                            position: "atf",
                            video: {
                                size_id: 204
                            },
                            bcat: Ot
                        }
                    }, {
                        bidder: "pubmatic_s2s",
                        params: {
                            publisherId: "156838",
                            adSlot: e ? tt[F.device].rewarded : tt[F.device].midroll,
                            bcat: Ot
                        }
                    }, {
                        bidder: "sharethrough_s2s",
                        params: {
                            pkey: e ? Je[F.device].rewarded : Je[F.device].midroll,
                            bcat: Ot
                        }
                    }, {
                        bidder: "unruly_s2s",
                        params: {
                            siteId: e ? st[F.device].rewarded : st[F.device].midroll
                        }
                    }, {
                        bidder: "improvedigital",
                        bidSource: {
                            server: 100,
                            client: 0
                        },
                        params: {
                            placementId: e ? dt[F.device].rewarded : dt[F.device].midroll,
                            publisherId: 2639
                        }
                    }, {
                        bidder: "amx_s2s",
                        params: {
                            tagId: "yKyauEkOj",
                            adUnitId: e ? `PBS_${We[F.device].rewarded}` : `PBS_${We[F.device].midroll}`
                        }
                    }, {
                        bidder: "yieldmo_s2s",
                        params: {
                            placementId: e ? rt[F.device].rewarded : rt[F.device].midroll
                        }
                    }, {
                        bidder: "unruly_s2s",
                        params: {
                            siteId: e ? st[F.device].rewarded : st[F.device].midroll
                        }
                    }, {
                        bidder: "medianet_s2s",
                        params: {
                            cid: "8CU2QB97K",
                            crid: e ? ct[F.device].rewarded : ct[F.device].midroll
                        }
                    }] : []],
                    mediaTypes: {
                        video: {
                            context: "instream",
                            playerSize: [640, 480],
                            plcmt: 1,
                            ...t
                        }
                    }
                }
            }
              , a = o(!0)
              , r = o(!1)
              , s = [{
                code: Re,
                mediaTypes: r.mediaTypes,
                bids: [...r.bids]
            }, {
                code: Me,
                mediaTypes: a.mediaTypes,
                bids: [...a.bids]
            }, {
                code: n["728x90"],
                mediaTypes: {
                    banner: {
                        sizes: [[728, 90]],
                        battr: [6, 7]
                    }
                },
                ortb2Imp: {
                    battr: [6, 7]
                },
                bids: [{
                    bidder: "openx",
                    params: {
                        delDomain: "poki-d.openx.net",
                        unit: Fe[F.device]["728x90"]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: ze[F.device]["728x90"]
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "156838",
                        adSlot: Ne[F.device]["728x90"],
                        bcat: Ot
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        accountId: 18608,
                        siteId: 498726,
                        zoneId: Oe[F.device]["728x90"],
                        bcat: Ot
                    }
                }, {
                    bidder: "onetag",
                    params: {
                        pubId: "6da09f566a9dc06",
                        ext: {
                            placement_name: je[F.device]["728x90"]
                        }
                    }
                }, {
                    bidder: "richaudience",
                    params: {
                        pid: Ue[F.device]["728x90"],
                        supplyType: "site"
                    }
                }, {
                    bidder: "sharethrough",
                    params: {
                        pkey: Le[F.device]["728x90"],
                        bcat: Ot
                    }
                }, {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: Qe[F.device]["728x90"]
                    }
                }, {
                    bidder: "amx",
                    params: {
                        tagId: Ke[F.device]["728x90"],
                        adUnitId: We[F.device]["728x90"]
                    }
                }, {
                    bidder: "yieldmo",
                    params: {
                        placementId: $e[F.device]["728x90"]
                    }
                }, {
                    bidder: "unruly",
                    params: {
                        siteId: Ze[F.device]["728x90"]
                    }
                }, {
                    bidder: "medianet",
                    params: {
                        cid: "8CU2QB97K",
                        crid: Xe[F.device]["728x90"]
                    }
                }, ...vt() ? [{
                    bidder: "openx_s2s",
                    params: {
                        delDomain: "poki-d.openx.net",
                        unit: at[F.device]["728x90"]
                    }
                }, {
                    bidder: "ix_s2s",
                    params: {
                        siteId: it[F.device]["728x90"]
                    }
                }, {
                    bidder: "pubmatic_s2s",
                    params: {
                        publisherId: "156838",
                        adSlot: tt[F.device]["728x90"],
                        bcat: Ot
                    }
                }, {
                    bidder: "rubicon_s2s",
                    params: {
                        accountId: 18608,
                        siteId: 551606,
                        zoneId: et[F.device]["728x90"],
                        bcat: Ot
                    }
                }, {
                    bidder: "onetag_s2s",
                    params: {
                        pubId: "6da09f566a9dc06",
                        ext: {
                            placement_name: ot[F.device]["728x90"]
                        }
                    }
                }, {
                    bidder: "richaudience_s2s",
                    params: {
                        pid: nt[F.device]["728x90"],
                        supplyType: "site"
                    }
                }, {
                    bidder: "sharethrough_s2s",
                    params: {
                        pkey: Je[F.device]["728x90"],
                        bcat: Ot
                    }
                }, {
                    bidder: "triplelift_s2s",
                    params: {
                        inventoryCode: Ye[F.device]["728x90"]
                    }
                }, {
                    bidder: "amx_s2s",
                    params: {
                        tagId: "yKyauEkOj",
                        adUnitId: `PBS_${We[F.device]["728x90"]}`
                    }
                }, {
                    bidder: "yieldmo_s2s",
                    params: {
                        placementId: rt[F.device]["728x90"]
                    }
                }, {
                    bidder: "unruly_s2s",
                    params: {
                        siteId: st[F.device]["728x90"]
                    }
                }, {
                    bidder: "medianet_s2s",
                    params: {
                        cid: "8CU2QB97K",
                        crid: ct[F.device]["728x90"]
                    }
                }] : []]
            }, {
                code: n["300x250"],
                mediaTypes: {
                    banner: {
                        sizes: [[300, 250]],
                        battr: [6, 7]
                    }
                },
                ortb2Imp: {
                    battr: [6, 7]
                },
                bids: [{
                    bidder: "openx",
                    params: {
                        delDomain: "poki-d.openx.net",
                        unit: Fe[F.device]["300x250"]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: ze[F.device]["300x250"]
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "156838",
                        adSlot: Ne[F.device]["300x250"],
                        bcat: Ot
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        accountId: 18608,
                        siteId: 498726,
                        zoneId: Oe[F.device]["300x250"],
                        bcat: Ot
                    }
                }, {
                    bidder: "onetag",
                    params: {
                        pubId: "6da09f566a9dc06",
                        ext: {
                            placement_name: je[F.device]["300x250"]
                        }
                    }
                }, {
                    bidder: "richaudience",
                    params: {
                        pid: Ue[F.device]["300x250"],
                        supplyType: "site"
                    }
                }, {
                    bidder: "sharethrough",
                    params: {
                        pkey: Le[F.device]["300x250"],
                        bcat: Ot
                    }
                }, {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: Qe[F.device]["300x250"]
                    }
                }, {
                    bidder: "amx",
                    params: {
                        tagId: Ke[F.device]["300x250"],
                        adUnitId: We[F.device]["300x250"]
                    }
                }, {
                    bidder: "yieldmo",
                    params: {
                        placementId: $e[F.device]["300x250"]
                    }
                }, {
                    bidder: "unruly",
                    params: {
                        siteId: Ze[F.device]["300x250"]
                    }
                }, {
                    bidder: "medianet",
                    params: {
                        cid: "8CU2QB97K",
                        crid: Xe[F.device]["300x250"]
                    }
                }, ...vt() ? [{
                    bidder: "openx_s2s",
                    params: {
                        delDomain: "poki-d.openx.net",
                        unit: at[F.device]["300x250"]
                    }
                }, {
                    bidder: "ix_s2s",
                    params: {
                        siteId: it[F.device]["300x250"]
                    }
                }, {
                    bidder: "pubmatic_s2s",
                    params: {
                        publisherId: "156838",
                        adSlot: tt[F.device]["300x250"],
                        bcat: Ot
                    }
                }, {
                    bidder: "rubicon_s2s",
                    params: {
                        accountId: 18608,
                        siteId: 551606,
                        zoneId: et[F.device]["300x250"],
                        bcat: Ot
                    }
                }, {
                    bidder: "onetag_s2s",
                    params: {
                        pubId: "6da09f566a9dc06",
                        ext: {
                            placement_name: ot[F.device]["300x250"]
                        }
                    }
                }, {
                    bidder: "richaudience_s2s",
                    params: {
                        pid: nt[F.device]["300x250"],
                        supplyType: "site"
                    }
                }, {
                    bidder: "sharethrough_s2s",
                    params: {
                        pkey: Je[F.device]["300x250"],
                        bcat: Ot
                    }
                }, {
                    bidder: "triplelift_s2s",
                    params: {
                        inventoryCode: Ye[F.device]["300x250"]
                    }
                }, {
                    bidder: "amx_s2s",
                    params: {
                        tagId: "yKyauEkOj",
                        adUnitId: `PBS_${We[F.device]["300x250"]}`
                    }
                }, {
                    bidder: "yieldmo_s2s",
                    params: {
                        placementId: rt[F.device]["300x250"]
                    }
                }, {
                    bidder: "unruly_s2s",
                    params: {
                        siteId: st[F.device]["300x250"]
                    }
                }, {
                    bidder: "medianet_s2s",
                    params: {
                        cid: "8CU2QB97K",
                        crid: ct[F.device]["300x250"]
                    }
                }] : []]
            }, {
                code: n["970x250"],
                mediaTypes: {
                    banner: {
                        sizes: [[970, 250]],
                        battr: [6, 7]
                    }
                },
                ortb2Imp: {
                    battr: [6, 7]
                },
                bids: [{
                    bidder: "openx",
                    params: {
                        delDomain: "poki-d.openx.net",
                        unit: Fe[F.device]["970x250"]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: ze[F.device]["970x250"]
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "156838",
                        adSlot: Ne[F.device]["970x250"],
                        bcat: Ot
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        accountId: 18608,
                        siteId: 498726,
                        zoneId: Oe[F.device]["970x250"],
                        bcat: Ot
                    }
                }, {
                    bidder: "onetag",
                    params: {
                        pubId: "6da09f566a9dc06",
                        ext: {
                            placement_name: je[F.device]["970x250"]
                        }
                    }
                }, {
                    bidder: "richaudience",
                    params: {
                        pid: Ue[F.device]["970x250"],
                        supplyType: "site"
                    }
                }, {
                    bidder: "sharethrough",
                    params: {
                        pkey: Le[F.device]["970x250"],
                        bcat: Ot
                    }
                }, {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: Qe[F.device]["970x250"]
                    }
                }, {
                    bidder: "amx",
                    params: {
                        tagId: Ke[F.device]["970x250"],
                        adUnitId: We[F.device]["970x250"]
                    }
                }, {
                    bidder: "yieldmo",
                    params: {
                        placementId: $e[F.device]["970x250"]
                    }
                }, {
                    bidder: "unruly",
                    params: {
                        siteId: Ze[F.device]["970x250"]
                    }
                }, {
                    bidder: "medianet",
                    params: {
                        cid: "8CU2QB97K",
                        crid: Xe[F.device]["970x250"]
                    }
                }, ...vt() ? [{
                    bidder: "openx_s2s",
                    params: {
                        delDomain: "poki-d.openx.net",
                        unit: at[F.device]["970x250"]
                    }
                }, {
                    bidder: "ix_s2s",
                    params: {
                        siteId: it[F.device]["970x250"]
                    }
                }, {
                    bidder: "pubmatic_s2s",
                    params: {
                        publisherId: "156838",
                        adSlot: tt[F.device]["970x250"],
                        bcat: Ot
                    }
                }, {
                    bidder: "rubicon_s2s",
                    params: {
                        accountId: 18608,
                        siteId: 551606,
                        zoneId: et[F.device]["970x250"],
                        bcat: Ot
                    }
                }, {
                    bidder: "onetag_s2s",
                    params: {
                        pubId: "6da09f566a9dc06",
                        ext: {
                            placement_name: ot[F.device]["970x250"]
                        }
                    }
                }, {
                    bidder: "richaudience_s2s",
                    params: {
                        pid: nt[F.device]["970x250"],
                        supplyType: "site"
                    }
                }, {
                    bidder: "sharethrough_s2s",
                    params: {
                        pkey: Je[F.device]["970x250"],
                        bcat: Ot
                    }
                }, {
                    bidder: "triplelift_s2s",
                    params: {
                        inventoryCode: Ye[F.device]["970x250"]
                    }
                }, {
                    bidder: "amx_s2s",
                    params: {
                        tagId: "yKyauEkOj",
                        adUnitId: `PBS_${We[F.device]["970x250"]}`
                    }
                }, {
                    bidder: "yieldmo_s2s",
                    params: {
                        placementId: rt[F.device]["970x250"]
                    }
                }, {
                    bidder: "unruly_s2s",
                    params: {
                        siteId: st[F.device]["970x250"]
                    }
                }, {
                    bidder: "medianet_s2s",
                    params: {
                        cid: "8CU2QB97K",
                        crid: ct[F.device]["970x250"]
                    }
                }] : []]
            }, {
                code: n["160x600"],
                mediaTypes: {
                    banner: {
                        sizes: [[160, 600]],
                        battr: [6, 7]
                    }
                },
                ortb2Imp: {
                    battr: [6, 7]
                },
                bids: [{
                    bidder: "openx",
                    params: {
                        delDomain: "poki-d.openx.net",
                        unit: Fe[F.device]["160x600"]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: ze[F.device]["160x600"]
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "156838",
                        adSlot: Ne[F.device]["160x600"],
                        bcat: Ot
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        accountId: 18608,
                        siteId: 498726,
                        zoneId: Oe[F.device]["160x600"],
                        bcat: Ot
                    }
                }, {
                    bidder: "onetag",
                    params: {
                        pubId: "6da09f566a9dc06",
                        ext: {
                            placement_name: je[F.device]["160x600"]
                        }
                    }
                }, {
                    bidder: "richaudience",
                    params: {
                        pid: Ue[F.device]["160x600"],
                        supplyType: "site"
                    }
                }, {
                    bidder: "sharethrough",
                    params: {
                        pkey: Le[F.device]["160x600"],
                        bcat: Ot
                    }
                }, {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: Qe[F.device]["160x600"]
                    }
                }, {
                    bidder: "amx",
                    params: {
                        tagId: Ke[F.device]["160x600"],
                        adUnitId: We[F.device]["160x600"]
                    }
                }, {
                    bidder: "yieldmo",
                    params: {
                        placementId: $e[F.device]["160x600"]
                    }
                }, {
                    bidder: "unruly",
                    params: {
                        siteId: Ze[F.device]["160x600"]
                    }
                }, {
                    bidder: "medianet",
                    params: {
                        cid: "8CU2QB97K",
                        crid: Xe[F.device]["160x600"]
                    }
                }, ...vt() ? [{
                    bidder: "openx_s2s",
                    params: {
                        delDomain: "poki-d.openx.net",
                        unit: at[F.device]["160x600"]
                    }
                }, {
                    bidder: "ix_s2s",
                    params: {
                        siteId: it[F.device]["160x600"]
                    }
                }, {
                    bidder: "pubmatic_s2s",
                    params: {
                        publisherId: "156838",
                        adSlot: tt[F.device]["160x600"],
                        bcat: Ot
                    }
                }, {
                    bidder: "rubicon_s2s",
                    params: {
                        accountId: 18608,
                        siteId: 551606,
                        zoneId: et[F.device]["160x600"],
                        bcat: Ot
                    }
                }, {
                    bidder: "onetag_s2s",
                    params: {
                        pubId: "6da09f566a9dc06",
                        ext: {
                            placement_name: ot[F.device]["160x600"]
                        }
                    }
                }, {
                    bidder: "richaudience_s2s",
                    params: {
                        pid: nt[F.device]["160x600"],
                        supplyType: "site"
                    }
                }, {
                    bidder: "sharethrough_s2s",
                    params: {
                        pkey: Je[F.device]["160x600"],
                        bcat: Ot
                    }
                }, {
                    bidder: "triplelift_s2s",
                    params: {
                        inventoryCode: Ye[F.device]["160x600"]
                    }
                }, {
                    bidder: "amx_s2s",
                    params: {
                        tagId: "yKyauEkOj",
                        adUnitId: `PBS_${We[F.device]["160x600"]}`
                    }
                }, {
                    bidder: "yieldmo_s2s",
                    params: {
                        placementId: rt[F.device]["160x600"]
                    }
                }, {
                    bidder: "unruly_s2s",
                    params: {
                        siteId: st[F.device]["160x600"]
                    }
                }, {
                    bidder: "medianet_s2s",
                    params: {
                        cid: "8CU2QB97K",
                        crid: ct[F.device]["160x600"]
                    }
                }] : []]
            }, {
                code: n["320x50"],
                mediaTypes: {
                    banner: {
                        sizes: [[320, 50]],
                        battr: [6, 7]
                    }
                },
                ortb2Imp: {
                    battr: [6, 7]
                },
                bids: [{
                    bidder: "openx",
                    params: {
                        delDomain: "poki-d.openx.net",
                        unit: Fe[F.device]["320x50"]
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: ze[F.device]["320x50"]
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "156838",
                        adSlot: Ne[F.device]["320x50"],
                        bcat: Ot
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        accountId: 18608,
                        siteId: 498726,
                        zoneId: Oe[F.device]["320x50"],
                        bcat: Ot
                    }
                }, {
                    bidder: "onetag",
                    params: {
                        pubId: "6da09f566a9dc06",
                        ext: {
                            placement_name: je[F.device]["320x50"]
                        }
                    }
                }, {
                    bidder: "richaudience",
                    params: {
                        pid: Ue[F.device]["320x50"],
                        supplyType: "site"
                    }
                }, {
                    bidder: "sharethrough",
                    params: {
                        pkey: Le[F.device]["320x50"],
                        bcat: Ot
                    }
                }, {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: Qe[F.device]["320x50"]
                    }
                }, {
                    bidder: "amx",
                    params: {
                        tagId: Ke[F.device]["320x50"],
                        adUnitId: We[F.device]["320x50"]
                    }
                }, {
                    bidder: "yieldmo",
                    params: {
                        placementId: $e[F.device]["320x50"]
                    }
                }, {
                    bidder: "unruly",
                    params: {
                        siteId: Ze[F.device]["320x50"]
                    }
                }, {
                    bidder: "medianet",
                    params: {
                        cid: "8CU2QB97K",
                        crid: Xe[F.device]["320x50"]
                    }
                }, ...vt() ? [{
                    bidder: "openx_s2s",
                    params: {
                        delDomain: "poki-d.openx.net",
                        unit: at[F.device]["320x50"]
                    }
                }, {
                    bidder: "ix_s2s",
                    params: {
                        siteId: it[F.device]["320x50"]
                    }
                }, {
                    bidder: "pubmatic_s2s",
                    params: {
                        publisherId: "156838",
                        adSlot: tt[F.device]["320x50"],
                        bcat: Ot
                    }
                }, {
                    bidder: "rubicon_s2s",
                    params: {
                        accountId: 18608,
                        siteId: 551606,
                        zoneId: et[F.device]["320x50"],
                        bcat: Ot
                    }
                }, {
                    bidder: "onetag_s2s",
                    params: {
                        pubId: "6da09f566a9dc06",
                        ext: {
                            placement_name: ot[F.device]["320x50"]
                        }
                    }
                }, {
                    bidder: "richaudience_s2s",
                    params: {
                        pid: nt[F.device]["320x50"],
                        supplyType: "site"
                    }
                }, {
                    bidder: "sharethrough_s2s",
                    params: {
                        pkey: Je[F.device]["320x50"],
                        bcat: Ot
                    }
                }, {
                    bidder: "triplelift_s2s",
                    params: {
                        inventoryCode: Ye[F.device]["320x50"]
                    }
                }, {
                    bidder: "amx_s2s",
                    params: {
                        tagId: "yKyauEkOj",
                        adUnitId: `PBS_${We[F.device]["320x50"]}`
                    }
                }, {
                    bidder: "yieldmo_s2s",
                    params: {
                        placementId: rt[F.device]["320x50"]
                    }
                }, {
                    bidder: "unruly_s2s",
                    params: {
                        siteId: st[F.device]["320x50"]
                    }
                }, {
                    bidder: "medianet_s2s",
                    params: {
                        cid: "8CU2QB97K",
                        crid: ct[F.device]["320x50"]
                    }
                }] : []]
            }, {
                code: n["728x90_external"],
                mediaTypes: {
                    banner: {
                        sizes: [[728, 90]],
                        battr: [6, 7]
                    }
                },
                ortb2Imp: {
                    battr: [6, 7]
                },
                bids: [{
                    bidder: "openx",
                    params: {
                        unit: "543885656",
                        delDomain: "poki-d.openx.net"
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "268177",
                        placementId: "625562",
                        size: [728, 90]
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "156838",
                        adSlot: "3457872",
                        bcat: Ot
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        accountId: 18608,
                        siteId: "362566",
                        zoneId: "1962680-2",
                        bcat: Ot
                    }
                }, {
                    bidder: "onetag",
                    params: {
                        pubId: "6da09f566a9dc06"
                    }
                }, {
                    bidder: "richaudience",
                    params: {
                        pid: "MP_gIE1VDieUi",
                        supplyType: "site"
                    }
                }, {
                    bidder: "sharethrough",
                    params: {
                        pkey: qe,
                        bcat: Ot
                    }
                }, {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Poki_728x90_Prebid"
                    }
                }, {
                    bidder: "amx",
                    params: {
                        tagId: "yKyauEkOj",
                        adUnitId: `${We[F.device]["728x90"]}_external`
                    }
                }, {
                    bidder: "yieldmo",
                    params: {
                        placementId: $e[F.device]["728x90"]
                    }
                }, {
                    bidder: "unruly",
                    params: {
                        siteId: Ze[F.device]["728x90"]
                    }
                }, {
                    bidder: "medianet",
                    params: {
                        cid: "8CU2QB97K",
                        crid: Xe[F.device]["728x90"]
                    }
                }]
            }, {
                code: n["300x250_external"],
                mediaTypes: {
                    banner: {
                        sizes: [[300, 250]],
                        battr: [6, 7]
                    }
                },
                ortb2Imp: {
                    battr: [6, 7]
                },
                bids: [{
                    bidder: "openx",
                    params: {
                        unit: "543885657",
                        delDomain: "poki-d.openx.net"
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "625564",
                        size: [300, 250]
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "156838",
                        adSlot: "3457874",
                        bcat: Ot
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        accountId: 18608,
                        siteId: "362566",
                        zoneId: "1962680-15",
                        bcat: Ot
                    }
                }, {
                    bidder: "onetag",
                    params: {
                        pubId: "6da09f566a9dc06"
                    }
                }, {
                    bidder: "richaudience",
                    params: {
                        pid: "MP_gIE1VDieUi",
                        supplyType: "site"
                    }
                }, {
                    bidder: "sharethrough",
                    params: {
                        pkey: He,
                        bcat: Ot
                    }
                }, {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Poki_300x250_Prebid"
                    }
                }, {
                    bidder: "amx",
                    params: {
                        tagId: "yKyauEkOj",
                        adUnitId: `${We[F.device]["300x250"]}_external`
                    }
                }, {
                    bidder: "yieldmo",
                    params: {
                        placementId: $e[F.device]["300x250"]
                    }
                }, {
                    bidder: "unruly",
                    params: {
                        siteId: Ze[F.device]["300x250"]
                    }
                }, {
                    bidder: "medianet",
                    params: {
                        cid: "8CU2QB97K",
                        crid: Xe[F.device]["300x250"]
                    }
                }]
            }, {
                code: n["970x250_external"],
                mediaTypes: {
                    banner: {
                        sizes: [[970, 250]],
                        battr: [6, 7]
                    }
                },
                ortb2Imp: {
                    battr: [6, 7]
                },
                bids: [{
                    bidder: "openx",
                    params: {
                        unit: "543885650",
                        delDomain: "poki-d.openx.net"
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "625560",
                        size: [970, 250]
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "156838",
                        adSlot: "3457879",
                        bcat: Ot
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        accountId: 18608,
                        siteId: "362566",
                        zoneId: "1962680-57",
                        bcat: Ot
                    }
                }, {
                    bidder: "onetag",
                    params: {
                        pubId: "6da09f566a9dc06"
                    }
                }, {
                    bidder: "richaudience",
                    params: {
                        pid: "MP_gIE1VDieUi",
                        supplyType: "site"
                    }
                }, {
                    bidder: "sharethrough",
                    params: {
                        pkey: Ve,
                        bcat: Ot
                    }
                }, {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Poki_970x250_Prebid"
                    }
                }, {
                    bidder: "amx",
                    params: {
                        tagId: "yKyauEkOj",
                        adUnitId: `${We[F.device]["970x250"]}_external`
                    }
                }, {
                    bidder: "yieldmo",
                    params: {
                        placementId: $e[F.device]["970x250"]
                    }
                }, {
                    bidder: "unruly",
                    params: {
                        siteId: Ze[F.device]["970x250"]
                    }
                }, {
                    bidder: "medianet",
                    params: {
                        cid: "8CU2QB97K",
                        crid: Xe[F.device]["970x250"]
                    }
                }]
            }, {
                code: n["160x600_external"],
                mediaTypes: {
                    banner: {
                        sizes: [[160, 600]],
                        battr: [6, 7]
                    }
                },
                ortb2Imp: {
                    battr: [6, 7]
                },
                bids: [{
                    bidder: "openx",
                    params: {
                        unit: "543885653",
                        delDomain: "poki-d.openx.net"
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "625563",
                        size: [160, 600]
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "156838",
                        adSlot: "3457877",
                        bcat: Ot
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        accountId: 18608,
                        siteId: "362566",
                        zoneId: "1962680-9",
                        bcat: Ot
                    }
                }, {
                    bidder: "onetag",
                    params: {
                        pubId: "6da09f566a9dc06"
                    }
                }, {
                    bidder: "richaudience",
                    params: {
                        pid: "MP_gIE1VDieUi",
                        supplyType: "site"
                    }
                }, {
                    bidder: "sharethrough",
                    params: {
                        pkey: Ge,
                        bcat: Ot
                    }
                }, {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Poki_160x600_Prebid"
                    }
                }, {
                    bidder: "amx",
                    params: {
                        tagId: "yKyauEkOj",
                        adUnitId: `${We[F.device]["160x600"]}_external`
                    }
                }, {
                    bidder: "yieldmo",
                    params: {
                        placementId: $e[F.device]["160x600"]
                    }
                }, {
                    bidder: "unruly",
                    params: {
                        siteId: Ze[F.device]["160x600"]
                    }
                }, {
                    bidder: "medianet",
                    params: {
                        cid: "8CU2QB97K",
                        crid: Xe[F.device]["160x600"]
                    }
                }]
            }, {
                code: n["320x50_external"],
                mediaTypes: {
                    banner: {
                        sizes: [[320, 50]],
                        battr: [6, 7]
                    }
                },
                ortb2Imp: {
                    battr: [6, 7]
                },
                bids: [{
                    bidder: "openx",
                    params: {
                        unit: "543885649",
                        delDomain: "poki-d.openx.net"
                    }
                }, {
                    bidder: "ix",
                    params: {
                        siteId: "625559",
                        size: [320, 50]
                    }
                }, {
                    bidder: "pubmatic",
                    params: {
                        publisherId: "156838",
                        adSlot: "3457875",
                        bcat: Ot
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        accountId: 18608,
                        siteId: "362566",
                        zoneId: "1962680-43",
                        bcat: Ot
                    }
                }, {
                    bidder: "onetag",
                    params: {
                        pubId: "6da09f566a9dc06"
                    }
                }, {
                    bidder: "richaudience",
                    params: {
                        pid: "MP_gIE1VDieUi",
                        supplyType: "site"
                    }
                }, {
                    bidder: "sharethrough",
                    params: {
                        pkey: He,
                        bcat: Ot
                    }
                }, {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Poki_320x50_Prebid"
                    }
                }, {
                    bidder: "amx",
                    params: {
                        tagId: "yKyauEkOj",
                        adUnitId: `${We[F.device]["320x50"]}_external`
                    }
                }, {
                    bidder: "yieldmo",
                    params: {
                        placementId: $e[F.device]["320x50"]
                    }
                }, {
                    bidder: "unruly",
                    params: {
                        siteId: Ze[F.device]["320x50"]
                    }
                }, {
                    bidder: "medianet",
                    params: {
                        cid: "8CU2QB97K",
                        crid: Xe[F.device]["320x50"]
                    }
                }]
            }, {
                code: n["300x600_external_platform"],
                mediaTypes: {
                    banner: {
                        sizes: [[300, 600]],
                        battr: [6, 7]
                    }
                },
                ortb2Imp: {
                    battr: [6, 7]
                },
                bids: [{
                    bidder: "onetag",
                    params: {
                        pubId: "6da09f566a9dc06"
                    }
                }, {
                    bidder: "richaudience",
                    params: {
                        pid: "MP_gIE1VDieUi",
                        supplyType: "site"
                    }
                }, {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Poki_300x600_Prebid"
                    }
                }]
            }]
              , d = {
                buckets: [{
                    precision: 2,
                    max: 5.6,
                    increment: .01
                }, {
                    precision: 2,
                    max: 20,
                    increment: .05
                }, {
                    precision: 2,
                    max: 45,
                    increment: .5
                }]
            }
              , c = d
              , l = {
                debug: !1,
                enableSendAllBids: !1,
                usePrebidCache: !0,
                deviceAccess: !0,
                bidderTimeout: "desktop" === F.device ? 1875 : 1500,
                enableTIDs: !1,
                eventHistoryTTL: 90,
                minBidCacheTTL: 90,
                mediaTypePriceGranularity: {
                    video: d,
                    banner: c
                },
                currency: {
                    adServerCurrency: "EUR",
                    defaultRates: {
                        EUR: {
                            EUR: 1,
                            GBP: .84,
                            USD: 1.02
                        },
                        GBP: {
                            EUR: 1.2,
                            GBP: 1,
                            USD: 1.22
                        },
                        USD: {
                            EUR: .98,
                            GBP: .82,
                            USD: 1
                        }
                    }
                },
                cache: {
                    url: "https://prebid.adnxs.com/pbc/v1/cache",
                    ignoreBidderCacheKey: !0
                },
                targetingControls: {
                    allowTargetingKeys: ["BIDDER", "AD_ID", "PRICE_BUCKET", "SIZE", "DEAL", "SOURCE", "FORMAT", "UUID", "CACHE_ID", "CACHE_HOST", "ADOMAIN"],
                    allowSendAllBidsTargetingKeys: ["BIDDER", "AD_ID", "PRICE_BUCKET", "SIZE", "DEAL", "SOURCE", "FORMAT", "UUID", "CACHE_ID", "CACHE_HOST", "ADOMAIN"]
                },
                ortb2: {
                    site: {
                        name: "Poki",
                        page: be()
                    },
                    device: {
                        ...window.innerWidth && window.innerHeight ? {
                            w: window.innerWidth,
                            h: window.innerHeight
                        } : {}
                    },
                    bcat: Ot
                },
                debugging: Lt,
                pageUrl: be(),
                userSync: {
                    filterSettings: {
                        all: {
                            bidders: "*",
                            filter: "include"
                        }
                    },
                    syncsPerBidder: 1e3,
                    syncDelay: 100,
                    userIds: [{
                        name: "pubCommonId",
                        storage: {
                            type: "cookie",
                            name: "poki_pubcid",
                            expires: 180
                        }
                    }]
                },
                ...F.gdprApplies ? {
                    consentManagement: {
                        gdpr: {
                            cmpApi: "iab",
                            timeout: 8e3,
                            defaultGdprScope: !0
                        }
                    }
                } : {},
                ...F.ccpaApplies ? {
                    consentManagement: {
                        usp: {
                            cmpApi: "iab",
                            timeout: 8e3
                        }
                    }
                } : {}
            };
            window.pbjs.que.push(( () => {
                jt = !0;
                const n = {
                    floors: {},
                    ...l,
                    ...t.config
                };
                window.pbjs.addAdUnits(( (e, t) => {
                    const {country: i} = F
                      , n = t?.[i];
                    if (!n)
                        return e;
                    for (let t = 0; t <= e.length; t++) {
                        const i = e[t]
                          , o = n[i?.mediaTypes?.video ? "video" : "display"] || {};
                        for (let n = (i?.bids?.length || 0) - 1; n >= 0; n--) {
                            const a = i.bids[n]
                              , r = Math.random();
                            o[a.bidder] && r > o[a.bidder] && e[t].bids.splice(n, 1)
                        }
                    }
                    return e
                }
                )(t.adUnits || s, i)),
                window.pbjs.setConfig(n),
                window.pbjs.setBidderConfig({
                    bidders: ["improvedigital"],
                    config: {
                        ortb2: {
                            regs: {
                                coppa: 1
                            }
                        }
                    }
                });
                const o = e => (t, i, n) => {
                    if (n?.mediaTypes?.banner) {
                        ["ix", "richaudience", "pubmatic", "sharethrough"].includes(e) && (t *= .95)
                    }
                    return F.forceBidder === e && (t = 45),
                    t
                }
                ;
                window.pbjs.bidderSettings = {
                    standard: {
                        storageAllowed: !0
                    },
                    openx: {
                        bidCpmAdjustment: o("openx")
                    },
                    ix: {
                        bidCpmAdjustment: o("ix")
                    },
                    richaudience: {
                        bidCpmAdjustment: o("richaudience")
                    },
                    onetag: {
                        bidCpmAdjustment: o("onetag")
                    },
                    rubicon: {
                        bidCpmAdjustment: o("rubicon")
                    },
                    pubmatic: {
                        bidCpmAdjustment: o("pubmatic")
                    },
                    sharethrough: {
                        bidCpmAdjustment: o("sharethrough")
                    },
                    triplelift: {
                        bidCpmAdjustment: o("triplelift")
                    }
                },
                window.pbjs.onEvent("bidAdjustment", (e => {
                    e && function(e) {
                        let t = e?.meta?.advertiserDomains?.find(Pe);
                        return !t && "richaudience" === e.bidderCode && Pe(e?.meta) && (t = e.meta?.advertiserDomains?.[0]),
                        !!t && (Ee || (Ee = []),
                        Ee.push(`${e.bidder}:${t}:${e?.cpm.toFixed(4)}:${e?.meta?.primaryCatId || "-"}`),
                        console.warn("%cPOKI:%c blocked ad: ", "font-weight: bold", "", e),
                        !0)
                    }(e) && (e.ttl = 0)
                }
                )),
                void 0 !== window.pbjs && (window.pbjs.onEvent("bidAdjustment", (e => {
                    Rt(e)
                }
                )),
                Q.addEventListener(e.ads.loaded, Mt),
                Q.addEventListener(e.ads.video.error, ( () => {
                    const e = Q.getVideoDataAnnotations()?.adID;
                    try {
                        window.pbjs.markWinningBidAsUsed({
                            adId: e
                        })
                    } catch (e) {
                        Z("Error marking winning bid as used", e)
                    }
                }
                )))
            }
            ))
        }
          , qt = ["AU", "CA", "IE", "NZ", "US", "GB"];
        function Qt() {
            const {country: e} = F;
            return "US" === e ? 1.49 : qt.includes(e) ? .49 : .15
        }
        async function Wt(t, i, n, o, a, r) {
            const s = L()
              , d = a ? "nope" : i
              , c = be()
              , l = o ? Me : Re;
            let p, A = 0;
            const m = F.videoAdDebug?.delayVideoAd || 0;
            m > 0 && await new Promise((e => setTimeout(e, m)));
            const u = () => {
                if (A--,
                !(A > 0))
                    try {
                        let o, A = d;
                        if (Gt()) {
                            Q.dispatchEvent(e.ads.prebidRequested, {
                                blocked: Be()
                            });
                            const a = window.pbjs.adUnits.filter((e => e.code === l))[0];
                            if ("undefined" === a)
                                return console.warn("%cPOKI:%c Video-ad-unit not found, did you give it the adunit.code='video' value?", "font-weight: bold", ""),
                                void t.requestAd(d);
                            A = window.pbjs.adServers.dfp.buildVideoUrl({
                                adUnit: a,
                                params: {
                                    iu: D("iu", i),
                                    sz: "640x360|640x480",
                                    output: "vast",
                                    cust_params: n,
                                    description_url: c,
                                    url: c,
                                    nofb: 1,
                                    max_ad_duration: 15e3
                                }
                            })?.replace("&max_ad_duration=15000", "")?.replace("&min_ad_duration=1000", "");
                            const r = D("cust_params", A)
                              , s = decodeURIComponent(r);
                            if (D("hb_pb", s)) {
                                const e = window.pbjs.getHighestCpmBids(l);
                                e.length > 0 && (o = e[0])
                            }
                            const p = D("hb_bidder", s)
                              , m = {
                                ...F.experiment ? {
                                    "bidder-exp": `${F.experiment}|${p || "empty"}`
                                } : {},
                                ...kt(l, o) || {}
                            };
                            if (Object.keys(m).length > 0) {
                                const e = ye(m)?.replace("&cust_params=", "");
                                A = A.replace("cust_params=", `cust_params=${e}%26`)
                            }
                            if (o) {
                                let e = o.meta?.advertiserDomains?.join(",");
                                "richaudience" === o.bidderCode && (e = o.meta?.advertiserDomains?.[0]),
                                Q.addVideoDataAnnotations({
                                    adID: o.adId,
                                    adDomain: e,
                                    HBAdDomain: e,
                                    HBBidder: o.bidderCode,
                                    HBAdId: o.adId,
                                    HBCreativeId: o.creativeId,
                                    HBSource: o.source,
                                    HBCPM: o.cpm
                                }),
                                Math.random() < .01 && Q.addVideoDataAnnotations({
                                    HBVastXML: JSON.stringify(o.vastXml),
                                    HBVastUrl: o.vastUrl
                                })
                            }
                        }
                        if (p) {
                            p.startsWith("%26") && (p = p.substring(3));
                            const e = decodeURIComponent(p)
                              , t = D("amznp", e);
                            "8iam0w" === t && ("mobile" === s || "tablet" === s) || (A = A.replace("cust_params=", `cust_params=${p}%26`)),
                            Q.addVideoDataAnnotations({
                                APSBidder: Se(t)
                            })
                        }
                        if (a) {
                            if (p) {
                                const e = function(e) {
                                    const t = decodeURIComponent(e)
                                      , i = D("amznbid", t);
                                    if (!i)
                                        return null;
                                    const n = xe[i];
                                    return n ? {
                                        bid: n,
                                        vast: `https://aax.amazon-adsystem.com/e/dtb/vast?b=${D("amzniid", t)}&rnd=${Math.round(1e10 * Math.random())}&pp=${i}`
                                    } : null
                                }(p);
                                e && (!o || !o.videoCacheKey || o.cpm < e.bid) && (o = {
                                    cpm: e.bid,
                                    vast: e.vast,
                                    bidder: "amazon",
                                    videoCacheKey: "amazon"
                                })
                            }
                            if (1 === r || o && o.videoCacheKey && !(o.cpm < Qt()) || (o = {
                                cpm: Qt(),
                                vast: "https://api.poki.com/ads/houseads/video/vast",
                                bidder: "poki",
                                videoCacheKey: "poki"
                            }),
                            !o || !o.videoCacheKey)
                                return void Q.dispatchEvent(1 === r ? e.ads.video.error : e.ads.completed, {
                                    rewardAllowed: !1
                                });
                            switch (o.bidder) {
                            case "onetag":
                                A = `https://onetag-sys.com/invocation/?key=${o.videoCacheKey}`;
                                break;
                            case "rubicon":
                                A = `https://prebid-server.rubiconproject.com/cache?uuid=${o.videoCacheKey}`;
                                break;
                            case "spotx":
                                A = `https://search.spotxchange.com/ad/vast.html?key=${o.videoCacheKey}`;
                                break;
                            case "amazon":
                            case "poki":
                                A = o.vast;
                                break;
                            default:
                                A = `https://prebid.adnxs.com/pbc/v1/cache?uuid=${o.videoCacheKey}`
                            }
                            W({
                                event: "video-ready",
                                bidder: o?.bidder,
                                bid: o?.cpm
                            }),
                            Q.addVideoDataAnnotations({
                                p4d_game_id: F.gameID,
                                p4d_version_id: F.versionID,
                                bidder: o?.bidder,
                                bid: o?.cpm
                            })
                        }
                        Q.addVideoDataAnnotations({
                            pokiAdServer: a,
                            adTagUrl: A
                        }),
                        o ? Q.addVideoDataAnnotations({
                            prebidBidder: o?.bidder,
                            prebidBid: o?.cpm
                        }) : Q.addVideoDataAnnotations({
                            prebidBidder: void 0,
                            prebidBid: void 0
                        }),
                        t.requestAd(A)
                    } catch {
                        t.requestAd(d)
                    }
            }
            ;
            if (Ft("video") && A++,
            Gt() && A++,
            Ft("video"))
                try {
                    let e = "desktop_ingame_midroll_1";
                    o && (e = "desktop" === s ? "desktop_ingame_roll_1" : "mobile_ingame_roll_1");
                    let t = [{
                        slotID: e,
                        mediaType: "video"
                    }];
                    bt() && (t = window?.assertive?.addAmazonFloors?.(t)),
                    window.apstag.fetchBids({
                        slots: t,
                        timeout: 1500
                    }, (e => {
                        e.length > 0 && (p = e[0].encodedQsParams),
                        u()
                    }
                    ))
                } catch {
                    u()
                }
            a && W({
                event: "video-request"
            }),
            Gt() && window.pbjs.que.push(( () => {
                const e = function(e) {
                    if (ft() && ht?.contentWindow?.floorModuleLoaded)
                        try {
                            return ht.contentWindow.assertive?.getPrebidFloor?.(e)
                        } catch (e) {
                            console.warn("%cPOKI:%c error getting dynamic video floors:", "font-weight: bold", "", e)
                        }
                }(l)
                  , t = window.pbjs.adUnits.filter((e => e.code === l))[0];
                e && (console.info("%cPOKI:%c [AY] applied prebid floor to Prebid", "font-weight: bold", "", e),
                t.floors = {
                    currency: "USD",
                    schema: {
                        delimiter: "|",
                        fields: ["mediaType"]
                    },
                    values: {
                        "*": e
                    }
                }),
                window.pbjs.requestBids({
                    adUnits: [t],
                    bidsBackHandler: () => {
                        u()
                    }
                })
            }
            )),
            Ft("video") || Gt() || u()
        }
        function Kt() {
            return !("yes" !== D("poki-ad-server")) && (console.info("%cPOKI:%c Only running Poki-ad-server", "font-weight: bold", ""),
            !0)
        }
        const $t = e => {
            const t = document.getElementById("pokiSDKAdContainer");
            if (!t)
                return null;
            const i = document.createElement("iframe");
            i.id = e,
            i.style.cssText = "\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 9999;\n\t\tborder: none;\n\t\tbackground: transparent;\n\t\tvisibility: hidden;\n\t\tpointer-events: none;\n\t",
            t.appendChild(i);
            const n = i.contentWindow?.document;
            return n ? i : null
        }
        ;
        let Zt = !1
          , Xt = !1
          , Yt = null;
        const {testVideos: Jt, device: ei} = F
          , ti = {
            log: () => {}
            ,
            error: () => {}
            ,
            warn: () => {}
            ,
            info: () => {}
        }
          , ii = () => F.videoAdDebug?.breakVideoFlow ? "junk" : (ti.log("Getting ad unit path", {
            testVideos: Jt,
            device: ei,
            siteID: F.siteID
        }),
        Jt ? "/6062/sanghan_rweb_ad_unit" : `/21682198607/${ei}_ingame_rewarded_google/${F.siteID}_${ei}_ingame_rewarded_google`)
          , ni = () => {
            if (Yt)
                return;
            if (Yt = $t("poki-rewarded-web-iframe"),
            !Yt)
                return;
            const e = Yt.contentWindow?.document;
            e && (e.open(),
            e.write(`\n\t\t<!DOCTYPE html>\n\t\t<html>\n\t\t<head>\n\t\t\t<script async src="./patch/google/tag/js/gpt.js?https://securepubads.g.doubleclick.net/tag/js/gpt.js"><\/script>\n\t\t\t<style>\n\t\t\t\tbody { margin: 0; padding: 0; overflow: hidden; }\n\t\t\t\tiframe { width: 100%; height: 100%; border: none; }\n\t\t\t</style>\n\t\t</head>\n\t\t<body>\n\t\t\t<script>\n\t\t\t\t(${( () => {
                window.googletag = window.googletag || {
                    cmd: []
                },
                window.googletag.cmd.push(( () => {
                    window.parent.postMessage({
                        type: "rewardedReady"
                    }, "*"),
                    window.googletag.pubads().addEventListener("rewardedSlotReady", (e => {
                        window.parent.postMessage({
                            type: "rewardedSlotReady"
                        }, "*"),
                        e.makeRewardedVisible()
                    }
                    )),
                    window.googletag.pubads().addEventListener("rewardedSlotGranted", ( () => {
                        window.parent.postMessage({
                            type: "rewardedSlotGranted"
                        }, "*")
                    }
                    )),
                    window.googletag.pubads().addEventListener("rewardedSlotClosed", ( () => {
                        window.parent.postMessage({
                            type: "rewardedSlotClosed"
                        }, "*")
                    }
                    )),
                    window.googletag.pubads().addEventListener("slotRenderEnded", (e => {
                        window.parent.postMessage({
                            type: "rewardedSlotRenderEnded",
                            isEmpty: e?.isEmpty,
                            adUnitPath: e?.slot?.getAdUnitPath(),
                            t: "rewarded"
                        }, "*")
                    }
                    )),
                    window.googletag.pubads().addEventListener("slotRequested", (e => {
                        window.parent.postMessage({
                            type: "rewardedSlotRequested",
                            hasEvent: !!e
                        }, "*")
                    }
                    ))
                }
                )),
                window.addEventListener("message", (e => {
                    "initRewardedSlot" === e.data.type && window.googletag.cmd.push(( () => {
                        const {criteria: t} = e.data;
                        window.googletag.defineOutOfPageSlot && (window.googleRewardedSlot && window.googletag.destroySlots([window.googleRewardedSlot]),
                        e.data.familyFriendly ? window.googletag.pubads().setPrivacySettings({
                            underAgeOfConsent: !0,
                            childDirectedTreatment: !0,
                            restrictDataProcessing: !0,
                            nonPersonalizedAds: !0
                        }) : e.data.nonPersonalized && window.googletag.pubads().setPrivacySettings({
                            nonPersonalizedAds: !0
                        }),
                        window.googleRewardedSlot = window.googletag.defineOutOfPageSlot(e.data.adUnitPath, window.googletag.enums.OutOfPageFormat.REWARDED).addService(window.googletag.pubads()),
                        window.googletag.enableServices(),
                        Object.keys(t).forEach((e => {
                            const i = t[e];
                            "" !== i && window.googleRewardedSlot?.setTargeting?.(e, i)
                        }
                        )),
                        window.googletag.display(window.googleRewardedSlot))
                    }
                    ))
                }
                ))
            }
            ).toString()})();\n\t\t\t<\/script>\n\t\t</body>\n\t\t</html>\n\t`),
            e.close())
        }
          , oi = t => {
            ti.log("Starting backfill", {
                criteria: t
            }),
            ni(),
            te.track(e.tracking.ads.rewardedWeb.request),
            (t => {
                ti.log("Initializing rewarded slot", {
                    criteria: t
                }),
                Yt?.contentWindow ? (Yt.contentWindow.postMessage({
                    type: "initRewardedSlot",
                    criteria: t,
                    adUnitPath: ii(),
                    familyFriendly: F.familyFriendly,
                    nonPersonalized: F.nonPersonalized
                }, "*"),
                ti.log("Posted init message to iframe"),
                setTimeout(( () => {
                    Xt || (ti.log("rewardedWeb iframe not ready after timeout, tracking empty state"),
                    te.track(e.tracking.ads.rewardedWeb.empty),
                    Q.dispatchEvent(e.ads.video.startHouseAdFlow))
                }
                ), 5e3)) : ti.log("No iframe content window available")
            }
            )(t)
        }
          , ai = e => {
            Yt && (Yt.style.visibility = e ? "visible" : "hidden",
            Yt.style.pointerEvents = e ? "auto" : "none")
        }
        ;
        let ri = !1
          , si = null;
        const {testVideos: di, device: ci} = F
          , li = {
            log: () => {}
            ,
            error: () => {}
            ,
            warn: () => {}
            ,
            info: () => {}
        }
          , pi = () => F.videoAdDebug?.breakVideoFlow ? "junk" : (li.log("Getting ad unit path", {
            testVideos: di,
            device: ci,
            siteID: F.siteID
        }),
        di ? "/6355419/Travel/Europe/France/Paris" : `/21682198607/${ci}_ingame_interstitial_google/${F.siteID}_${ci}_ingame_interstitial_google`)
          , Ai = e => {
            si && (si.style.visibility = e ? "visible" : "hidden",
            si.style.pointerEvents = e ? "auto" : "none")
        }
          , mi = () => {
            if (si)
                return;
            if (si = $t("poki-interstitial-web-iframe"),
            !si)
                return;
            const e = si.contentWindow?.document;
            e && (e.open(),
            e.write(`\n\t\t<!DOCTYPE html>\n\t\t<html>\n\t\t<head>\n\t\t\t<script async src="./patch/google/tag/js/gpt.js?https://securepubads.g.doubleclick.net/tag/js/gpt.js"><\/script>\n\t\t\t<style>\n\t\t\t\tbody { margin: 0; padding: 0; overflow: hidden; }\n\t\t\t\tiframe { width: 100%; height: 100%; border: none; }\n\t\t\t</style>\n\t\t</head>\n\t\t<body>\n\t\t\t<script>\n\t\t\t\t(${( () => {
                window.googletag = window.googletag || {
                    cmd: []
                },
                window.googletag.cmd.push(( () => {
                    window.parent.postMessage({
                        type: "gameManualInterstitialReady"
                    }, "*"),
                    window.googletag.pubads().addEventListener("gameManualInterstitialSlotReady", (e => {
                        window.parent.postMessage({
                            type: "gameManualInterstitialSlotReady"
                        }, "*"),
                        e.makeGameManualInterstitialVisible()
                    }
                    )),
                    window.googletag.pubads().addEventListener("gameManualInterstitialSlotClosed", ( () => {
                        window.parent.postMessage({
                            type: "gameManualInterstitialSlotClosed"
                        }, "*")
                    }
                    )),
                    window.googletag.pubads().addEventListener("slotRenderEnded", (e => {
                        window.parent.postMessage({
                            type: "interstitialSlotRenderEnded",
                            isEmpty: e?.isEmpty,
                            adUnitPath: e?.slot?.getAdUnitPath()
                        }, "*")
                    }
                    )),
                    window.googletag.pubads().addEventListener("slotRequested", (e => {
                        window.parent.postMessage({
                            type: "interstitialSlotRequested",
                            hasEvent: !!e
                        }, "*")
                    }
                    ))
                }
                )),
                window.addEventListener("message", (e => {
                    "initInterstitialSlot" === e.data.type && window.googletag.cmd.push(( () => {
                        const {criteria: t} = e.data;
                        window.googletag.defineOutOfPageSlot && (window.googleInterstitialSlot && window.googletag.destroySlots([window.googleInterstitialSlot]),
                        e.data.familyFriendly ? window.googletag.pubads().setPrivacySettings({
                            underAgeOfConsent: !0,
                            childDirectedTreatment: !0,
                            restrictDataProcessing: !0,
                            nonPersonalizedAds: !0
                        }) : e.data.nonPersonalized && window.googletag.pubads().setPrivacySettings({
                            nonPersonalizedAds: !0
                        }),
                        window.googleInterstitialSlot = window.googletag.defineOutOfPageSlot(e.data.adUnitPath, window.googletag.enums.OutOfPageFormat.GAME_MANUAL_INTERSTITIAL).addService(window.googletag.pubads()),
                        window.googletag.enableServices(),
                        Object.keys(t).forEach((e => {
                            const i = t[e];
                            "" !== i && window.googleInterstitialSlot?.setTargeting?.(e, i)
                        }
                        )),
                        window.googletag.display(window.googleInterstitialSlot))
                    }
                    ))
                }
                ))
            }
            ).toString()})();\n\t\t\t<\/script>\n\t\t</body>\n\t\t</html>\n\t`),
            e.close())
        }
          , ui = t => {
            li.log("Starting backfill", {
                criteria: t
            }),
            mi(),
            (t => {
                li.log("Initializing interstitial slot", {
                    criteria: t
                }),
                si?.contentWindow ? (si.contentWindow.postMessage({
                    type: "initInterstitialSlot",
                    criteria: t,
                    adUnitPath: pi(),
                    familyFriendly: F.familyFriendly,
                    nonPersonalized: F.nonPersonalized
                }, "*"),
                li.log("Posted init message to iframe"),
                setTimeout(( () => {
                    ri || (li.log("interstitialWeb iframe not ready after timeout, tracking empty state"),
                    Q.dispatchEvent(e.ads.video.startHouseAdFlow))
                }
                ), 5e3)) : li.log("No iframe content window available")
            }
            )(t)
        }
          , gi = {
            desktop: {
                [lt]: {
                    [ut.skyscraper]: ["DZ", "BO", "BD", "TN"],
                    [ut.rectangle]: ["CN", "BO", "BD", "NP", "TN", "DZ"],
                    [ut.leaderboard]: ["CN", "NP", "PY", "DZ", "BO", "TN"],
                    [ut.midroll]: ["CN", "PK", "DZ"],
                    [ut.rewarded]: ["CN", "DZ"]
                },
                [pt]: {
                    [ut.leaderboard]: ["DZ"]
                }
            },
            mobile: {
                [lt]: {
                    [ut.gamebar]: ["CN", "AZ", "PY", "PH", "MA", "HN", "IQ", "NI", "RS", "EC", "UA", "UY", "AM", "AL", "IN", "ID", "DZ", "EG", "PK", "BO", "BD", "LK", "NP", "TN"],
                    [ut.rewarded]: ["CN"]
                },
                [pt]: {
                    [ut.smallLeaderboard]: ["DZ"]
                }
            }
        };
        function hi(e="", t=mt()) {
            const {device: i, country: n} = F
              , o = (e => {
                if (e.includes("gamebar_320x50"))
                    return ut.gamebar;
                if (e.includes(`external_${F.device}_display_platform`))
                    return ut.externalSkyscraper;
                const t = Object.keys(ut).find((t => !!e.includes(`_${ut[t]}`)));
                return t && "gamebar" !== t ? t : (console.warn("%cPOKI:%c Unknown adunitpath or new gamebar format", "font-weight: bold", "", e),
                "")
            }
            )(e);
            return !gi?.[i]?.[t]?.[ut[o]]?.includes(n)
        }
        const wi = ["VN", "NL", "IL", "HU", "CZ", "AE", "IE", "NZ", "KR", "MY", "GR", "PY", "UY", "RS"];
        let vi;
        function fi() {
            return !!F.isPlayground && ("mobile" === F.device && (!!window.user?.id && (void 0 === vi && (vi = wi.includes(F.country.toUpperCase()) && function(e) {
                let t = 0;
                for (let i = 0; i < e.length; i++)
                    t = (t << 5) - t + e.charCodeAt(i),
                    t |= 0;
                return Math.abs(t) % 100
            }(window.user?.id || "") < 90,
            te.track(e.tracking.ads.h5GamingEnabled, {
                enabled: vi
            })),
            vi)))
        }
        class bi {
            #i;
            #n;
            #o;
            #a = 0;
            #r = !1;
            timing;
            totalRetries;
            #s;
            #d;
            #c;
            #l;
            constructor(t, i={}) {
                this.#i = t,
                this.#d = Kt(),
                this.totalRetries = i.totalRetries || ve.waterfallRetries || 1,
                this.timing = i.timing || new fe(ve.adTiming),
                fi() && (this.totalRetries = 0),
                Q.addEventListener(e.ads.video.error, ( () => {
                    this.moveThroughWaterfall()
                }
                )),
                Q.addEventListener(e.ads.video.loaderError, ( () => {
                    this.moveThroughWaterfall()
                }
                )),
                Q.addEventListener(e.ads.ready, ( () => {
                    this.timing.stopWaterfallTimer()
                }
                )),
                Q.addEventListener(e.ads.started, ( () => {
                    this.stopWaterfall()
                }
                )),
                Q.addEventListener(e.ads.video.startHouseAdFlow, ( () => {
                    this.startHouseAdFlow()
                }
                ))
            }
            moveThroughWaterfall() {
                if (this.#c)
                    return this.#c = !1,
                    void Q.dispatchEvent(e.ads.error, {
                        rewardAllowed: !1
                    });
                !1 !== this.#r && (this.timing.stopWaterfallTimer(),
                this.#a < this.totalRetries ? this.requestAd() : (this.#r = !1,
                this.startBackfill()))
            }
            startBackfill() {
                this.#l === e.ads.position.rewarded ? oi(this.#o) : ui(this.#o)
            }
            cutOffWaterfall() {
                this.#i.tearDown(),
                this.moveThroughWaterfall()
            }
            startHouseAdFlow() {
                const e = "https://api.poki.com/ads/houseads/video/vast";
                Q.addVideoDataAnnotations({
                    pokiAdServer: !0,
                    adTagUrl: e,
                    bidder: "poki",
                    bid: 0
                }),
                W({
                    event: "video-request"
                }),
                this.#i.requestAd(e),
                this.#c = !0
            }
            start(t={}, i) {
                this.#r = !0,
                this.#a = 0,
                this.#o = t,
                this.#s = i === e.ads.position.rewarded,
                this.#n = (t => {
                    const {device: i} = F;
                    let n = "midroll";
                    if (D("noFill") || V.debug)
                        return ["junk", "junk"];
                    t === e.ads.position.rewarded && (n = "rewarded");
                    const o = "/21682198607/";
                    return mt() === At ? [`${o}external_${i}_video_1/external_${i}_ingame_${n}_1`, `${o}external_${i}_video_2/external_${i}_ingame_${n}_2`] : [`${o}${i}_ingame_${n}_1/${F.siteID}_${i}_ingame_${n}_1`, `${o}${i}_ingame_${n}_2/${F.siteID}_${i}_ingame_${n}_2`]
                }
                )(i),
                this.#l = i,
                this.requestAd()
            }
            requestAd() {
                this.timing.startWaterfallTimer(( () => {
                    this.cutOffWaterfall()
                }
                )),
                this.#a++,
                this.#o.waterfall = this.#a,
                this.#c = !1;
                const t = (this.#a - 1) % this.#n.length
                  , i = this.#n[t];
                let n = `https://securepubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=${i}&ciu_szs&impl=s&gdfp_req=1&env=vp&output=xml_vast4`;
                F.familyFriendly && (n += "&tfcd=1&tfua=1&rdp=1&npa=1"),
                F.nonPersonalized && (n += "&npa=1"),
                n += "&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}&nofb=1";
                const o = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 970;
                this.#o.ay_hb_house = 1,
                this.#o.billboards_fit = o ? "yes" : "no",
                this.#o.page_has_lead = null !== document.getElementById(`/21682198607/desktop_gp_728x90/${F.siteID}_desktop_gp_728x90`)?.offsetParent ? "yes" : "no",
                "mobile" === F.device && (this.#o["monetization-exp"] = fi() ? "h5gaming-on" : "h5gaming-off");
                const a = (e => {
                    const t = encodeURIComponent(be());
                    return (e = (e = e.split("{url}").join(t)).split("{descriptionUrl}").join(t)).split("{timestamp}").join((new Date).getTime().toString())
                }
                )(n) + ye(this.#o)
                  , r = hi(i);
                Q.addVideoDataAnnotations({
                    adUnitPath: i,
                    adTagUrl: a,
                    waterfall: this.#a,
                    size: "640x360v",
                    ab: this.#o.ab,
                    headerBiddingAllowed: r
                }),
                Q.dispatchEvent(e.ads.requested),
                F.googlePreview ? (K(`requesting video ad for google preview (${this.#a}/${this.totalRetries} tries)`),
                this.#i.requestAd(a)) : V.debug || F.houseAdsOnly ? (K(`requesting video ad in house-ad mode (${this.#a}/${this.totalRetries} tries)`),
                this.startHouseAdFlow()) : this.#d ? (K(`requesting video ad with Poki Adserver (${this.#a}/${this.totalRetries} tries)`),
                Wt(this.#i, a, this.#o, this.#s, !0, this.#a)) : fi() ? (this.timing.stopWaterfallTimer(),
                this.#r = !1,
                this.startBackfill()) : r && 1 === this.#a ? (K(`requesting video ad with Prebid Video enabled (${this.#a}/${this.totalRetries} tries)`),
                Wt(this.#i, a, this.#o, this.#s, !1, this.#a)) : (K(`requesting video ad in plain mode (${this.#a}/${this.totalRetries} tries)`),
                this.#i.requestAd(a))
            }
            isRunning() {
                return this.#r
            }
            stopWaterfall() {
                this.#r = !1,
                this.timing.stopWaterfallTimer()
            }
        }
        class yi {
            #p;
            #A;
            #m;
            #u;
            #g;
            #h;
            #w;
            #v;
            #f;
            #b;
            currentProgress;
            constructor(t) {
                this.#h = [],
                this.#p = t,
                this.reset(),
                Q.addEventListener(e.ads.video.progress, (e => {
                    const t = 100 - this.currentProgress
                      , i = e.currentTime / e.duration * t;
                    i < t && this.#p(this.currentProgress + i)
                }
                )),
                this.initializeNoProgressFix()
            }
            queueFakeProgress(e, t, i) {
                this.#h.push({
                    progressToFake: e,
                    duration: t,
                    stopEvent: i
                }),
                Q.addEventListener(i, (t => {
                    if (-1 === t?.duration)
                        return this.reset(),
                        void this.#p(0);
                    this.#A[i] = !0,
                    this.currentProgress = this.#m + e,
                    this.#m = this.currentProgress,
                    this.#p(this.currentProgress),
                    this.#w.shift(),
                    this.#w.length > 0 ? this.continue() : this.pause()
                }
                ))
            }
            fakeProgress(e, t, i) {
                this.#w.push({
                    progressToFake: e,
                    duration: t,
                    stopEvent: i
                }),
                this.#b = !0,
                this.continue()
            }
            start() {
                this.#w.length > 0 || (this.#w = [...this.#h],
                this.#f = !0,
                this.continue())
            }
            continue() {
                if (this.#w.length > 0 && !this.#g) {
                    this.#u = Date.now();
                    const e = 50;
                    this.#g = window.setInterval(this.tick.bind(this), e),
                    this.#f = !0
                }
            }
            pause() {
                this.clearInterval()
            }
            tick() {
                const t = this.#w[0]
                  , i = Date.now() - this.#u
                  , n = Math.min(i / t.duration, 1);
                this.currentProgress = this.#m + t.progressToFake * n,
                this.#b && Q.dispatchEvent(e.ads.video.progress, {
                    duration: t.duration / 1e3,
                    currentTime: i / 1e3
                }),
                this.#p(this.currentProgress),
                (this.#A[t.stopEvent] || 1 === n) && this.pause()
            }
            clearInterval() {
                this.#g && (clearInterval(this.#g),
                this.#g = 0)
            }
            initializeNoProgressFix() {
                Q.addEventListener(e.ads.started, (t => {
                    this.#v = window.setTimeout(( () => {
                        if (this.#f) {
                            const i = 100 - this.currentProgress
                              , n = 1e3 * t.duration - 1e3;
                            this.fakeProgress(i, n, e.ads.completed)
                        }
                    }
                    ), 1e3)
                }
                )),
                Q.addEventListener(e.ads.video.progress, ( () => {
                    this.#v && (clearTimeout(this.#v),
                    this.#v = 0)
                }
                ))
            }
            reset() {
                this.#A = {},
                this.#m = 0,
                this.#u = 0,
                this.currentProgress = 0,
                this.#w = [],
                this.#f = !1,
                this.#b = !1,
                this.clearInterval()
            }
            fakeItTillTheEnd(t) {
                const i = 100 - this.currentProgress;
                this.fakeProgress(i, 1e3 * t, e.ads.completed)
            }
        }
        const ki = "pokiSdkContainer"
          , xi = "pokiSdkFixed"
          , _i = "pokiSdkOverlay"
          , Ii = "pokiSdkHidden"
          , Si = "pokiSdkInsideContainer"
          , Ei = "pokiSdkPauseButtonContainer"
          , Ci = "pokiSdkPauseButton"
          , Pi = "pokiSdkPauseButtonBG"
          , Bi = "pokiSdkStartAdButton"
          , Ti = "pokiSdkProgressBar"
          , Di = "pokiSdkProgressContainer"
          , Mi = "pokiSdkSpinnerContainer"
          , Ri = "pokiSdkVideoContainer"
          , Li = "pokiSdkVisible"
          , Oi = "pokiSDKAdContainer"
          , Ni = "pokiSDKHouseAdContainer"
          , zi = "pokiSDKNrAdsContainer"
          , Ui = `\n.${ki} {\n\toverflow: hidden;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 99999;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.${ki}.${xi} {\n\tposition: fixed;\n}\n\n.${ki}.${Li} {\n\tdisplay: block;\n}\n\n.${ki}.${Ii},\n.${Mi}.${Ii} {\n\tdisplay: none;\n}\n\n.${ki}.${Ii},\n.${Mi} {\n\tpointer-events: none;\n}\n\n.${Mi} {\n\tz-index: 10;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: url('https://a.poki-cdn.com/images/thumb_anim_2x.gif') 50% 50% no-repeat;\n\tuser-select: none;\n}\n\n.${Si} {\n\tbackground: #000;\n\tposition: relative;\n\tz-index: 1;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\n\topacity: 0;\n\t-webkit-transition: opacity 0.5s ease-in-out;\n\t-moz-transition: opacity 0.5s ease-in-out;\n\t-ms-transition: opacity 0.5s ease-in-out;\n\t-o-transition: opacity 0.5s ease-in-out;\n\ttransition: opacity 0.5s ease-in-out;\n}\n\n.${ki}.${Li} .${Si} {\n\topacity: 1;\n}\n\n.${Oi}, .${Ri} {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.${Bi} {\n\tposition: absolute;\n\tz-index: 9999;\n\ttop: 0;\n\n\tpadding-top: 10%;\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n\tcolor: #FFF;\n\n\tfont: 700 15pt 'Arial', sans-serif;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttransition: 0.1s ease-in-out;\n\tline-height: 1em;\n}\n\n.${Ei} {\n\tcursor:pointer;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 10;\n}\n\n.${Pi} {\n    content: '';\n    background: rgba(0, 43, 80, 0.5);\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n\tz-index: 11;\n}\n\n.${Ei}:hover .${Pi} {\n\tbackground: rgba(0, 43, 80, 0.7);\n}\n\n.${Ci} {\n\tposition: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 12;\n}\n\n.${Ci}:before {\n\tcontent: '';\n\tposition: absolute;\n\twidth: 100px;\n\theight: 100px;\n\tdisplay: block;\n\tborder: 2px solid #fff;\n\tborder-radius: 50%;\n\tuser-select: none;\n\tbackground-color: rgba(0, 0, 0, 0.6);\n\ttransition: background-color 0.5s ease;\n\tanimation: 1s linear infinite pokiPulse;\n\tz-index: 12;\n}\n\n.${Ci}:after {\n\tcontent: '';\n\tposition: absolute;\n\tdisplay: block;\n\tbox-sizing: border-box;\n\tborder-color: transparent transparent transparent #fff;\n\tborder-style: solid;\n\tborder-width: 26px 0 26px 40px;\n\tpointer-events: none;\n\tanimation: 1s linear infinite pokiPulse;\n\tleft: 6px;\n\tz-index: 12;\n}\n\n@keyframes pokiPulse {\n\t0% {\n\t\ttransform: translate(-50%, -50%) scale(0.95);\n\t}\n\t70% {\n\t\ttransform: translate(-50%, -50%) scale(1.1);\n\t}\n\t100% {\n\t\ttransform: translate(-50%, -50%) scale(0.95);\n\t}\n}\n\n.${Di} {\n\tbackground: #B8C7DD;\n\twidth: 100%;\n\theight: 5px;\n\tposition: absolute;\n\tbottom: 0;\n\tz-index: 9999;\n}\n\n.${Ti} {\n\tposition:relative;\n\tbottom:0px;\n\tbackground: #FFDC00;\n\theight: 100%;\n\twidth: 0%;\n\ttransition: width 0.5s;\n\ttransition-timing-function: linear;\n}\n\n.${Ti}.${Li}, .${Ei}.${Li}, .${Bi}.${Li} {\n\tdisplay: block;\n\tpointer-events: auto;\n}\n\n.${Ti}.${Ii}, .${Ei}.${Ii}, .${Bi}.${Ii}, .${zi}.${Ii} {\n\tdisplay: none;\n\tpointer-events: none;\n}\n\n.${Oi} .${Ni} {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 99999;\n\tcursor: pointer;\n}\n\n.${zi} {\n\tbottom: 10px;\n\tposition: absolute;\n\tleft: 10px;\n\tz-index: 9999;\n\tcolor: #FFF;\n\tfont: 700 9pt 'Arial', sans-serif;\n\tfilter: drop-shadow(0 0 0.2rem black);\n}\n\n`;
        let ji;
        async function Fi() {
            if ("undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes("bytedancewebview"))
                return !0;
            if (!ji) {
                ji = document.createElement("video"),
                ji.setAttribute("playsinline", "playsinline");
                const e = document.createElement("source");
                e.src = "data:video/mp4;base64, AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw",
                ji.appendChild(e)
            }
            try {
                return await ji.play(),
                !0
            } catch {
                return !1
            }
        }
        function Gi(e) {
            e.classList.add(Ii),
            e.classList.remove(Li)
        }
        function Vi(e) {
            e.classList.add(Li),
            e.classList.remove(Ii)
        }
        class Hi {
            #y;
            #k;
            #x;
            #_;
            #I;
            #S;
            #E;
            #C;
            #P;
            #B;
            #T;
            #D;
            #M;
            #R;
            #L;
            constructor(t) {
                if (this.#M = new yi((e => this.updateProgressBar(e))),
                this.#M.queueFakeProgress(20, 2e3, e.ads.started),
                this.#O(t.wrapper),
                "undefined" != typeof window && document) {
                    const e = document.createElement("style");
                    e.innerHTML = Ui,
                    document.head.appendChild(e)
                }
            }
            updateProgressBar(e) {
                this.#P.style.width = `${e}%`
            }
            setupEvents(e) {
                this.#_ = e
            }
            hide() {
                this.#R?.(),
                Gi(this.#k),
                Gi(this.#B),
                this.hidePauseButton(),
                Gi(this.#C),
                Gi(this.#L),
                this.#k.classList.remove(_i),
                this.#P.style.width = "0%",
                this.#M.reset()
            }
            hideSpinner() {
                Gi(this.#T)
            }
            show() {
                this.#k.classList.add(_i),
                Vi(this.#k),
                Vi(this.#T),
                Vi(this.#B),
                this.#M.start()
            }
            getVideoBounds() {
                return this.#y.getBoundingClientRect()
            }
            getAdContainer() {
                return this.#y
            }
            getVideoContainer() {
                return this.#D
            }
            showPauseButton() {
                Vi(this.#I),
                this.#_ && this.#I.addEventListener("click", ( () => {
                    this.#_.resumeAd()
                }
                ))
            }
            hidePauseButton() {
                Gi(this.#I),
                this.#_ && this.#I.removeEventListener("click", ( () => {
                    this.#_.resumeAd()
                }
                ))
            }
            showStartAdButton() {
                Vi(this.#C),
                this.#_ && this.#C.addEventListener("click", ( () => {
                    this.#_.startAdClicked()
                }
                ))
            }
            hideStartAdButton() {
                Gi(this.#C),
                this.#_ && this.#C.removeEventListener("click", ( () => {
                    this.#_.startAdClicked()
                }
                ))
            }
            #O(e) {
                this.#k = document.createElement("div"),
                this.#x = document.createElement("div"),
                this.#I = document.createElement("div"),
                this.#S = document.createElement("div"),
                this.#E = document.createElement("div"),
                this.#C = document.createElement("div"),
                this.#P = document.createElement("div"),
                this.#B = document.createElement("div"),
                this.#T = document.createElement("div"),
                this.#y = document.createElement("div"),
                this.#D = document.createElement("video"),
                this.#L = document.createElement("div"),
                this.#y.id = "pokiSDKAdContainer",
                this.#D.id = "pokiSDKVideoContainer",
                this.#k.className = ki,
                this.#x.className = Si,
                this.#I.className = Ei,
                this.#S.className = Ci,
                this.#E.className = Pi,
                this.#I.appendChild(this.#S),
                this.#I.appendChild(this.#E),
                this.#C.className = Bi,
                this.#C.innerHTML = "Tap anywhere to play ad",
                this.#P.className = Ti,
                this.#B.className = Di,
                this.#T.className = Mi,
                this.#y.className = Oi,
                this.#D.className = Ri,
                this.#L.className = zi,
                this.hide(),
                this.#D.setAttribute("playsinline", "playsinline"),
                this.#D.setAttribute("muted", "muted"),
                this.#k.appendChild(this.#x),
                this.#k.appendChild(this.#T),
                this.#k.appendChild(this.#L),
                this.#x.appendChild(this.#B),
                this.#x.appendChild(this.#D),
                this.#x.appendChild(this.#y),
                this.#k.appendChild(this.#I),
                this.#k.appendChild(this.#C),
                this.#B.appendChild(this.#P);
                let t = e || null;
                const i = () => {
                    if (t || (t = document.body),
                    t)
                        if (t.appendChild(this.#k),
                        t === document.body)
                            this.#k.classList.add(xi);
                        else {
                            const e = window.getComputedStyle(t).position;
                            e && -1 !== ["absolute", "fixed", "relative"].indexOf(e) || (t.style.position = "relative")
                        }
                    else
                        window.requestAnimationFrame(i)
                }
                ;
                !t || t instanceof HTMLElement || (t = null,
                console.warn("%cPOKI:%c wrapper is not a HTMLElement, falling back to document.body", "font-weight: bold", "")),
                i()
            }
            async startNonIMAFallbackVideo(t) {
                const i = document.createElement("video");
                i.id = "pokiSDKHouseAdContainer",
                i.className = Ni,
                i.playsInline = !0,
                i.muted = ge() || he,
                i.src = t.videoUrl;
                let n = !1;
                const o = () => {
                    t.clickThrough && window.open(t.clickThrough),
                    Q.dispatchEvent(e.ads.video.clicked, {
                        creativeId: "HouseAd"
                    }),
                    i.pause(),
                    a()
                }
                ;
                this.#x.addEventListener("click", o);
                const a = t => {
                    this.#R = void 0,
                    this.hide(),
                    this.#x.removeChild(i),
                    this.#x.removeEventListener("click", o),
                    t || Q.dispatchEvent(e.ads.completed, {
                        rewardAllowed: n
                    })
                }
                ;
                this.#R = () => a(!0),
                i.onabort = () => a(),
                i.onerror = () => a(),
                i.onerror = () => a(),
                i.ontimeupdate = () => {
                    i.currentTime >= 2 && (n = !0)
                }
                ,
                i.onplaying = () => {
                    Q.dispatchEvent(e.ads.started, {
                        creativeId: "HouseAd",
                        duration: t.duration,
                        skip: -1
                    }),
                    Q.dispatchEvent(e.ads.impression),
                    this.#M.fakeItTillTheEnd(t.duration)
                }
                ,
                i.onended = () => {
                    a()
                }
                ,
                this.#x.appendChild(i);
                Fi() || (i.muted = !0),
                i.play().catch(( () => a()))
            }
            setNrAds(e, t) {
                1 !== t ? (Vi(this.#L),
                this.#L.innerHTML = `Ad ${e} of ${t}`) : Gi(this.#L)
            }
        }
        class qi {
            adDisplayContainer;
            adsManager;
            adsLoader;
            videoElement;
            bannerTimeout = null;
            allowedToPlayAd = !1;
            runningAd = !1;
            completeOnce = !1;
            videoStarted = !1;
            currentWidth = 640;
            currentHeight = 480;
            currentRequestIsMuted = !1;
            volume = 1;
            constructor(e) {
                this.videoElement = document.getElementById("pokiSDKVideoContainer"),
                this.adsManager = null,
                this.volume = e,
                this.initAdDisplayContainer(),
                this.initAdsLoader()
            }
            initAdDisplayContainer() {
                this.adDisplayContainer || window.google && (this.adDisplayContainer = new google.ima.AdDisplayContainer(document.getElementById("pokiSDKAdContainer"),this.videoElement))
            }
            initAdsLoader() {
                this.adsLoader || window.google && (this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer),
                this.adsLoader.getSettings().setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),
                this.adsLoader.getSettings().setDisableCustomPlaybackForIOS10Plus(!0),
                this.adsLoader.getSettings().setNumRedirects(8),
                this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded, !1, this),
                this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdLoaderError, !1, this),
                this.videoElement.addEventListener("onended", ( () => this.adsLoader.contentComplete())))
            }
            async requestAd(e) {
                if (this.runningAd)
                    return;
                this.runningAd = !0,
                this.completeOnce = !0,
                this.videoStarted = !1,
                this.adDisplayContainer.initialize(),
                this.videoElement.src = "";
                const t = document?.getElementById("pokiDebugVASTResponse")?.value || ""
                  , i = new google.ima.AdsRequest;
                t ? i.adsResponse = t : i.adTagUrl = e,
                i.linearAdSlotWidth = this.currentWidth,
                i.linearAdSlotHeight = this.currentHeight,
                i.nonLinearAdSlotWidth = this.currentWidth,
                i.nonLinearAdSlotHeight = this.currentHeight,
                i.forceNonLinearFullSlot = !0;
                await Fi() ? (i.setAdWillPlayMuted(!1),
                this.currentRequestIsMuted = !1) : (i.setAdWillPlayMuted(!0),
                this.currentRequestIsMuted = !0),
                this.allowedToPlayAd = !0,
                this.adsLoader.requestAds(i, {
                    adTagUrl: e
                })
            }
            resize(e, t) {
                this.currentWidth = e,
                this.currentHeight = t,
                this.adsManager && this.adsManager.resize(e, t, window?.google.ima.ViewMode.NORMAL)
            }
            onAdsManagerLoaded(t) {
                const i = new google.ima.AdsRenderingSettings;
                i.enablePreloading = !0,
                i.restoreCustomPlaybackStateOnAdBreakComplete = !0,
                i.mimeTypes = Te() || M() || R() ? ["video/mp4"] : ["video/mp4", "video/webm", "video/ogg"],
                i.loadVideoTimeout = 8e3,
                this.adsManager = t.getAdsManager(this.videoElement, i),
                this.adsManager.setVolume(Math.max(0, Math.min(1, this.volume))),
                this.currentRequestIsMuted && this.adsManager.setVolume(0),
                this.allowedToPlayAd ? (this.attachAdEvents(),
                Q.dispatchEvent(e.ads.ready)) : this.tearDown()
            }
            setVolume(e) {
                this.volume = e,
                this.adsManager && this.adsManager.setVolume(Math.max(0, Math.min(1, this.volume)))
            }
            startPlayback() {
                try {
                    this.adsManager.init(this.currentWidth, this.currentHeight, google.ima.ViewMode.NORMAL),
                    this.adsManager.start()
                } catch {
                    return this.tearDown(),
                    !1
                }
                return !0
            }
            startIOSPlayback() {
                this.adsManager.start()
            }
            stopPlayback() {
                this.tearDown()
            }
            resumeAd() {
                Q.dispatchEvent(e.ads.video.resumed),
                this.adsManager && this.adsManager.resume()
            }
            tearDown() {
                this.adsManager && (this.adsManager.stop(),
                this.adsManager.destroy(),
                this.adsManager = null),
                null !== this.bannerTimeout && (clearTimeout(this.bannerTimeout),
                this.bannerTimeout = null),
                this.adsLoader && (this.adsLoader.contentComplete(),
                this.adsLoader.destroy(),
                this.adsLoader = null,
                this.initAdsLoader()),
                this.completeOnce = !1,
                this.runningAd = !1
            }
            attachAdEvents() {
                const e = google.ima.AdEvent.Type;
                this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError, !1, this),
                [e.AD_PROGRESS, e.ALL_ADS_COMPLETED, e.CLICK, e.COMPLETE, e.IMPRESSION, e.PAUSED, e.SKIPPED, e.STARTED, e.USER_CLOSE, e.AD_BUFFERING, e.LOG, e.LOADED].forEach((e => {
                    this.adsManager.addEventListener(e, this.onAdEvent, !1, this)
                }
                ))
            }
            onAdEvent(t) {
                const i = t.getAd()
                  , n = () => {
                    try {
                        let e, t = !1;
                        const n = i?.getWrapperAdIds?.() || []
                          , o = i?.getAdSystem?.();
                        "GDFP" === o || "AdSense" === o ? (e = i?.getAdId?.(),
                        t = !0) : n.length > 0 && (e = n[n.length - 1]),
                        Q.addVideoDataAnnotations({
                            IMAAdID: i?.getAdId?.(),
                            IMAAdSystem: i?.getAdSystem?.(),
                            IMAContentType: i?.getContentType?.(),
                            IMATitle: i?.getTitle?.(),
                            IMALineItemID: e,
                            IMAGoogleBackfill: t,
                            IMAUniversalAdIDRegistry: i?.getUniversalAdIdRegistry?.(),
                            IMAUniversalAdIDValue: i?.getUniversalAdIdValue?.(),
                            IMAUniversalAdIDs: JSON.stringify(i?.getUniversalAdIds?.()),
                            IMAWrapperIDs: [n, i?.getWrapperCreativeIds?.() || []].flat(1 / 0)
                        })
                    } catch (e) {
                        console.warn("%cPOKI:%c error annotating IMA ad:", "font-weight: bold", "", e)
                    }
                }
                ;
                switch (t.type) {
                case google.ima.AdEvent.Type.AD_PROGRESS:
                    Q.dispatchEvent(e.ads.video.progress, t.getAdData());
                    break;
                case google.ima.AdEvent.Type.LOADED:
                    n(),
                    Q.dispatchEvent(e.ads.loaded, {});
                    break;
                case google.ima.AdEvent.Type.STARTED:
                    t.remainingTime = this.adsManager.getRemainingTime(),
                    t.remainingTime <= 0 && (t.remainingTime = 15),
                    this.videoStarted = !0,
                    i.isLinear() || (this.bannerTimeout = window.setTimeout(( () => {
                        this.completeOnce && (this.completeOnce = !1,
                        Q.dispatchEvent(e.ads.completed, {
                            rewardAllowed: this.videoStarted && t.rewardAllowed
                        })),
                        this.tearDown()
                    }
                    ), 1e3 * (t.remainingTime + 1))),
                    Q.addVideoDataAnnotations({
                        creativeId: i.getCreativeId(),
                        duration: i.getDuration(),
                        skip: i.getSkipTimeOffset()
                    }),
                    n(),
                    Q.dispatchEvent(e.ads.started, {});
                    break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                case google.ima.AdEvent.Type.COMPLETE:
                    this.completeOnce && (this.completeOnce = !1,
                    Q.dispatchEvent(e.ads.completed, {
                        rewardAllowed: this.videoStarted
                    })),
                    this.tearDown();
                    break;
                case google.ima.AdEvent.Type.USER_CLOSE:
                    this.completeOnce && (this.completeOnce = !1,
                    Q.dispatchEvent(e.ads.completed, {
                        rewardAllowed: !1
                    })),
                    this.tearDown();
                    break;
                case google.ima.AdEvent.Type.PAUSED:
                    this.adsManager.pause(),
                    Q.dispatchEvent(e.ads.video.paused);
                    break;
                case google.ima.AdEvent.Type.AD_BUFFERING:
                    Q.dispatchEvent(e.ads.video.buffering);
                    break;
                case google.ima.AdEvent.Type.CLICK:
                    Q.dispatchEvent(e.ads.video.clicked);
                    break;
                case google.ima.AdEvent.Type.SKIPPED:
                    Q.dispatchEvent(e.ads.skipped),
                    this.completeOnce && (this.completeOnce = !1,
                    Q.dispatchEvent(e.ads.completed, {
                        rewardAllowed: this.videoStarted
                    })),
                    document.activeElement && document.activeElement.blur(),
                    this.tearDown();
                    break;
                case google.ima.AdEvent.Type.IMPRESSION:
                    Q.dispatchEvent(e.ads.impression, {
                        creativeId: i.getCreativeId()
                    }),
                    function() {
                        const t = Q.getVideoDataAnnotations()
                          , {HBBid: i, position: n, pokiAdServer: o, HBPrebidWon: a, adUnitPath: r, IMALineItemID: s, IMAGoogleBackfill: d} = t
                          , c = n === e.ads.position.rewarded ? Me : Re;
                        if (o)
                            return;
                        let l;
                        if (i)
                            try {
                                l = JSON.parse(i),
                                Q.addVideoDataAnnotations({
                                    HBBid: void 0
                                })
                            } catch (e) {}
                        l || (l = window?.pbjs?.getHighestUnusedBidResponseForAdUnitCode?.(c));
                        const p = {
                            mediaType: "video",
                            preBidWon: a || !1,
                            flooring: !0,
                            slotId: c,
                            adUnitPath: r,
                            highestPreBid: l?.cpm || 0,
                            highestPreBid_partner: l?.bidderCode || "",
                            creative_width: 640,
                            creative_height: 480,
                            timeToRespond: l?.timeToRespond || 0,
                            dfpResponseInformation: {
                                lineItemId: parseInt(s, 10) || 0,
                                isBackfill: d
                            }
                        };
                        ht?.contentWindow?.assertive?.logCustomImpression?.(p)
                    }()
                }
            }
            onAdLoaderError(t) {
                this.tearDown();
                const i = t?.getError()
                  , n = i?.toString() || "Unknown"
                  , o = i?.getErrorCode() || 0;
                Q.dispatchEvent(e.ads.video.loaderError, {
                    message: n,
                    errorCode: o
                })
            }
            onAdError(t) {
                this.tearDown();
                const i = t?.getError()
                  , n = i?.toString() || "Unknown"
                  , o = i?.getErrorCode() || 0;
                Q.dispatchEvent(e.ads.video.error, {
                    message: n,
                    errorCode: o,
                    context: t?.getUserRequestContext()
                })
            }
            muteAd() {
                void 0 !== this.adsManager && null != this.adsManager && this.adsManager.setVolume(0)
            }
            isAdRunning() {
                return this.runningAd
            }
        }
        const Qi = () => {
            let {pathname: e} = window.location;
            "/" !== e[0] && (e = `/${e}`);
            let t = "";
            window.top !== window && (t = encodeURIComponent(document.referrer));
            return ke(`https://devs-api.poki.com/gameinfo/@sdk?href=${encodeURIComponent(`${window.location.protocol}//${window.location.host}${e}${window.location.search}`)}&referrer=${t}`, {
                method: "GET",
                headers: {
                    "Content-Type": "text/plain"
                }
            }).then((async e => {
                if (e.status >= 200 && e.status < 400) {
                    const t = await e.json();
                    if (!t.game_id)
                        return;
                    return {
                        gameID: t.game_id,
                        gameTitle: t.game_name,
                        playtestRecord: t.playtest_record,
                        playtestVersion: t.playtest_version,
                        playtestDeviceCategory: t.playtest_device_category,
                        playtestNewUser: t.playtest_new_user,
                        playtestRequestID: t.playtest_request_id,
                        metrictestID: t.metrictest_id,
                        metrictestVersion: t.metrictest_version,
                        metrictestDeviceCategory: t.metrictest_device_category,
                        cachedContentGameID: t.cached_content_game_id,
                        specialConditions: t.ad_settings.special_conditions,
                        adTiming: {
                            preroll: t.ad_settings.preroll,
                            timePerTry: t.ad_settings.time_per_try,
                            timeBetweenAds: t.ad_settings.time_between_ads,
                            startAdsAfter: t.ad_settings.start_ads_after
                        }
                    }
                }
                throw e
            }
            )).catch((e => async function(e) {
                console.warn("%cPOKI:%c failed request p4d info", "font-weight: bold", "", e);
                try {
                    let {pathname: t} = window.location;
                    "/" !== t[0] && (t = `/${t}`);
                    const i = JSON.stringify({
                        c: "sdk-p4d-error",
                        ve: 7,
                        d: [{
                            k: "error",
                            v: JSON.stringify({
                                status: e.status,
                                json: e.json && await e.json(),
                                body: JSON.stringify({
                                    href: `${window.location.protocol}//${window.location.host}${t}${window.location.search}`
                                }),
                                name: e.name,
                                message: e.message
                            })
                        }]
                    })
                      , n = "https://t.poki.io/l";
                    if (navigator.sendBeacon)
                        navigator.sendBeacon(n, i);
                    else
                        try {
                            const e = new XMLHttpRequest;
                            e.open("POST", n, !0),
                            e.send(i)
                        } catch {}
                } catch {}
            }(e)))
        }
        ;
        async function Wi() {
            try {
                const e = {
                    "Content-Type": "text/plain"
                }
                  , t = await ke("https://geo.poki.io/", {
                    method: "GET",
                    headers: e
                }, 3e3)
                  , {ISO: i, ccpaApplies: n} = await t.json();
                return {
                    ISO: i,
                    ccpaApplies: n
                }
            } catch (e) {
                return console.warn("%cPOKI:%c failed to fetch country info", "font-weight: bold", "", e),
                {
                    ISO: "ZZ",
                    ccpaApplies: !1
                }
            }
        }
        async function Ki() {
            if ("test" === window?.process?.env?.NODE_ENV)
                return {
                    blocklist: [],
                    countryExclusion: [],
                    bidderLimitation: {}
                };
            try {
                const e = {
                    "Content-Type": "application/json"
                }
                  , t = await ke("https://api.poki.com/ads/settings", {
                    method: "GET",
                    headers: e
                })
                  , {blocklist: i, country_exclusion: n, bidder_limitation: o} = await t.json()
                  , a = JSON.parse(o) || {};
                return F.country && (a[F.country] = a[F.country] || {},
                a[F.country].video = a[F.country].video || {},
                a[F.country].video.triplelift = .05),
                {
                    blocklist: i?.split(/[\r\n]+/) || [],
                    countryExclusion: (n.split(",") || []).map((e => e.toUpperCase())),
                    bidderLimitation: a
                }
            } catch (e) {
                return console.warn("%cPOKI:%c failed to fetch ad settings", "font-weight: bold", "", e),
                {
                    blocklist: [],
                    countryExclusion: [],
                    bidderLimitation: {}
                }
            }
        }
        class $i {
            slotMap = new Map;
            totalRefreshNumber = {};
            static enforceFamilyFriendlyFlow() {
                window.googletag.cmd.push(( () => {
                    window.googletag.pubads().setPrivacySettings({
                        underAgeOfConsent: !0,
                        childDirectedTreatment: !0,
                        restrictDataProcessing: !0,
                        nonPersonalizedAds: !0
                    })
                }
                ))
            }
            static enforceNonPersonalized() {
                window.googletag.cmd.push(( () => {
                    window.googletag.pubads().setPrivacySettings({
                        nonPersonalizedAds: !0
                    })
                }
                ))
            }
            callOnCanDestroy(e) {
                const t = this.slotMap.get(e);
                t && !t.onCanDestroyCalled && t.onCanDestroy && (t.onCanDestroyCalled = !0,
                t.onCanDestroy())
            }
            setupSlotRenderEndedListener() {
                window.googletag.cmd.push(( () => {
                    window.googletag.pubads().addEventListener("slotRenderEnded", (t => {
                        const i = t.slot.getSlotElementId()
                          , n = this.slotMap.get(i);
                        if (!n || !n.gptSlot)
                            return;
                        let o = ""
                          , a = ""
                          , r = ""
                          , s = ""
                          , d = ""
                          , c = ""
                          , l = !1
                          , p = {}
                          , A = ""
                          , m = ""
                          , u = ""
                          , g = !1;
                        const h = t.slot;
                        try {
                            if (h) {
                                const e = h?.getResponseInformation?.() || {};
                                o = e.isBackfill,
                                a = e.lineItemId,
                                r = e.campaignId,
                                s = e.creativeId
                            }
                            p = n.pbjsTargetting || {},
                            A = p.hb_bidder,
                            m = p.hb_adomain,
                            u = (e => {
                                let t = {
                                    cpm: 0
                                };
                                if (void 0 === window.pbjs || !Gt())
                                    return t;
                                const i = window.pbjs.getAllWinningBids() || [];
                                return (window.pbjs.getBidResponsesForAdUnitCode(e)?.bids || []).forEach((e => {
                                    !i.find((t => t.adId === e.adId)) && e.cpm > t.cpm && (t = e)
                                }
                                )),
                                t
                            }
                            )(n.adUnitPath),
                            g = t.isEmpty
                        } catch (e) {
                            console.warn("%cPOKI:%c error in slotRenderEnded", "font-weight: bold", "", e)
                        }
                        try {
                            h && (d = h?.getHtml?.() || "",
                            c = function(e) {
                                if (!e || "function" != typeof e.indexOf)
                                    return null;
                                if (-1 !== e.indexOf("amazon-adsystem.com/aax2/apstag"))
                                    return null;
                                const t = new RegExp('(?:(?:pbjs\\.renderAd\\(document,|adId:*|hb_adid":\\[)|(?:pbadid=)|(?:adId=))[\'"](.*?)["\']',"gi")
                                  , i = e.replace(/ /g, "")
                                  , n = t.exec(i);
                                return n && n[1] || null
                            }(d),
                            l = !!c)
                        } catch (e) {
                            console.warn("%cPOKI:%c error in slotRenderEnded", "font-weight: bold", "", e)
                        }
                        let w = parseFloat(p.hb_pb);
                        Number.isNaN(w) && (w = void 0);
                        const v = {
                            size: n.size,
                            opportunityId: n.opportunityId,
                            refresh: n.refreshNumber > 0,
                            refreshNumber: n.refreshNumber,
                            refreshType: n.criteria?.refreshType || "",
                            duringGameplay: n.duringGameplay,
                            adUnitPath: n.adUnitPath,
                            prebidBid: w,
                            prebidBidder: A,
                            prebidWon: l,
                            prebidSecondBid: u.cpm > 0 ? u.cpm : void 0,
                            prebidSecondBidder: u.bidder,
                            dfpIsBackfill: o,
                            dfpLineItemId: a,
                            dfpCampaignId: r,
                            dfpCreativeId: s,
                            isEmpty: g,
                            adDomain: m,
                            platformAd: n.platformAd,
                            blocked: Be()
                        };
                        if (g) {
                            this.callOnCanDestroy(n.id);
                            try {
                                const t = window?.pbjs?.getHighestUnusedBidResponseForAdUnitCode?.(n.adUnitPath);
                                t && te.track(e.tracking.ads.display.notFilled, {
                                    bidder: t.bidder,
                                    cpm: t.cpm,
                                    adUnitPath: n.adUnitPath,
                                    opportunityId: n.opportunityId
                                })
                            } catch {}
                        }
                        g && n.backfillHouseads ? this.requestHouseAd(n, v) : (n.onDisplayRendered && n.onDisplayRendered(g),
                        te.track(e.tracking.ads.display.impression, v))
                    }
                    )),
                    window.googletag.pubads().addEventListener("impressionViewable", (t => {
                        const i = t.slot.getSlotElementId();
                        (t?.slot?.getAdUnitPath()?.includes("ingame_rewarded_google") || t?.slot?.getAdUnitPath()?.includes("sanghan_rweb_ad_unit")) && te.track(e.tracking.ads.rewardedWeb.impression),
                        setTimeout(( () => {
                            this.callOnCanDestroy(i)
                        }
                        ), 1e3 * Math.random())
                    }
                    ))
                }
                ))
            }
            validateDisplaySettings(e) {
                const t = ["970x250", "300x250", "728x90", "160x600", "320x50"]
                  , i = ["300x600"];
                return F.isPokiExternal ? i.includes(e) : M() || R() ? ["320x50"].includes(e) : t.includes(e)
            }
            getDisplaySlotConfig(e, t, i) {
                const n = t.split("x").map((e => parseInt(e, 10)))
                  , o = this.getDisplaySlotID(e);
                if (o) {
                    const t = this.slotMap.get(o);
                    if (t && t.width === n[0] && t.height === n[1])
                        return t.refreshNumber++,
                        t;
                    this.clearAd(e)
                }
                let a = function(e) {
                    let t = `/21682198607/debug-display/debug-display-${e}`;
                    return V.debug || (t = F.isPokiIframe ? `/21682198607/${F.device}_ingame_${e}/${F.siteID}_${F.device}_ingame_${e}` : F.isPokiExternal ? `/21682198607/external_${F.device}_display_platform` : `/21682198607/external_${F.device}_display_ingame/external_${F.device}_ingame_${e}`),
                    t
                }(t);
                i && (a = i);
                const r = `poki-${Bt()}`
                  , s = document.createElement("div");
                return s.id = r,
                s.className = "poki-ad-slot",
                s.style.width = `${n[0]}px`,
                s.style.height = `${n[1]}px`,
                s.style.overflow = "hidden",
                s.style.position = "relative",
                s.setAttribute("data-poki-ad-size", t),
                {
                    id: r,
                    adUnitPath: a,
                    size: t,
                    width: n[0],
                    height: n[1],
                    refreshNumber: 0,
                    onCanDestroyCalled: !1,
                    backfillHouseads: !1,
                    innerAdContainer: s,
                    platformAd: !1,
                    criteria: {}
                }
            }
            renderAd(e) {
                const {container: t, size: i, opportunityId: n, criteria: o={}, adUnitPath: a="", duringGameplay: r=!1, onCanDestroy: s= () => {}
                , onDisplayRendered: d= () => {}
                , backfillHouseads: c=!1, platformAd: l=!1, headerBiddingAllowed: p=!0} = e
                  , A = this.getDisplaySlotConfig(t, i, a);
                A.backfillHouseads = c,
                A.criteria = o,
                A.platformAd = l,
                this.slotMap.set(A.id, A),
                A.opportunityId = n,
                A.headerBiddingAllowed = p,
                A.duringGameplay = "function" == typeof r ? r() : r,
                A.onDisplayRendered = d,
                A.onCanDestroy = s;
                let m = null;
                A.refreshNumber > 0 && (m = A.innerAdContainer),
                m || (t.appendChild(A.innerAdContainer),
                t.setAttribute("data-poki-ad-id", A.id));
                const u = () => {
                    setTimeout(( () => {
                        this.callOnCanDestroy(A.id)
                    }
                    ), 6e3),
                    V.debug || F.houseAdsOnly ? this.requestHouseAd(A, {
                        opportunityId: A.opportunityId,
                        refresh: A.refreshNumber > 0,
                        refreshNumber: A.refreshNumber,
                        refreshType: A.criteria?.refreshType || "",
                        duringGameplay: A.duringGameplay,
                        adUnitPath: A.adUnitPath,
                        platformAd: A.platformAd
                    }) : window.googletag.cmd.push(( () => {
                        const e = this.slotMap.get(A.id);
                        e && e.opportunityId === n && (this.totalRefreshNumber[A.adUnitPath] || (this.totalRefreshNumber[A.adUnitPath] = 0),
                        this.setupGPT(A, {
                            ...o,
                            refresh_number: `${A.refreshNumber || 0}`,
                            total_refresh_number: `${this.totalRefreshNumber[A.adUnitPath]}`,
                            ..."mobile" === F.device ? {
                                "monetization-exp": fi() ? "h5gaming-on" : "h5gaming-off"
                            } : {}
                        }),
                        this.totalRefreshNumber[A.adUnitPath]++,
                        this.requestAd(A))
                    }
                    ))
                }
                ;
                A.intersectionObserver?.disconnect();
                a.includes("mobile_gamebar_320x50") ? u() : (A.intersectionObserver = new window.IntersectionObserver(( ([e]) => {
                    e.isIntersecting && (A.intersectionObserver?.disconnect(),
                    u())
                }
                ),{
                    threshold: .5
                }),
                A.intersectionObserver.observe(A.innerAdContainer))
            }
            setupGPT(e, t) {
                e.gptSlot || (160 === e.width && 600 === e.height ? e.gptSlot = window.googletag.defineSlot(e.adUnitPath, [[e.width, e.height], "fluid"], e.id).addService(window.googletag.pubads()) : 300 === e.width && 600 === e.height ? e.gptSlot = window.googletag.defineSlot(e.adUnitPath, [[300, 600], [160, 600], [120, 600], [300, 250], [300, 300], [250, 250], [240, 400], [250, 360], [300, 50], [120, 240]], e.id).addService(window.googletag.pubads()) : e.gptSlot = window.googletag.defineSlot(e.adUnitPath, [e.width, e.height], e.id).addService(window.googletag.pubads())),
                window.googletag.enableServices(),
                e.gptSlot?.clearTargeting(),
                Object.keys(t).forEach((i => {
                    const n = t[i];
                    n && e.gptSlot?.setTargeting(i, n)
                }
                ))
            }
            requestAd = t => {
                te.track(e.tracking.ads.display.requested, {
                    size: t.size,
                    opportunityId: t.opportunityId,
                    adUnitPath: t.adUnitPath,
                    duringGameplay: t.duringGameplay,
                    refresh: t.refreshNumber > 0,
                    refreshNumber: t.refreshNumber,
                    refreshType: t.criteria?.refreshType || "",
                    platformAd: t.platformAd,
                    headerBiddingAllowed: t.headerBiddingAllowed
                });
                let i = 0;
                const n = () => {
                    if (i--,
                    !(i > 0)) {
                        if (t.headerBiddingAllowed && Ft())
                            try {
                                window.apstag.setDisplayBids()
                            } catch {}
                        if (t.headerBiddingAllowed && Gt())
                            try {
                                window.pbjs.setTargetingForGPTAsync([t.adUnitPath]),
                                t.pbjsTargetting = window.pbjs.getAdserverTargetingForAdUnitCode([t.adUnitPath])
                            } catch {}
                        if (F.experiment) {
                            const e = t?.gptSlot?.getTargeting?.("hb_bidder")?.[0] || "empty";
                            t.gptSlot?.setTargeting?.("bidder-exp", `${F.experiment}|${e}`)
                        }
                        window?.assertive?.setFloors?.([t.gptSlot]),
                        t.refreshNumber > 0 ? window.googletag.pubads().refresh([t.gptSlot]) : window.googletag.display(t.id)
                    }
                }
                ;
                if (t.headerBiddingAllowed) {
                    if (Ft() && i++,
                    Gt() && i++,
                    Ft())
                        try {
                            let e = [{
                                slotName: t.adUnitPath,
                                slotID: t.id,
                                sizes: [[t.width, t.height]]
                            }];
                            bt() && (e = window?.assertive?.addAmazonFloors?.(e)),
                            window.apstag.fetchBids({
                                slots: e,
                                timeout: 1500
                            }, ( () => {
                                n()
                            }
                            ))
                        } catch {
                            n()
                        }
                    if (Gt())
                        try {
                            window.pbjs.requestBids({
                                adUnitCodes: [t.adUnitPath],
                                bidsBackHandler: () => {
                                    n()
                                }
                            })
                        } catch {
                            n()
                        }
                    Ft() || Gt() || n()
                } else
                    n()
            }
            ;
            clearAd(t) {
                const i = this.getDisplaySlotID(t);
                if (!i)
                    return void console.error("%cPOKI:%c PokiSDK.destroyAd() called on a container without ad", "font-weight: bold", "");
                const n = this.slotMap.get(i) || null;
                if (n) {
                    for (n.onCanDestroy && !n.onCanDestroyCalled && Z("PokiSDK.destroyAd() called without waiting for onCanDestroy"),
                    te.track(e.tracking.screen.destroyAd, {
                        opportunityId: n.opportunityId,
                        okToDestroy: n.onCanDestroyCalled,
                        platformAd: n.platformAd
                    }),
                    n.intersectionObserver?.disconnect(),
                    n.gptSlot && googletag?.destroySlots?.([n.gptSlot]); t.lastChild; )
                        t.removeChild(t.lastChild);
                    t.removeAttribute("data-poki-ad-id"),
                    this.slotMap.delete(n.id)
                }
            }
            getDisplaySlotID(e) {
                if (!e)
                    return null;
                const t = e.getAttribute("data-poki-ad-id");
                return t || null
            }
            requestHouseAd = (t, i) => {
                let n = `${t.width}x${t.height}`;
                "300x600" === n && (n = "160x600");
                const o = {
                    ...i,
                    dfpIsBackfill: void 0,
                    dfpLineItemId: void 0,
                    dfpCampaignId: void 0,
                    size: n,
                    bidder: "poki",
                    bid: 0
                };
                W({
                    ...o,
                    event: "request"
                }),
                ke(`https://api.poki.com/ads/houseads/display/${n}`).then((e => e.json())).then((n => {
                    const a = `<img draggable="false" src="${n.asset}" alt="house ad" style="display:block; margin:0 auto;" />`;
                    let r = a;
                    F.isPokiExternal && n.click_through_url && (r = `<a href="${n.click_through_url}" target="_blank" rel="noopener noreferrer">${a}</a>`),
                    t.innerAdContainer.innerHTML = r,
                    t.onDisplayRendered && t.onDisplayRendered(!0),
                    i.houseAdId = n.id,
                    i.isEmpty = !1,
                    te.track(e.tracking.ads.display.impression, i),
                    W({
                        ...o,
                        event: "impression"
                    }),
                    setTimeout(( () => {
                        W({
                            ...o,
                            event: "viewable"
                        })
                    }
                    ), 1e3)
                }
                )).catch(( () => {
                    t.onDisplayRendered && t.onDisplayRendered(!0)
                }
                ))
            }
        }
        class Zi extends $i {
            requestAd = e => {
                W({
                    event: "request",
                    size: e.size,
                    opportunityId: e.opportunityId,
                    adUnitPath: e.adUnitPath
                });
                let t = 0;
                const i = () => {
                    t--,
                    t > 0 || this.allBidsBack(e.id)
                }
                ;
                if (Ft() && t++,
                Gt() && t++,
                Ft())
                    try {
                        let t = [{
                            slotName: e.adUnitPath,
                            slotID: e.id,
                            sizes: [[e.width, e.height]]
                        }];
                        bt() && (t = window?.assertive?.addAmazonFloors?.(t)),
                        window.apstag.fetchBids({
                            slots: t,
                            timeout: 1500
                        }, (t => {
                            t && t.length > 0 && (e.amznTargetting = t[0]),
                            i()
                        }
                        ))
                    } catch {
                        i()
                    }
                if (Gt())
                    try {
                        window.pbjs.requestBids({
                            adUnitCodes: [e.adUnitPath],
                            bidsBackHandler: () => {
                                e.pbjsTargetting = window.pbjs.getAdserverTargetingForAdUnitCode([e.adUnitPath]),
                                i()
                            }
                        })
                    } catch {
                        i()
                    }
                Ft() || Gt() || (e.pbjsTargetting = {},
                e.amznTargetting = {},
                i())
            }
            ;
            allBidsBack(t) {
                const i = this.slotMap.get(t);
                if (!i)
                    return;
                const n = document.createElement("iframe");
                n.setAttribute("frameborder", "0"),
                n.setAttribute("scrolling", "no"),
                n.setAttribute("marginheight", "0"),
                n.setAttribute("marginwidth", "0"),
                n.setAttribute("topmargin", "0"),
                n.setAttribute("leftmargin", "0"),
                n.setAttribute("allowtransparency", "true"),
                n.setAttribute("width", `${i.width}`),
                n.setAttribute("height", `${i.height}`);
                const o = document.getElementById(i.id);
                if (!o)
                    return void console.error("%cPOKI:%c display error - container not found", "font-weight: bold", "", t);
                o.appendChild(n);
                const a = n?.contentWindow?.document;
                if (!a)
                    return console.error("%cPOKI:%c display error - iframe injection for ad failed", "font-weight: bold", "", t),
                    void this.clearAd(o.parentNode);
                let r = !0
                  , s = i.pbjsTargetting.hb_bidder
                  , d = parseFloat(i.pbjsTargetting.hb_pb);
                Number.isNaN(d) && (d = 0);
                const c = (l = i?.amznTargetting?.amznbid,
                _e[l] || 0);
                var l;
                c > d ? (s = Se(i?.amznTargetting?.amnzp),
                d = c,
                r = !1,
                this.renderAMZNAd(i.id, o, a)) : this.renderPrebidAd(i.id, o, a);
                const p = !s;
                te.track(e.tracking.ads.display.impression, {
                    size: i.size,
                    opportunityId: i.opportunityId,
                    duringGameplay: i.duringGameplay,
                    adUnitPath: i.adUnitPath,
                    prebidBid: d,
                    prebidBidder: s,
                    preBidWon: r,
                    dfpIsBackfill: !1,
                    dfpLineItemId: void 0,
                    dfpCampaignId: void 0,
                    adDomain: i.pbjsTargetting.hb_adomain,
                    isEmpty: p
                }),
                W({
                    event: "impression",
                    size: i.size,
                    opportunityId: i.opportunityId,
                    adUnitPath: i.adUnitPath,
                    bidder: s,
                    bid: d
                }),
                i.onDisplayRendered && i.onDisplayRendered(p),
                p ? this.callOnCanDestroy(i.id) : (i.intersectionObserver = new IntersectionObserver((e => {
                    e.forEach((e => {
                        const {isIntersecting: t} = e;
                        t ? i.intersectingTimer || (i.intersectingTimer = setTimeout(( () => {
                            i.intersectionObserver?.unobserve(e.target),
                            W({
                                event: "viewable",
                                size: i.size,
                                opportunityId: i.opportunityId,
                                adUnitPath: i.adUnitPath,
                                bidder: s,
                                bid: d
                            }),
                            this.callOnCanDestroy(i.id)
                        }
                        ), 1e3)) : i.intersectingTimer && (clearTimeout(i.intersectingTimer),
                        i.intersectingTimer = void 0)
                    }
                    ))
                }
                ),{
                    threshold: .5
                }),
                i.intersectionObserver.observe(o))
            }
            renderPrebidAd(e, t, i) {
                const n = this.slotMap.get(e);
                if (n)
                    return n.pbjsTargetting.hb_adid ? void window.pbjs.renderAd(i, n.pbjsTargetting.hb_adid) : (console.warn("%cPOKI:%c display error - prebid nothing to render", "font-weight: bold", "", e, n.pbjsTargetting),
                    void this.clearAd(t.parentNode))
            }
            renderAMZNAd(e, t, i) {
                const n = this.slotMap.get(e);
                if (n)
                    return n?.amznTargetting?.amzniid ? void window.apstag.renderImp(i, n?.amznTargetting?.amzniid) : (console.warn("%cPOKI:%c display error - amazon nothing to render", "font-weight: bold", "", e, n.pbjsTargetting),
                    void this.clearAd(t.parentNode))
            }
            setupGPT = (e, t) => {}
            ;
            setupSlotRenderEndedListener = () => {}
        }
        const Xi = "once"
          , Yi = "force"
          , Ji = "on"
          , en = "off";
        let tn = []
          , nn = "";
        function on() {
            return tn
        }
        function an(e) {
            tn = e
        }
        function rn() {
            return nn
        }
        function sn(e) {
            if ("" !== e && e !== Xi && e !== Yi && e !== Ji && e !== en)
                throw new Error(`Invalid playtest capture mode: ${e}`);
            nn = e
        }
        const dn = ( () => {
            let e = 0;
            return () => (e += 1,
            `u${`0000${((36 * Math.random()) ** 4 | 0).toString(36)}`.slice(-4)}${e}`)
        }
        )();
        function cn(e) {
            const t = [];
            for (let i = 0, n = e.length; i < n; i++)
                t.push(e[i]);
            return t
        }
        function ln(e) {
            return "style"in e
        }
        const pn = (e, t) => {
            if (e instanceof t)
                return !0;
            const i = Object.getPrototypeOf(e);
            return null !== i && (i.constructor.name === t.name || pn(i, t))
        }
          , An = new Set(["cx", "cy", "x", "y", "r", "rx", "ry", "d", "fill", "alignment-baseline", "baseline-shift", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-rendering", "dominant-baseline", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "glyph-orientation-horizontal", "glyph-orientation-vertical", "lighting-color", "marker-end", "marker-mid", "marker-start", "paint-order", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "vector-effect"])
          , mn = {
            html: void 0,
            svg: void 0
        };
        function un(e, t={}) {
            const i = pn(e, SVGElement) ? "svg" : "html"
              , n = mn[i];
            if (n)
                return n;
            const o = t.includeStyleProperties ?? cn(window.getComputedStyle(document.documentElement))
              , a = "html" === i ? o.filter((e => !An.has(e))) : [...o];
            return mn[i] = a,
            a
        }
        function gn(e, t) {
            const i = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
            return i ? parseFloat(i.replace("px", "")) : 0
        }
        function hn(e, t={}) {
            return {
                width: t.width || function(e) {
                    const t = gn(e, "border-left-width")
                      , i = gn(e, "border-right-width");
                    return e.clientWidth + t + i
                }(e),
                height: t.height || function(e) {
                    const t = gn(e, "border-top-width")
                      , i = gn(e, "border-bottom-width");
                    return e.clientHeight + t + i
                }(e)
            }
        }
        const wn = 16384;
        function vn(e) {
            return new Promise(( (t, i) => {
                const n = new Image;
                n.decode = () => t(n),
                n.onload = () => t(n),
                n.onerror = i,
                n.crossOrigin = "anonymous",
                n.decoding = "async",
                n.src = e
            }
            ))
        }
        async function fn(e, t, i) {
            const n = "http://www.w3.org/2000/svg"
              , o = document.createElementNS(n, "svg")
              , a = document.createElementNS(n, "foreignObject");
            return o.setAttribute("width", `${t}`),
            o.setAttribute("height", `${i}`),
            o.setAttribute("viewBox", `0 0 ${t} ${i}`),
            a.setAttribute("width", "100%"),
            a.setAttribute("height", "100%"),
            a.setAttribute("x", "0"),
            a.setAttribute("y", "0"),
            a.setAttribute("externalResourcesRequired", "true"),
            o.appendChild(a),
            a.appendChild(e),
            async function(e) {
                return Promise.resolve().then(( () => (new XMLSerializer).serializeToString(e))).then(encodeURIComponent).then((e => `data:image/svg+xml;charset=utf-8,${e}`))
            }(o)
        }
        function bn(e, t, i, n) {
            const o = `.${e}:${t}`
              , a = i.cssText ? function(e) {
                const t = e.getPropertyValue("content");
                return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`
            }(i) : function(e, t) {
                return un(document.documentElement, t).map((t => `${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t) ? " !important" : ""};`)).join(" ")
            }(i, n);
            return document.createTextNode(`${o}{${a}}`)
        }
        function yn(e, t, i, n) {
            const o = window.getComputedStyle(e, i)
              , a = o.getPropertyValue("content");
            if ("" === a || "none" === a)
                return;
            const r = dn();
            try {
                t.className = `${t.className} ${r}`
            } catch {
                return
            }
            const s = document.createElement("style");
            s.appendChild(bn(r, i, o, n)),
            t.appendChild(s)
        }
        const kn = "application/font-woff"
          , xn = "image/jpeg"
          , _n = {
            woff: kn,
            woff2: kn,
            ttf: "application/font-truetype",
            eot: "application/vnd.ms-fontobject",
            png: "image/png",
            jpg: xn,
            jpeg: xn,
            gif: "image/gif",
            tiff: "image/tiff",
            svg: "image/svg+xml",
            webp: "image/webp"
        };
        function In(e) {
            const t = function(e) {
                const t = /\.([^./]*?)$/g.exec(e);
                return t ? t[1] : ""
            }(e).toLowerCase();
            return _n[t] || ""
        }
        function Sn(e) {
            return -1 !== e.search(/^(data:)/)
        }
        function En(e, t) {
            return `data:${t};base64,${e}`
        }
        async function Cn(e, t, i) {
            const n = await fetch(e, t);
            if (404 === n.status)
                throw new Error(`Resource "${n.url}" not found`);
            const o = await n.blob();
            return new Promise(( (e, t) => {
                const a = new FileReader;
                a.onerror = t,
                a.onloadend = () => {
                    try {
                        e(i({
                            res: n,
                            result: a.result
                        }))
                    } catch (e) {
                        t(e)
                    }
                }
                ,
                a.readAsDataURL(o)
            }
            ))
        }
        const Pn = {};
        async function Bn(e, t, i) {
            const n = function(e, t, i) {
                let n = e.replace(/\?.*/, "");
                return i && (n = e),
                /ttf|otf|eot|woff2?/i.test(n) && (n = n.replace(/.*\//, "")),
                t ? `[${t}]${n}` : n
            }(e, t, i.includeQueryParams);
            if (null != Pn[n])
                return Pn[n];
            let o;
            i.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (new Date).getTime());
            try {
                const n = await Cn(e, i.fetchRequestInit, ( ({res: e, result: i}) => (t || (t = e.headers.get("Content-Type") || ""),
                function(e) {
                    return e.split(/,/)[1]
                }(i))));
                o = En(n, t)
            } catch (t) {
                o = i.imagePlaceholder || "";
                let n = `Failed to fetch resource: ${e}`;
                t && (n = "string" == typeof t ? t : t.message),
                n && console.warn("%cPOKI:%c failed to fetch resource", "font-weight: bold", "", n)
            }
            return Pn[n] = o,
            o
        }
        async function Tn(e, t) {
            return pn(e, HTMLCanvasElement) ? async function(e) {
                try {
                    if (e.getContext("2d"))
                        return vn(e.toDataURL())
                } catch {}
                if (0 === e.width || 0 === e.height)
                    return vn("data:,");
                const t = document.createElement("canvas").getContext("2d", {
                    alpha: !0
                });
                t.canvas.width = e.width,
                t.canvas.height = e.height;
                const i = t.getImageData(0, 0, t.canvas.width, t.canvas.height);
                return vn(await new Promise((n => {
                    try {
                        requestAnimationFrame(( () => {
                            const o = document.createElement("canvas").getContext("webgl2")
                              , a = o.createTexture()
                              , r = o.createFramebuffer();
                            o.bindTexture(o.TEXTURE_2D, a),
                            o.bindFramebuffer(o.FRAMEBUFFER, r),
                            o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, o.RGBA, o.UNSIGNED_BYTE, e),
                            o.framebufferTexture2D(o.FRAMEBUFFER, o.COLOR_ATTACHMENT0, o.TEXTURE_2D, a, 0),
                            o.readPixels(0, 0, e.width, e.height, o.RGBA, o.UNSIGNED_BYTE, new Uint8Array(i.data.buffer)),
                            t.putImageData(i, 0, 0),
                            o.deleteTexture(a),
                            o.deleteFramebuffer(r);
                            const s = o.getExtension("WEBGL_lose_context");
                            s && s.loseContext(),
                            n(t.canvas.toDataURL())
                        }
                        ))
                    } catch {
                        n("data:,")
                    }
                }
                )))
            }(e) : pn(e, HTMLVideoElement) ? async function(e, t) {
                if (e.currentSrc) {
                    const t = document.createElement("canvas")
                      , i = t.getContext("2d");
                    return t.width = e.clientWidth,
                    t.height = e.clientHeight,
                    i?.drawImage(e, 0, 0, t.width, t.height),
                    vn(t.toDataURL())
                }
                const {poster: i} = e
                  , n = In(i);
                return vn(await Bn(i, n, t))
            }(e, t) : pn(e, HTMLIFrameElement) ? async function(e, t) {
                try {
                    if (e?.contentDocument?.body)
                        return await On(e.contentDocument.body, t, !0)
                } catch {}
                return e.cloneNode(!1)
            }(e, t) : e.cloneNode(Mn(e))
        }
        const Dn = e => "SLOT" === e.tagName?.toUpperCase()
          , Mn = e => null != e.tagName && "SVG" === e.tagName.toUpperCase();
        function Rn(e, t, i) {
            return function(e, t, i) {
                const n = t.style;
                if (!n)
                    return;
                const o = window.getComputedStyle(e);
                o.cssText ? (n.cssText = o.cssText,
                n.transformOrigin = o.transformOrigin) : un(e, i).forEach((i => {
                    let a = o.getPropertyValue(i);
                    if ("font-size" === i && a.endsWith("px")) {
                        const e = Math.floor(parseFloat(a.substring(0, a.length - 2))) - .1;
                        a = `${e}px`
                    }
                    pn(e, HTMLIFrameElement) && "display" === i && "inline" === a && (a = "block"),
                    "d" === i && t.getAttribute("d") && (a = `path(${t.getAttribute("d")})`),
                    n.setProperty(i, a, o.getPropertyPriority(i))
                }
                ))
            }(e, t, i),
            pn(e, HTMLElement) && pn(t, HTMLElement) && (function(e, t) {
                pn(e, HTMLTextAreaElement) && (t.innerHTML = e.value),
                pn(e, HTMLInputElement) && t.setAttribute("value", e.value)
            }(e, t),
            function(e, t) {
                if (pn(e, HTMLSelectElement)) {
                    const i = t
                      , n = Array.from(i.children).find((t => e.value === t.getAttribute("value")));
                    n && n.setAttribute("selected", "")
                }
            }(e, t),
            function(e, t, i) {
                yn(e, t, ":before", i),
                yn(e, t, ":after", i)
            }(e, t, i),
            i.patchScroll) ? function(e, t) {
                if (0 === e.scrollTop && 0 === e.scrollLeft || !t.children)
                    return t;
                for (let i = 0; i < t.children.length; i += 1) {
                    const n = t.children[i];
                    if (!n.children)
                        continue;
                    const {transform: o} = n.style
                      , a = new DOMMatrix(o)
                      , {a: r, b: s, c: d, d: c} = a;
                    a.a = 1,
                    a.b = 0,
                    a.c = 0,
                    a.d = 1,
                    a.translateSelf(-e.scrollLeft, -e.scrollTop),
                    a.a = r,
                    a.b = s,
                    a.c = d,
                    a.d = c,
                    n.style.transform = a.toString()
                }
                return t
            }(e, t) : t
        }
        let Ln = 0;
        async function On(e, t, i) {
            return i || !t.filter || t.filter(e) ? ln(e) ? (Ln++,
            Ln % 5 == 0 && await (n = 0,
            e => new Promise((t => {
                setTimeout(( () => t(e)), n)
            }
            ))),
            Promise.resolve(e).then((e => Tn(e, t))).then((i => async function(e, t, i) {
                if (Mn(t))
                    return t;
                let n = [];
                return n = Dn(e) && e.assignedNodes ? cn(e.assignedNodes()) : pn(e, HTMLIFrameElement) && e.contentDocument?.body ? cn(e.contentDocument.body.childNodes) : cn(("shadowRoot"in e ? e.shadowRoot ?? e : e).childNodes),
                0 === n.length || pn(e, HTMLVideoElement) || await n.reduce(( (e, n) => e.then(( () => On(n, i))).then((e => {
                    e && t.appendChild(e)
                }
                ))), Promise.resolve()),
                t
            }(e, i, t))).then((i => Rn(e, i, t))).then((e => async function(e, t) {
                const i = e.querySelectorAll ? e.querySelectorAll("use") : [];
                if (0 === i.length)
                    return e;
                const n = {};
                for (let o = 0; o < i.length; o++) {
                    const a = i[o].getAttribute("xlink:href");
                    if (a) {
                        const i = e.querySelector(a)
                          , o = document.querySelector(a);
                        i || !o || n[a] || (n[a] = await On(o, t, !0))
                    }
                }
                const o = Object.values(n);
                if (o.length) {
                    const t = "http://www.w3.org/1999/xhtml"
                      , i = document.createElementNS(t, "svg");
                    i.setAttribute("xmlns", t),
                    i.style.position = "absolute",
                    i.style.width = "0",
                    i.style.height = "0",
                    i.style.overflow = "hidden",
                    i.style.display = "none";
                    const n = document.createElementNS(t, "defs");
                    i.appendChild(n);
                    for (let e = 0; e < o.length; e++)
                        n.appendChild(o[e]);
                    e.appendChild(i)
                }
                return e
            }(e, t)))) : e.cloneNode(!1) : null;
            var n
        }
        const Nn = /url\((['"]?)([^'"]+?)\1\)/g
          , zn = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g
          , Un = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
        async function jn(e, t, i, n, o) {
            try {
                const a = i ? function(e, t) {
                    if (e.match(/^[a-z]+:\/\//i))
                        return e;
                    if (e.match(/^\/\//))
                        return window.location.protocol + e;
                    if (e.match(/^[a-z]+:/i))
                        return e;
                    const i = document.implementation.createHTMLDocument()
                      , n = i.createElement("base")
                      , o = i.createElement("a");
                    return i.head.appendChild(n),
                    i.body.appendChild(o),
                    t && (n.href = t),
                    o.href = e,
                    o.href
                }(t, i) : t
                  , r = In(t);
                let s;
                if (o) {
                    s = En(await o(a), r)
                } else
                    s = await Bn(a, r, n);
                return e.replace(function(e) {
                    const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
                    return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")
                }(t), `$1${s}$3`)
            } catch {}
            return e
        }
        function Fn(e) {
            return -1 !== e.search(Nn)
        }
        async function Gn(e, t, i) {
            if (!Fn(e))
                return e;
            const n = function(e, {preferredFontFormat: t}) {
                return t ? e.replace(Un, (e => {
                    for (; ; ) {
                        const [i,,n] = zn.exec(e) || [];
                        if (!n)
                            return "";
                        if (n === t)
                            return `src: ${i};`
                    }
                }
                )) : e
            }(e, i)
              , o = function(e) {
                const t = [];
                return e.replace(Nn, ( (e, i, n) => (t.push(n),
                e))),
                t.filter((e => !Sn(e)))
            }(n);
            return o.reduce(( (e, n) => e.then((e => jn(e, n, t, i)))), Promise.resolve(n))
        }
        async function Vn(e, t, i) {
            const n = t.style?.getPropertyValue(e);
            if (n) {
                const o = await Gn(n, null, i);
                return t.style.setProperty(e, o, t.style.getPropertyPriority(e)),
                !0
            }
            return !1
        }
        async function Hn(e, t) {
            ln(e) && (await async function(e, t) {
                await Vn("background", e, t) || await Vn("background-image", e, t),
                await Vn("mask", e, t) || await Vn("mask-image", e, t)
            }(e, t),
            await async function(e, t) {
                const i = pn(e, HTMLImageElement)
                  , n = pn(e, SVGImageElement);
                if ((!i || Sn(e.src)) && (!n || Sn(e.href.baseVal)))
                    return;
                const o = i ? e.src : e.href.baseVal
                  , a = await Bn(o, In(o), t);
                await new Promise(( (t, n) => {
                    e.onload = t,
                    e.onerror = n;
                    const o = e;
                    o.decode && (o.decode = t),
                    "lazy" === o.loading && (o.loading = "eager"),
                    i ? (e.srcset = "",
                    e.src = a) : e.href.baseVal = a
                }
                ))
            }(e, t),
            await async function(e, t) {
                const i = cn(e.childNodes).map((e => Hn(e, t)));
                await Promise.all(i).then(( () => e))
            }(e, t))
        }
        const qn = {};
        async function Qn(e) {
            let t = qn[e];
            if (null != t)
                return t;
            const i = await fetch(e);
            return t = {
                url: e,
                cssText: await i.text()
            },
            qn[e] = t,
            t
        }
        async function Wn(e, t) {
            let {cssText: i} = e;
            const n = /url\(["']?([^"')]+)["']?\)/g
              , o = (i.match(/url\([^)]+\)/g) || []).map((async o => {
                let a = o.replace(n, "$1");
                return a.startsWith("https://") || (a = new URL(a,e.url).href),
                Cn(a, t.fetchRequestInit, ( ({result: e}) => (i = i.replace(o, `url(${e})`),
                [o, e])))
            }
            ));
            return Promise.all(o).then(( () => i))
        }
        function Kn(e) {
            if (null == e)
                return [];
            const t = [];
            let i = e.replace(/(\/\*[\s\S]*?\*\/)/gi, "");
            const n = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");
            for (; ; ) {
                const e = n.exec(i);
                if (null === e)
                    break;
                t.push(e[0])
            }
            i = i.replace(n, "");
            const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi
              , a = new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");
            for (; ; ) {
                let e = o.exec(i);
                if (null === e) {
                    if (e = a.exec(i),
                    null === e)
                        break;
                    o.lastIndex = a.lastIndex
                } else
                    a.lastIndex = o.lastIndex;
                t.push(e[0])
            }
            return t
        }
        async function $n(e, t) {
            if (null == e.ownerDocument)
                throw new Error("Provided element is not within a Document");
            const i = cn(e.ownerDocument.styleSheets)
              , n = await async function(e, t) {
                const i = []
                  , n = [];
                return e.forEach((i => {
                    if ("cssRules"in i)
                        try {
                            cn(i.cssRules || []).forEach(( (e, o) => {
                                if (e instanceof CSSImportRule) {
                                    let a = o + 1;
                                    const r = Qn(e.href).then((e => Wn(e, t))).then((e => Kn(e).forEach((e => {
                                        try {
                                            i.insertRule(e, e.startsWith("@import") ? a += 1 : i.cssRules.length)
                                        } catch (t) {
                                            console.error("Error inserting rule from remote css", {
                                                rule2: e,
                                                err: t
                                            })
                                        }
                                    }
                                    )))).catch((e => {
                                        console.error("Error loading remote css", e.toString())
                                    }
                                    ));
                                    n.push(r)
                                }
                            }
                            ))
                        } catch (o) {
                            const a = e.find((e => null == e.href)) || document.styleSheets[0];
                            null != i.href && n.push(Qn(i.href).then((e => Wn(e, t))).then((e => Kn(e).forEach((e => {
                                a.insertRule(e, a.cssRules.length)
                            }
                            )))).catch((e => {
                                console.error("Error loading remote stylesheet", e)
                            }
                            ))),
                            console.error("Error inlining remote css file", o)
                        }
                }
                )),
                Promise.all(n).then(( () => (e.forEach((e => {
                    if ("cssRules"in e)
                        try {
                            cn(e.cssRules || []).forEach((e => {
                                i.push(e)
                            }
                            ))
                        } catch (t) {
                            console.error(`Error while reading CSS rules from ${e.href}`, t)
                        }
                }
                )),
                i)))
            }(i, t);
            return function(e) {
                return e.filter((e => e instanceof CSSFontFaceRule)).filter((e => Fn(e.style.getPropertyValue("src"))))
            }(n)
        }
        async function Zn(e, t) {
            const i = null != t.fontEmbedCSS ? t.fontEmbedCSS : t.skipFonts ? null : await async function(e, t) {
                const i = await $n(e, t);
                return (await Promise.all(i.map((e => {
                    const i = e.parentStyleSheet ? e.parentStyleSheet.href : null;
                    return Gn(e.cssText, i, t)
                }
                )))).join("\n")
            }(e, t);
            if (i) {
                const t = document.createElement("style")
                  , n = document.createTextNode(i);
                t.appendChild(n),
                e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
            }
        }
        async function Xn(e, t={}) {
            const {width: i, height: n} = hn(e, t)
              , o = await On(e, t, !0);
            await Zn(o, t),
            await Hn(o, t),
            function(e, t) {
                const {style: i} = e;
                t.backgroundColor && (i.backgroundColor = t.backgroundColor),
                t.width && (i.width = `${t.width}px`),
                t.height && (i.height = `${t.height}px`);
                const n = t.style;
                null != n && Object.keys(n).forEach((e => {
                    i[e] = n[e]
                }
                ))
            }(o, t);
            return await fn(o, i, n)
        }
        async function Yn(e, t={}) {
            const {width: i, height: n} = hn(e, t)
              , o = await Xn(e, t)
              , a = await vn(o)
              , r = document.createElement("canvas")
              , s = r.getContext("2d")
              , d = window.devicePixelRatio || 1
              , c = t.canvasWidth || i
              , l = t.canvasHeight || n;
            return r.width = c * d,
            r.height = l * d,
            t.skipAutoScale || function(e) {
                (e.width > wn || e.height > wn) && (e.width > wn && e.height > wn ? e.width > e.height ? (e.height *= wn / e.width,
                e.width = wn) : (e.width *= wn / e.height,
                e.height = wn) : e.width > wn ? (e.height *= wn / e.width,
                e.width = wn) : (e.width *= wn / e.height,
                e.height = wn))
            }(r),
            r.style.width = `${c}`,
            r.style.height = `${l}`,
            t.backgroundColor && (s.fillStyle = t.backgroundColor,
            s.fillRect(0, 0, r.width, r.height)),
            s.drawImage(a, 0, 0, r.width, r.height),
            r
        }
        async function Jn(e, t={}) {
            return (await Yn(e, t)).toDataURL()
        }
        function eo(e) {
            switch (Object.prototype.toString.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return e instanceof Error
            }
        }
        function to(e) {
            try {
                const t = new WeakSet;
                return JSON.stringify(e, ( (e, i) => {
                    if ("object" == typeof i && null !== i) {
                        if (t.has(i))
                            return "[Circular]";
                        t.add(i)
                    }
                    return i
                }
                ))
            } catch {
                try {
                    return e.toString()
                } catch {
                    return "[Object]"
                }
            }
        }
        let io;
        function no() {
            return io
        }
        const oo = []
          , ao = function(e) {
            let t = !1
              , i = 0;
            return n => {
                if (t)
                    return void i++;
                t = !0,
                setTimeout(( () => {
                    t = !1
                }
                ), e);
                const o = i;
                i = 0,
                n(o)
            }
        }(100)
          , ro = console.error
          , so = ["Audio callback had starved sending audio by"];
        let co = !1;
        const lo = Math.random().toString(36).substring(2);
        let po;
        function Ao() {
            const e = window;
            if (e.config?.unityVersion)
                return e.config.unityVersion;
            if (e.Phaser?.VERSION)
                return e.Phaser.VERSION;
            if (e.pc?.version)
                return e.pc.version;
            if (e.Module?.engineVersion)
                return e.Module.engineVersion;
            const t = no();
            return t || void 0
        }
        function mo(e, t=!0) {
            F.gameID && !F.isPlayground ? ao((t => {
                try {
                    const i = e.message || to(e);
                    oo.push({
                        n: e.name,
                        m: i,
                        s: JSON.stringify(e.stack)
                    }),
                    po && po({
                        name: e.name,
                        message: i,
                        stack: e.stack
                    });
                    const n = JSON.stringify({
                        gid: F.gameID,
                        vid: F.versionID,
                        ve: 7,
                        n: e.name,
                        m: i + (t ? ` (skipped ${t} errors)` : ""),
                        s: JSON.stringify(e.stack),
                        ui: lo,
                        ev: `${Ao()}`
                    })
                      , o = "https://t.poki.io/ge";
                    if (navigator.sendBeacon)
                        navigator.sendBeacon(o, n);
                    else {
                        const e = new XMLHttpRequest;
                        e.open("POST", o, !0),
                        e.send(n)
                    }
                } catch (e) {
                    ro("%cPOKI:%c failed to log error", "font-weight: bold", "", e)
                }
            }
            )) : t && console.error("%cPOKI:%c game error", "font-weight: bold", "", e)
        }
        function uo(e) {
            eo(e.reason) ? mo(e.reason) : mo({
                name: "unhandledrejection",
                message: JSON.stringify(e.reason) || to(e)
            })
        }
        function go(e) {
            eo(e.error) ? mo(e.error) : mo(e)
        }
        function ho() {
            if (F.gameID && !F.isPlayground && !F.isPokiExternal && F.isPokiIframe && !co) {
                co = !0,
                window.addEventListener("unhandledrejection", uo),
                window.addEventListener("error", go);
                try {
                    console.error = (...e) => {
                        const t = to(e);
                        so.some((e => t.includes(e))) || mo({
                            name: "console.error",
                            message: t
                        }, !1),
                        ro.apply(console, e)
                    }
                } catch {}
            }
        }
        function wo() {
            if (co) {
                co = !1,
                window.removeEventListener("unhandledrejection", uo),
                window.removeEventListener("error", go);
                try {
                    console.error = ro
                } catch {}
            }
        }
        "undefined" != typeof window && ho();
        const vo = async e => {
            const {screenshot: t} = e
              , i = await ke("https://api.poki.io/screenshot", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    data: t,
                    p4d_game_id: F.gameID,
                    p4d_version_id: F.versionID
                })
            }, 3e4);
            try {
                if (200 === i.status) {
                    return "https://poki-user-content.com/" + (await i.json()).source
                }
            } catch {}
            return null
        }
          , fo = async () => {
            const e = e => !["VIDEO", "TEXTAREA", "SCRIPT", "NOSCRIPT", "INPUT", "IFRAME"].includes(e.nodeName) && (!("IMG" === e.nodeName && !e.getAttribute("src")) && !e.classList?.contains(ki))
              , t = document.body.style.minWidth
              , i = document.body.style.minHeight;
            document.body.style.minWidth = "100%",
            document.body.style.minHeight = "100%";
            let n = await Jn(document.body, {
                filter: e,
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: "#fff"
            });
            if (n && n.length < 10) {
                const t = document.body.style.position;
                document.body.style.position = "fixed",
                n = await Jn(document.body, {
                    filter: e,
                    width: window.innerWidth,
                    height: window.innerHeight,
                    backgroundColor: "#fff"
                }),
                document.body.style.position = t
            }
            return document.body.style.minWidth = t,
            document.body.style.minHeight = i,
            n
        }
          , bo = async (e=null) => {
            let t = await fo();
            if (t && t.length > 10) {
                e && (t = await (async (e, t) => {
                    const {title: i, thumbnail: n} = t
                      , o = new Image;
                    o.crossOrigin = "Anonymous";
                    const a = new Promise((e => {
                        o.onload = () => e(o)
                    }
                    ));
                    o.src = e;
                    const r = new Image;
                    r.crossOrigin = "Anonymous";
                    const s = new Promise((e => {
                        r.onload = () => e(r)
                    }
                    ));
                    r.src = "https://a.poki-cdn.com/images/screenshot-frame.png";
                    const d = new Image;
                    d.crossOrigin = "Anonymous";
                    const c = new Promise((e => {
                        d.onload = () => e(d)
                    }
                    ));
                    d.src = `https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=128,height=128,fit=cover,f=auto/${n}`;
                    const l = new FontFace("TorusBold","url(https://a.poki-cdn.com/fonts/torus-bold-latin.woff2)").load()
                      , [p,A,m,u] = await Promise.all([a, s, c, l])
                      , g = document.createElement("canvas");
                    g.width = p.width,
                    g.height = p.height;
                    const h = g.getContext("2d");
                    h.drawImage(p, 0, 0);
                    const w = g.width / A.width
                      , v = A.height * w
                      , f = g.height - v;
                    h.drawImage(A, 0, f, g.width, v);
                    const b = m.height * w;
                    ( (e, t, i, n, o, a, r) => {
                        e.save(),
                        e.beginPath();
                        const s = i + o
                          , d = n + a;
                        e.moveTo(i + r, n),
                        e.lineTo(s - r, n),
                        e.quadraticCurveTo(s, n, s, n + r),
                        e.lineTo(s, d - r),
                        e.quadraticCurveTo(s, d, s - r, d),
                        e.lineTo(i + r, d),
                        e.quadraticCurveTo(i, d, i, d - r),
                        e.lineTo(i, n + r),
                        e.quadraticCurveTo(i, n, i + r, n),
                        e.closePath(),
                        e.clip(),
                        e.drawImage(t, i, n, o, a),
                        e.restore()
                    }
                    )(h, m, 64 * w, f + 20 * w, b, b, 24 * w);
                    const {fonts: y} = document;
                    y.add(u);
                    const k = 226 * w
                      , x = f + 68 * w;
                    return h.textAlign = "left",
                    h.textBaseline = "top",
                    h.fillStyle = "#002b50",
                    h.font = `700 ${56 * w}px TorusBold,sans-serif`,
                    h.fillText(i, k, x),
                    g.toDataURL()
                }
                )(t, e));
                return await vo({
                    screenshot: t
                })
            }
            return null
        }
        ;
        const yo = M() || R() || he;
        let ko = !1;
        const xo = new Image;
        xo.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAdCAYAAACqhkzFAAADE2lDQ1BJQ0MgcHJvZmlsZQAAeNp9kk9s21Qcxz+2X92qCh4qYRqoqnIAKqoNma6gbkAhadI/tOuyJB1t4IDrOHUSx7ZsZyw9IuAIk+AAJ1BXCQ4cOMDWgZDQDttlEoi/EkIc0DQuO1ExTYIqHOKsOfEu7/s++r7v7/d+eiB2DN93BNB0o6Awn0mtrZdTg38i8TAjPMghwwz9dD6/DNDb+5YEd35GAvjhmOH7zpWvPt3rnJoYe2f/8/GxV3N3+f81XLFCE/gX5C9NP4hA2QXyr0V+BGIISAZr62UQo0Bys6t1ILnR1VkgGZQKsyDWgJRpGxUQ54GjG318s083nZYZ9zAGJIJWYRXQQDofNopLsX7LNHJF4H6Q3rOtxWVAgLTjR5lC7PmkGsytxp5Ldmuhl3OtFi2WYv1jw1sqAMMg/WGGs+XeXXdj5TSQAOl2q7GajvndipXN9TyBV4g9srpll14CVJBHwnPFHDAC8pEte3Yl5hN148V87NctZz6uKz/rR/nT9+o6K8vAYZDnrPDgjZFdWuhq+ZUoKPXuOtXa3GKcec4OFgqxft138su9TCPIzQNJkN+23NVil8vbFSO7FOd8JkbFjHhOTIuMmBEvkKVGiI+DRZ08Bi4RBg4OxsCtge85hYdLjQiPoO9k0SJgiRp1LBy2pDMUMbGxCGjifZG8uvNTYnfoekSRBvUuF0kxLdLiefGMeEqcIE2VmvwQBvX3vfbJszYZajhUCGlwk4BmdaZ98qytX9cv6lf0X/Tb+o7yobKr3FC+Vi6TwcKK/fdqa0PaMS2tTWhJbVAb1R4lR4MAA5cVbtImIuIOZQxCHDxcdUodV6fUx0mp42pWPaE+qT7dNxuDNkUa3CKgCX1/VwIS8ayngFFm8fBpE1BjE5uIFGn8eMYpFnExeYKjpJhEZ5Lja+vlVDdu7wwSIB2+ccC8bZj+G5QLB2zjA7j8Jhz59YA98hEcegMufesbgQGAAsjVKvz1Mdy3Dg98B8Mvh9Xjk93uExkY+L3T2XsMBt+F/Qudzj/bnc7+RVB+g2/c/wD2jOYIAU+O+QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAQpSURBVHjapFZLLFx9FD9z74x2COod72eQUCLSSGhrPOoRFhY23xcaYtdWx6O0lSbNJxQpY6ZtpG2w6aIWFgRhiIVHLBoiLLxJBB2PIMSMx2B6zr+9k2lSH6Mnubn/3HPv75zzO68rSklJKQoPD1fs7u6CwWCAs7MzEIlExvv5+Tl7TufT09PfdPSc9CR6vR54ngd+YWFhxMrK6lZgYKBaq9UaPza9kwjgpjoSQU86juOAx/PLxcXFu9bW1qd+fn5DBwcHfw0ox8tyfn4+3tLSUu/v7z+k0+n+CvA5AdJD9DQBPT1B0GFTT80B5PAsIWVcXBxT9PT0vJmYmHjh5OQE1xEC5MlKU1MTtLa2sofd3d1Vk5OT1wJlScHLIicnB+Lj45nrg4ODFH6ira2tztvbe4Q4NYfDMgJMS0uDoKAgFvrx8TEMDw8DJuqBjY2NlkAPDw+vxqHol0YsFhvdrqqqguLiYnZWq9Vvp6ennzk4OFwpZPFFitraWmakpqaGEvWWnMDiV+zs7FyalAuluroaioqKhOzXzczMFF/mKXdZCHV1dcbwe3t7a+fm5uT/B8pdhRcKv6CgQCgp5ezsbAGBCgkxG5Ckvr4eCgsL2bmvr68eh0r+nzzlzClahUIBcrlc8PQdltVTe3v73zzlzO0EpVIJZWVlAqeqpaWlJ6aectfp18rKSmhoaBDq9D2CPrazs2Oeii/7mKY01SMNX+qWlZUV2NzcBBx1gF0E+/v7BPohNjZWjFNKJaZO+VO2BNne3obk5GRYX1/Xb2xsSC56b2BgQImGpRd6mJeXB1lZWay3iSMcaQxMKpVuHx0d6XASLXt6eq7iLllFL1fRO42Hh8eeEVBYNjQYSktLobm5Gdra2piH7e3tgIOXNT/2eTb2dndXVxckJSXByckJ0Nnd3R0QEHiM+BWGLFGpVGBhYQGRkZFnHR0dLFnEGYWL1mFtbQ3GxsaIT9uKioqvBI4UgEajgeXlZXB1dWW8klUt0djS0mJITEzU0UTCLaiJiIhQ0xmtGkhwJRDR7GpsbJRRcvAbyM/PBy8vL2a4pKSEVin/HN+/QdMa0y9BS98x5HsxMTHv+vv7X+N0EaWmpoKvry84OjpSQdPwvY27/DNFEBAQwAAp20QbhVyKBymFiB98y8jIuB8VFbVKSxvJd8a+vYOh6mUyGd/Z2Qmjo6OwtbXlhpwthYWFTe7t7TFKcAX/nIf4F8DA0tPTW3De/Yt8GMgaJSchIeE/9OjR+Pi4JDg42FgBPj4+A7gevru4uBj/LJydnRmPRP5NtP6xvLz8H+KSwCg5tEcwlE38VWkQgHBFDGVnZydlZmbK3Nzc+smoRCJh7wuVIs7NzX2IJfEFC5d1A2WPSoE2A/3vREdHv5+amgoPCQn5FBoa+oWooMzSu6blJsgPAQYACgtfMJolu7EAAAAASUVORK5CYII=",
        xo.onload = () => {
            ko = !0
        }
        ;
        class _o {
            image = null;
            ready = !1;
            drawSize = 0;
            previousMouseDown = !1;
            #N = 20;
            #z = 60;
            #U = 100;
            #j = 40;
            #F = 2;
            constructor(e) {
                this.image = new Image,
                this.image.src = e,
                this.image.onload = () => {
                    this.ready = !0
                }
            }
            update(e) {
                e && !this.previousMouseDown && (this.drawSize += this.#N,
                this.drawSize = Math.min(Math.max(this.drawSize, this.#z), this.#U)),
                this.drawSize -= this.#F,
                this.drawSize = e ? Math.max(this.drawSize, this.#j) : Math.max(this.drawSize, 0),
                this.previousMouseDown = e
            }
            draw(e, t, i) {
                const n = this.drawSize / 2
                  , o = t - n
                  , a = i - n;
                e.drawImage(this.image, 0, 0, this.image.width, this.image.height, o, a, this.drawSize, this.drawSize)
            }
            destroy() {
                this.image = null,
                this.ready = !1
            }
        }
        const Io = new _o("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAtCAYAAADV2ImkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAArGSURBVHgBvVlbbFxHGZ451z273rXXsWt7k5RESpwoJqQpqdI2hTiNeQDaB0COoAIkHgolECQuEpc+eA0SD6ihBKrmIU+FloK3SJFIoWpDurmASy5qIbEJJaI0TryRb3vzXs5lZpg5O7N79vTs2gkVRxrP8dkzM9988/3/P/MfCN6HixACxwGA6fFxaXB2AGYTGRgfGCCJTIak6e/DY2N4jL4GISTgf7wguMPLBTk+rloj39srK+TDsqrvkSD4kARAlyTBGHsHYVKg1bsIo+sEgb+Zjnk69NpT6bGxMftOwd8uYDg6OiGte2Rdf2zLzq+rmv7VkAI7dRkAnSJVaJFpjxDWOsYUEqLFocVEAFRpMR0yYznOmepy/kfvHD14LZVKodsCsNoXk8mkZO38Yq/Wn0jquv5EhwpAWAHAoGBDtGgcsMTBuoABB0xvLFpMWioOAGValmkxbfRCaak0/pOPxa6tlvFVAR4dHZW3fOdX3zI07cmYBjujFGwHBRumdYiC1ChglQGGNcCssNEJqRXGsM0BM5ZLTq0ULQAKJpkplys/3jH78rEDBw6wObYFLq+AFY4mk9rWL/z0F7Gw/v3eEAytCQHQrQMQp6VTqxXGdkSpMS5Yd5mn9zpfAVYb/H+2GkxC7qrIsBMo6iMzxqa7doTzr50/fx7dMcMHJ6b6ezZseSluyHsYyC4OMMLlwICotAdVrmlXsCs6xi7NVBagJgvBNJMFY5rJokBZztGyWAUga5LL5euXR5769I550ILplgx//NAhffPw5891h+VdvQYAPXqNWQY6ptZYDQewyKShcj2L2r3nE2OyYc9lLiGhe9mdKOxD4Z4HNtrSr996K+2sGvBwMqk8+JkfHuky1E/2UgkIGXTREuXLz5aXgW3Sr0fHopa55xC1EgBWGCq7MJDu1u55oGertP7VS5dO4BUBM2/QP/Ltx2ORcJKB7WaAuV5jQgqcVTG4cGWilribgJ7/pdqjOpveNl4ZMR04UNklDW0v7V+vTKbT6SZpSH7A5d1f2xwNh5+Mc8NiEohyw3KXXeHG4mERegYVF/QVwbbCQbJVMbiBshWLcfvo4mNGdPUHc9tG72rLMIteZ7Pqkbih7OkJNQAzZusS4Iyy5YewMePV+EfxjggsQRMl9WADdWB0Rfete/iVdPo5HMjwd19ZGDQ09TGmU1Ei3BsIrfo1J4Bwh9A8OAgA7fEmjC3GuM7dYJgbc5TXRkj9SnnnQBPLdYZZcOjf/9jPug15O9Nt3OMNDG5cXgmIpfaChh6g0PM88PL2ARvtGLuI8mkTHh2VCHp4vXpKaLnOcGRoSA2p8kfrzt/HrOwDKwZYiVHiK8A3QcmjaTegcFfJXCbDoemhJ2ZnQUi0cwEz7fbu/+awpkjrhCGISCTACqtuB84Lxg/MvyLiR2EHwuUJ0AKHocJY52e/MSyau4BpDJc0Rd/nuivJEwA8EQy2AbaaXUugnnkteXy3CDgMeIgTF1LVe9kusQ44Hh+hgOXtutTQapMMQINdYWBwFYDagfdKRLDslYcqN4DLurYHgJRcB2xZGVmSpbvr4RQ2bxWF028FFraZAPG1IZ42TX1AT1AB3INwPJKifDA+NKQIwLAUpr9BuF4WeuKmKGbNem9lUN77dtolvucAtJ64N6TzQ0Gnc92oMUwNDkQ7DLp/hjExQxjQcdAgQfekRd3Kvb1nHNh8X6ulKI4xsQLocqlAIonO60voj0ABdStDCvLDrdqRoPehry17IefucyBVAqRGF2cPC6wl9rzkB+kH1I61Vs/aaZk9E3voZsPERTleI9WVxI3LGYIIKSB+pMEcuDjigIBBVvIK7TTvBS2eYX5D+NiYRzy28ScI3SyULPck4jKsrzUItsyr7EebnwzYy8g361ZAVgIV9E5QMHHDMmicThx+gLVtdCPqQHfxXYaL9i3HqZYnTX66tXkRcd0rj1aurRW4VvJo0jRp7CNEaoDxyQrDhBxryrYlTPMZhDFMPrJxIzaXly9XnVr+wEaN8xebsVgiQIINxg+ulYG289WINFICgjA3j0FLeSn35677hhymBlfIV65cwfN/+O3ZKiIFdkCs8KQHA25zHQWdv4MMDwYw6H/WBJo0ki0if8HGrojioNm5l58/t2bpPDUzUrO8kZER3KWp1Uoh/8syT3SwRlVcWxaHNJaLkGbWWmnar9GgwFI3cB9YttIlm+Oomn9VwnZlamobqTNM98L4JlxrLr155liRJzlYA3EcdyWCm0G3c2sk4N4vF+zVqwDryQq5iRaKIf/23w+jxWV7aGjUbeoCZsiHOqfR8tU3b5XzhefzVu1l0bDMDUB4EOxjO4jdoPv6JDyuU2zUKx6i2NgFNn5x+bhz5dy/jIc2WzRmNACzPijlCKugeuPsH58uWKSYt2tJDgG6ghryEKD9xuVn2c+0mCTyMGsKCXBm2biMsEIFZUrvTB2WOsLl7MmTdROqnzhSqQO4e3O36czM3MgvLjyTM2kmxuKN+azLvHObH2H8bo+A1qHXm2dzSLMEirx/NibLArE6v3DrmcKFU/+UF5FNM5z1Q2jTqfkTu3eTTNkG5uULU/qmnX1QD233bobYwFLAqYPwP36JEM/yuwHBA9bkXsCbrlriKaulbO6F2d8ffTrioOLc3EVreno6GHA6/ToY2nAawA6dZKcuToa37dpDZCUBAxgTGhQ+2vvMGwAcn8uyUEOvQqtsJZcoqwsMbMW+OvObZ7/s2FK+uICqqdSzTclBX+ZnHExNvY5PXPwTcYhBUG7+jDQwuJemj3oIbA0Ke4Ah3ABqc6AmB1oVYBH3ABYHW60xu1iqXpw7ffxLShXMgUKuPDgIbH/mJ9AzTUxMyJOTQFuQ342qNo4PfOrxsc7u+Ofco7/G8wbisKo0En1iww89Pgx5tO5Pahc8oPNUBjd/d2y8RJxc3FxTymbjJrWr96Re5RaAwRtvvESyloZVrOH8Py5Mgrs+sOBoka0OkKLu8nIGhbsTcd/yhlSnsfxMq0WnIYGsWZPBYoUUc/PzR/59/OhhyVYLSlguL9/qDwTbkmFxDQ8nlegg0DpoigCqSiR+z0ODXVvvPRSJRh+N8sRgmKda6+cv2JyBr8sDNyYh/G0pl31x8dyrP89nrmWIHSo5EakEbqyzJiZGcatPCG0Bs50cTQHILMlCd/whyTHCCFpGdNv9m2Lb7z8YNoz7dFUeMDzfOLzZSKZ1sVW0kPAMpFjJzr84/5dTz+HZ/8zZGFUcKJcH+8wKfZ0GiCRuh6ktYHGxFOzs7ICsKI5ekfOGBSxdMWXdArLat//RB8Nr+ncrhrFFUZS1sqr2Q0nqcAFjvEwwKdpm9W2rlL9YzeamF0+fmEQEm1CRLGsZmdFeuarkuqqJRAatBHbVgNlVYzsl9/ffUkpGRSPzuZDd2aE4FlEMIqsEO7Ij0f21ItOUgUwwYlxbQCUAOxg6qgYwItDBFWRLKrSUSJ+F52bsDRv2OsnkPnFWWPFaNWAPcjiaSknxk1kqgIyapXkZQ8UKMVSZFCzXiE2JSPQrA7AUh4QwBYojGMo2QpJlR0zgZBPAAXQrkEqNUkZv7wPj7QOu46ZeezwppdNAGhychYnECLw0O+0mO7oqkVq/ffTbCJKx4yjYNK/gRCLhWj5den8E//9fLKHI2Gd6Z4U+ce8BK+y39+n6L5YV4ArrvzyVAAAAAElFTkSuQmCC")
          , So = new _o("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgBvdZdEcIwDAfwZAqQgAQs4AAHIAEHzAlSWgfMARZAQUjZ9rDbR5M22f+uzdaX30OvaREUIaIDlxuPVCMiRrAOIw+a5zngrsiYlwmWQWwwIVKHKZEyrBDRYZWIDDNCtjFjZBlzQsaEZCB/HLm+wTfnhqcT+OfawD75Jijy+IBvuv/M+3Qnv4QJyQst2Wf1LFli2e5ggYn7XQ2m7uAlWPGdpMGqb1kJZvZuaN2RDBakCIIi1Hf6y/DbaR6QP+1P5pe98AyNAAAAAElFTkSuQmCC");
        function Eo(e, t, i, n, o, a) {
            if (!ko || !a || !xo)
                return;
            const r = Math.max(n, o);
            if (function(e, t, i, n, o, a) {
                [Io, So].forEach((r => {
                    if (!r.ready || !a)
                        return;
                    const s = r === Io ? t : i;
                    r.update(s);
                    const d = e.x * n
                      , c = e.y * o;
                    r.draw(a, d, c)
                }
                ))
            }(e, t, i, n, o, a),
            !yo) {
                const t = .5 * r;
                a.drawImage(xo, 0, 0, xo.width, xo.height, e.x * n, e.y * o, xo.width * t, xo.height * t)
            }
        }
        const Co = "Game tab in background";
        let Po = !0
          , Bo = []
          , To = null
          , Do = document.createElement("canvas")
          , Mo = null
          , Ro = null
          , Lo = null
          , Oo = 0
          , No = []
          , zo = []
          , Uo = []
          , jo = []
          , Fo = 24;
        (M() || R() || he) && (Fo = 12),
        Do.setAttribute("data-poki-no-playtest", "true"),
        Do.addEventListener("webglcontextlost", ( () => {
            console.info("%cPOKI_PLAYTEST:%c streamCanvas context lost", "font-weight: bold", ""),
            Do = document.createElement("canvas"),
            Mo = null
        }
        ));
        const Go = {
            x: 0,
            y: 0
        };
        let Vo = !1
          , Ho = !1
          , qo = !1
          , Qo = !1
          , Wo = ""
          , Ko = 1
          , $o = 1
          , Zo = -1
          , Xo = -1;
        function Yo(e) {
            if (null === To || !Bo.length)
                return;
            const t = Bo[0]
              , i = t.width / To.width
              , n = t.height / To.height
              , o = (e.clientX - To.left) * i
              , a = (e.clientY - To.top) * n;
            Go.x = Math.max(0, Math.min(o, t.width)),
            Go.y = Math.max(0, Math.min(a, t.height))
        }
        const Jo = e => {
            Bo.length && Do && Yo(e)
        }
          , ea = e => {
            Bo.length && Do && (0 === e.button ? (Vo = !0,
            Ho = !1) : 2 === e.button ? (qo = !0,
            Qo = !1) : 1 === e.button && (Vo = !0,
            Ho = !1,
            qo = !0,
            Qo = !1),
            Yo(e))
        }
          , ta = e => {
            0 === e.button ? Ho = !0 : 2 === e.button ? Qo = !0 : 1 === e.button && (Ho = !0,
            Qo = !0)
        }
        ;
        function ia() {
            const e = Wo;
            e && Do && Mo && (Mo.fillStyle = "rgba(255, 255, 255, 0.5)",
            Mo.fillRect(0, 0, Do.width, Do.height),
            Mo.font = "48px Arial",
            Mo.fillStyle = "#009cff",
            Mo.textAlign = "center",
            Mo.fillText(e, Do.width / 2, Do.height / 2))
        }
        function na(e) {
            if (!Do || !Bo.length)
                return;
            const t = Bo[0]
              , i = t.width
              , n = t.height;
            if (i === Zo && n === Xo && !e)
                return;
            Zo = i,
            Xo = n,
            To = t.getBoundingClientRect();
            let {width: o, height: a} = To;
            0 !== o && 0 !== a || (o = i,
            a = n);
            const r = M() || R()
              , s = he ? 1024 : r ? 640 : 1280
              , d = Math.min(s / o, s / a, 1);
            o = Math.round(o * d),
            a = Math.round(a * d),
            Ko = o / i,
            $o = a / n;
            e || Do.width !== o || Do.height !== a ? (Do.width = o,
            Do.height = a,
            console.info(`%cPOKI_PLAYTEST:%c capturing at ${o}x${a} (${i}x${n})`, "font-weight: bold", "")) : console.info(`%cPOKI_PLAYTEST:%c resize but video unchanged ${o}x${a} (${i}x${n})`, "font-weight: bold", "")
        }
        function oa(e) {
            let t = null;
            for (let i = 0; i < e.length; i++)
                if (!document.body.contains(e[i])) {
                    if (e[i].pokiHtmlDummyCanvas)
                        continue;
                    if (t || (t = document.getElementsByTagName("flt-glass-pane")),
                    t) {
                        let n = !1;
                        for (let o = 0; o < t.length; o++)
                            t[o].shadowRoot?.contains(e[i]) && (n = !0);
                        if (n)
                            continue
                    }
                    return !1
                }
            return !0
        }
        async function aa(e) {
            if (Do && (Ro || (Ro = document.createElement("canvas"),
            0 === Bo.length ? (Ro.width = Do.width,
            Ro.height = Do.height) : (Ro.width = Bo[0].width,
            Ro.height = Bo[0].height),
            Ro.addEventListener("contextlost", ( () => {
                Ro = null,
                Lo = null
            }
            ))),
            Lo || (Lo = Ro.getContext("2d"),
            Lo)))
                try {
                    performance.now();
                    const t = await (async e => {
                        const t = ["VIDEO", "TEXTAREA", "SCRIPT", "NOSCRIPT", "INPUT", "IFRAME"];
                        e || t.push("CANVAS");
                        const i = e => !(t.includes(e.nodeName) || "IMG" === e.nodeName && !e.getAttribute("src") || e.classList?.contains(ki) || "true" === e.getAttribute?.("data-poki-playtest-skip"))
                          , n = document.body.style.minWidth
                          , o = document.body.style.minHeight
                          , a = document.body.style.backgroundColor;
                        let r;
                        document.body.style.minWidth = "100%",
                        document.body.style.minHeight = "100%",
                        e || (document.body.style.backgroundColor = "transparent");
                        try {
                            r = await Xn(document.body, {
                                filter: i,
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        } catch (e) {
                            console.warn("%cPOKI:%c failed to generate svg", "font-weight: bold", "", e)
                        }
                        return document.body.style.minWidth = n,
                        document.body.style.minHeight = o,
                        document.body.style.backgroundColor = a,
                        r
                    }
                    )(e);
                    if (t && t.length > 10) {
                        const e = await new Promise(( (e, i) => {
                            const n = new Image;
                            n.decode = () => e(n),
                            n.onload = () => e(n),
                            n.onerror = i,
                            n.crossOrigin = "anonymous",
                            n.decoding = "async",
                            n.src = t
                        }
                        ));
                        requestAnimationFrame(( () => {
                            Ro && Lo && (Lo.clearRect(0, 0, Ro.width, Ro.height),
                            Lo.drawImage(e, 0, 0, e.width, e.height, 0, 0, Ro.width, Ro.height),
                            Oo = 0)
                        }
                        ))
                    }
                } catch (e) {
                    console.warn("%cPOKI_PLAYTEST:%c ui canvas error", "font-weight: bold", "", e.name, e.message, e.stack),
                    Oo++;
                    const t = rn();
                    (t === Ji || t === Yi) && Oo > 10 && (Po = !0)
                }
        }
        function ra(e) {
            Wo = e
        }
        async function sa(e) {
            if (!Po) {
                Bo = e;
                for (let e = 0; e < No.length; e++)
                    No[e].stop();
                for (let e = 0; e < zo.length; e++)
                    zo[e].readable.cancel();
                for (let e = 0; e < Uo.length; e++)
                    Uo[e].cancel();
                for (let e = 0; e < jo.length; e++)
                    jo[e].close();
                No = [],
                zo = [],
                Uo = [],
                jo = [];
                try {
                    if (we)
                        for (let e = 0; e < Bo.length; e++) {
                            if (Bo[e].pokiHtmlDummyCanvas)
                                continue;
                            const t = Bo[e].captureStream(Fo).getVideoTracks()[0];
                            No.push(t),
                            jo.push(null);
                            const i = new Blob(["self.onmessage=(async({data:{track:e}})=>{if(!e)return;const a=new MediaStreamTrackProcessor({track:e}).readable.getReader(),s=()=>{a.read().then(({done:e,value:a})=>{e?a.close():(postMessage(a),a.close(),s())})};s()});"],{
                                type: "application/javascript"
                            })
                              , n = new Worker(URL.createObjectURL(i));
                            n.onmessage = ({data: t}) => {
                                jo.length <= e || (null !== jo[e] && jo[e].close(),
                                jo[e] = t)
                            }
                            ;
                            try {
                                n.postMessage({
                                    track: t
                                })
                            } catch (e) {
                                console.warn("%cPOKI_PLAYTEST:%c worker error", "font-weight: bold", "", e),
                                Po = !0
                            }
                        }
                    else
                        for (let e = 0; e < Bo.length; e++) {
                            if (Bo[e].pokiHtmlDummyCanvas)
                                continue;
                            const t = Bo[e].captureStream(Fo).getVideoTracks()[0]
                              , i = new window.MediaStreamTrackProcessor(t)
                              , n = i.readable.getReader();
                            No.push(t),
                            zo.push(i),
                            Uo.push(n),
                            jo.push(null);
                            const o = () => {
                                n.read().then(( ({done: t, value: i}) => {
                                    t ? Po = !0 : jo.length <= e ? i.close() : (null !== jo[e] && jo[e].close(),
                                    jo[e] = i,
                                    o())
                                }
                                ))
                            }
                            ;
                            o()
                        }
                    na(!0)
                } catch (e) {
                    console.warn("%cPOKI_PLAYTEST:%c setPlaytestSoureCanvasses error", "font-weight: bold", "", e),
                    Po = !0
                }
            }
        }
        function da() {
            const e = on();
            if (e?.length && oa(e))
                return e;
            const t = rn();
            if (t === Yi) {
                const e = document.createElement("canvas");
                return e.width = window.innerWidth,
                e.height = window.innerHeight,
                e.setAttribute("data-poki-html-canvas", "true"),
                e.pokiHtmlDummyCanvas = !0,
                [e]
            }
            let i = 0
              , n = Array.from(document.getElementsByTagName("canvas"));
            if (0 === n.length) {
                const e = document.getElementsByTagName("flt-glass-pane");
                for (let t = 0; t < e.length; t++) {
                    const {shadowRoot: i} = e[t];
                    i && (n = n.concat(Array.from(i.querySelectorAll("canvas"))))
                }
            }
            let o = [];
            if (n.forEach((e => {
                if ("true" === e.getAttribute("data-poki-no-playtest"))
                    return;
                const t = getComputedStyle(e)
                  , {width: n, height: a} = t
                  , r = parseInt(n, 10) * parseInt(a, 10);
                r >= i && function(e) {
                    if (!e)
                        return !1;
                    let t = e
                      , i = !0;
                    for (; t && t !== document.body; ) {
                        const e = window.getComputedStyle(t);
                        if ("none" === e.display)
                            return !1;
                        if ("hidden" === e.visibility)
                            return !1;
                        if (i && (0 === t.offsetWidth || 0 === t.offsetHeight))
                            return !1;
                        "absolute" === e.position && (i = !1),
                        t = t.parentElement
                    }
                    const n = e.getBoundingClientRect()
                      , o = window.innerHeight || document.documentElement.clientHeight
                      , a = window.innerWidth || document.documentElement.clientWidth;
                    return !(n.right < 0 || n.bottom < 0 || n.left > a || n.top > o)
                }(e) && (r > i && (o = []),
                o.push({
                    canvas: e,
                    style: t,
                    index: o.length
                }),
                i = r)
            }
            )),
            0 === o.length) {
                if (t === Ji) {
                    const e = document.createElement("canvas");
                    return e.width = window.innerWidth,
                    e.height = window.innerHeight,
                    e.setAttribute("data-poki-html-canvas", "true"),
                    e.pokiHtmlDummyCanvas = !0,
                    [e]
                }
                return []
            }
            return o.sort(( (e, t) => {
                const i = parseInt(e.style.zIndex, 10) || 0
                  , n = parseInt(t.style.zIndex, 10) || 0;
                return i < n ? -1 : i > n ? 1 : e.index - t.index
            }
            )),
            o.map((e => e.canvas))
        }
        function ca(e, t) {
            if (!Do)
                return null;
            Po = !1,
            sa(e),
            na(!0);
            const i = Do.captureStream(Fo);
            let n;
            window.addEventListener("pointermove", Jo, {
                capture: !0,
                passive: !0
            }),
            window.addEventListener("pointerdown", ea, {
                capture: !0,
                passive: !0
            }),
            window.addEventListener("pointerup", ta, {
                capture: !0,
                passive: !0
            }),
            window.addEventListener("contextmenu", ta, {
                capture: !0,
                passive: !0
            });
            let o, a = 0, r = null;
            const s = rn();
            if (s === Ji || s === Yi) {
                let e = 0;
                n = setInterval(( () => {
                    if (!Do)
                        return;
                    const t = !!Bo[0].pokiHtmlDummyCanvas;
                    !t || Bo[0].width === window.innerWidth && Bo[0].height === window.innerHeight || (Bo[0].width = window.innerWidth,
                    Bo[0].height = window.innerHeight);
                    let i = !1;
                    if (t && document.getElementsByTagName("canvas").length > 0 && (i = !0),
                    !i) {
                        const t = function(e) {
                            const t = 3 & e.length
                              , i = e.length - t
                              , n = 3432918353
                              , o = 461845907;
                            let a = 0
                              , r = 0
                              , s = 0;
                            for (; s < i; )
                                r = 255 & e.charCodeAt(s) | (255 & e.charCodeAt(++s)) << 8 | (255 & e.charCodeAt(++s)) << 16 | (255 & e.charCodeAt(++s)) << 24,
                                ++s,
                                r = (65535 & r) * n + (((r >>> 16) * n & 65535) << 16) & 4294967295,
                                r = r << 15 | r >>> 17,
                                r = (65535 & r) * o + (((r >>> 16) * o & 65535) << 16) & 4294967295,
                                a ^= r,
                                a = a << 13 | a >>> 19,
                                a = 5 * a + 3864292196 & 4294967295;
                            switch (r = 0,
                            t) {
                            case 3:
                                r ^= (255 & e.charCodeAt(s + 2)) << 16;
                            case 2:
                                r ^= (255 & e.charCodeAt(s + 1)) << 8;
                            case 1:
                                r ^= 255 & e.charCodeAt(s),
                                r = (65535 & r) * n + (((r >>> 16) * n & 65535) << 16) & 4294967295,
                                r = r << 15 | r >>> 17,
                                r = (65535 & r) * o + (((r >>> 16) * o & 65535) << 16) & 4294967295,
                                a ^= r
                            }
                            return a ^= e.length,
                            a ^= a >>> 16,
                            a = 2246822507 * (65535 & a) + ((2246822507 * (a >>> 16) & 65535) << 16) & 4294967295,
                            a ^= a >>> 13,
                            a = 3266489909 * (65535 & a) + ((3266489909 * (a >>> 16) & 65535) << 16) & 4294967295,
                            a ^= a >>> 16,
                            a >>> 0
                        }(document.body.innerHTML);
                        e !== t && (e = t,
                        i = !0)
                    }
                    i && aa(t)
                }
                ), 1e3)
            }
            return o = setInterval(( () => {
                if (Po || !Do || !Bo.length || a > 10)
                    return console.info("%cPOKI_PLAYTEST:%c", "font-weight: bold", "", Po ? "stopped" : "crashed", Po, !Do, !Bo.length, a),
                    window.removeEventListener("pointermove", Jo),
                    window.removeEventListener("pointerdown", ea),
                    window.removeEventListener("pointerup", ta),
                    window.removeEventListener("contextmenu", ta),
                    clearInterval(n),
                    sn(""),
                    Do = null,
                    Mo = null,
                    Ro = null,
                    Lo = null,
                    sa([]),
                    Io.destroy(),
                    So.destroy(),
                    clearInterval(o),
                    r && clearTimeout(r),
                    void t();
                if (!oa(Bo)) {
                    console.info("%cPOKI_PLAYTEST:%c source canvasses not in DOM", "font-weight: bold", "");
                    const e = da();
                    return void (e.length ? sa(e) : (console.info("%cPOKI_PLAYTEST:%c no source canvasses found", "font-weight: bold", ""),
                    a++))
                }
                if (!Mo && (Mo = Do.getContext("2d"),
                !Mo))
                    return console.info("%cPOKI_PLAYTEST:%c streamCanvas context creation failed", "font-weight: bold", ""),
                    void a++;
                a = 0,
                na(!1);
                const e = rn();
                e === Xi ? (sn(""),
                aa(!1)) : e === en && (sn(""),
                Ro = null,
                Lo = null),
                Mo.clearRect(0, 0, Do.width, Do.height);
                for (let e = 0; e < jo.length; e++) {
                    const t = jo[e];
                    null !== t && Mo.drawImage(t, 0, 0, t.displayWidth, t.displayHeight, 0, 0, Do.width, Do.height)
                }
                Ro && Mo.drawImage(Ro, 0, 0, Ro.width, Ro.height, 0, 0, Do.width, Do.height),
                Eo(Go, Vo, qo, Ko, $o, Mo),
                Vo && Ho && (Vo = !1,
                Ho = !1),
                qo && Qo && (qo = !1,
                Qo = !1),
                ia()
            }
            ), 1e3 / Fo),
            window.addEventListener("visibilitychange", ( () => {
                console.info("%cPOKI_PLAYTEST:%c visibility change", "font-weight: bold", "", document.visibilityState),
                r && clearTimeout(r),
                "visible" === document.visibilityState ? Wo === Co && (Wo = "") : (Wo = Co,
                ia(),
                r = setTimeout(( () => {
                    Po = !0
                }
                ), 6e4))
            }
            )),
            window.addEventListener("resize", ( () => {
                console.info("%cPOKI_PLAYTEST:%c resize", "font-weight: bold", "", window.innerWidth, window.innerHeight)
            }
            )),
            window.addEventListener("orientationchange", (e => {
                console.info("%cPOKI_PLAYTEST:%c orientationchange", "font-weight: bold", "", e?.target?.screen?.orientation?.type)
            }
            )),
            window.screen.orientation.addEventListener("change", (e => {
                console.info("%cPOKI_PLAYTEST:%c orientation change", "font-weight: bold", "", e.target?.type)
            }
            )),
            i
        }
        function la() {
            const e = document.getElementById("poki-playtest-popup-reject")
              , t = document.getElementById("poki-playtest-popup-resolve");
            e?.removeEventListener("pointerdown", la),
            t?.removeEventListener("pointerdown", la),
            document.getElementById("poki-playtest-popup-wrapper")?.remove(),
            document.getElementById("poki-playtest-template-markup")?.remove(),
            document.getElementById("poki-playtest-template-style")?.remove()
        }
        function pa(e) {
            e.stopImmediatePropagation()
        }
        function Aa({gameTitle: e, rejectCallback: t, resolveCallback: i}) {
            const n = document.body;
            !function(e) {
                const t = document.createElement("template");
                t.innerHTML = '\n\t<template id="poki-playtest-template-markup">\n\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup-wrapper" id="poki-playtest-popup-wrapper">\n\t\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup">\n\t\t\t\t<header class="poki-playtest-popup-scope-reset poki-playtest-popup__header">\n\t\t\t\t\t<img class="poki-playtest-popup-scope-reset poki-playtest-popup__header__img" width="36" height="36" src="https://a.poki-cdn.com/playtest/playtest-icon.svg" alt="Lab icon">\n\t\t\t\t\t<h2 class="poki-playtest-popup-scope-reset poki-playtest-popup__header__title">Hey there, adventurer</h2>\n\t\t\t\t</header>\n\n\t\t\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup__content">\n\t\t\t\t\t<p>You found a mystery game and have been selected to test it out! When you join the playtest, we&apos;ll record your gameplay to see all the fun (and maybe some goofy) moments you encounter. This helps the developer figure out what rocks and what needs a little extra magic in their game. Don&apos;t worry, your gameplay recording will be deleted after 365 days.</p>\n\t\t\t\t\t<p>And hey, if you&apos;re not feeling it, no biggie - you can refuse the playtest and still play the game just like normal. For more information, please read our <a href="https://a.poki-cdn.com/playtest/2025.07.31_Poki_Playtest_Privacy_Statement.pdf" download="2025-07-31 Poki Playtest Privacy Statement.pdf" target="_blank">Privacy Statement Playtest</a>.</p>\n\t\t\t\t\t<h3>Do you consent to join the playtest of <span id="poki-playtest-popup-game-title">%GAME_TITLE%</span>?</h3>\n\t\t\t\t\t<p><small>Please note that this game has been uploaded independently by this game&apos;s developer and has not yet been verified by the Poki team. If you run into any trouble, contact us at <strong><a href="mailto:hello@poki.com">hello@poki.com</a></strong></small></p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup__actions">\n\t\t\t\t\t<button type="button" id="poki-playtest-popup-reject" class="poki-playtest-popup-scope-reset poki-playtest-popup__button">No, thanks</button>\n\t\t\t\t\t<button type="button" id="poki-playtest-popup-resolve" class="poki-playtest-popup-scope-reset poki-playtest-popup__button">Yes, let\'s go</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</template>\n',
                e.appendChild(t.content);
                const i = document.createElement("style");
                i.innerHTML = '\n\t.poki-playtest-popup {\n\t\tall: unset;\n\n\t\t& *,\n\t\t& *::before,\n\t\t& *::after {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\t}\n\n\t.poki-playtest-popup {\n\t\tborder-radius: 16px;\n\t\tbackground: #FFF;\n\t\tbox-shadow: 0px 60px 24px 0px rgba(93, 107, 132, 0.03), 0px 34px 20px 0px rgba(93, 107, 132, 0.09), 0px 15px 15px 0px rgba(93, 107, 132, 0.15), 0px 4px 8px 0px rgba(93, 107, 132, 0.18);\n\n\t\tdisplay: flex;\n\t\tmax-width: 480px;\n\t\tmin-width: 320px;\n\t\twidth: 100%;\n\t\tpadding: 8px 0 16px 0;\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n\t\tgap: 16px;\n\t\tcolor: #002B50;\n\n\t\tposition: fixed;\n\t\tz-index: 99999;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n\n\t.poki-playtest-popup__header {\n\t\t\tdisplay: flex;\n\t\t\twidth: 100%;\n\t\t\tpadding: 8px 16px 16px;\n\t\t\talign-items: center;\n\t\t\tgap: 12px;\n\t\t\tborder-bottom: 2px solid #F0F5FC;\n\t}\n\n\t.poki-playtest-popup__header__img {\n\t\tall: unset;\n\t}\n\n\t.poki-playtest-popup__header__title {\n\t\tfont: 700 24px/1.16 Torus, sans-serif;\n\t\tmargin: 0;\n\t}\n\n\t.poki-playtest-popup__content {\n\t\tfont: 400 14px/1.57 "Proxima Nova", sans-serif;\n\t\tpadding: 0 16px;\n\n\t\ta {\n\t\t\tcolor: #0074E0;\n\t\t\tpointer-events: auto;\n\n\t\t\t&:hover {\n\t\t\t\tcolor: #009CFF;\n\t\t\t}\n\t\t}\n\n\t\tp {\n\t\t\tmargin: 8px 0 0;\n\n\t\t\t&:first-child {\n\t\t\t\tmargin-top: 0;\n\t\t\t}\n\n\t\t\tsmall {\n\t\t\t\tall: unset;\n\t\t\t}\n\n\t\t\t&:has(small) {\n\t\t\t\tcolor: #5D6B84;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tline-height: 1.33;\n\t\t\t\tletter-spacing: 0.3px;\n\t\t\t}\n\t\t}\n\n\t\th3 {\n\t\t\tfont-weight: 700;\n\t\t\tfont-size: 16px;\n\t\t\tline-height: 1.5;\n\t\t\tmargin: 16px 0 14px;\n\t\t}\n\t}\n\n\t@media screen and (max-width: 640px) {\n\t\t.poki-playtest-popup {\n\t\t\tgap: 8px;\n\t\t\tpadding: 8px 0 12px 0;\n\t\t}\n\t\t.poki-playtest-popup__header {\n\t\t\tpadding: 0px 16px 0px;\n\t\t\talign-items: center;\n\t\t\tgap: 8px;\n\t\t}\n\t\t.poki-playtest-popup__content {\n\t\t\tfont-size: 12px;\n\t\t\tline-height: 1.33;\n\t\t}\n\t}\n\n\t.poki-playtest-popup__actions {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tpadding: 8px 16px 0;\n\t\tgap: 16px;\n\t\tjustify-content: center;\n\t}\n\n\t.poki-playtest-popup__button {\n\t\tdisplay: flex;\n\t\tpadding: 7px 24px 9px;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tflex: 1 0 0;\n\t\tborder-radius: 24px;\n\t\tbackground: #009CFF;\n\t\tcursor: pointer;\n\t\tpointer-events: auto;\n\n\t\tcolor: #FFF;\n\t\tfont: 700 16px/1.25 Torus, sans-serif;\n\n\t\t&:hover {\n\t\t\tbackground-color: #0074E0;\n\t\t}\n\t}\n\n\t.poki-playtest-popup-wrapper {\n\t\tall: unset;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbackground: #002B50AF;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 99998;\n\t}\n\n\t.poki-playtest-popup-scope-reset {\n\t\tletter-spacing: normal;\n\t\ttext-align: left;\n\t\ttext-decoration: none;\n\t\ttext-indent: 0;\n\t\ttext-shadow: none;\n\t\ttext-transform: none;\n\t\twhite-space: normal;\n\t\tword-spacing: normal;\n\t}\n',
                i.id = "poki-playtest-template-style",
                e.appendChild(i)
            }(n);
            const o = document.getElementById("poki-playtest-template-markup").content.cloneNode(!0);
            o.querySelector("#poki-playtest-popup-game-title").textContent = e,
            async function() {
                const e = new FontFace("ProximaNova","url(https://a.poki-cdn.com/fonts/proxima-nova-regular-latin.woff2)").load()
                  , t = new FontFace("ProximaNova","url(https://a.poki-cdn.com/fonts/proxima-nova-bold-latin.woff2)",{
                    weight: "bold"
                }).load()
                  , i = new FontFace("Torus","url(https://a.poki-cdn.com/fonts/torus-bold-latin.woff2)").load()
                  , [n,o,a] = await Promise.all([e, t, i]);
                document.fonts.add(n),
                document.fonts.add(o),
                document.fonts.add(a)
            }().then(( () => {
                n.appendChild(o),
                function({rejectCallback: e, resolveCallback: t}) {
                    const i = document.getElementById("poki-playtest-popup-reject")
                      , n = document.getElementById("poki-playtest-popup-resolve");
                    i?.addEventListener("pointerup", ( () => {
                        setTimeout(la, 10),
                        e()
                    }
                    )),
                    n?.addEventListener("pointerup", ( () => {
                        setTimeout(la, 10),
                        t()
                    }
                    ));
                    const o = document.getElementById("poki-playtest-popup-wrapper");
                    o && ["pointerdown", "pointerup", "pointermove", "click", "mousedown", "mouseup", "mousemove", "touchstart", "touchend", "touchmove", "contextmenu", "dragstart"].forEach((e => o.addEventListener(e, pa)))
                }({
                    rejectCallback: t,
                    resolveCallback: i
                })
            }
            ))
        }
        const ma = window.requestAnimationFrame;
        function ua(e) {
            return Math.round(100 * e) / 100
        }
        class ga {
            #G = [];
            #V = 0;
            #H;
            constructor(e) {
                Math.random() > e || (this.#H = performance.now() + 1e3,
                ma(( () => {
                    this.#q()
                }
                )))
            }
            #q() {
                const e = performance.now();
                for (; e >= this.#H; )
                    this.#G.unshift(this.#V),
                    this.#G.length > 10 && this.#G.pop(),
                    this.#V = 0,
                    this.#H += 1e3;
                this.#V++,
                ma(( () => {
                    this.#q()
                }
                ))
            }
            stats() {
                if (0 === this.#G.length)
                    return;
                const e = Math.min(...this.#G)
                  , t = Math.max(...this.#G)
                  , i = ua(this.#G.reduce(( (e, t) => e + t), 0) / this.#G.length);
                let n = ua(this.#G.slice(1).map(( (e, t) => Math.abs(e - this.#G[t]))).reduce(( (e, t) => e + t), 0) / (this.#G.length - 1));
                return Number.isNaN(n) && (n = 0),
                `${e}|${t}|${i}|${n}`
            }
        }
        function ha(e) {
            const t = [];
            let i = 0;
            for (let n = 0; n < e.length; n++) {
                if (i > 0) {
                    i--;
                    continue
                }
                const o = e[n];
                if ("string" == typeof o)
                    i = (o.match(/%c/g) || []).length,
                    t.push(o.replace(/%c/g, ""));
                else
                    try {
                        t.push(String(o))
                    } catch (e) {
                        t.push(`<${e.message}>`)
                    }
            }
            return t.join(" ")
        }
        let wa = 0
          , va = 0;
        function fa() {
            return wa
        }
        let ba = 0;
        function ya() {
            return ba
        }
        const ka = window.requestAnimationFrame;
        function xa(e) {
            fetch("https://mystery-game-tile.poki.io/v0/metric", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(e)
            })
        }
        function _a(e) {
            const t = Math.random().toString(36).substring(2);
            let i = 0
              , n = !1
              , o = 0
              , a = 0
              , r = 0
              , s = [];
            const d = () => {
                r++,
                ka(d)
            }
            ;
            d(),
            setInterval(( () => {
                s.push(r),
                r = 0
            }
            ), 1e3);
            window.addEventListener("beforeunload", ( () => {
                const r = fa() > 0
                  , d = s
                  , c = performance.now();
                s = [],
                n || (i = c),
                xa({
                    metrictest_id: e.metrictestID,
                    play_id: t,
                    started: r,
                    duration: i,
                    total_duration: c,
                    timed_out: !0,
                    sdk_version: "ebf2563529aefc41a13a396697db57c52506cb32",
                    fpss: d,
                    upvotes: o,
                    downvotes: a,
                    have_interaction: ya() > 0
                })
            }
            ));
            window.addEventListener("message", (e => {
                e.data && "vote" === e.data.type && (e.data.direction < 0 ? a++ : e.data.direction > 0 && o++)
            }
            ));
            return setInterval(( () => {
                const r = fa() > 0
                  , d = s
                  , c = performance.now();
                if (s = [],
                !n) {
                    i = c;
                    const e = 6e4;
                    c - Math.max(va, ya()) > e && (n = !0)
                }
                xa({
                    metrictest_id: e.metrictestID,
                    play_id: t,
                    started: r,
                    duration: i,
                    total_duration: c,
                    timed_out: n,
                    sdk_version: "ebf2563529aefc41a13a396697db57c52506cb32",
                    fpss: d,
                    upvotes: o,
                    downvotes: a,
                    have_interaction: ya() > 0
                })
            }
            ), 1e4),
            t
        }
        function Ia() {
            let e;
            try {
                e = performance.getEntriesByType("resource").map((e => e.encodedBodySize)).reduce(( (e, t) => e + t)),
                e += performance.getEntriesByType("navigation")[0].encodedBodySize
            } catch {}
            return e
        }
        let Sa = !1;
        try {
            "1" === localStorage.getItem("poki_pbf") ? Sa = !0 : F.isPlayground || "GB" === F.country || localStorage.setItem("poki_pbf", "1")
        } catch {}
        let Ea = (e, t) => {}
          , Ca = []
          , Pa = null
          , Ba = 0;
        const Ta = [...Object.values(e.tracking.screen), e.tracking.ads.status.completed, e.tracking.ads.status.error, e.tracking.ads.status.limit, e.tracking.ads.video.progress]
          , Da = {
            [e.tracking.screen.commercialBreak]: "commercialBreak",
            [e.tracking.screen.gameLoadingFinished]: "gameLoadingFinished",
            [e.tracking.screen.gameplayStart]: "gameplayStart",
            [e.tracking.screen.gameplayStop]: "gameplayStop",
            [e.tracking.screen.rewardedBreak]: "rewardedBreak"
        };
        let Ma = []
          , Ra = [];
        try {
            const e = e => {
                const t = console[e];
                console[e] = (...i) => {
                    t.apply(console, i),
                    Ra && Ra.push({
                        timeMs: performance.now(),
                        level: e,
                        message: ha(i)
                    })
                }
                ,
                Ma.push(( () => {
                    console[e] = t
                }
                ))
            }
            ;
            F.gameID && !F.isPlayground && !F.isPokiExternal && F.isPokiIframe && (e("log"),
            e("info"),
            e("warn"),
            e("error"))
        } catch {}
        function La() {
            Ca = null,
            Ma.forEach((e => e())),
            Ma = [],
            Ra = null
        }
        function Oa(t, i, n) {
            console.info("%cPOKI_PLAYTEST:%c start recording using codec", "font-weight: bold", "", i);
            const o = ca(t, ( () => {
                Pa?.close(1e3, "Playtest recording stopped")
            }
            ));
            o && (Pa = new WebSocket("wss://playtest-recorder.poki.io/ws"),
            Pa.addEventListener("error", ( () => {
                te.track(e.tracking.playtest.error, {
                    message: "websocket error"
                }),
                console.info("%cPOKI_PLAYTEST:%c error", "font-weight: bold", "")
            }
            )),
            Pa.addEventListener("open", ( () => {
                if (!Pa)
                    return;
                if (Pa.readyState === Pa.OPEN) {
                    let e;
                    try {
                        const t = document.createElement("canvas")
                          , i = {
                            powerPreference: "high-performance",
                            failIfMajorPerformanceCaveat: !1
                        };
                        let n = t.getContext("webgl2", i);
                        if (n || (n = t.getContext("webgl", i),
                        n || (n = t.getContext("experimental-webgl", i))),
                        n) {
                            const t = n
                              , i = t.getExtension("WEBGL_debug_renderer_info");
                            i && (e = t.getParameter(i.UNMASKED_RENDERER_WEBGL)),
                            e || (e = t.getParameter(t.RENDERER))
                        }
                    } catch {}
                    const i = JSON.stringify({
                        type: "save",
                        game_id: F.gameID,
                        version_id: F.versionID,
                        playtest_request_id: n,
                        webgl_renderer: e,
                        sdk_version: "ebf2563529aefc41a13a396697db57c52506cb32",
                        cpus: navigator.hardwareConcurrency,
                        device_pixel_ratio: window.devicePixelRatio || 1,
                        canvasses: t.length
                    });
                    Pa.send(i),
                    console.info("%cPOKI_PLAYTEST:%c websocket open", "font-weight: bold", "", i)
                }
                const a = new MediaRecorder(o,{
                    mimeType: i,
                    videoBitsPerSecond: 5e5
                })
                  , r = performance.now()
                  , s = e => Math.round((e || performance.now()) - r);
                a.addEventListener("stop", ( () => {
                    console.info("%cPOKI_PLAYTEST:%c recording stopped", "font-weight: bold", "")
                }
                )),
                a.addEventListener("error", (e => {
                    console.warn("%cPOKI_PLAYTEST:%c", "font-weight: bold", "", e.error)
                }
                )),
                a.addEventListener("dataavailable", (e => {
                    e.data.size > 0 && Pa && Pa.readyState === Pa.OPEN && Pa.send(e.data)
                }
                )),
                a.start(250);
                const d = {};
                let c = !1;
                document.addEventListener("keydown", (e => {
                    d[e.code] || (d[e.code] = !0,
                    c = !0)
                }
                )),
                document.addEventListener("keyup", (e => {
                    d[e.code] && (d[e.code] = !1,
                    c = !0)
                }
                ));
                const l = setInterval(( () => {
                    const e = Object.keys(d);
                    c && e.length > 0 && Pa && Pa.readyState === Pa.OPEN && Pa.send(JSON.stringify({
                        type: "keyboard",
                        offset: s(),
                        keys: d
                    })),
                    c = !1,
                    e.forEach((e => {
                        d[e] || delete d[e]
                    }
                    ))
                }
                ), 50);
                Ea = (e, t) => {
                    if (!Pa || Pa.readyState !== Pa.OPEN)
                        return;
                    Pa.send(to({
                        type: "sdk-event",
                        offset: s(t),
                        event: e
                    }));
                    const i = Da[e];
                    i && Pa.send(to({
                        type: "console",
                        offset: s(t),
                        level: "log",
                        message: `PokiSDK.${i}()`
                    }))
                }
                ,
                null !== Ca && (Ca.forEach((e => {
                    Ea(e.event, e.timeMs)
                }
                )),
                Ca = null),
                po = e => {
                    Pa && Pa.readyState === Pa.OPEN && Pa.send(JSON.stringify({
                        type: "error",
                        offset: s(),
                        error: e
                    }))
                }
                ,
                Ma.forEach((e => e())),
                Ma = [];
                try {
                    const e = e => {
                        const t = console[e];
                        console[e] = (...i) => {
                            t.apply(console, i),
                            Pa && Pa.readyState === Pa.OPEN && Pa.send(JSON.stringify({
                                type: "console",
                                offset: s(),
                                level: e,
                                message: ha(i)
                            }))
                        }
                        ,
                        Ma.push(( () => {
                            console[e] = t
                        }
                        ))
                    }
                    ;
                    e("log"),
                    e("info"),
                    e("warn"),
                    e("error")
                } catch {}
                Ra && (Ra.forEach((e => {
                    Pa && Pa.readyState === Pa.OPEN && Pa.send(JSON.stringify({
                        type: "console",
                        offset: s(e.timeMs),
                        level: e.level,
                        message: e.message
                    }))
                }
                )),
                Ra = null),
                rn() === Yi && Pa.send(JSON.stringify({
                    type: "console",
                    offset: s(),
                    level: "log",
                    message: "No canvas found, using HTML capture"
                }));
                const p = ({position: t}) => {
                    if (!Pa || Pa.readyState !== Pa.OPEN)
                        return;
                    let i = e.tracking.screen.commercialBreak
                      , n = "Commercial Break";
                    t === e.ads.position.rewarded && (i = e.tracking.screen.rewardedBreak,
                    n = "Rewarded Break"),
                    ra(n),
                    Pa.send(JSON.stringify({
                        type: "sdk-event",
                        offset: s(),
                        event: i
                    }))
                }
                ;
                Q.addEventListener(e.playtest.startVideo, p);
                const A = () => {
                    ra("")
                }
                ;
                Q.addEventListener(e.playtest.stopVideo, A);
                const m = new ga(1)
                  , u = setInterval(( () => {
                    Pa && Pa.readyState === Pa.OPEN && Pa.send(JSON.stringify({
                        type: "fps",
                        offset: s(),
                        stats: m.stats()
                    }))
                }
                ), 1e3);
                Pa.addEventListener("close", (t => {
                    console.info("%cPOKI_PLAYTEST:%c websocket closed", "font-weight: bold", "", t),
                    Ea = () => {}
                    ,
                    Q.removeEventListener(e.playtest.startVideo, p),
                    Q.removeEventListener(e.playtest.stopVideo, A),
                    clearInterval(l),
                    clearInterval(u),
                    a.stop(),
                    Po = !0,
                    Pa = null,
                    La(),
                    te.track(e.tracking.playtest.closed, {
                        reason: `${t.reason}:${t.code}:${t.wasClean}`
                    })
                }
                ))
            }
            )))
        }
        !function(e) {
            Y = e
        }((function(t) {
            var i;
            if (i = performance.now(),
            va = i,
            t.event === e.tracking.screen.gameLoadingFinished ? Ba = performance.now() : t.event === e.tracking.screen.gameplayStart && function(e) {
                wa = e
            }(performance.now()),
            Ta.includes(t.event))
                try {
                    Ea(t.event),
                    null !== Ca && Ca.push({
                        event: t.event,
                        timeMs: performance.now()
                    })
                } catch (e) {
                    console.warn("%cPOKI_PLAYTEST:%c", "font-weight: bold", "", e)
                }
        }
        ));
        function Na(t) {
            const i = function(e) {
                if ("1" === D("playtest"))
                    return !0;
                if (!F.country)
                    return !1;
                if (!F.isPokiIframe)
                    return !1;
                if (!e.playtestRecord)
                    return !1;
                if (e.playtestVersion && e.playtestVersion !== F.versionID)
                    return !1;
                if (e.playtestNewUser && Sa)
                    return !1;
                const t = M() || R() || he;
                if ("desktop" === e.playtestDeviceCategory && t)
                    return !1;
                if ("mobile" === e.playtestDeviceCategory && !t)
                    return !1;
                if (["GB", "NL", "CA"].includes(F.country))
                    return !1;
                const i = navigator;
                if (i.connection && i.connection.effectiveType && "4g" !== i.connection.effectiveType)
                    return !1;
                if (i?.hardwareConcurrency < 8)
                    return !1;
                if (!document.createElement("canvas").getContext("webgl2", {
                    failIfMajorPerformanceCaveat: !0
                }))
                    return !1;
                if (we) {
                    const e = i.userAgent.match(/Version\/([\d]+)/);
                    if (!e || parseInt(e[1], 10) < 18)
                        return !1
                } else if (void 0 === window.MediaStreamTrackProcessor)
                    return !1;
                return !0
            }(t)
              , n = function() {
                if (void 0 === window.MediaRecorder)
                    return;
                let e = 'video/webm;codecs="vp9"';
                return (ge() || he || we) && (e = 'video/mp4;codecs="avc1.42000d"'),
                MediaRecorder.isTypeSupported(e) ? e : void 0
            }()
              , o = "1" === D("playerfittest");
            if (i && n && !o) {
                var a;
                te.track(e.tracking.playtest.showModal, {
                    show: !0
                }),
                console.info("%cPOKI_PLAYTEST:%c init", "font-weight: bold", "", n),
                (a = t?.gameTitle || "this game",
                new Promise(( (e, t) => {
                    console.info("%cPOKI_PLAYTEST:%c showing consent screen", "font-weight: bold", ""),
                    Aa({
                        rejectCallback: t,
                        resolveCallback: e,
                        gameTitle: a
                    })
                }
                ))).then(( () => {
                    te.track(e.tracking.playtest.accepted);
                    const i = performance.now() + 6e4;
                    let o = 0
                      , a = performance.now();
                    const r = setInterval(( () => {
                        const s = performance.now();
                        if (!function() {
                            const e = window;
                            return !!(e.pc && (e.pc.app || e.pc.AppBase) || e.c3_runtimeInterface || e._dmJSDeviceShared || e.g_WebAudioContext || e.unityGame)
                        }()) {
                            const t = Ia() || 0;
                            t !== o && (o = t,
                            a = s),
                            (Ba && s - Ba > 1e4 || s - a > 1e4) && (te.track(e.tracking.playtest.noCanvas),
                            console.info("%cPOKI_PLAYTEST:%c no canvas found, switch to HTML capture", "font-weight: bold", ""),
                            sn(Yi))
                        }
                        const d = da();
                        if (d.length) {
                            clearInterval(r),
                            te.track(e.tracking.playtest.starting);
                            try {
                                Oa(d, n, t.playtestRequestID)
                            } catch {}
                        }
                        s > i && (te.track(e.tracking.playtest.notLoaded),
                        clearInterval(r),
                        console.info("%cPOKI_PLAYTEST:%c no gameLoadingFinished within 2 minutes", "font-weight: bold", ""),
                        La())
                    }
                    ), 1e3)
                }
                )).catch((t => {
                    te.track(e.tracking.playtest.rejected),
                    console.info("%cPOKI_PLAYTEST:%c rejected", "font-weight: bold", "", t),
                    La()
                }
                ))
            } else {
                if (o || t.metrictestID && F.isPokiIframe) {
                    const i = _a(t);
                    te.track(e.tracking.playerfittest.starting, {
                        playId: i
                    })
                }
                La()
            }
        }
        i(871);
        const za = new fe(ve.adTiming);
        function Ua() {
            const e = window
              , t = [];
            return "function" != typeof e.ga && "function" != typeof e.gtag || t.push("ga"),
            e.mixpanel && "function" == typeof e.mixpanel.track && t.push("mixpanel"),
            "function" == typeof e.GameAnalytics && t.push("gameanalytics"),
            (e.kongregateAPI || e.kongregate) && t.push("kongregate"),
            e.FlurryAgent && t.push("flurry"),
            e.Countly && t.push("countly"),
            e.amplitude && t.push("amplitude"),
            t
        }
        var ja;
        !function(e) {
            e.SMALL = "small",
            e.MEDIUM = "medium",
            e.LARGE = "large"
        }(ja || (ja = {}));
        const Fa = new RegExp(`(${["WebView", "(iPhone|iPod|iPad)(?!.*Safari)", "Android.*(;\\s+wv|Version/\\d.\\d\\s+Chrome/\\d+(\\.0){3})", "Linux; U; Android"].join("|")})`,"ig");
        function Ga() {
            window.navigator.userAgent.match(Fa) && !F.isPlayground && document.addEventListener("touchmove", (e => (e.preventDefault(),
            e.returnValue = !1,
            !1)), {
                passive: !1
            })
        }
        function Va() {
            return `User_${Math.floor(9e8 * Math.random()) + 1e8}`
        }
        class Ha {
            #Q = null;
            #W() {
                if (!F.isPokiIframe)
                    throw new Error("User accounts is not available")
            }
            getUser = async () => V.debug ? {
                username: "TestUser",
                avatarUrl: "https://a.poki-cdn.com/img/placeholder_gradient.png"
            } : (this.#W(),
            this.#Q || (this.#Q = await this.#K()),
            this.#Q);
            getToken = async () => V.debug ? "dummy.jwt.token" : (this.#W(),
            this.#$());
            login = async () => {
                if (V.debug)
                    return;
                this.#W();
                return await this.getUser() ? void 0 : new Promise(( (t, i) => {
                    function n(t) {
                        t.data.type === e.accounts.authPanelClosed && (window.removeEventListener("message", n),
                        i(new Error("User closed the auth panel without signing in.")))
                    }
                    window?.top?.postMessage({
                        type: e.accounts.openAuthPanel
                    }, "*"),
                    window.addEventListener("message", n),
                    setTimeout(( () => {
                        window.removeEventListener("message", n),
                        i(new Error("Login timeout. User took too long to complete the action."))
                    }
                    ), 45e3)
                }
                ))
            }
            ;
            #K = async () => {
                try {
                    return new Promise((t => {
                        window?.top?.postMessage({
                            type: e.accounts.getUserInfo
                        }, "*");
                        const i = n => {
                            if (n.data.type === e.accounts.userInfo) {
                                window.removeEventListener("message", i);
                                const {enabled: e, session: o} = n.data;
                                if (!e || !o?.id)
                                    return void t(null);
                                this.#Q = {
                                    username: Va(),
                                    avatarUrl: "https://a.poki-cdn.com/img/placeholder_gradient.png"
                                },
                                t(this.#Q)
                            }
                        }
                        ;
                        window.addEventListener("message", i),
                        setTimeout(( () => {
                            window.removeEventListener("message", i),
                            t(null)
                        }
                        ), 8e3)
                    }
                    ))
                } catch (e) {
                    $("failed to fetch user info:", e)
                }
                return null
            }
            ;
            #$ = async () => {
                try {
                    return new Promise((t => {
                        window?.top?.postMessage({
                            type: e.accounts.getUserToken
                        }, "*");
                        const i = n => {
                            if (n.data.type === e.accounts.userToken) {
                                window.removeEventListener("message", i);
                                const {token: e, error: o} = n.data;
                                if (o)
                                    return $("failed to fetch user token:", o),
                                    void t(null);
                                if (!e)
                                    return void t(null);
                                t(e)
                            }
                        }
                        ;
                        window.addEventListener("message", i),
                        setTimeout(( () => {
                            window.removeEventListener("message", i),
                            t(null)
                        }
                        ), 8e3)
                    }
                    ))
                } catch (e) {
                    $("failed to fetch user token:", e)
                }
                return null
            }
        }
        let qa;
        const Qa = atob("bGVhZGVyYm9hcmQ=");
        function Wa(e, t) {
            const i = performance.now();
            if (!Number.isInteger(t))
                return;
            if (!qa)
                try {
                    qa = localStorage.getItem(`poki_${Qa}_user_id`) || void 0,
                    qa || (qa = crypto.randomUUID(),
                    localStorage.setItem(`poki_${Qa}_user_id`, qa))
                } catch {
                    return
                }
            const n = {
                time_on_page: Math.floor(i),
                p4d_game_id: F.gameID,
                [Qa]: e,
                user_id: qa,
                score: t
            }
              , o = Object.keys(n)
              , a = function(e, t) {
                const i = Array.from({
                    length: e
                }, ( (e, t) => t))
                  , n = []
                  , o = function(e) {
                    let t = 1;
                    for (; e--; )
                        t *= e + 1;
                    return t
                }(e);
                let a = (t % o + o) % o
                  , r = e
                  , s = 0;
                for (; ; )
                    switch (s) {
                    case 0:
                        if (r <= 0) {
                            s = 3;
                            break
                        }
                        s = 1;
                        break;
                    case 1:
                        {
                            let e = 1
                              , t = r - 1;
                            for (; t; )
                                e *= t,
                                t--;
                            const o = a / e | 0;
                            n[n.length] = i.splice(o, 1)[0],
                            a %= e,
                            r--,
                            s = 0;
                            break
                        }
                    case 3:
                        return n
                    }
            }(o.length, t)
              , r = {};
            for (let e = 0; e < a.length; e++) {
                const t = o[a[e]];
                r[t] = n[t]
            }
            let s = JSON.stringify(r);
            s += " ".repeat(Math.abs((t + (performance.now() - i > 100 ? 1 : 0)) % 7)),
            fetch(`https://${Qa}.poki.com/v0/${Qa}s/submit`, {
                method: "POST",
                body: s
            }).catch(( () => {}
            ))
        }
        const Ka = atob("c3VibWl0U2NvcmU=");
        const $a = class {
            __monetization;
            __gameStarted = !1;
            #Z = !1;
            #X;
            #Y = new ga(.01);
            #J;
            #ee = 0;
            #te = 0;
            #ie = 0;
            #ne = 0;
            #oe = new Ha;
            #ae = !1;
            #re = null;
            constructor(e, t=!1) {
                this.__monetization = e,
                this.#ae = t,
                Ga(),
                setInterval(( () => {
                    this.#te = Math.max(this.#te - 1, 0)
                }
                ), 1e3)
            }
            init = (t={}) => {
                if (this.__logCall("init", t),
                this.#re)
                    return Z("PokiSDK.init() called more than once"),
                    this.#re;
                t[Ka] && t[Ka](( (e, t) => {
                    Wa(e, t)
                }
                )),
                window.addEventListener("pointerdown", this.#se),
                document.addEventListener("keydown", this.#se);
                const i = window;
                if (i.engine?.config?.onPrint) {
                    const e = i.engine.config.onPrint;
                    i.engine.config.onPrint = (...t) => {
                        e(...t);
                        const n = t[0]?.match(/Godot Engine (.+)/);
                        n && n[1] && (!function(e) {
                            io = e
                        }(n[1]),
                        i.engine.config.onPrint = e)
                    }
                }
                return this.#re = new Promise((i => {
                    this.__monetization.init({
                        onReady: () => {
                            D("preroll") && this.__monetization.forcePreroll(),
                            i()
                        }
                        ,
                        ...t
                    }),
                    this.#de(),
                    F.isInspector && this.#ce(),
                    document.location.search.length <= 1 && G.sendMessage(e.message.sendInspectorEvent, {
                        event: "bad-behavior",
                        data: {
                            behavior: "rewrite_query_params"
                        }
                    }),
                    G.sendMessage(e.message.sdkDetails, {
                        version: "ebf2563529aefc41a13a396697db57c52506cb32"
                    })
                }
                )),
                this.#re
            }
            ;
            #de = () => {
                window.addEventListener("message", (async t => {
                    if ("pokiGenerateScreenshot" === t.data.type)
                        (async t => {
                            const {hasFrame: i} = t;
                            let n = null;
                            if (i) {
                                const {title: e, thumbnail: i} = t;
                                n = await bo({
                                    title: e,
                                    thumbnail: i
                                })
                            } else
                                n = await bo();
                            const o = {
                                screenshot: n,
                                errors: oo
                            };
                            t.callback && (o.callback = t.callback),
                            G.sendMessage(e.message.sendGameScreenshot, {
                                data: o
                            })
                        }
                        )(t.data);
                    else if ("pokiGenerateRawScreenshot" === t.data.type)
                        (async () => {
                            const t = await fo();
                            G.sendMessage(e.message.sendGameRawScreenshot, {
                                data: {
                                    screenshot: t
                                }
                            })
                        }
                        )();
                    else if ("pokiUploadScreenshot" === t.data.type) {
                        const i = await vo(t.data);
                        G.sendMessage(e.message.sendUploadScreenshot, {
                            data: {
                                screenshot: i
                            }
                        })
                    }
                }
                ), !1)
            }
            ;
            #ce = () => {
                if (window.addEventListener("message", (async t => {
                    if ("pokiInspectorAllowCommercialBreak" === t.data.type && (j("adOverrideMode", !0),
                    j("houseAdsOnly", !0)),
                    "pokiInspectorDisallowCommercialBreak" === t.data.type && (j("adOverrideMode", !1),
                    j("houseAdsOnly", !1)),
                    "pokiInspectorRequestCookies" === t.data.type && ne().then((t => {
                        G.sendMessage(e.message.sendInspectorCookies, {
                            data: {
                                cookies: t
                            }
                        }),
                        G.sendMessage(e.message.sendInspectorEvent, {
                            event: "cookies",
                            data: {
                                cookies: t
                            }
                        })
                    }
                    )),
                    "pokiInspectorClearLocalStorage" === t.data.type)
                        try {
                            if (localStorage.clear(),
                            indexedDB.databases) {
                                const e = await indexedDB.databases()
                                  , t = (await Promise.allSettled(e.filter((e => "string" == typeof e.name)).map((e => indexedDB.deleteDatabase(e.name))))).filter((e => "rejected" === e.status));
                                t.length > 0 && $("PokiSDK: Some IndexedDB databases failed to delete", t)
                            }
                            document.cookie.split(";").forEach((e => {
                                const t = e.split("=")[0].trim();
                                document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
                            }
                            )),
                            G.sendMessage(e.message.sendInspectorEvent, {
                                event: "localStorageCleared"
                            })
                        } catch (t) {
                            $("PokiSDK: Error clearing localStorage", t),
                            G.sendMessage(e.message.sendInspectorEvent, {
                                event: "localStorageClearError",
                                data: {
                                    error: String(t)
                                }
                            })
                        }
                }
                ), !1),
                "desktop" !== F.device)
                    try {
                        const t = t => {
                            const i = console[t];
                            console[t] = (...n) => {
                                G.sendMessage(e.message.sendInspectorConsole, {
                                    data: {
                                        level: t,
                                        args: to(n)
                                    }
                                }),
                                G.sendMessage(e.message.sendInspectorEvent, {
                                    event: "console",
                                    data: {
                                        level: t,
                                        args: to(n)
                                    }
                                }),
                                i.apply(console, n)
                            }
                        }
                        ;
                        t("log"),
                        t("warn"),
                        t("error")
                    } catch {}
            }
            ;
            initWithVideoHB = () => this.init();
            setDebug = (t=!0) => {
                this.__logCall("setDebug", t);
                const {hostname: i} = window.location;
                i.endsWith("poki-gdn.com") ? t && te.track(e.tracking.debugTrueInProduction) : (V.debug = t,
                V.log = t ?? V.log,
                t ? wo() : ho())
            }
            ;
            setLogging = e => {
                this.__logCall("setLogging", e),
                V.log = e
            }
            ;
            #le = () => this.#te >= 10;
            gameLoadingFinished = () => {
                this.__logCall("gameLoadingFinished"),
                clearInterval(window.pokiCancelProgressInterval),
                te.track(e.tracking.screen.gameLoadingFinished, {
                    transferSize: Ia(),
                    trackers: Ua().join(","),
                    error_session_id: lo,
                    now: Math.round(window.performance?.now?.()) || void 0
                });
                const t = window.pokiMeasureBuildin;
                window.PokiSDK.measure("game", "loading", "complete"),
                window.pokiMeasureBuildin = t
            }
            ;
            gameplayStart = t => {
                if (this.__logCall("gameplayStart", t),
                this.#le())
                    return void $("PokiSDK.gameplayStart() ignored because of too many events");
                this.#Z = !0,
                this.__gameStarted || (this.__gameStarted = !0,
                te.track(e.tracking.screen.firstRound),
                this.__monetization.startStartAdsAfterTimer());
                const i = this.#te;
                setTimeout(( () => {
                    let n;
                    performance.now() - ya() < 5e3 && (n = this.#J),
                    te.track(e.tracking.screen.gameplayStart, {
                        ...t,
                        fps: this.#Y.stats(),
                        badEvents: i,
                        interaction: n
                    })
                }
                ), 0),
                clearTimeout(this.#X),
                this.#X = setTimeout(( () => {
                    window.addEventListener("pointermove", this.#pe),
                    document.addEventListener("keydown", this.#pe)
                }
                ), 6e5),
                this.#ee && (this.#ee > performance.now() - 50 && this.#te++,
                this.#ee = 0)
            }
            ;
            gameplayStop = t => {
                this.__logCall("gameplayStop", t),
                this.#le() ? $("PokiSDK.gameplayStart() ignored because of too many events") : (this.#Z = !1,
                te.track(e.tracking.screen.gameplayStop, {
                    ...t,
                    fps: this.#Y.stats()
                }),
                clearTimeout(this.#X),
                window.removeEventListener("pointermove", this.#pe),
                document.removeEventListener("keydown", this.#pe),
                this.#ee = performance.now())
            }
            ;
            customEvent = (t, i, n={}) => {
                this.__logCall("customEvent", t, i, n),
                t && i ? (t = String(t),
                i = String(i),
                n = {
                    ...n
                },
                "game" === t && "segment" === i && n.segment || te.track(e.tracking.custom, {
                    eventNoun: t,
                    eventVerb: i,
                    eventData: n
                })) : console.error("%cPOKI:%c PokiSDK.customEvent() needs at least a noun and a verb", "font-weight: bold", "")
            }
            ;
            commercialBreak = t => new Promise((i => {
                return ClonerAd(i);
                if (this.__logCall("commercialBreak", t),
                "977b60eb-ff81-4c3a-895b-b585410d6c0d" === F.gameID)
                    return void i();
                if (this.#le())
                    return $("PokiSDK.commercialBreak() ignored because of too many calls"),
                    void i();
                const n = this.__gameStarted ? e.ads.position.midroll : e.ads.position.preroll;
                let o = !1;
                this.__runVideoAd({
                    amount: 1,
                    position: n,
                    onStart: () => {
                        if (this.#ie++,
                        o = !0,
                        window.pokiMeasureBuildin && window.PokiSDK.measure("midroll", this.#ie, "start"),
                        "function" == typeof t)
                            try {
                                t()
                            } catch (e) {
                                $("error in onStart callback of PokiSDK.commercialBreak()", e)
                            }
                    }
                }).then(( () => {
                    o && window.pokiMeasureBuildin && window.PokiSDK.measure("midroll", this.#ie, "complete"),
                    i()
                }
                ))
            }
            ));
            rewardedBreak = t => new Promise((i => {
                return ClonerAdReward(i);
                if (this.__logCall("rewardedBreak", t),
                "977b60eb-ff81-4c3a-895b-b585410d6c0d" === F.gameID)
                    return void i(!1);
                let n, o = 1;
                if ("function" == typeof t)
                    n = t;
                else if ("object" == typeof t) {
                    t.onStart && (n = t.onStart);
                    const e = t?.size || ja.SMALL;
                    e === ja.SMALL ? o = 1 : e === ja.MEDIUM ? o = 2 : e === ja.LARGE && (o = 3)
                }
                let a = !1;
                setTimeout(( () => {
                    this.__runVideoAd({
                        position: e.ads.position.rewarded,
                        amount: o,
                        onStart: () => {
                            if (this.#ne++,
                            a = !0,
                            window.pokiMeasureBuildin && window.PokiSDK.measure("rewarded", this.#ne, "start"),
                            "function" == typeof n)
                                try {
                                    n()
                                } catch (e) {
                                    $("error in onStart callback of PokiSDK.rewardedBreak()", e)
                                }
                        }
                    }).then((e => {
                        a && window.pokiMeasureBuildin && window.PokiSDK.measure("rewarded", this.#ne, "complete"),
                        i(e)
                    }
                    ))
                }
                ), 0)
            }
            ));
            displayAd = (t, i, n, o) => {
                if (this.__logCall("displayAd", t, i, n, o),
                "977b60eb-ff81-4c3a-895b-b585410d6c0d" === F.gameID)
                    return void (n && n());
                const a = Bt();
                te.track(e.tracking.screen.displayAd, {
                    size: i,
                    opportunityId: a,
                    duringGameplay: this.#Z
                });
                const r = {
                    container: t,
                    opportunityId: a,
                    size: i,
                    duringGameplay: this.#Z,
                    onCanDestroy: n,
                    onDisplayRendered: o,
                    headerBiddingAllowed: !0
                };
                this.__monetization.displayAd(r)
            }
            ;
            destroyAd = e => {
                this.__logCall("destroyAd", e),
                this.__monetization.destroyAd(e)
            }
            ;
            isAdBlocked = () => !1;
            muteAd = () => {
                this.__logCall("muteAd"),
                this.__monetization.muteAd()
            }
            ;
            setVolume = e => {
                this.__logCall("setVolume", e),
                this.__monetization.setVolume(e)
            }
            ;
            logError = e => {
                this.captureError(e)
            }
            ;
            setPlaytestCanvas = e => {
                this.__logCall("setPlaytestCanvas", e),
                this.playtestSetCanvas(e)
            }
            ;
            playtestSetCanvas = e => {
                if (this.__logCall("playtestSetCanvas", e),
                !e)
                    return void an([]);
                const t = [].concat(e);
                an(t),
                sa(t)
            }
            ;
            playtestCaptureHtmlOnce = () => {
                this.__logCall("playtestCaptureHtmlOnce"),
                sn(Xi)
            }
            ;
            playtestCaptureHtmlForce = () => {
                this.__logCall("playtestCaptureHtmlForce"),
                sn(Yi)
            }
            ;
            playtestCaptureHtmlOn = () => {
                this.__logCall("playtestCaptureHtmlOn"),
                sn(Ji)
            }
            ;
            playtestCaptureHtmlOff = () => {
                this.__logCall("playtestCaptureHtmlOff"),
                sn(en)
            }
            ;
            getIsoLanguage = () => D("iso_lang");
            shareableURL = (t={}) => new Promise(( (i, n) => {
                this.__logCall("shareableURL", t);
                const o = new URLSearchParams
                  , a = Object.keys(t);
                if (F.isPokiIframe || F.isInspector) {
                    const n = D("poki_url");
                    a.forEach((e => {
                        void 0 !== t[e] && null !== t[e] && o.set(`gd${e}`, t[e])
                    }
                    )),
                    i(`${n}?${o.toString()}`),
                    G.sendMessage(e.message.setPokiURLParams, {
                        params: t
                    })
                } else
                    window.self === window.top ? (a.forEach((e => {
                        void 0 !== t[e] && null !== t[e] && o.set(`${e}`, t[e])
                    }
                    )),
                    i(`${window.location.origin}${window.location.pathname}?${o.toString()}`)) : n(new Error("shareableURL only works on Poki or a top level frame"))
            }
            ));
            getURLParam = e => D(`gd${e}`) || D(e);
            captureError = e => {
                this.__logCall("captureError", e),
                mo(e)
            }
            ;
            getLanguage = () => navigator.language.toLowerCase().split("-")[0];
            generateScreenshot = async () => (this.__logCall("generateScreenshot"),
            bo());
            enableEventTracking = e => {
                this.__logCall("enableEventTracking", e),
                F.isPlayground || F.isPokiIframe || F.isInspector || document?.referrer?.includes("games.poki.com") || te.setupObserverWithCMP(e || 0)
            }
            ;
            __runVideoAd = ({position: t, amount: i, onStart: n, timeBetweenAds: o}) => new Promise((a => {
                let r = 1;
                this.__monetization.setNrAds(r, i);
                const s = Bt()
                  , d = n => {
                    setTimeout(( () => {
                        if (n?.type === e.ads.limit || n?.type === e.ads.busy)
                            return void a(!1);
                        if (r === i || this.#ae)
                            return Q.dispatchEvent(e.ads.startTimer, {
                                overwriteTimeBetweenAds: o
                            }),
                            void a(!!n?.rewardAllowed);
                        const c = Q.getVideoDataAnnotations();
                        if ("poki" === c?.bidder)
                            return Q.dispatchEvent(e.ads.startTimer, {
                                overwriteTimeBetweenAds: o
                            }),
                            void a(!0);
                        r++,
                        Q.clearVideoDataAnnotations(),
                        Q.addVideoDataAnnotations({
                            adBreakId: s,
                            position: t,
                            opportunityId: Bt(),
                            currentAdNumber: r,
                            totalAdAmount: i
                        }),
                        this.__monetization.setNrAds(r, i),
                        this.__monetization.requestAd({
                            position: t,
                            onFinish: d
                        })
                    }
                    ), 0)
                }
                ;
                Q.clearVideoDataAnnotations(),
                Q.addVideoDataAnnotations({
                    adBreakId: s,
                    position: t,
                    opportunityId: Bt(),
                    currentAdNumber: 1,
                    totalAdAmount: i
                }),
                this.__monetization.requestAd({
                    position: t,
                    onFinish: d,
                    onStart: () => {
                        if (this.__monetization.setNrAds(r, i),
                        "function" == typeof n)
                            try {
                                n()
                            } catch (e) {
                                console.error("%cPOKI:%c error in onStart callback of PokiSDK.runVideoAd()", "font-weight: bold", "", e)
                            }
                    }
                })
            }
            ));
            #pe = () => {
                window.removeEventListener("pointermove", this.#pe),
                document.removeEventListener("keydown", this.#pe),
                te.track(e.tracking.screen.playerActive),
                this.#X = setTimeout(( () => {
                    window.addEventListener("pointermove", this.#pe),
                    document.addEventListener("keydown", this.#pe)
                }
                ), 6e5)
            }
            ;
            #se = e => {
                var t;
                "pointerdown" === e.type ? this.#J = "pointerdown" : "keydown" === e.type ? this.#J = `keydown-${e.code}` : this.#J = "unknown",
                t = performance.now(),
                ba = t
            }
            ;
            __logCall = (e, ...t) => {
                if (!F.isPlayground) {
                    for (let e = 0; e < t.length; e++)
                        void 0 === t[e] && (t[e] = "");
                    K(`PokiSDK.${e}(`, ...t, ")")
                }
            }
            ;
            setDebugTouchOverlayController = () => {}
            ;
            gameInteractive = () => {}
            ;
            gameLoadingProgress = () => {}
            ;
            gameLoadingStart = () => {}
            ;
            getLeaderboard = () => Promise.resolve([]);
            happyTime = () => {}
            ;
            sendHighscore = () => {}
            ;
            setPlayerAge = () => {}
            ;
            roundStart = () => {}
            ;
            roundEnd = () => {}
            ;
            getUser = async () => this.#oe.getUser();
            getToken = async () => this.#oe.getToken();
            login = async () => this.#oe.login()
        }
          , Za = new $a(new class {
            #i;
            #Ae = !1;
            #me = {
                [e.ads.position.preroll]: 0,
                [e.ads.position.midroll]: 0,
                [e.ads.position.rewarded]: 0
            };
            #ue = {
                [e.ads.position.preroll]: 0,
                [e.ads.position.midroll]: 0,
                [e.ads.position.rewarded]: 0
            };
            #o = {};
            #ge = {};
            #he = null;
            #we;
            #ve = !1;
            #fe;
            #be = !1;
            #ye = !1;
            #ke = {};
            #xe = {
                blocklist: [],
                countryExclusion: [],
                bidderLimitation: {}
            };
            #_e;
            #Ie = {
                isRequesting: !1,
                position: null
            };
            #Se;
            #Ee = !1;
            #Ce = !1;
            #Pe = !1;
            #Be = !1;
            #Te = !1;
            #De = !1;
            #Me = !1;
            display;
            constructor() {
                window.googletag = window.googletag || {
                    cmd: []
                },
                window.pbjs = window.pbjs || {
                    que: []
                },
                this.display = Kt() ? new Zi : new $i
            }
            init(e={}) {
                if ("undefined" == typeof window)
                    return;
                const {onReady: t=null} = e;
                if (this.#ke = e,
                t && this.#Re("onReady", t),
                !this.#ve)
                    return this.#he || ((e.strictConsentMode || F.gdprApplies) && (this.#Be = !0),
                    this.#he = this.#Le()),
                    this.#he;
                console.error("%cPOKI:%c SDK has already been initialized", "font-weight: bold", "")
            }
            startLoadingMonetizationCore = () => this.loadMonetizationCore();
            configureA9 = e => Vt(e, this.#xe.bidderLimitation);
            #Le() {
                const {debug: t, logging: i, wrapper: n} = this.#ke;
                V.init(t, i),
                V.debug && wo(),
                this.#Oe(),
                te.setupDefaultEvents(),
                F.isPokiIframe && setTimeout(oe.trackSavegames, 1e4),
                this.#we = new Hi({
                    wrapper: n
                }),
                window.addEventListener("resize", this.resizeVideoAd.bind(this), !1);
                let o = Qi;
                (V.debug || F.isPlayground) && (o = () => Promise.resolve());
                const a = void 0 !== this.#ke.isCCPA ? this.#ke.isCCPA : F.ccpaApplies;
                let r = Wi;
                const s = (this.#ke.country || F.country).toUpperCase();
                s && void 0 !== a && (r = () => Promise.resolve({
                    ISO: s,
                    ccpaApplies: a
                }));
                const d = [...[o(), r()], Ki()];
                return Promise.allSettled(d).then((t => {
                    try {
                        const [n,o,r] = t;
                        if ("fulfilled" === n.status) {
                            const e = n.value;
                            if (e) {
                                F.gameID || j("gameID", e.gameID),
                                e.cachedContentGameID && j("contentGameID", e.cachedContentGameID),
                                this.setAdTimings(e.adTiming),
                                this.#_e = e.specialConditions;
                                try {
                                    Na(e)
                                } catch (e) {
                                    console.warn("%cPOKI:%c error in maybeStartPlaytest", "font-weight: bold", "", e)
                                }
                            }
                            if (!(e && e.gameID || V.debug || window?.isPokiPlayground || F.isPokiExternal || "test" === window?.process?.env?.NODE_ENV)) {
                                const e = "background-color: red; border-radius: 3px; color: white; padding: 1px 5px"
                                  , t = ["Possible Unauthorized Game Hosting Detected❗", "We've noticed that this game, which is part of Poki, is being played on a site that isn't currently allowed.", "If you're a developer who is hosting this game on your site, no worries! Please reach out to us to get your domain approved and we'll hook you up.", "However, if you are hosting this game without proper authorization, be advised: this is a violation of our terms and infringes upon copyright laws. Consider this message as a formal Digital Millennium Copyright Act (DMCA) Takedown Notice. Please remove the game from your site immediately to avoid further action."];
                                console.log("%cALERT", e, t.join("\n\n"))
                            }
                        }
                        let d = {
                            ISO: "ZZ",
                            ccpaApplies: !1
                        };
                        if ("fulfilled" === o.status && (d = o.value),
                        j("country", (s || d?.ISO || "ZZ").toUpperCase()),
                        j("gdprApplies", T(F.country)),
                        j("ccpaApplies", void 0 === a ? d?.ccpaApplies || !1 : a),
                        F.gdprApplies && (this.#Be = !0),
                        Ae(),
                        "fulfilled" === r.status) {
                            const e = r.value;
                            e && (this.#xe = e)
                        }
                        i = this.#xe.blocklist,
                        Ce = i || [],
                        this.#Be && Q.dispatchEvent(e.ready),
                        F.isPlayground || F.isPokiExternal || this.loadMonetizationCore()
                    } catch (t) {
                        Q.dispatchEvent(e.failed, {
                            message: `${t}`
                        })
                    }
                    var i
                }
                )).catch((t => {
                    Q.dispatchEvent(e.failed, {
                        message: `${t}`
                    })
                }
                ))
            }
            async loadMonetizationCore() {
                const {prebid: t={}, a9Signals: i={}, volume: n=1, waterfallRetries: o, displayOnly: a=!1} = this.#ke;
                let {nonPersonalized: r=!1, familyFriendly: s=!1} = {
                    ...this.#ke
                };
                if (F.isInspector)
                    return void (this.#Be || Q.dispatchEvent(e.ready));
                r = r || !!F.nonPersonalized,
                s = s || !!F.familyFriendly,
                j("nonPersonalized", r),
                j("familyFriendly", s);
                const d = [];
                return this.#Pe = a,
                this.#Be && !F.familyFriendly && await new Promise((e => {
                    F.gdprApplies && !V.debug || e();
                    let t = 0;
                    const i = () => {
                        if (!se)
                            return t++,
                            void setTimeout(i, 50 * t);
                        window.__tcfapi("addEventListener", 2, ( (t, i) => {
                            i && ["tcloaded", "useractioncomplete"].includes(t.eventStatus) && t?.purpose?.consents?.[1] && (t.listenerId && window.__tcfapi("removeEventListener", 2, ( () => {}
                            ), t.listenerId),
                            e())
                        }
                        ))
                    }
                    ;
                    i()
                }
                )),
                d.push(X("https://securepubads.g.doubleclick.net/tag/js/gpt.js")),
                a ? d.push(Promise.resolve()) : d.push(X("https://imasdk.googleapis.com/js/sdkloader/ima3.js")),
                F.familyFriendly || F.nonPersonalized ? (d.push(Promise.resolve(), Promise.resolve(), Promise.resolve()),
                F.familyFriendly && $i.enforceFamilyFriendlyFlow(),
                j("nonPersonalized", !0),
                $i.enforceNonPersonalized()) : d.push(yt(), X("https://a.poki-cdn.com/prebid/prebid_1759232497.js"), X("https://c.amazon-adsystem.com/aax2/apstag.js")),
                this.display.setupSlotRenderEndedListener(),
                Promise.allSettled(d).then((r => {
                    try {
                        const [s,d,c,l,p] = r;
                        "rejected" === s.status && (this.#De = !0),
                        "rejected" === c.status && te.track(e.tracking.ads.ay.failed, {
                            reason: to(c.reason),
                            ayMode: F.AYMode,
                            gptRejected: "rejected" === s.status,
                            imaRejected: "rejected" === d.status,
                            prebidRejected: "rejected" === l.status,
                            a9Rejected: "rejected" === p.status,
                            displayOnly: a,
                            fullStack: F.familyFriendly || F.nonPersonalized ? 0 : 1
                        }),
                        Ht(t, this.#xe.bidderLimitation),
                        Vt(i, this.#xe.bidderLimitation),
                        ( () => {
                            ti.log("Loading rewarded web"),
                            Yt?.contentWindow || (ni(),
                            ti.log("No iframe content window available"));
                            let t = 0;
                            window.addEventListener("message", (i => {
                                if (i.data?.type)
                                    switch (i.data.type) {
                                    case "rewardedReady":
                                        Xt = !0;
                                        break;
                                    case "rewardedSlotReady":
                                        ti.log("Received rewarded slot ready from iframe"),
                                        ai(!0),
                                        te.track(e.tracking.ads.rewardedWeb.ready),
                                        Q.dispatchEvent(e.ads.started, {
                                            creativeId: "RewardedWeb",
                                            duration: -1,
                                            skip: -1
                                        }),
                                        clearTimeout(t);
                                        break;
                                    case "rewardedSlotGranted":
                                        ti.log("Received reward granted from iframe"),
                                        Zt = !0;
                                        break;
                                    case "rewardedSlotClosed":
                                        ti.log("Received slot closed from iframe", {
                                            grantReward: Zt
                                        }),
                                        ai(!1),
                                        Zt ? te.track(e.tracking.ads.rewardedWeb.closedGranted) : te.track(e.tracking.ads.rewardedWeb.closedDeclined),
                                        Q.dispatchEvent(e.ads.completed, {
                                            rewardAllowed: Zt
                                        });
                                        break;
                                    case "rewardedSlotRenderEnded":
                                        ti.log("Received slot render ended from iframe", {
                                            isEmpty: i.data.isEmpty
                                        }),
                                        ii() === i.data.adUnitPath && i.data.isEmpty && (te.track(e.tracking.ads.rewardedWeb.empty),
                                        clearTimeout(t),
                                        Q.dispatchEvent(e.ads.video.startHouseAdFlow));
                                        break;
                                    case "rewardedSlotRequested":
                                        ti.log("Received slot requested from iframe", {
                                            hasEvent: i.data
                                        }),
                                        i.data.hasEvent || (te.track(e.tracking.ads.rewardedWeb.empty),
                                        Q.dispatchEvent(e.ads.video.startHouseAdFlow)),
                                        t = setTimeout(( () => {
                                            Q.dispatchEvent(e.ads.error, {
                                                rewardAllowed: !1
                                            })
                                        }
                                        ), 5e3)
                                    }
                            }
                            ))
                        }
                        )(),
                        ( () => {
                            let t;
                            li.log("Loading interstitial web"),
                            si?.contentWindow || (mi(),
                            li.log("No iframe content window available")),
                            window.addEventListener("message", (i => {
                                if (i.data?.type)
                                    switch (i.data.type) {
                                    case "gameManualInterstitialReady":
                                        ri = !0;
                                        break;
                                    case "gameManualInterstitialSlotReady":
                                        li.log("Received interstitial slot ready from iframe"),
                                        Ai(!0),
                                        Q.dispatchEvent(e.ads.started, {
                                            creativeId: "InterstitialWeb",
                                            duration: -1,
                                            skip: -1
                                        }),
                                        clearTimeout(t);
                                        break;
                                    case "gameManualInterstitialSlotClosed":
                                        li.log("Received slot closed from iframe"),
                                        Ai(!1),
                                        Q.dispatchEvent(e.ads.completed, {
                                            rewardAllowed: !0
                                        });
                                        break;
                                    case "interstitialSlotRenderEnded":
                                        li.log("Received slot render ended from iframe", {
                                            isEmpty: i.data.isEmpty
                                        }),
                                        pi() === i.data.adUnitPath && i.data.isEmpty && (clearTimeout(t),
                                        Q.dispatchEvent(e.ads.completed, {
                                            rewardAllowed: !1
                                        }));
                                        break;
                                    case "interstitialSlotRequested":
                                        li.log("Received slot requested from iframe", {
                                            hasEvent: i.data.hasEvent
                                        }),
                                        i.data.hasEvent || Q.dispatchEvent(e.ads.completed, {
                                            rewardAllowed: !1
                                        }),
                                        t = setTimeout(( () => {
                                            Q.dispatchEvent(e.ads.error, {
                                                rewardAllowed: !1
                                            })
                                        }
                                        ), 5e3)
                                    }
                            }
                            ))
                        }
                        )(),
                        "rejected" === d.status && (this.#Me = !0);
                        const A = {
                            ...ve
                        };
                        V.debug && (A.adTiming.startAdsAfter = 0,
                        this.setAdTimings(A.adTiming));
                        const m = F.forceAd;
                        if (m && (this.setAdTimings({
                            preroll: !0,
                            timeBetweenAds: 12e4,
                            timePerTry: 7e3,
                            startAdsAfter: 0
                        }),
                        A.customCriteria = {
                            ...A.customCriteria,
                            force_ad: m
                        }),
                        this.#o = {
                            ...A.customCriteria,
                            ay_mode: F.AYMode
                        },
                        this.#i = new qi(n),
                        this.#we.setupEvents(this),
                        this.#ye && za.startStartAdsAfterTimer(),
                        this.#fe = new bi(this.#i,{
                            timing: za,
                            totalRetries: o
                        }),
                        this.#Te = !0,
                        this.#De && this.#Me)
                            return void Q.dispatchEvent(e.failed, {
                                message: "Both core sdks failed to boot"
                            });
                        this.#Be || Q.dispatchEvent(e.ready)
                    } catch (t) {
                        Q.dispatchEvent(e.failed, {
                            message: `${t}`
                        })
                    }
                }
                )).catch((t => {
                    console.warn("%cPOKI:%c", "font-weight: bold", "", t),
                    Q.dispatchEvent(e.failed, {
                        message: `${t}`
                    })
                }
                ))
            }
            requestAd(t={}) {
                const {autoStart: i=!0, onFinish: n=null, onStart: o=null, position: a=null} = t
                  , r = Q.getVideoDataAnnotations();
                if (te.track(a === e.ads.position.rewarded ? e.tracking.screen.rewardedBreak : e.tracking.screen.commercialBreak, r),
                this.#Ie.isRequesting) {
                    if (n)
                        try {
                            n({
                                type: e.ads.busy,
                                rewardAllowed: !1
                            })
                        } catch (e) {
                            $("error in onFinish callback", e)
                        }
                    return
                }
                if (this.#Ie = {
                    isRequesting: !0,
                    position: a
                },
                this.#Ae = !1 !== i,
                this.#Re("onFinish", (e => {
                    if (o && this.#Ne("onStart"),
                    n) {
                        this.#Ne("onFinish");
                        try {
                            n(e)
                        } catch (e) {
                            $("error in onFinish callback", e)
                        }
                    }
                }
                )),
                this.#Re("onFinish", (t => {
                    if (Q.dispatchEvent(e.playtest.stopVideo),
                    n)
                        try {
                            n(t)
                        } catch (e) {
                            $("error in onFinish callback", e)
                        }
                }
                )),
                this.#Re("onStart", (t => {
                    Q.dispatchEvent(e.playtest.startVideo, {
                        position: a
                    }),
                    o && o(t)
                }
                )),
                null === a || !P(a, e.ads.position))
                    return Z(`invalid position: ${a}`),
                    void Q.dispatchEvent(e.ads.error, r);
                if (this.#Pe)
                    return $("Display only mode, no video ads available"),
                    void Q.dispatchEvent(e.ads.error, r);
                if (!this.#ve)
                    return Z("Requesting ad before PokiSDK.init() is done"),
                    Q.dispatchEvent(e.ads.error, r),
                    void this.#ze();
                if (this.#i?.isAdRunning?.() || this.#fe?.isRunning?.())
                    return Z("a video ad is already running"),
                    void Q.dispatchEvent(e.ads.busy, r);
                if (!F.adOverrideMode) {
                    if (a === e.ads.position.preroll && !za.prerollPossible())
                        return K("commercialBreak not possible before gameplayStart"),
                        void Q.dispatchEvent(e.ads.limit, {
                            ...r,
                            reason: e.info.messages.prerollLimit
                        });
                    if (a !== e.ads.position.rewarded && !za.requestPossible())
                        return K("commercialBreak too soon after previous one"),
                        void Q.dispatchEvent(e.ads.limit, {
                            ...r,
                            reason: e.info.messages.timeLimit
                        });
                    if (a !== e.ads.position.rewarded && this.#xe.countryExclusion.includes(F.country))
                        return K(`commercialBreak is disabled in this country: ${F.country}`),
                        void Q.dispatchEvent(e.ads.limit, {
                            ...r,
                            reason: e.info.messages.disabled
                        })
                }
                if (F.kioskMode)
                    return a === e.ads.position.rewarded ? void this.#Ue() : void Q.dispatchEvent(e.ads.limit, {
                        ...r,
                        reason: e.info.messages.disabled
                    });
                if (this.#Be && !this.#Te && !F.adOverrideMode && !F.googlePreview)
                    return a === e.ads.position.rewarded || V.debug ? void this.#Ue() : (K("commercialBreak not possible before consent"),
                    void Q.dispatchEvent(e.ads.error, r));
                if (!this.#i || this.#Ce || this.#Me)
                    return void (a === e.ads.position.rewarded || F.isInspector ? this.#Ue() : Q.dispatchEvent(e.ads.error, r));
                if (me())
                    return Z("No TCFv2 CMP detected!"),
                    void Q.dispatchEvent(e.ads.error, r);
                if (ue())
                    return Z("No USP detected!"),
                    void Q.dispatchEvent(e.ads.error, r);
                if (this.#Ee)
                    return void Q.dispatchEvent(e.ads.ready, r);
                const s = {
                    ...this.#je(),
                    ...this.#o,
                    position: a,
                    ab: Math.floor(100 * Math.random()).toString(),
                    refresh_number: this.#me[a],
                    total_refresh_number: this.#ue[a]
                };
                this.#me[a]++,
                this.#ue[a]++,
                this.#we.show(),
                this.resizeVideoAd(),
                this.#fe.start(s, a)
            }
            displayAd(e) {
                const {container: t, size: i} = e;
                return e.criteria = {
                    ab: Math.floor(100 * Math.random()).toString(),
                    ...this.#je(),
                    ...this.#o,
                    ...e.criteria || {}
                },
                e.platformAd && (delete e.criteria.p4d_game_id_cond,
                delete e.criteria.p4d_game_id),
                !F.kioskMode && (V.debug ? (this.display.renderAd(e),
                !0) : this.#Be && !this.#Te ? (Z("Ad libraries not yet loaded"),
                !1) : this.#De ? (Z("Bot, IMA or Adblocker error"),
                !1) : me() ? (Z("No TCFv2 CMP detected, please contact developersupport@poki.com for more information"),
                !1) : ue() ? (Z("No USP detected, please contact developersupport@poki.com for more information"),
                !1) : i ? this.#ve ? t ? void 0 === window.googletag ? (Z("googletag not defined"),
                !1) : !F.adOverrideMode && this.#xe.countryExclusion.includes(F.country) ? (Z("Country is excluded from ads"),
                !1) : this.display.validateDisplaySettings(i) ? (this.display.renderAd(e),
                !0) : (Z(`Display size ${i} is not supported on this device`),
                !1) : (Z("Provided container does not exist"),
                !1) : (Z("Requesting ad on unbooted SDK"),
                this.#ze(),
                !1) : (Z("No ad size given, usage: displayAd(<container>, <size>)"),
                !1))
            }
            destroyAd(e) {
                e = e || document.body,
                this.display.clearAd(e)
            }
            startStartAdsAfterTimer() {
                this.#ze() ? this.#ye = !0 : za.startStartAdsAfterTimer()
            }
            muteAd() {
                this.#ze() || this.#i.muteAd()
            }
            isAdBlocked = () => !1;
            setVolume(e) {
                this.#ze() || this.#i?.setVolume(e)
            }
            forcePreroll() {
                if (this.#ze())
                    return;
                const t = za.prerollPossible;
                za.prerollPossible = () => !0,
                this.requestAd({
                    position: e.ads.position.preroll
                }),
                za.prerollPossible = t
            }
            resumeAd() {
                this.#ze() || (this.#we.hidePauseButton(),
                this.#i.resumeAd())
            }
            startAdClicked() {
                this.#ze() || ge() && this.#be && (this.#be = !1,
                this.#we.hideStartAdButton(),
                this.#i.startIOSPlayback())
            }
            stopVideoAd() {
                this.#we.hide(),
                Q.dispatchEvent(e.ads.stopped),
                this.#ze() || this.#Ie.isRequesting && (this.#fe.stopWaterfall(),
                this.#i.stopPlayback(),
                this.#Ie.position === e.ads.position.rewarded ? (ti.log("Destroying rewarded web", (new Error).stack),
                Yt && (Yt.remove(),
                Yt = null,
                ti.log("Iframe removed"),
                Xt = !1,
                Zt = !1)) : (li.log("Destroying interstitial web", (new Error).stack),
                si && (si.remove(),
                si = null,
                li.log("Iframe removed"),
                ri = !1)),
                this.#Ie = {
                    isRequesting: !1,
                    position: null
                })
            }
            resizeVideoAd() {
                if (!this.#i)
                    return;
                const e = this.#we.getVideoBounds();
                if (0 === e.width || 0 === e.height)
                    return this.#Se && clearTimeout(this.#Se),
                    void (this.#Se = setTimeout(( () => {
                        this.resizeVideoAd()
                    }
                    ), 100));
                this.#i.resize(e.width, e.height)
            }
            setAdTimings(t={}) {
                this.#me = {
                    [e.ads.position.preroll]: 0,
                    [e.ads.position.midroll]: 0,
                    [e.ads.position.rewarded]: 0
                },
                za.setTimings(t),
                za.resetAll()
            }
            setSpecialConditions(e) {
                this.#_e = e || []
            }
            #Fe() {
                if (!this.#ze())
                    if (this.#Ee)
                        try {
                            this.resizeVideoAd(),
                            this.#i.startPlayback() || this.stopVideoAd()
                        } catch {
                            Q.dispatchEvent(e.ads.error, {})
                        }
                    else
                        Q.dispatchEvent(e.ads.error, {})
            }
            #Re(e, t) {
                this.#ge[e] = t
            }
            #Ge(e, t=void 0) {
                "function" == typeof this.#ge[e] && this.#ge[e](t)
            }
            #Oe() {
                Q.addEventListener(e.ready, ( () => {
                    this.#ve = !0,
                    this.setVolume(.6),
                    this.#Ge("onReady")
                }
                )),
                Q.addEventListener(e.failed, ( () => {
                    this.#ve = !0,
                    this.#Ce = !0
                }
                )),
                Q.addEventListener(e.ads.ready, ( () => {
                    this.#Ee = !0,
                    this.#Ae && this.#Fe()
                }
                )),
                Q.addEventListener(e.ads.started, ( () => {
                    this.#we.hideSpinner(),
                    this.#Ge("onStart", {
                        type: e.ads.limit
                    })
                }
                )),
                Q.addEventListener(e.ads.video.paused, ( () => {
                    this.#we.showPauseButton()
                }
                )),
                Q.addEventListener(e.ads.video.error, ( () => {
                    const t = Q.getVideoDataAnnotations();
                    var i;
                    t?.HBVastUrl && (i = t?.HBVastUrl,
                    X("https://a.poki.com/ads/vast-client-2.js", !0).then(( () => {
                        if (window.VASTClient)
                            try {
                                const t = []
                                  , n = new window.VASTClient;
                                n.getParser().on("VAST-resolved", (e => {
                                    t.push(e)
                                }
                                )),
                                n.get(i).then(( () => {
                                    Q.dispatchEvent(e.ads.extendedVideoError, {
                                        vastChain: JSON.stringify(t),
                                        vastResolved: !0
                                    })
                                }
                                )).catch((i => {
                                    Q.dispatchEvent(e.ads.extendedVideoError, {
                                        vastChain: JSON.stringify(t),
                                        vastResolved: !1,
                                        vastResolveErr: JSON.stringify(i)
                                    })
                                }
                                ))
                            } catch (e) {
                                console.warn("%cPOKI:%c Error parsing VAST", "font-weight: bold", "", e)
                            }
                    }
                    )).catch(( () => {}
                    )))
                }
                )),
                Q.addEventListener(e.ads.limit, ( () => {
                    this.#Ie = {
                        isRequesting: !1,
                        position: null
                    },
                    this.#Ge("onFinish", {
                        type: e.ads.limit,
                        rewardAllowed: !1
                    })
                }
                )),
                Q.addEventListener(e.ads.stopped, ( () => {
                    this.#Ie = {
                        isRequesting: !1,
                        position: null
                    },
                    this.#Ge("onFinish", {
                        type: e.ads.stopped,
                        rewardAllowed: !1
                    })
                }
                )),
                Q.addEventListener(e.ads.error, (t => {
                    this.#Ie = {
                        isRequesting: !1,
                        position: null
                    },
                    this.#Ge("onFinish", {
                        type: e.ads.error,
                        rewardAllowed: !!t.rewardAllowed
                    })
                }
                )),
                Q.addEventListener(e.ads.busy, ( () => {
                    this.#Ie = {
                        isRequesting: !1,
                        position: null
                    },
                    this.#Ge("onFinish", {
                        type: e.ads.busy,
                        rewardAllowed: !1
                    })
                }
                )),
                Q.addEventListener(e.ads.completed, (t => {
                    this.#Ie = {
                        isRequesting: !1,
                        position: null
                    },
                    this.#Ge("onFinish", {
                        type: e.ads.completed,
                        rewardAllowed: !!t.rewardAllowed
                    })
                }
                )),
                [e.ads.limit, e.ads.stopped, e.ads.error, e.ads.completed].forEach((e => {
                    Q.addEventListener(e, ( () => {
                        this.#we && this.#we.hide(),
                        this.#Ee = !1
                    }
                    ))
                }
                ))
            }
            #ze = () => !(!this.#Be || this.#Te) || !this.#Be && !this.#ve && (console.error("The Poki SDK was not yet booted"),
            !0);
            #je = () => {
                const e = {};
                if (e.tag = F.tag,
                e.site_id = F.siteID,
                e.categories = decodeURIComponent(F.categories),
                F.cookieDepL && (e.cookieDepL = F.cookieDepL),
                F.experiment) {
                    const t = decodeURIComponent(F.experiment);
                    e.experiment = t,
                    F.contentGameID && (e.expid_content_gameid = `${t}|${F.contentGameID}`)
                }
                return F.specialCondition && this.#_e && this.#_e.includes(F.specialCondition) ? "landing" === F.specialCondition ? e.p4d_game_id_cond = `${F.gameID}|l` : "crosspromo" === F.specialCondition ? e.p4d_game_id_cond = `${F.gameID}|cp` : e.p4d_game_id = F.gameID : e.p4d_game_id = F.gameID,
                e
            }
            ;
            #Ue = () => {
                Q.addVideoDataAnnotations({
                    pokiAdServer: !0
                });
                const t = () => Q.dispatchEvent(e.ads.error, {});
                (async function() {
                    const e = await ke("https://api.poki.com/ads/houseads/video/vast")
                      , t = await e.text()
                      , i = (new DOMParser).parseFromString(t, "text/xml")
                      , n = i.querySelector("ClickThrough")?.textContent?.trim() || ""
                      , o = (i.querySelector("Duration")?.textContent?.trim() || "00:00:11").split(":")
                      , a = 60 * +o[0] * 60 + 60 * +o[1] + +o[2];
                    let r = "";
                    return i.querySelectorAll("MediaFile").forEach((e => {
                        const t = e?.textContent?.trim() || "";
                        t.includes("advertisement.h264_high.mp4") && (r = t)
                    }
                    )),
                    F.kioskMode ? {
                        duration: a,
                        videoUrl: r
                    } : {
                        clickThrough: n,
                        duration: a,
                        videoUrl: r
                    }
                }
                )().then((e => {
                    try {
                        this.#we.show(),
                        this.#we.startNonIMAFallbackVideo(e)
                    } catch {
                        t()
                    }
                }
                )).catch(( () => {
                    G.sendMessage(e.message.sendCommand, {
                        event: "adLibrariesNotLoaded"
                    }),
                    t()
                }
                ))
            }
            ;
            #Ne(e) {
                delete this.#ge[e]
            }
            setNrAds(e, t) {
                this.#ve && this.#we?.setNrAds(e, t)
            }
        }
        );
        for (const e in Za)
            e.startsWith("__") || (window.PokiSDK[e] = Za[e])
    }
    )()
}
)();
