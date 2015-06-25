function trace(a) {
    VMM.debug && (window.console ? console.log(a) : "undefined" != typeof jsTrace && jsTrace.send(a));
}

function onYouTubePlayerAPIReady() {
    trace("GLOBAL YOUTUBE API CALLED"), VMM.ExternalAPI.youtube.onAPIReady();
}

!function() {
    var a = !1, b = /xyz/.test(function() {}) ? /\b_super\b/ : /.*/;
    this.Class = function() {}, Class.extend = function(c) {
        function g() {
            !a && this.init && this.init.apply(this, arguments);
        }
        var d = this.prototype;
        a = !0;
        var e = new this;
        a = !1;
        for (var f in c) e[f] = "function" == typeof c[f] && "function" == typeof d[f] && b.test(c[f]) ? function(a, b) {
            return function() {
                var c = this._super;
                this._super = d[a];
                var e = b.apply(this, arguments);
                return this._super = c, e;
            };
        }(f, c[f]) : c[f];
        return g.prototype = e, g.prototype.constructor = g, g.extend = arguments.callee, g;
    };
}();

var global = function() {
    return this || (1, eval)("this");
}();

if ("undefined" == typeof VMM) {
    var VMM = Class.extend({});
    VMM.debug = !0, VMM.master_config = {
        "init": function() {
            return this;
        },
        "sizes": {
            "api": {
                "width": 0,
                "height": 0
            }
        },
        "vp": "Pellentesque nibh felis, eleifend id, commodo in, interdum vitae, leo",
        "api_keys_master": {
            "flickr": "RAIvxHY4hE/Elm5cieh4X5ptMyDpj7MYIxziGxi0WGCcy1s+yr7rKQ==",
            "google": "uQKadH1VMlCsp560gN2aOiMz4evWkl1s34yryl3F/9FJOsn+/948CbBUvKLN46U=",
            "twitter": ""
        },
        "timers": {
            "api": 7e3
        },
        "api": {
            "pushques": []
        },
        "twitter": {
            "active": !1,
            "array": [],
            "api_loaded": !1,
            "que": []
        },
        "flickr": {
            "active": !1,
            "array": [],
            "api_loaded": !1,
            "que": []
        },
        "youtube": {
            "active": !1,
            "array": [],
            "api_loaded": !1,
            "que": []
        },
        "vimeo": {
            "active": !1,
            "array": [],
            "api_loaded": !1,
            "que": []
        },
        "vine": {
            "active": !1,
            "array": [],
            "api_loaded": !1,
            "que": []
        },
        "webthumb": {
            "active": !1,
            "array": [],
            "api_loaded": !1,
            "que": []
        },
        "googlemaps": {
            "active": !1,
            "map_active": !1,
            "places_active": !1,
            "array": [],
            "api_loaded": !1,
            "que": []
        },
        "googledocs": {
            "active": !1,
            "array": [],
            "api_loaded": !1,
            "que": []
        },
        "googleplus": {
            "active": !1,
            "array": [],
            "api_loaded": !1,
            "que": []
        },
        "wikipedia": {
            "active": !1,
            "array": [],
            "api_loaded": !1,
            "que": [],
            "tries": 0
        },
        "soundcloud": {
            "active": !1,
            "array": [],
            "api_loaded": !1,
            "que": []
        }
    }.init(), VMM.createElement = function(a, b, c, d, e) {
        var f = "";
        return null != a && "" != a && (f += "<" + a, null != c && "" != c && (f += " class='" + c + "'"), null != d && "" != d && (f += " " + d), null != e && "" != e && (f += " style='" + e + "'"), f += ">", null != b && "" != b && (f += b), f = f + "</" + a + ">"), f;
    }, VMM.createMediaElement = function(a, b, c) {
        var d = "";
        return d += "<div class='media'>", null != a && "" != a && (valid = !0, d += "<img src='" + a + "'>", null != c && "" != c && (d += VMM.createElement("div", c, "credit")), null != b && "" != b && (d += VMM.createElement("div", b, "caption"))), d += "</div>";
    }, VMM.hideUrlBar = function() {
        var a = window, b = a.document;
        if (!location.hash || !a.addEventListener) {
            window.scrollTo(0, 1);
            var c = 1, d = setInterval(function() {
                b.body && (clearInterval(d), c = "scrollTop" in b.body ? b.body.scrollTop : 1, a.scrollTo(0, 1 === c ? 0 : 1));
            }, 15);
            a.addEventListener("load", function() {
                setTimeout(function() {
                    a.scrollTo(0, 1 === c ? 0 : 1);
                }, 0);
            }, !1);
        }
    };
}

Array.prototype.remove = function(a, b) {
    var c = this.slice((b || a) + 1 || this.length);
    return this.length = 0 > a ? this.length + a : a, this.push.apply(this, c);
}, Date.prototype.getWeek = function() {
    var a = new Date(this.getFullYear(), 0, 1);
    return Math.ceil(((this - a) / 864e5 + a.getDay() + 1) / 7);
}, Date.prototype.getDayOfYear = function() {
    var a = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((this - a) / 864e5);
};

var is = {
    "Null": function(a) {
        return null === a;
    },
    "Undefined": function(a) {
        return void 0 === a;
    },
    "nt": function(a) {
        return null === a || void 0 === a;
    },
    "Function": function(a) {
        return "function" == typeof a ? null !== a.constructor.toString().match(/Function/) : !1;
    },
    "String": function(a) {
        return "string" == typeof a ? !0 : "object" == typeof a ? null !== a.constructor.toString().match(/string/i) : !1;
    },
    "Array": function(a) {
        return "object" == typeof a ? null !== a.constructor.toString().match(/array/i) || void 0 !== a.length : !1;
    },
    "Boolean": function(a) {
        return "boolean" == typeof a ? !0 : "object" == typeof a ? null !== a.constructor.toString().match(/boolean/i) : !1;
    },
    "Date": function(a) {
        return "date" == typeof a ? !0 : "object" == typeof a ? null !== a.constructor.toString().match(/date/i) : !1;
    },
    "HTML": function(a) {
        return "object" == typeof a ? null !== a.constructor.toString().match(/html/i) : !1;
    },
    "Number": function(a) {
        return "number" == typeof a ? !0 : "object" == typeof a ? null !== a.constructor.toString().match(/Number/) : !1;
    },
    "Object": function(a) {
        return "object" == typeof a ? null !== a.constructor.toString().match(/object/i) : !1;
    },
    "RegExp": function(a) {
        return "function" == typeof a ? null !== a.constructor.toString().match(/regexp/i) : !1;
    }
}, type = {
    "of": function(a) {
        for (var b in is) if (is[b](a)) return b.toLowerCase();
    }
};

if ("undefined" != typeof VMM && (VMM.smoothScrollTo = function(a, b, c) {
    if ("undefined" != typeof jQuery) {
        var d = "easein", e = 1e3;
        null != b && (e = 1 > b ? 1 : Math.round(b)), null != c && "" != c && (d = c), jQuery(window).scrollTop() != VMM.Lib.offset(a).top && VMM.Lib.animate("html,body", e, d, {
            "scrollTop": VMM.Lib.offset(a).top
        });
    }
}, VMM.attachElement = function(a, b) {
    "undefined" != typeof jQuery && jQuery(a).html(b);
}, VMM.appendElement = function(a, b) {
    "undefined" != typeof jQuery && jQuery(a).append(b);
}, VMM.getHTML = function(a) {
    var b;
    return "undefined" != typeof jQuery ? b = jQuery(a).html() : void 0;
}, VMM.getElement = function(a, b) {
    var c;
    return "undefined" != typeof jQuery ? c = b ? jQuery(a).parent().get(0) : jQuery(a).get(0) : void 0;
}, VMM.bindEvent = function(a, b, c, d) {
    var f = "click", g = {};
    null != c && "" != c && (f = c), null != g && "" != g && (g = d), "undefined" != typeof jQuery && jQuery(a).bind(f, g, b);
}, VMM.unbindEvent = function(a, b, c) {
    var e = "click";
    null != c && "" != c && (e = c), "undefined" != typeof jQuery && jQuery(a).unbind(e, b);
}, VMM.fireEvent = function(a, b, c) {
    var e = "click", f = [];
    null != b && "" != b && (e = b), null != c && "" != c && (f = c), "undefined" != typeof jQuery && jQuery(a).trigger(e, f);
}, VMM.getJSON = function(a, b, c) {
    if ("undefined" != typeof jQuery) {
        if (jQuery.ajaxSetup({
            "timeout": 3e3
        }), "Explorer" == VMM.Browser.browser && parseInt(VMM.Browser.version, 10) >= 7 && window.XDomainRequest) {
            trace("IE JSON");
            var d = a;
            return d.match("^http://") ? jQuery.getJSON(d, b, c) : d.match("^https://") ? (d = d.replace("https://", "http://"), jQuery.getJSON(d, b, c)) : jQuery.getJSON(a, b, c);
        }
        return jQuery.getJSON(a, b, c);
    }
}, VMM.parseJSON = function(a) {
    return "undefined" != typeof jQuery ? jQuery.parseJSON(a) : void 0;
}, VMM.appendAndGetElement = function(a, b, c, d) {
    var e, f = "<div>", g = "", h = "";
    return null != b && "" != b && (f = b), null != c && "" != c && (g = c), null != d && "" != d && (h = d), "undefined" != typeof jQuery && (e = jQuery(b), e.addClass(g), e.html(h), jQuery(a).append(e)), e;
}, VMM.Lib = {
    "init": function() {
        return this;
    },
    "hide": function(a, b) {
        null != b && "" != b ? "undefined" != typeof jQuery && jQuery(a).hide(b) : "undefined" != typeof jQuery && jQuery(a).hide();
    },
    "remove": function(a) {
        "undefined" != typeof jQuery && jQuery(a).remove();
    },
    "detach": function(a) {
        "undefined" != typeof jQuery && jQuery(a).detach();
    },
    "append": function(a, b) {
        "undefined" != typeof jQuery && jQuery(a).append(b);
    },
    "prepend": function(a, b) {
        "undefined" != typeof jQuery && jQuery(a).prepend(b);
    },
    "show": function(a, b) {
        null != b && "" != b ? "undefined" != typeof jQuery && jQuery(a).show(b) : "undefined" != typeof jQuery && jQuery(a).show();
    },
    "load": function(a, b, c) {
        var d = {
            "elem": a
        };
        null != d && "" != d && (d = c), "undefined" != typeof jQuery && jQuery(a).load(d, b);
    },
    "addClass": function(a, b) {
        "undefined" != typeof jQuery && jQuery(a).addClass(b);
    },
    "removeClass": function(a, b) {
        "undefined" != typeof jQuery && jQuery(a).removeClass(b);
    },
    "attr": function(a, b, c) {
        if (null != c && "" != c) "undefined" != typeof jQuery && jQuery(a).attr(b, c); else if ("undefined" != typeof jQuery) return jQuery(a).attr(b);
    },
    "prop": function(a, b, c) {
        "undefined" != typeof jQuery && /[1-9]\.[3-9].[1-9]/.test(jQuery.fn.jquery) ? jQuery(a).prop(b, c) : VMM.Lib.attribute(a, b, c);
    },
    "attribute": function(a, b, c) {
        if (null != c && "" != c) "undefined" != typeof jQuery && jQuery(a).attr(b, c); else if ("undefined" != typeof jQuery) return jQuery(a).attr(b);
    },
    "visible": function(a, b) {
        if (null != b) "undefined" != typeof jQuery && (b ? jQuery(a).show(0) : jQuery(a).hide(0)); else if ("undefined" != typeof jQuery) return jQuery(a).is(":visible") ? !0 : !1;
    },
    "css": function(a, b, c) {
        if (null != c && "" != c) "undefined" != typeof jQuery && jQuery(a).css(b, c); else if ("undefined" != typeof jQuery) return jQuery(a).css(b);
    },
    "cssmultiple": function(a, b) {
        return "undefined" != typeof jQuery ? jQuery(a).css(b) : void 0;
    },
    "offset": function(a) {
        var b;
        return "undefined" != typeof jQuery && (b = jQuery(a).offset()), b;
    },
    "position": function(a) {
        var b;
        return "undefined" != typeof jQuery && (b = jQuery(a).position()), b;
    },
    "width": function(a, b) {
        if (null != b && "" != b) "undefined" != typeof jQuery && jQuery(a).width(b); else if ("undefined" != typeof jQuery) return jQuery(a).width();
    },
    "height": function(a, b) {
        if (null != b && "" != b) "undefined" != typeof jQuery && jQuery(a).height(b); else if ("undefined" != typeof jQuery) return jQuery(a).height();
    },
    "toggleClass": function(a, b) {
        "undefined" != typeof jQuery && jQuery(a).toggleClass(b);
    },
    "each": function(a, b) {
        "undefined" != typeof jQuery && jQuery(a).each(b);
    },
    "html": function(a, b) {
        var c;
        if ("undefined" != typeof jQuery) return c = jQuery(a).html();
        if (null != b && "" != b) "undefined" != typeof jQuery && jQuery(a).html(b); else {
            var c;
            if ("undefined" != typeof jQuery) return c = jQuery(a).html();
        }
    },
    "find": function(a, b) {
        return "undefined" != typeof jQuery ? jQuery(a).find(b) : void 0;
    },
    "stop": function(a) {
        "undefined" != typeof jQuery && jQuery(a).stop();
    },
    "delay_animate": function(a, b, c, d, e) {
        if ("mobile" == VMM.Browser.device || "tablet" == VMM.Browser.device) {
            var g = Math.round(10 * (c / 1500)) / 10, h = g + "s";
            VMM.Lib.css(b, "-webkit-transition", "all " + h + " ease"), VMM.Lib.css(b, "-moz-transition", "all " + h + " ease"), VMM.Lib.css(b, "-o-transition", "all " + h + " ease"), VMM.Lib.css(b, "-ms-transition", "all " + h + " ease"), VMM.Lib.css(b, "transition", "all " + h + " ease"), VMM.Lib.cssmultiple(b, _att);
        } else "undefined" != typeof jQuery && jQuery(b).delay(a).animate(e, {
            "duration": c,
            "easing": d
        });
    },
    "animate": function(a, b, c, d, e, f) {
        var g = "easein", h = !1, i = 1e3, j = {};
        if (null != b && (i = 1 > b ? 1 : Math.round(b)), null != c && "" != c && (g = c), null != e && "" != e && (h = e), j = null != d ? d : {
            "opacity": 0
        }, "mobile" == VMM.Browser.device || "tablet" == VMM.Browser.device) {
            var k = Math.round(10 * (i / 1500)) / 10, l = k + "s";
            g = " cubic-bezier(0.33, 0.66, 0.66, 1)";
            for (x in j) Object.prototype.hasOwnProperty.call(j, x) && (trace(x + " to " + j[x]), VMM.Lib.css(a, "-webkit-transition", x + " " + l + g), VMM.Lib.css(a, "-moz-transition", x + " " + l + g), VMM.Lib.css(a, "-o-transition", x + " " + l + g), VMM.Lib.css(a, "-ms-transition", x + " " + l + g), VMM.Lib.css(a, "transition", x + " " + l + g));
            VMM.Lib.cssmultiple(a, j);
        } else "undefined" != typeof jQuery && (null != f && "" != f ? jQuery(a).animate(j, {
            "queue": h,
            "duration": i,
            "easing": g,
            "complete": f
        }) : jQuery(a).animate(j, {
            "queue": h,
            "duration": i,
            "easing": g
        }));
    }
}), "undefined" != typeof jQuery && (function(a) {
    window.XDomainRequest && a.ajaxTransport(function(b) {
        if (b.crossDomain && b.async) {
            b.timeout && (b.xdrTimeout = b.timeout, delete b.timeout);
            var c;
            return {
                "send": function(d, e) {
                    function f(b, d, f, g) {
                        c.onload = c.onerror = c.ontimeout = a.noop, c = void 0, e(b, d, f, g);
                    }
                    c = new XDomainRequest, c.open(b.type, b.url), c.onload = function() {
                        f(200, "OK", {
                            "text": c.responseText
                        }, "Content-Type: " + c.contentType);
                    }, c.onerror = function() {
                        f(404, "Not Found");
                    }, b.xdrTimeout && (c.ontimeout = function() {
                        f(0, "timeout");
                    }, c.timeout = b.xdrTimeout), c.send(b.hasContent && b.data || null);
                },
                "abort": function() {
                    c && (c.onerror = a.noop(), c.abort());
                }
            };
        }
    });
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    "def": "easeOutQuad",
    "swing": function(a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e);
    },
    "easeInExpo": function(a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c;
    },
    "easeOutExpo": function(a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c;
    },
    "easeInOutExpo": function(a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c;
    },
    "easeInQuad": function(a, b, c, d, e) {
        return d * (b /= e) * b + c;
    },
    "easeOutQuad": function(a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c;
    },
    "easeInOutQuad": function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c;
    }
})), "undefined" != typeof VMM && "undefined" == typeof VMM.Browser && (VMM.Browser = {
    "init": function() {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser", this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version", this.OS = this.searchString(this.dataOS) || "an unknown OS", this.device = this.searchDevice(navigator.userAgent), this.orientation = this.searchOrientation(window.orientation);
    },
    "searchOrientation": function(a) {
        var b = "";
        return b = 0 == a || 180 == a ? "portrait" : 90 == a || -90 == a ? "landscape" : "normal";
    },
    "searchDevice": function(a) {
        var b = "";
        return b = a.match(/Android/i) || a.match(/iPhone|iPod/i) ? "mobile" : a.match(/iPad/i) ? "tablet" : a.match(/BlackBerry/i) || a.match(/IEMobile/i) ? "other mobile" : "desktop";
    },
    "searchString": function(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b].string, d = a[b].prop;
            if (this.versionSearchString = a[b].versionSearch || a[b].identity, c) {
                if (-1 != c.indexOf(a[b].subString)) return a[b].identity;
            } else if (d) return a[b].identity;
        }
    },
    "searchVersion": function(a) {
        var b = a.indexOf(this.versionSearchString);
        if (-1 != b) return parseFloat(a.substring(b + this.versionSearchString.length + 1));
    },
    "dataBrowser": [ {
        "string": navigator.userAgent,
        "subString": "Chrome",
        "identity": "Chrome"
    }, {
        "string": navigator.userAgent,
        "subString": "OmniWeb",
        "versionSearch": "OmniWeb/",
        "identity": "OmniWeb"
    }, {
        "string": navigator.vendor,
        "subString": "Apple",
        "identity": "Safari",
        "versionSearch": "Version"
    }, {
        "prop": window.opera,
        "identity": "Opera",
        "versionSearch": "Version"
    }, {
        "string": navigator.vendor,
        "subString": "iCab",
        "identity": "iCab"
    }, {
        "string": navigator.vendor,
        "subString": "KDE",
        "identity": "Konqueror"
    }, {
        "string": navigator.userAgent,
        "subString": "Firefox",
        "identity": "Firefox"
    }, {
        "string": navigator.vendor,
        "subString": "Camino",
        "identity": "Camino"
    }, {
        "string": navigator.userAgent,
        "subString": "Netscape",
        "identity": "Netscape"
    }, {
        "string": navigator.userAgent,
        "subString": "MSIE",
        "identity": "Explorer",
        "versionSearch": "MSIE"
    }, {
        "string": navigator.userAgent,
        "subString": "Gecko",
        "identity": "Mozilla",
        "versionSearch": "rv"
    }, {
        "string": navigator.userAgent,
        "subString": "Mozilla",
        "identity": "Netscape",
        "versionSearch": "Mozilla"
    } ],
    "dataOS": [ {
        "string": navigator.platform,
        "subString": "Win",
        "identity": "Windows"
    }, {
        "string": navigator.platform,
        "subString": "Mac",
        "identity": "Mac"
    }, {
        "string": navigator.userAgent,
        "subString": "iPhone",
        "identity": "iPhone/iPod"
    }, {
        "string": navigator.userAgent,
        "subString": "iPad",
        "identity": "iPad"
    }, {
        "string": navigator.platform,
        "subString": "Linux",
        "identity": "Linux"
    } ]
}, VMM.Browser.init()), "undefined" != typeof VMM && "undefined" == typeof VMM.FileExtention && (VMM.FileExtention = {
    "googleDocType": function(a) {
        var b = a.replace(/\s\s*$/, ""), c = "", d = [ "DOC", "DOCX", "XLS", "XLSX", "PPT", "PPTX", "PDF", "PAGES", "AI", "PSD", "TIFF", "DXF", "SVG", "EPS", "PS", "TTF", "XPS", "ZIP", "RAR" ], e = !1;
        c = b.substr(b.length - 5, 5);
        for (var f = 0; f < d.length; f++) (c.toLowerCase().match(d[f].toString().toLowerCase()) || b.match("docs.google.com")) && (e = !0);
        return e;
    }
}), "undefined" != typeof VMM && "undefined" == typeof VMM.Date) {
    VMM.Date = {
        "init": function() {
            return this;
        },
        "dateformats": {
            "year": "yyyy",
            "month_short": "mmm",
            "month": "mmmm yyyy",
            "full_short": "mmm d",
            "full": "mmmm d',' yyyy",
            "time_short": "h:MM:ss TT",
            "time_no_seconds_short": "h:MM TT",
            "time_no_seconds_small_date": "h:MM TT'<br/><small>'mmmm d',' yyyy'</small>'",
            "full_long": "mmm d',' yyyy 'at' hh:MM TT",
            "full_long_small_date": "hh:MM TT'<br/><small>mmm d',' yyyy'</small>'"
        },
        "month": [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
        "month_abbr": [ "Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec." ],
        "day": [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
        "day_abbr": [ "Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat." ],
        "hour": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
        "hour_suffix": [ "am" ],
        "bc_format": {
            "year": "yyyy",
            "month_short": "mmm",
            "month": "mmmm yyyy",
            "full_short": "mmm d",
            "full": "mmmm d',' yyyy",
            "time_no_seconds_short": "h:MM TT",
            "time_no_seconds_small_date": "dddd', 'h:MM TT'<br/><small>'mmmm d',' yyyy'</small>'",
            "full_long": "dddd',' mmm d',' yyyy 'at' hh:MM TT",
            "full_long_small_date": "hh:MM TT'<br/><small>'dddd',' mmm d',' yyyy'</small>'"
        },
        "setLanguage": function(a) {
            trace("SET DATE LANGUAGE"), VMM.Date.dateformats = a.dateformats, VMM.Date.month = a.date.month, VMM.Date.month_abbr = a.date.month_abbr, VMM.Date.day = a.date.day, VMM.Date.day_abbr = a.date.day_abbr, dateFormat.i18n.dayNames = a.date.day_abbr.concat(a.date.day), dateFormat.i18n.monthNames = a.date.month_abbr.concat(a.date.month);
        },
        "parse": function(a, b) {
            "use strict";
            var c, d, e, f, g = {
                "year": !1,
                "month": !1,
                "day": !1,
                "hour": !1,
                "minute": !1,
                "second": !1,
                "millisecond": !1
            };
            if ("date" == type.of(a)) trace("DEBUG THIS, ITs A DATE"), c = a; else if (c = new Date(0, 0, 1, 0, 0, 0, 0), a.match(/,/gi)) {
                d = a.split(",");
                for (var h = 0; h < d.length; h++) d[h] = parseInt(d[h], 10);
                d[0] && (c.setFullYear(d[0]), g.year = !0), d[1] && (c.setMonth(d[1] - 1), g.month = !0), d[2] && (c.setDate(d[2]), g.day = !0), d[3] && (c.setHours(d[3]), g.hour = !0), d[4] && (c.setMinutes(d[4]), g.minute = !0), d[5] && (c.setSeconds(d[5]), d[5] >= 1 && (g.second = !0)), d[6] && (c.setMilliseconds(d[6]), d[6] >= 1 && (g.millisecond = !0));
            } else if (a.match("/")) a.match(" ") ? (f = a.split(" "), a.match(":") && (e = f[1].split(":"), e[0] >= 0 && (c.setHours(e[0]), g.hour = !0), e[1] >= 0 && (c.setMinutes(e[1]), g.minute = !0), e[2] >= 0 && (c.setSeconds(e[2]), g.second = !0), e[3] >= 0 && (c.setMilliseconds(e[3]), g.millisecond = !0)), d = f[0].split("/")) : d = a.split("/"), d[2] && (c.setFullYear(d[2]), g.year = !0), d[0] >= 0 && (c.setMonth(d[0] - 1), g.month = !0), d[1] >= 0 && (d[1].length > 2 ? (c.setFullYear(d[1]), g.year = !0) : (c.setDate(d[1]), g.day = !0)); else if (a.match("now")) {
                var i = new Date;
                c.setFullYear(i.getFullYear()), g.year = !0, c.setMonth(i.getMonth()), g.month = !0, c.setDate(i.getDate()), g.day = !0, a.match("hours") && (c.setHours(i.getHours()), g.hour = !0), a.match("minutes") && (c.setHours(i.getHours()), c.setMinutes(i.getMinutes()), g.hour = !0, g.minute = !0), a.match("seconds") && (c.setHours(i.getHours()), c.setMinutes(i.getMinutes()), c.setSeconds(i.getSeconds()), g.hour = !0, g.minute = !0, g.second = !0), a.match("milliseconds") && (c.setHours(i.getHours()), c.setMinutes(i.getMinutes()), c.setSeconds(i.getSeconds()), c.setMilliseconds(i.getMilliseconds()), g.hour = !0, g.minute = !0, g.second = !0, g.millisecond = !0);
            } else a.length <= 8 ? (g.year = !0, c.setFullYear(parseInt(a, 10)), c.setMonth(0), c.setDate(1), c.setHours(0), c.setMinutes(0), c.setSeconds(0), c.setMilliseconds(0)) : a.match("T") ? navigator.userAgent.match(/MSIE\s(?!9.0)/) ? (f = a.split("T"), a.match(":") && (e = f[1].split(":"), e[0] >= 1 && (c.setHours(e[0]), g.hour = !0), e[1] >= 1 && (c.setMinutes(e[1]), g.minute = !0), e[2] >= 1 && (c.setSeconds(e[2]), e[2] >= 1 && (g.second = !0)), e[3] >= 1 && (c.setMilliseconds(e[3]), e[3] >= 1 && (g.millisecond = !0))), d = f[0].split("-"), d[0] && (c.setFullYear(d[0]), g.year = !0), d[1] >= 0 && (c.setMonth(d[1] - 1), g.month = !0), d[2] >= 0 && (c.setDate(d[2]), g.day = !0)) : (c = new Date(Date.parse(a)), g.year = !0, g.month = !0, g.day = !0, g.hour = !0, g.minute = !0, c.getSeconds() >= 1 && (g.second = !0), c.getMilliseconds() >= 1 && (g.millisecond = !0)) : (c = new Date(parseInt(a.slice(0, 4), 10), parseInt(a.slice(4, 6), 10) - 1, parseInt(a.slice(6, 8), 10), parseInt(a.slice(8, 10), 10), parseInt(a.slice(10, 12), 10)), g.year = !0, g.month = !0, g.day = !0, g.hour = !0, g.minute = !0, c.getSeconds() >= 1 && (g.second = !0), c.getMilliseconds() >= 1 && (g.millisecond = !0));
            return null != b && "" != b ? {
                "date": c,
                "precision": g
            } : c;
        },
        "prettyDate": function(a, b, c, d) {
            var e, f, g, h, j, k, l, i = !1;
            if (null != d && "" != d && "undefined" != typeof d && (i = !0, trace("D2 " + d)), "date" == type.of(a)) {
                g = "object" == type.of(c) ? c.millisecond || c.second && a.getSeconds() >= 1 ? b ? VMM.Date.dateformats.time_short : VMM.Date.dateformats.time_short : c.minute ? b ? VMM.Date.dateformats.time_no_seconds_short : VMM.Date.dateformats.time_no_seconds_small_date : c.hour ? b ? VMM.Date.dateformats.time_no_seconds_short : VMM.Date.dateformats.time_no_seconds_small_date : c.day ? b ? VMM.Date.dateformats.full_short : VMM.Date.dateformats.full : c.month ? b ? VMM.Date.dateformats.month_short : VMM.Date.dateformats.month : c.year ? VMM.Date.dateformats.year : VMM.Date.dateformats.year : 0 === a.getMonth() && 1 == a.getDate() && 0 === a.getHours() && 0 === a.getMinutes() ? VMM.Date.dateformats.year : a.getDate() <= 1 && 0 === a.getHours() && 0 === a.getMinutes() ? b ? VMM.Date.dateformats.month_short : VMM.Date.dateformats.month : 0 === a.getHours() && 0 === a.getMinutes() ? b ? VMM.Date.dateformats.full_short : VMM.Date.dateformats.full : 0 === a.getMinutes() ? b ? VMM.Date.dateformats.time_no_seconds_short : VMM.Date.dateformats.time_no_seconds_small_date : b ? VMM.Date.dateformats.time_no_seconds_short : VMM.Date.dateformats.full_long, e = dateFormat(a, g, !1), h = e.split(" ");
                for (var m = 0; m < h.length; m++) parseInt(h[m], 10) < 0 && (trace("YEAR IS BC"), j = h[m], k = Math.abs(parseInt(h[m], 10)), l = k.toString() + " B.C.", e = e.replace(j, l));
                if (i) {
                    f = dateFormat(d, g, !1), h = f.split(" ");
                    for (var n = 0; n < h.length; n++) parseInt(h[n], 10) < 0 && (trace("YEAR IS BC"), j = h[n], k = Math.abs(parseInt(h[n], 10)), l = k.toString() + " B.C.", f = f.replace(j, l));
                }
            } else trace("NOT A VALID DATE?"), trace(a);
            return i ? e + " &mdash; " + f : e;
        }
    }.init();
    var dateFormat = function() {
        var a = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g, b = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, c = /[^-+\dA-Z]/g, d = function(a, b) {
            for (a = String(a), b = b || 2; a.length < b; ) a = "0" + a;
            return a;
        };
        return function(e, f, g) {
            var h = dateFormat;
            1 != arguments.length || "[object String]" != Object.prototype.toString.call(e) || /\d/.test(e) || (f = e, e = void 0), isNaN(e) && trace("invalid date " + e), f = String(h.masks[f] || f || h.masks["default"]), "UTC:" == f.slice(0, 4) && (f = f.slice(4), g = !0);
            var i = g ? "getUTC" : "get", j = e[i + "Date"](), k = e[i + "Day"](), l = e[i + "Month"](), m = e[i + "FullYear"](), n = e[i + "Hours"](), o = e[i + "Minutes"](), p = e[i + "Seconds"](), q = e[i + "Milliseconds"](), r = g ? 0 : e.getTimezoneOffset(), s = {
                "d": j,
                "dd": d(j),
                "ddd": h.i18n.dayNames[k],
                "dddd": h.i18n.dayNames[k + 7],
                "m": l + 1,
                "mm": d(l + 1),
                "mmm": h.i18n.monthNames[l],
                "mmmm": h.i18n.monthNames[l + 12],
                "yy": String(m).slice(2),
                "yyyy": m,
                "h": n % 12 || 12,
                "hh": d(n % 12 || 12),
                "H": n,
                "HH": d(n),
                "M": o,
                "MM": d(o),
                "s": p,
                "ss": d(p),
                "l": d(q, 3),
                "L": d(q > 99 ? Math.round(q / 10) : q),
                "t": 12 > n ? "a" : "p",
                "tt": 12 > n ? "am" : "pm",
                "T": 12 > n ? "A" : "P",
                "TT": 12 > n ? "AM" : "PM",
                "Z": g ? "UTC" : (String(e).match(b) || [ "" ]).pop().replace(c, ""),
                "o": (r > 0 ? "-" : "+") + d(100 * Math.floor(Math.abs(r) / 60) + Math.abs(r) % 60, 4),
                "S": [ "th", "st", "nd", "rd" ][j % 10 > 3 ? 0 : (10 != j % 100 - j % 10) * j % 10]
            };
            return f.replace(a, function(a) {
                return a in s ? s[a] : a.slice(1, a.length - 1);
            });
        };
    }();
    dateFormat.masks = {
        "default": "ddd mmm dd yyyy HH:MM:ss",
        "shortDate": "m/d/yy",
        "mediumDate": "mmm d, yyyy",
        "longDate": "mmmm d, yyyy",
        "fullDate": "dddd, mmmm d, yyyy",
        "shortTime": "h:MM TT",
        "mediumTime": "h:MM:ss TT",
        "longTime": "h:MM:ss TT Z",
        "isoDate": "yyyy-mm-dd",
        "isoTime": "HH:MM:ss",
        "isoDateTime": "yyyy-mm-dd'T'HH:MM:ss",
        "isoUtcDateTime": "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
    }, dateFormat.i18n = {
        "dayNames": [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
        "monthNames": [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
    }, Date.prototype.format = function(a, b) {
        return dateFormat(this, a, b);
    };
}

"undefined" != typeof VMM && "undefined" == typeof VMM.Util && (VMM.Util = {
    "init": function() {
        return this;
    },
    "correctProtocol": function(a) {
        var b = window.parent.location.protocol.toString(), c = "", d = a.split("://", 2);
        return c = b.match("http") ? b : "https", c + "://" + d[1];
    },
    "mergeConfig": function(a, b) {
        var c;
        for (c in b) Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
        return a;
    },
    "getObjectAttributeByIndex": function(a, b) {
        if ("undefined" != typeof a) {
            var c = 0;
            for (var d in a) {
                if (b === c) return a[d];
                c++;
            }
            return "";
        }
        return "";
    },
    "ordinal": function(a) {
        return [ "th", "st", "nd", "rd" ][!(a % 10 > 3 || 1 == Math.floor(a % 100 / 10)) * (a % 10)];
    },
    "randomBetween": function(a, b) {
        return Math.floor(Math.random() * (b - a + 1) + a);
    },
    "average": function(a) {
        for (var d, b = {
            "mean": 0,
            "variance": 0,
            "deviation": 0
        }, c = a.length, e = 0, f = c; f--; e += a[f]) ;
        for (d = b.mean = e / c, f = c, e = 0; f--; e += Math.pow(a[f] - d, 2)) ;
        return b.deviation = Math.sqrt(b.variance = e / c), b;
    },
    "customSort": function(a, b) {
        var c = a, d = b;
        return c == d ? 0 : c > d ? 1 : -1;
    },
    "deDupeArray": function(a) {
        var b, c = a.length, d = [], e = {};
        for (b = 0; c > b; b++) e[a[b]] = 0;
        for (b in e) d.push(b);
        return d;
    },
    "number2money": function(a, b, c) {
        var b = null !== b ? b : !0, c = null !== c ? c : !1, d = VMM.Math2.floatPrecision(a, 2), e = this.niceNumber(d);
        return !e.split(/\./g)[1] && c && (e += ".00"), b && (e = "$" + e), e;
    },
    "wordCount": function(a) {
        var b = a + " ", c = /^[^A-Za-z0-9\'\-]+/gi, d = b.replace(c, ""), e = /[^A-Za-z0-9\'\-]+/gi, f = d.replace(e, " "), g = f.split(" "), h = g.length - 1;
        return b.length < 2 && (h = 0), h;
    },
    "ratio": {
        "fit": function(a, b, c, d) {
            var e = {
                "width": 0,
                "height": 0
            };
            return e.width = a, e.height = Math.round(a / c * d), e.height > b && (e.height = b, e.width = Math.round(b / d * c), e.width > a && trace("FIT: DIDN'T FIT!!! ")), e;
        },
        "r16_9": function(a, b) {
            return null !== a && "" !== a ? Math.round(9 * (b / 16)) : null !== b && "" !== b ? Math.round(16 * (a / 9)) : void 0;
        },
        "r4_3": function(a, b) {
            return null !== a && "" !== a ? Math.round(3 * (b / 4)) : null !== b && "" !== b ? Math.round(4 * (a / 3)) : void 0;
        }
    },
    "doubledigit": function(a) {
        return (10 > a ? "0" : "") + a;
    },
    "truncateWords": function(a, b, c) {
        b || (b = 30), c || (c = b);
        var d = /^[^A-Za-z0-9\'\-]+/gi, e = a.replace(d, ""), f = e.split(" "), g = [];
        b = Math.min(f.length, b), c = Math.min(f.length, c);
        for (var h = 0; b > h; h++) g.push(f[h]);
        for (; c > h; h++) {
            var j = f[h];
            if (g.push(j), "." == j.charAt(j.length - 1)) break;
        }
        return g.join(" ");
    },
    "linkify": function(a) {
        var d = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim, e = /(^|[^\/])(www\.[\S]+(\b|$))/gim, f = /(([a-zA-Z0-9_\-\.]+)@[a-zA-Z_]+?(?:\.[a-zA-Z]{2,6}))+/gim;
        return a.replace(d, "<a target='_blank' href='$&' onclick='void(0)'>$&</a>").replace(e, "$1<a target='_blank' onclick='void(0)' href='http://$2'>$2</a>").replace(f, "<a target='_blank' onclick='void(0)' href='mailto:$1'>$1</a>");
    },
    "linkify_with_twitter": function(a) {
        var e = /(\()((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\))|(\[)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\])|(\{)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\})|(<|&(?:lt|#60|#x3c);)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(>|&(?:gt|#62|#x3e);)|((?:^|[^=\s'"\]])\s*['"]?|[^=\s]\s+)(\b(?:ht|f)tps?:\/\/[a-z0-9\-._~!$'()*+,;=:\/?#[\]@%]+(?:(?!&(?:gt|#0*62|#x0*3e);|&(?:amp|apos|quot|#0*3[49]|#x0*2[27]);[.!&',:?;]?(?:[^a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]|$))&[a-z0-9\-._~!$'()*+,;=:\/?#[\]@%]*)*[a-z0-9\-_~$()*+=\/#[\]@%])/gim, f = '$1$4$7$10$13<a href="$2$5$8$11$14" target="_blank" class="hyphenate">$2$5$8$11$14</a>$3$6$9$12', g = /(^|[^\/])(www\.[\S]+(\b|$))/gim, i = /(([a-zA-Z0-9_\-\.]+)@[a-zA-Z_]+?(?:\.[a-zA-Z]{2,6}))+/gim, j = /\B@([\w-]+)/gm;
        return a.replace(e, f).replace(g, "$1<a target='_blank' class='hyphenate' onclick='void(0)' href='http://$2'>$2</a>").replace(i, "<a target='_blank' onclick='void(0)' href='mailto:$1'>$1</a>").replace(j, "<a href='http://twitter.com/$1' target='_blank' onclick='void(0)'>@$1</a>");
    },
    "linkify_wikipedia": function(a) {
        var b = /<i[^>]*>(.*?)<\/i>/gim;
        return a.replace(b, "<a target='_blank' href='http://en.wikipedia.org/wiki/$&' onclick='void(0)'>$&</a>").replace(/<i\b[^>]*>/gim, "").replace(/<\/i>/gim, "").replace(/<b\b[^>]*>/gim, "").replace(/<\/b>/gim, "");
    },
    "unlinkify": function(a) {
        return a ? (a = a.replace(/<a\b[^>]*>/i, ""), a = a.replace(/<\/a>/i, "")) : a;
    },
    "untagify": function(a) {
        return a ? a = a.replace(/<\s*\w.*?>/g, "") : a;
    },
    "nl2br": function(a) {
        return a.replace(/(\r\n|[\r\n]|\\n|\\r)/g, "<br/>");
    },
    "unique_ID": function(a) {
        var b = function(a) {
            return Math.floor(Math.random() * a);
        }, c = function() {
            var a = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
            return a.substr(b(62), 1);
        }, d = function(a) {
            for (var b = "", d = 0; a > d; d++) b += c();
            return b;
        };
        return d(a);
    },
    "isEven": function(a) {
        return 0 === a % 2 ? !0 : !1;
    },
    "getUrlVars": function(a) {
        var b = a.toString();
        b.match("&#038;") ? b = b.replace("&#038;", "&") : b.match("&#38;") ? b = b.replace("&#38;", "&") : b.match("&amp;") && (b = b.replace("&amp;", "&"));
        for (var d, c = [], e = b.slice(b.indexOf("?") + 1).split("&"), f = 0; f < e.length; f++) d = e[f].split("="), c.push(d[0]), c[d[0]] = d[1];
        return c;
    },
    "toHTML": function(a) {
        return a = this.nl2br(a), a = this.linkify(a), a.replace(/\s\s/g, "&nbsp;&nbsp;");
    },
    "toCamelCase": function(a, b) {
        b !== !1 && (b = !0);
        for (var c = (b ? a.toLowerCase() : a).split(" "), d = 0; d < c.length; d++) c[d] = c[d].substr(0, 1).toUpperCase() + c[d].substr(1);
        return c.join(" ");
    },
    "properQuotes": function(a) {
        return a.replace(/\"([^\"]*)\"/gi, "&#8220;$1&#8221;");
    },
    "niceNumber": function(a) {
        a += "", x = a.split("."), x1 = x[0], x2 = x.length > 1 ? "." + x[1] : "";
        for (var b = /(\d+)(\d{3})/; b.test(x1); ) x1 = x1.replace(b, "$1,$2");
        return x1 + x2;
    },
    "toTitleCase": function(a) {
        if ("Explorer" == VMM.Browser.browser && parseInt(VMM.Browser.version, 10) >= 7) return a.replace("_", "%20");
        var b = {
            "__smallWords": [ "a", "an", "and", "as", "at", "but", "by", "en", "for", "if", "in", "of", "on", "or", "the", "to", "v[.]?", "via", "vs[.]?" ],
            "init": function() {
                this.__smallRE = this.__smallWords.join("|"), this.__lowerCaseWordsRE = new RegExp("\\b(" + this.__smallRE + ")\\b", "gi"), this.__firstWordRE = new RegExp("^([^a-zA-Z0-9 \\r\\n\\t]*)(" + this.__smallRE + ")\\b", "gi"), this.__lastWordRE = new RegExp("\\b(" + this.__smallRE + ")([^a-zA-Z0-9 \\r\\n\\t]*)$", "gi");
            },
            "toTitleCase": function(a) {
                for (var b = "", c = a.split(/([:.;?!][ ]|(?:[ ]|^)["\u201c])/), d = 0; d < c.length; ++d) {
                    var e = c[d];
                    e = e.replace(/\b([a-zA-Z][a-z.'\u2019]*)\b/g, this.__titleCaseDottedWordReplacer), e = e.replace(this.__lowerCaseWordsRE, this.__lowerReplacer), e = e.replace(this.__firstWordRE, this.__firstToUpperCase), e = e.replace(this.__lastWordRE, this.__firstToUpperCase), b += e;
                }
                return b = b.replace(/ V(s?)\. /g, " v$1. "), b = b.replace(/(['\u2019])S\b/g, "$1s"), b = b.replace(/\b(AT&T|Q&A)\b/gi, this.__upperReplacer);
            },
            "__titleCaseDottedWordReplacer": function(a) {
                return a.match(/[a-zA-Z][.][a-zA-Z]/) ? a : b.__firstToUpperCase(a);
            },
            "__lowerReplacer": function(a) {
                return a.toLowerCase();
            },
            "__upperReplacer": function(a) {
                return a.toUpperCase();
            },
            "__firstToUpperCase": function(a) {
                var b = a.split(/(^[^a-zA-Z0-9]*[a-zA-Z0-9])(.*)$/);
                return b[1] && (b[1] = b[1].toUpperCase()), b.join("");
            }
        };
        return b.init(), a = a.replace(/_/g, " "), a = b.toTitleCase(a);
    }
}.init()), LazyLoad = function(a) {
    function h(b, c) {
        var e, d = a.createElement(b);
        for (e in c) c.hasOwnProperty(e) && d.setAttribute(e, c[e]);
        return d;
    }
    function i(a) {
        var c, g, b = d[a];
        b && (c = b.callback, g = b.urls, g.shift(), e = 0, g.length || (c && c.call(b.context, b.obj), d[a] = null, f[a].length && k(a)));
    }
    function j() {
        var c = navigator.userAgent;
        b = {
            "async": a.createElement("script").async === !0
        }, (b.webkit = /AppleWebKit\//.test(c)) || (b.ie = /MSIE/.test(c)) || (b.opera = /Opera/.test(c)) || (b.gecko = /Gecko\//.test(c)) || (b.unknown = !0);
    }
    function k(e, g, k, n, o) {
        var s, t, u, v, w, x, p = function() {
            i(e);
        }, q = "css" === e, r = [];
        if (b || j(), g) if (g = "string" == typeof g ? [ g ] : g.concat(), q || b.async || b.gecko || b.opera) f[e].push({
            "urls": g,
            "callback": k,
            "obj": n,
            "context": o
        }); else for (s = 0, t = g.length; t > s; ++s) f[e].push({
            "urls": [ g[s] ],
            "callback": s === t - 1 ? k : null,
            "obj": n,
            "context": o
        });
        if (!d[e] && (v = d[e] = f[e].shift())) {
            for (c || (c = a.head || a.getElementsByTagName("head")[0]), w = v.urls, s = 0, t = w.length; t > s; ++s) x = w[s], q ? u = b.gecko ? h("style") : h("link", {
                "href": x,
                "rel": "stylesheet"
            }) : (u = h("script", {
                "src": x
            }), u.async = !1), u.className = "lazyload", u.setAttribute("charset", "utf-8"), b.ie && !q ? u.onreadystatechange = function() {
                /loaded|complete/.test(u.readyState) && (u.onreadystatechange = null, p());
            } : q && (b.gecko || b.webkit) ? b.webkit ? (v.urls[s] = u.href, m()) : (u.innerHTML = '@import "' + x + '";', l(u)) : u.onload = u.onerror = p, r.push(u);
            for (s = 0, t = r.length; t > s; ++s) c.appendChild(r[s]);
        }
    }
    function l(a) {
        var b;
        try {
            b = !!a.sheet.cssRules;
        } catch (c) {
            return e += 1, 200 > e ? setTimeout(function() {
                l(a);
            }, 50) : b && i("css"), void 0;
        }
        i("css");
    }
    function m() {
        var b, a = d.css;
        if (a) {
            for (b = g.length; --b >= 0; ) if (g[b].href === a.urls[0]) {
                i("css");
                break;
            }
            e += 1, a && (200 > e ? setTimeout(m, 50) : i("css"));
        }
    }
    var b, c, d = {}, e = 0, f = {
        "css": [],
        "js": []
    }, g = a.styleSheets;
    return {
        "css": function(a, b, c, d) {
            k("css", a, b, c, d);
        },
        "js": function(a, b, c, d) {
            k("js", a, b, c, d);
        }
    };
}(this.document), LoadLib = function() {
    function c(a) {
        var c = 0, d = !1;
        for (c = 0; c < b.length; c++) b[c] == a && (d = !0);
        return d ? !0 : (b.push(a), !1);
    }
    var b = [];
    return {
        "css": function(a, b, d, e) {
            c(a) || LazyLoad.css(a, b, d, e);
        },
        "js": function(a, b, d, e) {
            c(a) || LazyLoad.js(a, b, d, e);
        }
    };
}(this.document), "undefined" != typeof VMM && "undefined" == typeof VMM.Language && (VMM.Language = {
    "lang": "en",
    "api": {
        "wikipedia": "en"
    },
    "date": {
        "month": [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
        "month_abbr": [ "Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec." ],
        "day": [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
        "day_abbr": [ "Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat." ]
    },
    "dateformats": {
        "year": "yyyy",
        "month_short": "mmm",
        "month": "mmmm yyyy",
        "full_short": "mmm d",
        "full": "mmmm d',' yyyy",
        "time_short": "h:MM:ss TT",
        "time_no_seconds_short": "h:MM TT",
        "time_no_seconds_small_date": "h:MM TT'<br/><small>'mmmm d',' yyyy'</small>'",
        "full_long": "mmm d',' yyyy 'at' h:MM TT",
        "full_long_small_date": "h:MM TT'<br/><small>mmm d',' yyyy'</small>'"
    },
    "messages": {
        "loading_timeline": "Loading Timeline... ",
        "return_to_title": "Return to Title",
        "expand_timeline": "Expand Timeline",
        "contract_timeline": "Contract Timeline",
        "wikipedia": "From Wikipedia, the free encyclopedia",
        "loading_content": "Loading Content",
        "loading": "Loading"
    }
}), "undefined" != typeof VMM && "undefined" == typeof VMM.ExternalAPI && (VMM.ExternalAPI = {
    "keys": {
        "google": "",
        "flickr": "",
        "twitter": ""
    },
    "keys_master": {
        "vp": "Pellentesque nibh felis, eleifend id, commodo in, interdum vitae, leo",
        "flickr": "RAIvxHY4hE/Elm5cieh4X5ptMyDpj7MYIxziGxi0WGCcy1s+yr7rKQ==",
        "google": "jwNGnYw4hE9lmAez4ll0QD+jo6SKBJFknkopLS4FrSAuGfIwyj57AusuR0s8dAo=",
        "twitter": ""
    },
    "init": function() {
        return this;
    },
    "setKeys": function(a) {
        VMM.ExternalAPI.keys = a;
    },
    "pushQues": function() {
        VMM.master_config.googlemaps.active && VMM.ExternalAPI.googlemaps.pushQue(), VMM.master_config.youtube.active && VMM.ExternalAPI.youtube.pushQue(), VMM.master_config.soundcloud.active && VMM.ExternalAPI.soundcloud.pushQue(), VMM.master_config.googledocs.active && VMM.ExternalAPI.googledocs.pushQue(), VMM.master_config.googleplus.active && VMM.ExternalAPI.googleplus.pushQue(), VMM.master_config.wikipedia.active && VMM.ExternalAPI.wikipedia.pushQue(), VMM.master_config.vimeo.active && VMM.ExternalAPI.vimeo.pushQue(), VMM.master_config.vine.active && VMM.ExternalAPI.vine.pushQue(), VMM.master_config.twitter.active && VMM.ExternalAPI.twitter.pushQue(), VMM.master_config.flickr.active && VMM.ExternalAPI.flickr.pushQue(), VMM.master_config.webthumb.active && VMM.ExternalAPI.webthumb.pushQue();
    },
    "twitter": {
        "tweetArray": [],
        "get": function(a) {
            var b = {
                "mid": a.id,
                "id": a.uid
            };
            VMM.master_config.twitter.que.push(b), VMM.master_config.twitter.active = !0;
        },
        "create": function(a, b) {
            a.mid.toString(), {
                "twitterid": a.mid
            }, "//api.twitter.com/1/statuses/show.json?id=" + a.mid + "&include_entities=true&callback=?", VMM.ExternalAPI.twitter.getOEmbed(a, b);
        },
        "errorTimeOut": function(a) {
            trace("TWITTER JSON ERROR TIMEOUT " + a.mid), VMM.attachElement("#" + a.id.toString(), VMM.MediaElement.loadingmessage("Still waiting on Twitter: " + a.mid)), VMM.getJSON("//api.twitter.com/1/account/rate_limit_status.json", function(b) {
                trace("REMAINING TWITTER API CALLS " + b.remaining_hits), trace("TWITTER RATE LIMIT WILL RESET AT " + b.reset_time);
                var c = "";
                0 == b.remaining_hits ? (c = "<p>You've reached the maximum number of tweets you can load in an hour.</p>", c += "<p>You can view tweets again starting at: <br/>" + b.reset_time + "</p>") : c = "<p>Still waiting on Twitter. " + a.mid + "</p>", VMM.attachElement("#" + a.id.toString(), VMM.MediaElement.loadingmessage(c));
            });
        },
        "errorTimeOutOembed": function(a) {
            trace("TWITTER JSON ERROR TIMEOUT " + a.mid), VMM.attachElement("#" + a.id.toString(), VMM.MediaElement.loadingmessage("Still waiting on Twitter: " + a.mid));
        },
        "pushQue": function() {
            VMM.master_config.twitter.que.length > 0 && (VMM.ExternalAPI.twitter.create(VMM.master_config.twitter.que[0], VMM.ExternalAPI.twitter.pushQue), VMM.master_config.twitter.que.remove(0));
        },
        "getOEmbed": function(a, b) {
            var c = "//api.twitter.com/1/statuses/oembed.json?id=" + a.mid + "&omit_script=true&include_entities=true&callback=?", d = setTimeout(VMM.ExternalAPI.twitter.errorTimeOutOembed, VMM.master_config.timers.api, a);
            VMM.getJSON(c, function(b) {
                var c = "", d = "";
                c += b.html.split("</p>&mdash;")[0] + "</p></blockquote>", d = b.author_url.split("twitter.com/")[1], c += "<div class='vcard author'>", c += "<a class='screen-name url' href='" + b.author_url + "' target='_blank'>", c += "<span class='avatar'></span>", c += "<span class='fn'>" + b.author_name + "</span>", c += "<span class='nickname'>@" + d + "<span class='thumbnail-inline'></span></span>", c += "</a>", c += "</div>", VMM.attachElement("#" + a.id.toString(), c), VMM.attachElement("#text_thumb_" + a.id.toString(), b.html), VMM.attachElement("#marker_content_" + a.id.toString(), b.html);
            }).error(function(b, c) {
                trace("TWITTER error"), trace("TWITTER ERROR: " + c + " " + b.responseText), clearTimeout(d), VMM.attachElement("#" + a.id, VMM.MediaElement.loadingmessage("ERROR LOADING TWEET " + a.mid));
            }).success(function() {
                clearTimeout(d), b();
            });
        },
        "getHTML": function(a) {
            var b = "//api.twitter.com/1/statuses/oembed.json?id=" + a + "&omit_script=true&include_entities=true&callback=?";
            VMM.getJSON(b, VMM.ExternalAPI.twitter.onJSONLoaded);
        },
        "onJSONLoaded": function(a) {
            trace("TWITTER JSON LOADED");
            var b = a.id;
            VMM.attachElement("#" + b, VMM.Util.linkify_with_twitter(a.html));
        },
        "parseTwitterDate": function(a) {
            var b = new Date(Date.parse(a));
            return b;
        },
        "prettyParseTwitterDate": function(a) {
            var b = new Date(Date.parse(a));
            return VMM.Date.prettyDate(b, !0);
        },
        "getTweets": function(a) {
            for (var b = [], c = a.length, d = 0; d < a.length; d++) {
                var e = "";
                e = a[d].tweet.match("status/") ? a[d].tweet.split("status/")[1] : a[d].tweet.match("statuses/") ? a[d].tweet.split("statuses/")[1] : "";
                var f = "//api.twitter.com/1/statuses/show.json?id=" + e + "&include_entities=true&callback=?";
                VMM.getJSON(f, function(a) {
                    var d = {}, e = "<div class='twitter'><blockquote><p>", f = VMM.Util.linkify_with_twitter(a.text, "_blank");
                    if (e += f, e += "</p>", e += "— " + a.user.name + " (<a href='https://twitter.com/" + a.user.screen_name + "'>@" + a.user.screen_name + "</a>) <a href='https://twitter.com/" + a.user.screen_name + "/status/" + a.id + "'>" + VMM.ExternalAPI.twitter.prettyParseTwitterDate(a.created_at) + " </a></blockquote></div>", d.content = e, d.raw = a, b.push(d), b.length == c) {
                        var g = {
                            "tweetdata": b
                        };
                        VMM.fireEvent(global, "TWEETSLOADED", g);
                    }
                }).success(function() {
                    trace("second success");
                }).error(function() {
                    trace("error");
                }).complete(function() {
                    trace("complete");
                });
            }
        },
        "getTweetSearch": function(a, b) {
            var c = 40;
            null != b && "" != b && (c = b);
            var d = "//search.twitter.com/search.json?q=" + a + "&rpp=" + c + "&include_entities=true&result_type=mixed", e = [];
            VMM.getJSON(d, function(a) {
                for (var b = 0; b < a.results.length; b++) {
                    var c = {}, d = "<div class='twitter'><blockquote><p>", f = VMM.Util.linkify_with_twitter(a.results[b].text, "_blank");
                    d += f, d += "</p>", d += "— " + a.results[b].from_user_name + " (<a href='https://twitter.com/" + a.results[b].from_user + "'>@" + a.results[b].from_user + "</a>) <a href='https://twitter.com/" + a.results[b].from_user + "/status/" + a.id + "'>" + VMM.ExternalAPI.twitter.prettyParseTwitterDate(a.results[b].created_at) + " </a></blockquote></div>", c.content = d, c.raw = a.results[b], e.push(c);
                }
                var g = {
                    "tweetdata": e
                };
                VMM.fireEvent(global, "TWEETSLOADED", g);
            });
        },
        "prettyHTML": function(a, b) {
            var a = a.toString(), d = "//api.twitter.com/1/statuses/show.json?id=" + a + "&include_entities=true&callback=?", e = setTimeout(VMM.ExternalAPI.twitter.errorTimeOut, VMM.master_config.timers.api, a);
            VMM.getJSON(d, VMM.ExternalAPI.twitter.formatJSON).error(function(b, c) {
                trace("TWITTER error"), trace("TWITTER ERROR: " + c + " " + b.responseText), VMM.attachElement("#twitter_" + a, "<p>ERROR LOADING TWEET " + a + "</p>");
            }).success(function(a) {
                clearTimeout(e), b && VMM.ExternalAPI.twitter.secondaryMedia(a);
            });
        },
        "formatJSON": function(a) {
            var b = a.id_str, c = "<blockquote><p>", d = VMM.Util.linkify_with_twitter(a.text, "_blank");
            c += d, c += "</p></blockquote>", c += "<div class='vcard author'>", c += "<a class='screen-name url' href='https://twitter.com/" + a.user.screen_name + "' data-screen-name='" + a.user.screen_name + "' target='_blank'>", c += "<span class='avatar'><img src=' " + a.user.profile_image_url + "'  alt=''></span>", c += "<span class='fn'>" + a.user.name + "</span>", c += "<span class='nickname'>@" + a.user.screen_name + "<span class='thumbnail-inline'></span></span>", c += "</a>", c += "</div>", "undefined" != typeof a.entities.media && "photo" == a.entities.media[0].type && (c += "<img src=' " + a.entities.media[0].media_url + "'  alt=''>"), VMM.attachElement("#twitter_" + b.toString(), c), VMM.attachElement("#text_thumb_" + b.toString(), a.text);
        }
    },
    "googlemaps": {
        "maptype": "TERRAIN",
        "setMapType": function(a) {
            "" != a && (VMM.ExternalAPI.googlemaps.maptype = a);
        },
        "get": function(a) {
            var c, d;
            a.vars = VMM.Util.getUrlVars(a.id), c = "" != VMM.ExternalAPI.keys.google ? VMM.ExternalAPI.keys.google : Aes.Ctr.decrypt(VMM.ExternalAPI.keys_master.google, VMM.ExternalAPI.keys_master.vp, 256), d = "//maps.googleapis.com/maps/api/js?key=" + c + "&v=3.9&libraries=places&sensor=false&callback=VMM.ExternalAPI.googlemaps.onMapAPIReady", VMM.master_config.googlemaps.active ? VMM.master_config.googlemaps.que.push(a) : (VMM.master_config.googlemaps.que.push(a), VMM.master_config.googlemaps.api_loaded || LoadLib.js(d, function() {
                trace("Google Maps API Library Loaded");
            }));
        },
        "create": function(a) {
            VMM.ExternalAPI.googlemaps.createAPIMap(a);
        },
        "createiFrameMap": function(a) {
            var b = a.id + "&output=embed", c = "", d = a.uid.toString() + "_gmap";
            c += "<div class='google-map' id='" + d + "' style='width=100%;height=100%;'>", c += "<iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='" + b + "'></iframe>", c += "</div>", VMM.attachElement("#" + a.uid, c);
        },
        "createAPIMap": function(a) {
            function o(a) {
                return a in VMM.ExternalAPI.googlemaps.map_providers ? (b = VMM.ExternalAPI.googlemaps.map_attribution[VMM.ExternalAPI.googlemaps.map_providers[a].attribution], VMM.ExternalAPI.googlemaps.map_providers[a]) : VMM.ExternalAPI.googlemaps.defaultType(a) ? (trace("GOOGLE MAP DEFAULT TYPE"), google.maps.MapTypeId[a.toUpperCase()]) : (trace("Not a maptype: " + a), void 0);
            }
            function p() {
                var e, b = new google.maps.Geocoder, c = VMM.Util.getUrlVars(a.id).q;
                if (c.match("loc:")) {
                    var f = c.split(":")[1].split("+");
                    h = new google.maps.LatLng(parseFloat(f[0]), parseFloat(f[1])), k = !0;
                }
                b.geocode({
                    "address": c
                }, function(a, b) {
                    b == google.maps.GeocoderStatus.OK ? (e = new google.maps.Marker({
                        "map": d,
                        "position": a[0].geometry.location
                    }), "undefined" != typeof a[0].geometry.viewport ? d.fitBounds(a[0].geometry.viewport) : "undefined" != typeof a[0].geometry.bounds ? d.fitBounds(a[0].geometry.bounds) : d.setCenter(a[0].geometry.location), k && d.panTo(h), l && d.setZoom(j)) : (trace("Geocode for " + c + " was not successful for the following reason: " + b), trace("TRYING PLACES SEARCH"), k && d.panTo(h), l && d.setZoom(j), q());
                });
            }
            function q() {
                function m(b, e) {
                    if (e == google.maps.places.PlacesServiceStatus.OK) {
                        for (var f = 0; f < b.length; f++) ;
                        k ? d.panTo(h) : b.length >= 1 && (d.panTo(b[0].geometry.location), l && d.setZoom(j));
                    } else trace("Place search for " + c.query + " was not successful for the following reason: " + e), trace("YOU MAY NEED A GOOGLE MAPS API KEY IN ORDER TO USE THIS FEATURE OF TIMELINEJS"), trace("FIND OUT HOW TO GET YOUR KEY HERE: https://developers.google.com/places/documentation/#Authentication"), k ? (d.panTo(h), l && d.setZoom(j)) : (trace("USING SIMPLE IFRAME MAP EMBED"), a.id[0].match("https") && (a.id = a.url[0].replace("https", "http")), VMM.ExternalAPI.googlemaps.createiFrameMap(a));
                }
                var c, e, f, g, i;
                place_search = new google.maps.places.PlacesService(d), e = new google.maps.InfoWindow, c = {
                    "query": "",
                    "types": [ "country", "neighborhood", "political", "locality", "geocode" ]
                }, "string" == type.of(VMM.Util.getUrlVars(a.id).q) && (c.query = VMM.Util.getUrlVars(a.id).q), k ? (c.location = h, c.radius = "15000") : (g = new google.maps.LatLng(-89.999999, -179.999999), i = new google.maps.LatLng(89.999999, 179.999999), f = new google.maps.LatLngBounds(g, i)), place_search.textSearch(c, m);
            }
            function s() {
                var b, c, e, f;
                b = a.id + "&output=kml", b = b.replace("&output=embed", ""), c = new google.maps.KmlLayer(b, {
                    "preserveViewport": !0
                }), e = new google.maps.InfoWindow, c.setMap(d), google.maps.event.addListenerOnce(c, "defaultviewport_changed", function() {
                    k ? d.panTo(h) : d.fitBounds(c.getDefaultViewport()), l && d.setZoom(j);
                }), google.maps.event.addListener(c, "click", function(a) {
                    function b(a) {
                        e.setContent(a), e.open(d);
                    }
                    f = a.featureData.description, b(f);
                });
            }
            var c, d, e, i, b = "", f = a.uid.toString() + "_gmap", g = "", h = new google.maps.LatLng(41.875696, -87.624207), j = 11, k = !1, l = !1;
            google.maps.VeriteMapType = function(a) {
                if (VMM.ExternalAPI.googlemaps.defaultType(a)) return google.maps.MapTypeId[a.toUpperCase()];
                var b = o(a);
                return google.maps.ImageMapType.call(this, {
                    "getTileUrl": function(a, c) {
                        var d = (c + a.x + a.y) % VMM.ExternalAPI.googlemaps.map_subdomains.length, e = b.url.replace("{S}", VMM.ExternalAPI.googlemaps.map_subdomains[d]).replace("{Z}", c).replace("{X}", a.x).replace("{Y}", a.y).replace("{z}", c).replace("{x}", a.x).replace("{y}", a.y);
                        return e;
                    },
                    "tileSize": new google.maps.Size(256, 256),
                    "name": a,
                    "minZoom": b.minZoom,
                    "maxZoom": b.maxZoom
                });
            }, google.maps.VeriteMapType.prototype = new google.maps.ImageMapType("_"), c = "" != VMM.ExternalAPI.googlemaps.maptype ? VMM.ExternalAPI.googlemaps.defaultType(VMM.ExternalAPI.googlemaps.maptype) ? google.maps.MapTypeId[VMM.ExternalAPI.googlemaps.maptype.toUpperCase()] : VMM.ExternalAPI.googlemaps.maptype : google.maps.MapTypeId.TERRAIN, "string" == type.of(VMM.Util.getUrlVars(a.id).ll) ? (k = !0, i = VMM.Util.getUrlVars(a.id).ll.split(","), h = new google.maps.LatLng(parseFloat(i[0]), parseFloat(i[1]))) : "string" == type.of(VMM.Util.getUrlVars(a.id).sll) && (i = VMM.Util.getUrlVars(a.id).sll.split(","), h = new google.maps.LatLng(parseFloat(i[0]), parseFloat(i[1]))), "string" == type.of(VMM.Util.getUrlVars(a.id).z) && (l = !0, j = parseFloat(VMM.Util.getUrlVars(a.id).z)), e = {
                "zoom": j,
                "draggable": !1,
                "disableDefaultUI": !0,
                "mapTypeControl": !1,
                "zoomControl": !0,
                "zoomControlOptions": {
                    "style": google.maps.ZoomControlStyle.SMALL,
                    "position": google.maps.ControlPosition.TOP_RIGHT
                },
                "center": h,
                "mapTypeId": c,
                "mapTypeControlOptions": {
                    "mapTypeIds": [ c ]
                }
            }, VMM.attachElement("#" + a.uid, "<div class='google-map' id='" + f + "' style='width=100%;height=100%;'></div>"), d = new google.maps.Map(document.getElementById(f), e), VMM.ExternalAPI.googlemaps.defaultType(VMM.ExternalAPI.googlemaps.maptype) || (d.mapTypes.set(c, new google.maps.VeriteMapType(c)), g = "<div class='map-attribution'><div class='attribution-text'>" + b + "</div></div>", VMM.appendElement("#" + f, g)), "string" == type.of(VMM.Util.getUrlVars(a.id).msid) ? s() : "string" == type.of(VMM.Util.getUrlVars(a.id).q) && p();
        },
        "pushQue": function() {
            for (var a = 0; a < VMM.master_config.googlemaps.que.length; a++) VMM.ExternalAPI.googlemaps.create(VMM.master_config.googlemaps.que[a]);
            VMM.master_config.googlemaps.que = [];
        },
        "onMapAPIReady": function() {
            VMM.master_config.googlemaps.map_active = !0, VMM.master_config.googlemaps.places_active = !0, VMM.ExternalAPI.googlemaps.onAPIReady();
        },
        "onPlacesAPIReady": function() {
            VMM.master_config.googlemaps.places_active = !0, VMM.ExternalAPI.googlemaps.onAPIReady();
        },
        "onAPIReady": function() {
            VMM.master_config.googlemaps.active || VMM.master_config.googlemaps.map_active && VMM.master_config.googlemaps.places_active && (VMM.master_config.googlemaps.active = !0, VMM.ExternalAPI.googlemaps.pushQue());
        },
        "defaultType": function(a) {
            return "satellite" == a.toLowerCase() || "hybrid" == a.toLowerCase() || "terrain" == a.toLowerCase() || "roadmap" == a.toLowerCase() ? !0 : !1;
        },
        "map_subdomains": [ "", "a.", "b.", "c.", "d." ],
        "map_attribution": {
            "stamen": "Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a>. Data by <a href='http://openstreetmap.org'>OpenStreetMap</a>, under <a href='http://creativecommons.org/licenses/by-sa/3.0'>CC BY SA</a>.",
            "apple": "Map data &copy; 2012  Apple, Imagery &copy; 2012 Apple"
        },
        "map_providers": {
            "toner": {
                "url": "//{S}tile.stamen.com/toner/{Z}/{X}/{Y}.png",
                "minZoom": 0,
                "maxZoom": 20,
                "attribution": "stamen"
            },
            "toner-lines": {
                "url": "//{S}tile.stamen.com/toner-lines/{Z}/{X}/{Y}.png",
                "minZoom": 0,
                "maxZoom": 20,
                "attribution": "stamen"
            },
            "toner-labels": {
                "url": "//{S}tile.stamen.com/toner-labels/{Z}/{X}/{Y}.png",
                "minZoom": 0,
                "maxZoom": 20,
                "attribution": "stamen"
            },
            "sterrain": {
                "url": "//{S}tile.stamen.com/terrain/{Z}/{X}/{Y}.jpg",
                "minZoom": 4,
                "maxZoom": 20,
                "attribution": "stamen"
            },
            "apple": {
                "url": "//gsp2.apple.com/tile?api=1&style=slideshow&layers=default&lang=en_US&z={z}&x={x}&y={y}&v=9",
                "minZoom": 4,
                "maxZoom": 14,
                "attribution": "apple"
            },
            "watercolor": {
                "url": "//{S}tile.stamen.com/watercolor/{Z}/{X}/{Y}.jpg",
                "minZoom": 3,
                "maxZoom": 16,
                "attribution": "stamen"
            }
        }
    },
    "googleplus": {
        "get": function(a) {
            var c = {
                "user": a.user,
                "activity": a.id,
                "id": a.uid
            };
            VMM.master_config.googleplus.que.push(c), VMM.master_config.googleplus.active = !0;
        },
        "create": function(a, b) {
            var h, i, c = "", d = "", e = "", f = "", g = "";
            googleplus_timeout = setTimeout(VMM.ExternalAPI.googleplus.errorTimeOut, VMM.master_config.timers.api, a), callback_timeout = setTimeout(b, VMM.master_config.timers.api, a), d = "" != VMM.master_config.Timeline.api_keys.google ? VMM.master_config.Timeline.api_keys.google : Aes.Ctr.decrypt(VMM.master_config.api_keys_master.google, VMM.master_config.vp, 256), h = "https://www.googleapis.com/plus/v1/people/" + a.user + "/activities/public?alt=json&maxResults=100&fields=items(id,url)&key=" + d, c = "GOOGLE PLUS API CALL", VMM.getJSON(h, function(b) {
                for (var h = 0; h < b.items.length; h++) if (trace("loop"), b.items[h].url.split("posts/")[1] == a.activity) {
                    trace("FOUND IT!!"), e = b.items[h].id, i = "https://www.googleapis.com/plus/v1/activities/" + e + "?alt=json&key=" + d, VMM.getJSON(i, function(b) {
                        if (trace(b), "undefined" != typeof b.annotation ? (f += "<div class='googleplus-annotation'>'" + b.annotation + "</div>", f += b.object.content) : f += b.object.content, "undefined" != typeof b.object.attachments) {
                            for (var d = 0; d < b.object.attachments.length; d++) "photo" == b.object.attachments[d].objectType ? g = "<a href='" + b.object.url + "' target='_blank'>" + "<img src='" + b.object.attachments[d].image.url + "' class='article-thumb'></a>" + g : "video" == b.object.attachments[d].objectType ? (g = "<img src='" + b.object.attachments[d].image.url + "' class='article-thumb'>" + g, g += "<div>", g += "<a href='" + b.object.attachments[d].url + "' target='_blank'>", g += "<h5>" + b.object.attachments[d].displayName + "</h5>", g += "</a>", g += "</div>") : "article" == b.object.attachments[d].objectType && (g += "<div>", g += "<a href='" + b.object.attachments[d].url + "' target='_blank'>", g += "<h5>" + b.object.attachments[d].displayName + "</h5>", g += "<p>" + b.object.attachments[d].content + "</p>", g += "</a>", g += "</div>"), trace(b.object.attachments[d]);
                            g = "<div class='googleplus-attachments'>" + g + "</div>";
                        }
                        c = "<div class='googleplus-content'>" + f + g + "</div>", c += "<div class='vcard author'><a class='screen-name url' href='" + b.url + "' target='_blank'>", c += "<span class='avatar'><img src='" + b.actor.image.url + "' style='max-width: 32px; max-height: 32px;'></span>", c += "<span class='fn'>" + b.actor.displayName + "</span>", c += "<span class='nickname'><span class='thumbnail-inline'></span></span>", c += "</a></div>", VMM.attachElement("#googleplus_" + a.activity, c);
                    });
                    break;
                }
            }).error(function(b) {
                var e = VMM.parseJSON(b.responseText);
                trace(e.error.message), VMM.attachElement("#googleplus_" + a.activity, VMM.MediaElement.loadingmessage("<p>ERROR LOADING GOOGLE+ </p><p>" + e.error.message + "</p>"));
            }).success(function() {
                clearTimeout(googleplus_timeout), clearTimeout(callback_timeout), b();
            });
        },
        "pushQue": function() {
            VMM.master_config.googleplus.que.length > 0 && (VMM.ExternalAPI.googleplus.create(VMM.master_config.googleplus.que[0], VMM.ExternalAPI.googleplus.pushQue), VMM.master_config.googleplus.que.remove(0));
        },
        "errorTimeOut": function(a) {
            trace("GOOGLE+ JSON ERROR TIMEOUT " + a.activity), VMM.attachElement("#googleplus_" + a.activity, VMM.MediaElement.loadingmessage("<p>Still waiting on GOOGLE+ </p><p>" + a.activity + "</p>"));
        }
    },
    "googledocs": {
        "get": function(a) {
            VMM.master_config.googledocs.que.push(a), VMM.master_config.googledocs.active = !0;
        },
        "create": function(a) {
            var b = "";
            b = a.id.match(/docs.google.com/i) ? "<iframe class='doc' frameborder='0' width='100%' height='100%' src='" + a.id + "&amp;embedded=true'></iframe>" : "<iframe class='doc' frameborder='0' width='100%' height='100%' src='//docs.google.com/viewer?url=" + a.id + "&amp;embedded=true'></iframe>", VMM.attachElement("#" + a.uid, b);
        },
        "pushQue": function() {
            for (var a = 0; a < VMM.master_config.googledocs.que.length; a++) VMM.ExternalAPI.googledocs.create(VMM.master_config.googledocs.que[a]);
            VMM.master_config.googledocs.que = [];
        }
    },
    "flickr": {
        "get": function(a) {
            VMM.master_config.flickr.que.push(a), VMM.master_config.flickr.active = !0;
        },
        "create": function(a, b) {
            var c, d = setTimeout(b, VMM.master_config.timers.api, a);
            c = "undefined" != typeof VMM.master_config.Timeline && "" != VMM.master_config.Timeline.api_keys.flickr ? VMM.master_config.Timeline.api_keys.flickr : Aes.Ctr.decrypt(VMM.master_config.api_keys_master.flickr, VMM.master_config.vp, 256);
            var e = "//api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + c + "&photo_id=" + a.id + "&format=json&jsoncallback=?";
            VMM.getJSON(e, function(b) {
                VMM.ExternalAPI.flickr.getFlickrIdFromUrl(b.sizes.size[0].url);
                var f, g, d = "#" + a.uid, e = "#" + a.uid + "_thumb", h = !1, i = "Large";
                i = VMM.ExternalAPI.flickr.sizes(VMM.master_config.sizes.api.height);
                for (var j = 0; j < b.sizes.size.length; j++) b.sizes.size[j].label == i && (h = !0, f = b.sizes.size[j].source);
                h || (f = b.sizes.size[b.sizes.size.length - 2].source), g = b.sizes.size[0].source, VMM.Lib.attr(d, "src", f), VMM.attachElement(e, "<img src='" + g + "'>");
            }).error(function(a, b) {
                trace("FLICKR error"), trace("FLICKR ERROR: " + b + " " + a.responseText);
            }).success(function() {
                clearTimeout(d), b();
            });
        },
        "pushQue": function() {
            VMM.master_config.flickr.que.length > 0 && (VMM.ExternalAPI.flickr.create(VMM.master_config.flickr.que[0], VMM.ExternalAPI.flickr.pushQue), VMM.master_config.flickr.que.remove(0));
        },
        "sizes": function(a) {
            var b = "";
            return b = 75 >= a ? "Thumbnail" : 180 >= a ? "Small" : 240 >= a ? "Small 320" : 375 >= a ? "Medium" : 480 >= a ? "Medium 640" : 600 >= a ? "Large" : "Large";
        },
        "getFlickrIdFromUrl": function(a) {
            var b = a.indexOf("flickr.com/photos/");
            if (-1 == b) return null;
            var c = b + "flickr.com/photos/".length, d = a.substr(c);
            return -1 == d.indexOf("/") ? null : (0 == d.indexOf("/") && (d = d.substr(1)), d.split("/")[1]);
        }
    },
    "instagram": {
        "get": function(a, b) {
            return b ? "//instagr.am/p/" + a.id + "/media/?size=t" : "//instagr.am/p/" + a.id + "/media/?size=" + VMM.ExternalAPI.instagram.sizes(VMM.master_config.sizes.api.height);
        },
        "sizes": function(a) {
            var b = "";
            return b = 150 >= a ? "t" : 306 >= a ? "m" : "l";
        },
        "isInstagramUrl": function(a) {
            return a.match("instagr.am/p/") || a.match("instagram.com/p/");
        },
        "getInstagramIdFromUrl": function(a) {
            try {
                return a.split("/p/")[1].split("/")[0];
            } catch (b) {
                return trace("Invalid Instagram url: " + a), null;
            }
        }
    },
    "soundcloud": {
        "get": function(a) {
            VMM.master_config.soundcloud.que.push(a), VMM.master_config.soundcloud.active = !0;
        },
        "create": function(a, b) {
            var c = "//soundcloud.com/oembed?url=" + a.id + "&format=js&callback=?";
            VMM.getJSON(c, function(c) {
                VMM.attachElement("#" + a.uid, c.html), b();
            });
        },
        "pushQue": function() {
            VMM.master_config.soundcloud.que.length > 0 && (VMM.ExternalAPI.soundcloud.create(VMM.master_config.soundcloud.que[0], VMM.ExternalAPI.soundcloud.pushQue), VMM.master_config.soundcloud.que.remove(0));
        }
    },
    "wikipedia": {
        "get": function(a) {
            VMM.master_config.wikipedia.que.push(a), VMM.master_config.wikipedia.active = !0;
        },
        "create": function(a, b) {
            var c = "//" + a.lang + ".wikipedia.org/w/api.php?action=query&prop=extracts&redirects=&titles=" + a.id + "&exintro=1&format=json&callback=?";
            if (callback_timeout = setTimeout(b, VMM.master_config.timers.api, a), "Explorer" == VMM.Browser.browser && parseInt(VMM.Browser.version, 10) >= 7 && window.XDomainRequest) {
                var d = "<h4><a href='http://" + VMM.master_config.language.api.wikipedia + ".wikipedia.org/wiki/" + a.id + "' target='_blank'>" + a.url + "</a></h4>";
                d += "<span class='wiki-source'>" + VMM.master_config.language.messages.wikipedia + "</span>", d += "<p>Wikipedia entry unable to load using Internet Explorer 8 or below.</p>", VMM.attachElement("#" + a.uid, d);
            }
            VMM.getJSON(c, function(b) {
                if (b.query) {
                    var c, d, e = "", f = "", g = 1, h = [];
                    c = VMM.Util.getObjectAttributeByIndex(b.query.pages, 0).extract, d = VMM.Util.getObjectAttributeByIndex(b.query.pages, 0).title, c.match("<p>") ? h = c.split("<p>") : h.push(c);
                    for (var i = 0; i < h.length; i++) g >= i + 1 && i + 1 < h.length && (f += "<p>" + h[i + 1]);
                    e = "<h4><a href='http://" + VMM.master_config.language.api.wikipedia + ".wikipedia.org/wiki/" + d + "' target='_blank'>" + d + "</a></h4>", e += "<span class='wiki-source'>" + VMM.master_config.language.messages.wikipedia + "</span>", e += VMM.Util.linkify_wikipedia(f), c.match("REDIRECT") || VMM.attachElement("#" + a.uid, e);
                }
            }).error(function(c, d, e) {
                trace("WIKIPEDIA error"), trace("WIKIPEDIA ERROR: " + d + " " + c.responseText), trace(e), VMM.attachElement("#" + a.uid, VMM.MediaElement.loadingmessage("<p>Wikipedia is not responding</p>")), clearTimeout(callback_timeout), VMM.master_config.wikipedia.tries < 4 ? (trace("WIKIPEDIA ATTEMPT " + VMM.master_config.wikipedia.tries), trace(a), VMM.master_config.wikipedia.tries++, VMM.ExternalAPI.wikipedia.create(a, b)) : b();
            }).success(function() {
                VMM.master_config.wikipedia.tries = 0, clearTimeout(callback_timeout), b();
            });
        },
        "pushQue": function() {
            VMM.master_config.wikipedia.que.length > 0 && (trace("WIKIPEDIA PUSH QUE " + VMM.master_config.wikipedia.que.length), VMM.ExternalAPI.wikipedia.create(VMM.master_config.wikipedia.que[0], VMM.ExternalAPI.wikipedia.pushQue), VMM.master_config.wikipedia.que.remove(0));
        }
    },
    "youtube": {
        "get": function(a) {
            var b = "//gdata.youtube.com/feeds/api/videos/" + a.id + "?v=2&alt=jsonc&callback=?";
            VMM.master_config.youtube.que.push(a), VMM.master_config.youtube.active || VMM.master_config.youtube.api_loaded || LoadLib.js("//www.youtube.com/player_api", function() {
                trace("YouTube API Library Loaded");
            }), VMM.getJSON(b, function(b) {
                VMM.ExternalAPI.youtube.createThumb(b, a);
            });
        },
        "create": function(a) {
            if ("undefined" != typeof a.start) {
                var b = a.start.toString(), c = 0, d = 0;
                b.match("m") ? (c = parseInt(b.split("m")[0], 10), d = parseInt(b.split("m")[1].split("s")[0], 10), a.start = 60 * c + d) : a.start = 0;
            } else a.start = 0;
            var e = {
                "active": !1,
                "player": {},
                "name": a.uid,
                "playing": !1,
                "hd": !1
            };
            "undefined" != typeof a.hd && (e.hd = !0), e.player[a.id] = new YT.Player(a.uid, {
                "height": "390",
                "width": "640",
                "playerVars": {
                    "enablejsapi": 1,
                    "color": "white",
                    "showinfo": 0,
                    "theme": "light",
                    "start": a.start,
                    "rel": 0
                },
                "videoId": a.id,
                "events": {
                    "onReady": VMM.ExternalAPI.youtube.onPlayerReady,
                    "onStateChange": VMM.ExternalAPI.youtube.onStateChange
                }
            }), VMM.master_config.youtube.array.push(e);
        },
        "createThumb": function(a, b) {
            if (trace("CREATE THUMB"), trace(a), trace(b), "undefined" != typeof a.data) {
                var c = "#" + b.uid + "_thumb";
                VMM.attachElement(c, "<img src='" + a.data.thumbnail.sqDefault + "'>");
            }
        },
        "pushQue": function() {
            for (var a = 0; a < VMM.master_config.youtube.que.length; a++) VMM.ExternalAPI.youtube.create(VMM.master_config.youtube.que[a]);
            VMM.master_config.youtube.que = [];
        },
        "onAPIReady": function() {
            VMM.master_config.youtube.active = !0, VMM.ExternalAPI.youtube.pushQue();
        },
        "stopPlayers": function() {
            for (var a = 0; a < VMM.master_config.youtube.array.length; a++) if (VMM.master_config.youtube.array[a].playing) {
                var b = VMM.master_config.youtube.array[a].name;
                VMM.master_config.youtube.array[a].player[b].stopVideo();
            }
        },
        "onStateChange": function(a) {
            for (var b = 0; b < VMM.master_config.youtube.array.length; b++) {
                var c = VMM.master_config.youtube.array[b].name;
                VMM.master_config.youtube.array[b].player[c] == a.target && a.data == YT.PlayerState.PLAYING && (VMM.master_config.youtube.array[b].playing = !0, trace(VMM.master_config.youtube.array[b].hd), VMM.master_config.youtube.array[b].hd);
            }
        },
        "onPlayerReady": function() {}
    },
    "vimeo": {
        "get": function(a) {
            VMM.master_config.vimeo.que.push(a), VMM.master_config.vimeo.active = !0;
        },
        "create": function(a, b) {
            trace("VIMEO CREATE");
            var c = "//vimeo.com/api/v2/video/" + a.id + ".json", d = "//player.vimeo.com/video/" + a.id + "?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff";
            VMM.getJSON(c, function(c) {
                VMM.ExternalAPI.vimeo.createThumb(c, a), b();
            }), VMM.attachElement("#" + a.uid, "<iframe autostart='false' frameborder='0' width='100%' height='100%' src='" + d + "'></iframe>");
        },
        "createThumb": function(a, b) {
            trace("VIMEO CREATE THUMB");
            var c = "#" + b.uid + "_thumb";
            VMM.attachElement(c, "<img src='" + a[0].thumbnail_small + "'>");
        },
        "pushQue": function() {
            VMM.master_config.vimeo.que.length > 0 && (VMM.ExternalAPI.vimeo.create(VMM.master_config.vimeo.que[0], VMM.ExternalAPI.vimeo.pushQue), VMM.master_config.vimeo.que.remove(0));
        }
    },
    "vine": {
        "get": function(a) {
            VMM.master_config.vine.que.push(a), VMM.master_config.vine.active = !0;
        },
        "create": function(a) {
            trace("VINE CREATE");
            var c = "https://vine.co/v/" + a.id + "/embed/simple";
            VMM.attachElement("#" + a.uid, "<iframe frameborder='0' width='100%' height='100%' src='" + c + "'></iframe><script async src='http://platform.vine.co/static/scripts/embed.js' charset='utf-8'></script>");
        },
        "pushQue": function() {
            VMM.master_config.vine.que.length > 0 && (VMM.ExternalAPI.vine.create(VMM.master_config.vine.que[0], VMM.ExternalAPI.vine.pushQue), VMM.master_config.vine.que.remove(0));
        }
    },
    "webthumb": {
        "get": function(a) {
            VMM.master_config.webthumb.que.push(a), VMM.master_config.webthumb.active = !0;
        },
        "sizes": function(a) {
            var b = "";
            return b = 150 >= a ? "t" : 306 >= a ? "m" : "l";
        },
        "create": function(a) {
            trace("WEB THUMB CREATE");
            var b = "//api.pagepeeker.com/v2/thumbs.php?";
            url = a.id.replace("http://", ""), VMM.attachElement("#" + a.uid, "<a href='" + a.id + "' target='_blank'><img src='" + b + "size=x&url=" + url + "'></a>"), VMM.attachElement("#" + a.uid + "_thumb", "<img src='" + b + "size=t&url=" + url + "'>");
        },
        "pushQue": function() {
            for (var a = 0; a < VMM.master_config.webthumb.que.length; a++) VMM.ExternalAPI.webthumb.create(VMM.master_config.webthumb.que[a]);
            VMM.master_config.webthumb.que = [];
        }
    }
}.init()), "undefined" != typeof VMM && "undefined" == typeof VMM.MediaElement && (VMM.MediaElement = {
    "init": function() {
        return this;
    },
    "loadingmessage": function(a) {
        return "<div class='vco-loading'><div class='vco-loading-container'><div class='vco-loading-icon'></div><div class='vco-message'><p>" + a + "</p></div></div></div>";
    },
    "thumbnail": function(a, b, c, d) {
        var e = 16, f = 24, g = "";
        if (null != b && "" != b && (e = b), null != c && "" != c && (f = c), null != d && "" != d && (g = d), null != a.media && "" != a.media) {
            var i = "", j = VMM.MediaType(a.media);
            return null != a.thumbnail && "" != a.thumbnail ? (trace("CUSTOM THUMB"), i = "<div class='thumbnail thumb-custom' id='" + d + "_custom_thumb'><img src='" + a.thumbnail + "'></div>") : i = "image" == j.type ? "<div class='thumbnail thumb-photo'></div>" : "flickr" == j.type ? "<div class='thumbnail thumb-photo' id='" + d + "_thumb'></div>" : "instagram" == j.type ? "<div class='thumbnail thumb-instagram' id='" + d + "_thumb'><img src='" + VMM.ExternalAPI.instagram.get(j, !0) + "'></div>" : "youtube" == j.type ? "<div class='thumbnail thumb-youtube' id='" + d + "_thumb'></div>" : "googledoc" == j.type ? "<div class='thumbnail thumb-document'></div>" : "vimeo" == j.type ? "<div class='thumbnail thumb-vimeo' id='" + d + "_thumb'></div>" : "vine" == j.type ? "<div class='thumbnail thumb-vine'></div>" : "dailymotion" == j.type ? "<div class='thumbnail thumb-video'></div>" : "twitter" == j.type ? "<div class='thumbnail thumb-twitter'></div>" : "twitter-ready" == j.type ? "<div class='thumbnail thumb-twitter'></div>" : "soundcloud" == j.type ? "<div class='thumbnail thumb-audio'></div>" : "google-map" == j.type ? "<div class='thumbnail thumb-map'></div>" : "googleplus" == j.type ? "<div class='thumbnail thumb-googleplus'></div>" : "wikipedia" == j.type ? "<div class='thumbnail thumb-wikipedia'></div>" : "storify" == j.type ? "<div class='thumbnail thumb-storify'></div>" : "quote" == j.type ? "<div class='thumbnail thumb-quote'></div>" : "iframe" == j.type ? "<div class='thumbnail thumb-video'></div>" : "unknown" == j.type ? j.id.match("blockquote") ? "<div class='thumbnail thumb-quote'></div>" : "<div class='thumbnail thumb-plaintext'></div>" : "website" == j.type ? "<div class='thumbnail thumb-website' id='" + d + "_thumb'></div>" : "<div class='thumbnail thumb-plaintext'></div>";
        }
    },
    "create": function(a, b) {
        var c = !1, d = VMM.MediaElement.loadingmessage(VMM.master_config.language.messages.loading + "...");
        if (null != a.media && "" != a.media) {
            var j, e = "", f = "", g = "", h = "", i = !1;
            return j = VMM.MediaType(a.media), j.uid = b, c = !0, null != a.credit && "" != a.credit && (g = "<div class='credit'>" + VMM.Util.linkify_with_twitter(a.credit, "_blank") + "</div>"), null != a.caption && "" != a.caption && (f = "<div class='caption'>" + VMM.Util.linkify_with_twitter(a.caption, "_blank") + "</div>"), "image" == j.type ? (j.id.match("https://") && (j.id = j.id.replace("https://", "http://")), e = "<div class='media-image media-shadow'><img src='" + j.id + "' class='media-image'></div>") : "flickr" == j.type ? (e = "<div class='media-image media-shadow'><a href='" + j.link + "' target='_blank'><img id='" + b + "'></a></div>", VMM.ExternalAPI.flickr.get(j)) : "instagram" == j.type ? e = "<div class='media-image media-shadow'><a href='" + j.link + "' target='_blank'><img src='" + VMM.ExternalAPI.instagram.get(j) + "'></a></div>" : "googledoc" == j.type ? (e = "<div class='media-frame media-shadow doc' id='" + j.uid + "'>" + d + "</div>", VMM.ExternalAPI.googledocs.get(j)) : "youtube" == j.type ? (e = "<div class='media-shadow'><div class='media-frame video youtube' id='" + j.uid + "'>" + d + "</div></div>", VMM.ExternalAPI.youtube.get(j)) : "vimeo" == j.type ? (e = "<div class='media-shadow media-frame video vimeo' id='" + j.uid + "'>" + d + "</div>", VMM.ExternalAPI.vimeo.get(j)) : "dailymotion" == j.type ? e = "<div class='media-shadow'><iframe class='media-frame video dailymotion' autostart='false' frameborder='0' width='100%' height='100%' src='http://www.dailymotion.com/embed/video/" + j.id + "'></iframe></div>" : "vine" == j.type ? (e = "<div class='media-shadow media-frame video vine' id='" + j.uid + "'>" + d + "</div>", VMM.ExternalAPI.vine.get(j)) : "twitter" == j.type ? (e = "<div class='twitter' id='" + j.uid + "'>" + d + "</div>", i = !0, VMM.ExternalAPI.twitter.get(j)) : "twitter-ready" == j.type ? (i = !0, e = j.id) : "soundcloud" == j.type ? (e = "<div class='media-frame media-shadow soundcloud' id='" + j.uid + "'>" + d + "</div>", VMM.ExternalAPI.soundcloud.get(j)) : "google-map" == j.type ? (e = "<div class='media-frame media-shadow map' id='" + j.uid + "'>" + d + "</div>", VMM.ExternalAPI.googlemaps.get(j)) : "googleplus" == j.type ? (h = "googleplus_" + j.id, e = "<div class='googleplus' id='" + h + "'>" + d + "</div>", i = !0, VMM.ExternalAPI.googleplus.get(j)) : "wikipedia" == j.type ? (e = "<div class='wikipedia' id='" + j.uid + "'>" + d + "</div>", i = !0, VMM.ExternalAPI.wikipedia.get(j)) : "storify" == j.type ? (i = !0, e = "<div class='plain-text-quote'>" + j.id + "</div>") : "iframe" == j.type ? (i = !0, e = "<div class='media-shadow'><iframe class='media-frame video' autostart='false' frameborder='0' width='100%' height='100%' src='" + j.id + "'></iframe></div>") : "quote" == j.type ? (i = !0, e = "<div class='plain-text-quote'>" + j.id + "</div>") : "unknown" == j.type ? (trace("NO KNOWN MEDIA TYPE FOUND TRYING TO JUST PLACE THE HTML"), i = !0, e = "<div class='plain-text'><div class='container'>" + VMM.Util.properQuotes(j.id) + "</div></div>") : "website" == j.type ? (e = "<div class='media-shadow website' id='" + j.uid + "'>" + d + "</div>", VMM.ExternalAPI.webthumb.get(j)) : (trace("NO KNOWN MEDIA TYPE FOUND"), trace(j.type)), e = "<div class='media-container' >" + e + g + f + "</div>", i ? "<div class='text-media'><div class='media-wrapper'>" + e + "</div></div>" : "<div class='media-wrapper'>" + e + "</div>";
        }
    }
}.init()), "undefined" != typeof VMM && "undefined" == typeof VMM.MediaType && (VMM.MediaType = function(a) {
    var b = a.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), c = !1, d = {
        "type": "unknown",
        "id": "",
        "start": 0,
        "hd": !1,
        "link": "",
        "lang": VMM.Language.lang,
        "uniqueid": VMM.Util.unique_ID(6)
    };
    if (b.match("div class='twitter'")) d.type = "twitter-ready", d.id = b, c = !0; else if (b.match("(www.)?youtube|youtu.be")) b.match("v=") ? d.id = VMM.Util.getUrlVars(b).v : b.match("/embed/") ? d.id = b.split("embed/")[1].split(/[?&]/)[0] : b.match(/v\/|v=|youtu\.be\//) ? d.id = b.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0] : trace("YOUTUBE IN URL BUT NOT A VALID VIDEO"), d.start = VMM.Util.getUrlVars(b).t, d.hd = VMM.Util.getUrlVars(b).hd, d.type = "youtube", c = !0; else if (b.match("(player.)?vimeo.com")) d.type = "vimeo", d.id = b.split(/video\/|\/\/vimeo\.com\//)[1].split(/[?&]/)[0], c = !0; else if (b.match("(www.)?dailymotion.com")) d.id = b.split(/video\/|\/\/dailymotion\.com\//)[1], d.type = "dailymotion", c = !0; else if (b.match("(www.)?vine.co")) trace("VINE"), b.match("vine.co/v/") && (d.id = b.split("vine.co/v/")[1], trace(d.id)), trace(b), d.type = "vine", c = !0; else if (b.match("(player.)?soundcloud.com")) d.type = "soundcloud", d.id = b, c = !0; else if (b.match("(www.)?twitter.com") && b.match("status")) d.id = b.match("status/") ? b.split("status/")[1] : b.match("statuses/") ? b.split("statuses/")[1] : "", d.type = "twitter", c = !0; else if (b.match("maps.google") && !b.match("staticmap")) d.type = "google-map", d.id = b.split(/src=['|"][^'|"]*?['|"]/gi), c = !0; else if (b.match("plus.google")) d.type = "googleplus", d.id = b.split("/posts/")[1], d.user = b.split("/posts/")[0].match("u/0/") ? b.split("u/0/")[1].split("/posts")[0] : b.split("google.com/")[1].split("/posts/")[0], c = !0; else if (b.match("flickr.com/photos/")) d.type = "flickr", d.id = VMM.ExternalAPI.flickr.getFlickrIdFromUrl(b), d.link = b, c = Boolean(d.id); else if (VMM.ExternalAPI.instagram.isInstagramUrl(b)) d.type = "instagram", d.link = b, d.id = VMM.ExternalAPI.instagram.getInstagramIdFromUrl(b), c = Boolean(d.id); else if (b.match(/jpg|jpeg|png|gif/i) || b.match("staticmap") || b.match("yfrog.com") || b.match("twitpic.com")) d.type = "image", d.id = b, c = !0; else if (VMM.FileExtention.googleDocType(b)) d.type = "googledoc", d.id = b, c = !0; else if (b.match("(www.)?wikipedia.org")) {
        d.type = "wikipedia";
        var e = b.split("wiki/")[1].split("#")[0].replace("_", " ");
        d.id = e.replace(" ", "%20"), d.lang = b.split("//")[1].split(".wikipedia")[0], c = !0;
    } else 0 == b.indexOf("http://") ? (d.type = "website", d.id = b, c = !0) : b.match("storify") ? (d.type = "storify", d.id = b, c = !0) : b.match("blockquote") ? (d.type = "quote", d.id = b, c = !0) : b.match("iframe") ? (d.type = "iframe", trace("IFRAME"), regex = /src=['"](\S+?)['"]\s/, group = b.match(regex), group && (d.id = group[1]), trace("iframe url: " + d.id), c = Boolean(d.id)) : (trace("unknown media"), d.type = "unknown", d.id = b, c = !0);
    return c ? d : (trace("No valid media id detected"), trace(b), !1);
}), "undefined" != typeof VMM && "undefined" == typeof VMM.TextElement && (VMM.TextElement = {
    "init": function() {
        return this;
    },
    "create": function(a) {
        return a;
    }
}.init()), "undefined" != typeof VMM && "undefined" == typeof VMM.DragSlider && (VMM.DragSlider = function() {
    function g(a, c) {
        VMM.bindEvent(a, i, b.down, {
            "element": c,
            "delement": a
        }), VMM.bindEvent(a, j, b.up, {
            "element": c,
            "delement": a
        }), VMM.bindEvent(a, h, b.leave, {
            "element": c,
            "delement": a
        });
    }
    function h(c) {
        return VMM.unbindEvent(c.data.delement, k, b.move), a.touch || c.preventDefault(), c.stopPropagation(), a.sliding ? (a.sliding = !1, m(c.data.element, c.data.delement, c), !1) : !0;
    }
    function i(b) {
        return l(b.data.element, b.data.delement, b), a.touch || b.preventDefault(), !0;
    }
    function j(b) {
        return a.touch || b.preventDefault(), a.sliding ? (a.sliding = !1, m(b.data.element, b.data.delement, b), !1) : !0;
    }
    function k(a) {
        n(a.data.element, a);
    }
    function l(c, d, e) {
        a.touch ? (trace("IS TOUCH"), VMM.Lib.css(c, "-webkit-transition-duration", "0"), a.pagex.start = e.originalEvent.touches[0].screenX, a.pagey.start = e.originalEvent.touches[0].screenY) : (a.pagex.start = e.pageX, a.pagey.start = e.pageY), a.left.start = p(c), a.time.start = (new Date).getTime(), VMM.Lib.stop(c), VMM.bindEvent(d, k, b.move, {
            "element": c
        });
    }
    function m(a, c, d) {
        VMM.unbindEvent(c, k, b.move), o(a, d);
    }
    function n(b, c) {
        var d;
        a.sliding = !0, a.touch ? (a.pagex.end = c.originalEvent.touches[0].screenX, a.pagey.end = c.originalEvent.touches[0].screenY) : (a.pagex.end = c.pageX, a.pagey.end = c.pageY), a.left.end = p(b), d = -(a.pagex.start - a.pagex.end - a.left.start), Math.abs(a.pagey.start) - Math.abs(a.pagey.end) > 10 && (trace("SCROLLING Y"), trace(Math.abs(a.pagey.start) - Math.abs(a.pagey.end))), Math.abs(d - a.left.start) > 10 && (VMM.Lib.css(b, "left", d), c.preventDefault(), c.stopPropagation());
    }
    function o(b) {
        var d = {
            "left": a.left.end,
            "left_adjust": 0,
            "change": {
                "x": 0
            },
            "time": 10 * ((new Date).getTime() - a.time.start),
            "time_adjust": 10 * ((new Date).getTime() - a.time.start)
        }, g = 3e3;
        a.touch && (g = 6e3), d.change.x = g * (Math.abs(a.pagex.end) - Math.abs(a.pagex.start)), d.left_adjust = Math.round(d.change.x / d.time), d.left = Math.min(d.left + d.left_adjust), a.constraint && (d.left > a.constraint.left ? (d.left = a.constraint.left, d.time > 5e3 && (d.time = 5e3)) : d.left < a.constraint.right && (d.left = a.constraint.right, d.time > 5e3 && (d.time = 5e3))), VMM.fireEvent(e, "DRAGUPDATE", [ d ]), f || d.time > 0 && (a.touch ? VMM.Lib.animate(b, d.time, "easeOutCirc", {
            "left": d.left
        }) : VMM.Lib.animate(b, d.time, a.ease, {
            "left": d.left
        }));
    }
    function p(a) {
        return parseInt(VMM.Lib.css(a, "left").substring(0, VMM.Lib.css(a, "left").length - 2), 10);
    }
    var a = {
        "element": "",
        "element_move": "",
        "constraint": "",
        "sliding": !1,
        "pagex": {
            "start": 0,
            "end": 0
        },
        "pagey": {
            "start": 0,
            "end": 0
        },
        "left": {
            "start": 0,
            "end": 0
        },
        "time": {
            "start": 0,
            "end": 0
        },
        "touch": !1,
        "ease": "easeOutExpo"
    }, b = {
        "down": "mousedown",
        "up": "mouseup",
        "leave": "mouseleave",
        "move": "mousemove"
    }, c = {
        "down": "mousedown",
        "up": "mouseup",
        "leave": "mouseleave",
        "move": "mousemove"
    }, d = {
        "down": "touchstart",
        "up": "touchend",
        "leave": "mouseleave",
        "move": "touchmove"
    }, e = this, f = !1;
    this.createPanel = function(e, h, i, j, k) {
        a.element = e, a.element_move = h, null != k && "" != k && (f = k), a.constraint = null != i && "" != i ? i : !1, a.touch = j ? j : !1, trace("TOUCH" + a.touch), b = a.touch ? d : c, g(a.element, a.element_move);
    }, this.updateConstraint = function(b) {
        trace("updateConstraint"), a.constraint = b;
    }, this.cancelSlide = function() {
        return VMM.unbindEvent(a.element, k, b.move), !0;
    };
}), "undefined" != typeof VMM && "undefined" == typeof VMM.Slider && (VMM.Slider = function(a, b) {
    function x(a, b) {
        var d = !0, e = !1;
        null != a && (d = a), null != b && (e = b), q = c.slider.width, c.slider.nav.height = VMM.Lib.height(v.prevBtnContainer), c.slider.content.padding = "mobile" == VMM.Browser.device || 640 >= q ? 10 : c.slider.content.padding_default, c.slider.content.width = q - 2 * c.slider.content.padding, VMM.Lib.width(h, m.length * c.slider.content.width), e && VMM.Lib.css(g, "left", m[p].leftpos()), K(), L(), VMM.Lib.height(v.prevBtn, c.slider.height), VMM.Lib.height(v.nextBtn, c.slider.height), VMM.Lib.css(v.nextBtnContainer, "top", c.slider.height / 2 - c.slider.nav.height / 2 + 10), VMM.Lib.css(v.prevBtnContainer, "top", c.slider.height / 2 - c.slider.nav.height / 2 + 10), VMM.Lib.height(f, c.slider.height), VMM.Lib.width(f, q), d && N(p, "linear", 1), 0 == p && VMM.Lib.visible(v.prevBtn, !1);
    }
    function y(a, b) {
        trace("DRAG FINISH"), trace(b.left_adjust), trace(c.slider.width / 2), b.left_adjust < 0 ? Math.abs(b.left_adjust) > c.slider.width / 2 ? p == m.length - 1 ? O() : (N(p + 1, "easeOutExpo"), E()) : O() : Math.abs(b.left_adjust) > c.slider.width / 2 ? 0 == p ? O() : (N(p - 1, "easeOutExpo"), E()) : O();
    }
    function z() {
        p == m.length - 1 ? O() : (N(p + 1), E());
    }
    function A() {
        0 == p ? O() : (N(p - 1), E());
    }
    function B(a) {
        switch (a.keyCode) {
          case 39:
            z(a);
            break;
          case 37:
            A(a);
        }
    }
    function D() {
        R();
    }
    function E() {
        c.current_slide = p, VMM.fireEvent(u, "UPDATE");
    }
    function G(a) {
        var b = 0;
        for (VMM.attachElement(h, ""), m = [], b = 0; b < a.length; b++) {
            var c = new VMM.Slider.Slide(a[b], h);
            m.push(c);
        }
    }
    function H(a) {
        var b = 0;
        if (a) I(); else {
            for (b = 0; b < m.length; b++) m[b].clearTimers();
            d = setTimeout(I, c.duration);
        }
    }
    function I() {
        var a = 0;
        for (a = 0; a < m.length; a++) m[a].enqueue = !0;
        for (a = 0; a < c.preload; a++) p + a > m.length - 1 || (m[p + a].show(), m[p + a].enqueue = !1), 0 > p - a || (m[p - a].show(), m[p - a].enqueue = !1);
        if (m.length > 50) for (a = 0; a < m.length; a++) m[a].enqueue && m[a].hide();
        K();
    }
    function K() {
        var a = 0, b = ".slider-item .layout-text-media .media .media-container ", d = ".slider-item .layout-media .media .media-container ", e = ".slider-item .media .media-container", g = !1, h = {
            "text_media": {
                "width": 60 * (c.slider.content.width / 100),
                "height": c.slider.height - 60,
                "video": {
                    "width": 0,
                    "height": 0
                },
                "text": {
                    "width": 40 * (c.slider.content.width / 100) - 30,
                    "height": c.slider.height
                }
            },
            "media": {
                "width": c.slider.content.width,
                "height": c.slider.height - 110,
                "video": {
                    "width": 0,
                    "height": 0
                }
            }
        };
        for (("mobile" == VMM.Browser.device || 641 > q) && (g = !0), VMM.master_config.sizes.api.width = h.media.width, VMM.master_config.sizes.api.height = h.media.height, h.text_media.video = VMM.Util.ratio.fit(h.text_media.width, h.text_media.height, 16, 9), h.media.video = VMM.Util.ratio.fit(h.media.width, h.media.height, 16, 9), VMM.Lib.css(".slider-item", "width", c.slider.content.width), VMM.Lib.height(".slider-item", c.slider.height), g ? (h.text_media.width = c.slider.content.width - 2 * c.slider.content.padding, h.media.width = c.slider.content.width - 2 * c.slider.content.padding, h.text_media.height = 50 * (c.slider.height / 100) - 50, h.media.height = 70 * (c.slider.height / 100) - 40, h.text_media.video = VMM.Util.ratio.fit(h.text_media.width, h.text_media.height, 16, 9), h.media.video = VMM.Util.ratio.fit(h.media.width, h.media.height, 16, 9), VMM.Lib.css(".slider-item .layout-text-media .text", "width", "100%"), VMM.Lib.css(".slider-item .layout-text-media .text", "display", "block"), VMM.Lib.css(".slider-item .layout-text-media .text .container", "display", "block"), VMM.Lib.css(".slider-item .layout-text-media .text .container", "width", h.media.width), VMM.Lib.css(".slider-item .layout-text-media .text .container .start", "width", "auto"), VMM.Lib.css(".slider-item .layout-text-media .media", "float", "none"), VMM.Lib.addClass(".slider-item .content-container", "pad-top"), VMM.Lib.css(".slider-item .media blockquote p", "line-height", "18px"), VMM.Lib.css(".slider-item .media blockquote p", "font-size", "16px"), VMM.Lib.css(".slider-item", "overflow-y", "auto")) : (VMM.Lib.css(".slider-item .layout-text-media .text .container .start", "width", h.text_media.text.width), VMM.Lib.removeClass(".slider-item .content-container", "pad-top"), VMM.Lib.css(".slider-item .layout-text-media .media", "float", "right"), VMM.Lib.css(".slider-item .media blockquote p", "line-height", "36px"), VMM.Lib.css(".slider-item .media blockquote p", "font-size", "28px"), VMM.Lib.css(".slider-item", "display", "table"), VMM.Lib.css(".slider-item", "overflow-y", "hidden")), VMM.Lib.css(b + ".media-frame", "max-width", h.text_media.width), VMM.Lib.height(b + ".media-frame", h.text_media.height), VMM.Lib.width(b + ".media-frame", h.text_media.width), VMM.Lib.css(b + "img", "max-height", h.text_media.height), VMM.Lib.css(d + "img", "max-height", h.media.height), VMM.Lib.css(b + "img", "max-width", h.text_media.width), VMM.Lib.css(b + ".avatar img", "max-width", 32), VMM.Lib.css(b + ".avatar img", "max-height", 32), VMM.Lib.css(d + ".avatar img", "max-width", 32), VMM.Lib.css(d + ".avatar img", "max-height", 32), VMM.Lib.css(b + ".article-thumb", "max-width", "50%"), VMM.Lib.css(d + ".article-thumb", "max-width", 200), VMM.Lib.width(b + ".media-frame", h.text_media.video.width), VMM.Lib.height(b + ".media-frame", h.text_media.video.height), VMM.Lib.width(d + ".media-frame", h.media.video.width), VMM.Lib.height(d + ".media-frame", h.media.video.height), VMM.Lib.css(d + ".media-frame", "max-height", h.media.video.height), VMM.Lib.css(d + ".media-frame", "max-width", h.media.video.width), VMM.Lib.height(d + ".soundcloud", 168), VMM.Lib.height(b + ".soundcloud", 168), VMM.Lib.width(d + ".soundcloud", h.media.width), VMM.Lib.width(b + ".soundcloud", h.text_media.width), VMM.Lib.css(e + ".soundcloud", "max-height", 168), VMM.Lib.height(b + ".map", h.text_media.height), VMM.Lib.width(b + ".map", h.text_media.width), VMM.Lib.css(d + ".map", "max-height", h.media.height), VMM.Lib.width(d + ".map", h.media.width), VMM.Lib.height(b + ".doc", h.text_media.height), VMM.Lib.width(b + ".doc", h.text_media.width), VMM.Lib.height(d + ".doc", h.media.height), VMM.Lib.width(d + ".doc", h.media.width), VMM.Lib.width(d + ".wikipedia", h.media.width), VMM.Lib.width(d + ".twitter", h.media.width), VMM.Lib.width(d + ".plain-text-quote", h.media.width), VMM.Lib.width(d + ".plain-text", h.media.width), VMM.Lib.css(e, "max-width", h.media.width), VMM.Lib.css(b + ".caption", "max-width", h.text_media.video.width), VMM.Lib.css(d + ".caption", "max-width", h.media.video.width), a = 0; a < m.length; a++) m[a].layout(g), m[a].content_height() > c.slider.height + 20 ? m[a].css("display", "block") : m[a].css("display", "table");
    }
    function L() {
        var a = 0, b = 0;
        for (b = 0; b < m.length; b++) a = b * (c.slider.width + c.spacing), m[b].leftpos(a);
    }
    function N(a, b, d, f, h) {
        var q, i = c.ease, j = c.duration, k = !1, n = !1, o = "";
        if (VMM.ExternalAPI.youtube.stopPlayers(), p = a, q = m[p].leftpos(), 0 == p && (n = !0), p + 1 >= m.length && (k = !0), null != b && "" != b && (i = b), null != d && "" != d && (j = d), "mobile" == VMM.Browser.device ? (VMM.Lib.visible(v.prevBtn, !1), VMM.Lib.visible(v.nextBtn, !1)) : (n ? VMM.Lib.visible(v.prevBtn, !1) : (VMM.Lib.visible(v.prevBtn, !0), o = VMM.Util.unlinkify(l[p - 1].title), "timeline" == c.type ? "undefined" == typeof l[p - 1].date ? (VMM.attachElement(v.prevDate, o), VMM.attachElement(v.prevTitle, "")) : (VMM.attachElement(v.prevDate, VMM.Date.prettyDate(l[p - 1].startdate, !1, l[p - 1].precisiondate)), VMM.attachElement(v.prevTitle, o)) : VMM.attachElement(v.prevTitle, o)), k ? VMM.Lib.visible(v.nextBtn, !1) : (VMM.Lib.visible(v.nextBtn, !0), o = VMM.Util.unlinkify(l[p + 1].title), "timeline" == c.type ? "undefined" == typeof l[p + 1].date ? (VMM.attachElement(v.nextDate, o), VMM.attachElement(v.nextTitle, "")) : (VMM.attachElement(v.nextDate, VMM.Date.prettyDate(l[p + 1].startdate, !1, l[p + 1].precisiondate)), VMM.attachElement(v.nextTitle, o)) : VMM.attachElement(v.nextTitle, o))), f ? VMM.Lib.css(g, "left", -(q - c.slider.content.padding)) : (VMM.Lib.stop(g), VMM.Lib.animate(g, j, i, {
            "left": -(q - c.slider.content.padding)
        })), h && VMM.fireEvent(u, "LOADED"), m[p].height() > c.slider_height) VMM.Lib.css(".slider", "overflow-y", "scroll"); else {
            VMM.Lib.css(u, "overflow-y", "hidden");
            var r = 0;
            try {
                r = VMM.Lib.prop(u, "scrollHeight"), VMM.Lib.animate(u, j, i, {
                    "scrollTop": r - VMM.Lib.height(u)
                });
            } catch (s) {
                r = VMM.Lib.height(u);
            }
        }
        H(), VMM.fireEvent(e, "MESSAGE", "TEST");
    }
    function O() {
        VMM.Lib.stop(g), VMM.Lib.animate(g, c.duration, "easeOutExpo", {
            "left": -m[p].leftpos() + c.slider.content.padding
        });
    }
    function P(a, b) {
        trace("showMessege " + b), VMM.attachElement(j, "<div class='vco-explainer'><div class='vco-explainer-container'><div class='vco-bezel'><div class='vco-gesture-icon'></div><div class='vco-message'><p>" + b + "</p></div></div></div></div>");
    }
    function R() {
        VMM.Lib.detach(j);
    }
    function S() {
        var a = "<div class='icon'>&nbsp;</div>";
        v.nextBtn = VMM.appendAndGetElement(e, "<div>", "nav-next"), v.prevBtn = VMM.appendAndGetElement(e, "<div>", "nav-previous"), v.nextBtnContainer = VMM.appendAndGetElement(v.nextBtn, "<div>", "nav-container", a), v.prevBtnContainer = VMM.appendAndGetElement(v.prevBtn, "<div>", "nav-container", a), "timeline" == c.type && (v.nextDate = VMM.appendAndGetElement(v.nextBtnContainer, "<div>", "date", ""), v.prevDate = VMM.appendAndGetElement(v.prevBtnContainer, "<div>", "date", "")), v.nextTitle = VMM.appendAndGetElement(v.nextBtnContainer, "<div>", "title", ""), v.prevTitle = VMM.appendAndGetElement(v.prevBtnContainer, "<div>", "title", ""), VMM.bindEvent(".nav-next", z), VMM.bindEvent(".nav-previous", A), VMM.bindEvent(window, B, "keydown");
    }
    function T() {
        var a = 3e3;
        VMM.attachElement(u, ""), e = VMM.getElement(u), f = VMM.appendAndGetElement(e, "<div>", "slider-container-mask"), g = VMM.appendAndGetElement(f, "<div>", "slider-container"), h = VMM.appendAndGetElement(g, "<div>", "slider-item-container"), S(), G(l), ("tablet" == VMM.Browser.device || "mobile" == VMM.Browser.device) && (c.duration = 500, a = 1e3, i = new VMM.DragSlider, i.createPanel(e, g, "", c.touch, !0), VMM.bindEvent(i, y, "DRAGUPDATE"), j = VMM.appendAndGetElement(f, "<div>", "vco-feedback", ""), P(null, "Swipe to Navigate"), VMM.Lib.height(j, c.slider.height), VMM.bindEvent(j, D), VMM.bindEvent(j, D, "touchend")), x(!1, !0), VMM.Lib.visible(v.prevBtn, !1), N(c.current_slide, "easeOutExpo", a, !0, !0), t = !0;
    }
    var c, d, e, f, g, h, i, j, l = [], m = [], n = [], p = 0, q = 960, t = !1, u = a, v = {
        "nextBtn": "",
        "prevBtn": "",
        "nextDate": "",
        "prevDate": "",
        "nextTitle": "",
        "prevTitle": ""
    };
    c = "undefined" != typeof b ? b : {
        "preload": 4,
        "current_slide": 0,
        "interval": 10,
        "something": 0,
        "width": 720,
        "height": 400,
        "ease": "easeInOutExpo",
        "duration": 1e3,
        "timeline": !1,
        "spacing": 15,
        "slider": {
            "width": 720,
            "height": 400,
            "content": {
                "width": 720,
                "height": 400,
                "padding": 120,
                "padding_default": 120
            },
            "nav": {
                "width": 100,
                "height": 200
            }
        }
    }, this.ver = "0.6", c.slider.width = c.width, c.slider.height = c.height, this.init = function(a) {
        m = [], n = [], "undefined" != typeof a ? this.setData(a) : trace("WAITING ON DATA");
    }, this.width = function(a) {
        return null == a || "" == a ? c.slider.width : (c.slider.width = a, x(), void 0);
    }, this.height = function(a) {
        return null == a || "" == a ? c.slider.height : (c.slider.height = a, x(), void 0);
    }, this.setData = function(a) {
        "undefined" != typeof a ? (l = a, T()) : trace("NO DATA");
    }, this.getData = function() {
        return l;
    }, this.setConfig = function(a) {
        "undefined" != typeof a ? c = a : trace("NO CONFIG DATA");
    }, this.getConfig = function() {
        return c;
    }, this.setSize = function(a, b) {
        null != a && (c.slider.width = a), null != b && (c.slider.height = b), t && x();
    }, this.active = function() {
        return t;
    }, this.getCurrentNumber = function() {
        return p;
    }, this.setSlide = function(a) {
        N(a);
    };
}), "undefined" != typeof VMM.Slider && (VMM.Slider.Slide = function(a, b) {
    var c, d, e, f, g, h, i = a, g = "", l = !1, m = !1, n = !1, o = !0, p = !1, q = "slide_", s = {
        "pushque": "",
        "render": "",
        "relayout": "",
        "remove": "",
        "skinny": !1
    }, t = {
        "pushque": 500,
        "render": 100,
        "relayout": 100,
        "remove": 3e4
    };
    q += i.uniqueid, this.enqueue = o, this.id = q, g = VMM.appendAndGetElement(b, "<div>", "slider-item"), "undefined" != typeof i.classname ? (trace("HAS CLASSNAME"), VMM.Lib.addClass(g, i.classname)) : (trace("NO CLASSNAME"), trace(i)), h = {
        "slide": "",
        "text": "",
        "media": "",
        "media_element": "",
        "layout": "content-container layout",
        "has": {
            "headline": !1,
            "text": !1,
            "media": !1
        }
    }, this.show = function(a) {
        o = !1, s.skinny = a, p = !1, clearTimeout(s.remove), l || (m ? (clearTimeout(s.relayout), s.relayout = setTimeout(w, t.relayout)) : u(a));
    }, this.hide = function() {
        l && !p && (p = !0, clearTimeout(s.remove), s.remove = setTimeout(v, t.remove));
    }, this.clearTimers = function() {
        clearTimeout(s.relayout), clearTimeout(s.pushque), clearTimeout(s.render);
    }, this.layout = function(a) {
        l && m && x(a);
    }, this.elem = function() {
        return g;
    }, this.position = function() {
        return VMM.Lib.position(g);
    }, this.leftpos = function(a) {
        return "undefined" == typeof a ? VMM.Lib.position(g).left : (VMM.Lib.css(g, "left", a), void 0);
    }, this.animate = function(a, b, c) {
        VMM.Lib.animate(g, a, b, c);
    }, this.css = function(a, b) {
        VMM.Lib.css(g, a, b);
    }, this.opacity = function(a) {
        VMM.Lib.css(g, "opacity", a);
    }, this.width = function() {
        return VMM.Lib.width(g);
    }, this.height = function() {
        return VMM.Lib.height(g);
    }, this.content_height = function() {
        var a = VMM.Lib.find(g, ".content")[0];
        return "undefined" != a && null != a ? VMM.Lib.height(a) : 0;
    };
    var u = function(a) {
        trace("RENDER " + q), l = !0, m = !0, s.skinny = a, y(), clearTimeout(s.pushque), clearTimeout(s.render), s.pushque = setTimeout(VMM.ExternalAPI.pushQues, t.pushque);
    }, v = function() {
        trace("REMOVE SLIDE TIMER FINISHED"), l = !1, VMM.Lib.detach(d), VMM.Lib.detach(c);
    }, w = function() {
        l = !0, x(s.skinny, !0);
    }, x = function(a, b) {
        h.has.text ? a ? (!n || b) && (VMM.Lib.removeClass(e, "pad-left"), VMM.Lib.detach(d), VMM.Lib.detach(c), VMM.Lib.append(e, d), VMM.Lib.append(e, c), n = !0) : (n || b) && (VMM.Lib.addClass(e, "pad-left"), VMM.Lib.detach(d), VMM.Lib.detach(c), VMM.Lib.append(e, c), VMM.Lib.append(e, d), n = !1) : b && (h.has.headline && (VMM.Lib.detach(d), VMM.Lib.append(e, d)), VMM.Lib.detach(c), VMM.Lib.append(e, c));
    }, y = function() {
        if (trace("BUILDSLIDE"), f = VMM.appendAndGetElement(g, "<div>", "content"), e = VMM.appendAndGetElement(f, "<div>"), null != i.headline && "" != i.headline && (h.has.headline = !0, h.text += "start" == i.type ? VMM.createElement("h2", VMM.Util.linkify_with_twitter(i.headline, "_blank"), "start") : VMM.createElement("h2", VMM.Util.linkify_with_twitter(i.headline, "_blank"))), null != i.startdate && "" != i.startdate && "date" == type.of(i.startdate) && "start" != i.type) {
            var a = VMM.Date.prettyDate(i.startdate, !1, i.precisiondate), b = VMM.Date.prettyDate(i.enddate, !1, i.precisiondate), j = "";
            null != i.tag && "" != i.tag && (j = VMM.createElement("span", i.tag, "slide-tag")), h.text += a != b ? VMM.createElement("h3", a + " &mdash; " + b + j, "date") : VMM.createElement("h3", a + j, "date");
        }
        null != i.text && "" != i.text && (h.has.text = !0, h.text += VMM.createElement("p", VMM.Util.linkify_with_twitter(i.text, "_blank"))), (h.has.text || h.has.headline) && (h.text = VMM.createElement("div", h.text, "container"), d = VMM.appendAndGetElement(e, "<div>", "text", VMM.TextElement.create(h.text))), i.needs_slug, null != i.asset && "" != i.asset && null != i.asset.media && "" != i.asset.media && (h.has.media = !0, c = VMM.appendAndGetElement(e, "<div>", "media", VMM.MediaElement.create(i.asset, i.uniqueid))), h.has.text && (h.layout += "-text"), h.has.media && (h.layout += "-media"), h.has.text ? s.skinny ? (VMM.Lib.addClass(e, h.layout), n = !0) : (VMM.Lib.addClass(e, h.layout), VMM.Lib.addClass(e, "pad-left"), VMM.Lib.detach(d), VMM.Lib.append(e, d)) : VMM.Lib.addClass(e, h.layout);
    };
});

var Aes = {};

Aes.cipher = function(a, b) {
    for (var c = 4, d = b.length / c - 1, e = [ [], [], [], [] ], f = 0; 4 * c > f; f++) e[f % 4][Math.floor(f / 4)] = a[f];
    e = Aes.addRoundKey(e, b, 0, c);
    for (var g = 1; d > g; g++) e = Aes.subBytes(e, c), e = Aes.shiftRows(e, c), e = Aes.mixColumns(e, c), e = Aes.addRoundKey(e, b, g, c);
    e = Aes.subBytes(e, c), e = Aes.shiftRows(e, c), e = Aes.addRoundKey(e, b, d, c);
    for (var h = new Array(4 * c), f = 0; 4 * c > f; f++) h[f] = e[f % 4][Math.floor(f / 4)];
    return h;
}, Aes.keyExpansion = function(a) {
    for (var b = 4, c = a.length / 4, d = c + 6, e = new Array(b * (d + 1)), f = new Array(4), g = 0; c > g; g++) {
        var h = [ a[4 * g], a[4 * g + 1], a[4 * g + 2], a[4 * g + 3] ];
        e[g] = h;
    }
    for (var g = c; b * (d + 1) > g; g++) {
        e[g] = new Array(4);
        for (var i = 0; 4 > i; i++) f[i] = e[g - 1][i];
        if (0 == g % c) {
            f = Aes.subWord(Aes.rotWord(f));
            for (var i = 0; 4 > i; i++) f[i] ^= Aes.rCon[g / c][i];
        } else c > 6 && 4 == g % c && (f = Aes.subWord(f));
        for (var i = 0; 4 > i; i++) e[g][i] = e[g - c][i] ^ f[i];
    }
    return e;
}, Aes.subBytes = function(a, b) {
    for (var c = 0; 4 > c; c++) for (var d = 0; b > d; d++) a[c][d] = Aes.sBox[a[c][d]];
    return a;
}, Aes.shiftRows = function(a, b) {
    for (var c = new Array(4), d = 1; 4 > d; d++) {
        for (var e = 0; 4 > e; e++) c[e] = a[d][(e + d) % b];
        for (var e = 0; 4 > e; e++) a[d][e] = c[e];
    }
    return a;
}, Aes.mixColumns = function(a) {
    for (var c = 0; 4 > c; c++) {
        for (var d = new Array(4), e = new Array(4), f = 0; 4 > f; f++) d[f] = a[f][c], e[f] = 128 & a[f][c] ? 283 ^ a[f][c] << 1 : a[f][c] << 1;
        a[0][c] = e[0] ^ d[1] ^ e[1] ^ d[2] ^ d[3], a[1][c] = d[0] ^ e[1] ^ d[2] ^ e[2] ^ d[3], a[2][c] = d[0] ^ d[1] ^ e[2] ^ d[3] ^ e[3], a[3][c] = d[0] ^ e[0] ^ d[1] ^ d[2] ^ e[3];
    }
    return a;
}, Aes.addRoundKey = function(a, b, c, d) {
    for (var e = 0; 4 > e; e++) for (var f = 0; d > f; f++) a[e][f] ^= b[4 * c + f][e];
    return a;
}, Aes.subWord = function(a) {
    for (var b = 0; 4 > b; b++) a[b] = Aes.sBox[a[b]];
    return a;
}, Aes.rotWord = function(a) {
    for (var b = a[0], c = 0; 3 > c; c++) a[c] = a[c + 1];
    return a[3] = b, a;
}, Aes.sBox = [ 99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22 ], Aes.rCon = [ [ 0, 0, 0, 0 ], [ 1, 0, 0, 0 ], [ 2, 0, 0, 0 ], [ 4, 0, 0, 0 ], [ 8, 0, 0, 0 ], [ 16, 0, 0, 0 ], [ 32, 0, 0, 0 ], [ 64, 0, 0, 0 ], [ 128, 0, 0, 0 ], [ 27, 0, 0, 0 ], [ 54, 0, 0, 0 ] ], Aes.Ctr = {}, Aes.Ctr.encrypt = function(a, b, c) {
    var d = 16;
    if (128 != c && 192 != c && 256 != c) return "";
    a = Utf8.encode(a), b = Utf8.encode(b);
    for (var e = c / 8, f = new Array(e), g = 0; e > g; g++) f[g] = isNaN(b.charCodeAt(g)) ? 0 : b.charCodeAt(g);
    var h = Aes.cipher(f, Aes.keyExpansion(f));
    h = h.concat(h.slice(0, e - 16));
    for (var i = new Array(d), j = (new Date).getTime(), k = j % 1e3, l = Math.floor(j / 1e3), m = Math.floor(65535 * Math.random()), g = 0; 2 > g; g++) i[g] = 255 & k >>> 8 * g;
    for (var g = 0; 2 > g; g++) i[g + 2] = 255 & m >>> 8 * g;
    for (var g = 0; 4 > g; g++) i[g + 4] = 255 & l >>> 8 * g;
    for (var n = "", g = 0; 8 > g; g++) n += String.fromCharCode(i[g]);
    for (var o = Aes.keyExpansion(h), p = Math.ceil(a.length / d), q = new Array(p), r = 0; p > r; r++) {
        for (var s = 0; 4 > s; s++) i[15 - s] = 255 & r >>> 8 * s;
        for (var s = 0; 4 > s; s++) i[15 - s - 4] = r / 4294967296 >>> 8 * s;
        for (var t = Aes.cipher(i, o), u = p - 1 > r ? d : (a.length - 1) % d + 1, v = new Array(u), g = 0; u > g; g++) v[g] = t[g] ^ a.charCodeAt(r * d + g), v[g] = String.fromCharCode(v[g]);
        q[r] = v.join("");
    }
    var w = n + q.join("");
    return w = Base64.encode(w);
}, Aes.Ctr.decrypt = function(a, b, c) {
    var d = 16;
    if (128 != c && 192 != c && 256 != c) return "";
    a = Base64.decode(a), b = Utf8.encode(b);
    for (var e = c / 8, f = new Array(e), g = 0; e > g; g++) f[g] = isNaN(b.charCodeAt(g)) ? 0 : b.charCodeAt(g);
    var h = Aes.cipher(f, Aes.keyExpansion(f));
    h = h.concat(h.slice(0, e - 16));
    var i = new Array(8);
    ctrTxt = a.slice(0, 8);
    for (var g = 0; 8 > g; g++) i[g] = ctrTxt.charCodeAt(g);
    for (var j = Aes.keyExpansion(h), k = Math.ceil((a.length - 8) / d), l = new Array(k), m = 0; k > m; m++) l[m] = a.slice(8 + m * d, 8 + m * d + d);
    a = l;
    for (var n = new Array(a.length), m = 0; k > m; m++) {
        for (var o = 0; 4 > o; o++) i[15 - o] = 255 & m >>> 8 * o;
        for (var o = 0; 4 > o; o++) i[15 - o - 4] = 255 & (m + 1) / 4294967296 - 1 >>> 8 * o;
        for (var p = Aes.cipher(i, j), q = new Array(a[m].length), g = 0; g < a[m].length; g++) q[g] = p[g] ^ a[m].charCodeAt(g), q[g] = String.fromCharCode(q[g]);
        n[m] = q.join("");
    }
    var r = n.join("");
    return r = Utf8.decode(r);
};

var Base64 = {};

Base64.code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Base64.encode = function(a, b) {
    b = "undefined" == typeof b ? !1 : b;
    var c, d, e, f, g, h, i, j, m, n, o, k = [], l = "", p = Base64.code;
    if (n = b ? a.encodeUTF8() : a, m = n.length % 3, m > 0) for (; m++ < 3; ) l += "=", n += "\0";
    for (m = 0; m < n.length; m += 3) c = n.charCodeAt(m), d = n.charCodeAt(m + 1), e = n.charCodeAt(m + 2), f = c << 16 | d << 8 | e, g = 63 & f >> 18, h = 63 & f >> 12, i = 63 & f >> 6, j = 63 & f, k[m / 3] = p.charAt(g) + p.charAt(h) + p.charAt(i) + p.charAt(j);
    return o = k.join(""), o = o.slice(0, o.length - l.length) + l;
}, Base64.decode = function(a, b) {
    b = "undefined" == typeof b ? !1 : b;
    var c, d, e, f, g, h, i, j, l, m, k = [], n = Base64.code;
    m = b ? a.decodeUTF8() : a;
    for (var o = 0; o < m.length; o += 4) f = n.indexOf(m.charAt(o)), g = n.indexOf(m.charAt(o + 1)), h = n.indexOf(m.charAt(o + 2)), i = n.indexOf(m.charAt(o + 3)), j = f << 18 | g << 12 | h << 6 | i, c = 255 & j >>> 16, d = 255 & j >>> 8, e = 255 & j, k[o / 4] = String.fromCharCode(c, d, e), 64 == i && (k[o / 4] = String.fromCharCode(c, d)), 64 == h && (k[o / 4] = String.fromCharCode(c));
    return l = k.join(""), b ? l.decodeUTF8() : l;
};

var Utf8 = {};

Utf8.encode = function(a) {
    var b = a.replace(/[\u0080-\u07ff]/g, function(a) {
        var b = a.charCodeAt(0);
        return String.fromCharCode(192 | b >> 6, 128 | 63 & b);
    });
    return b = b.replace(/[\u0800-\uffff]/g, function(a) {
        var b = a.charCodeAt(0);
        return String.fromCharCode(224 | b >> 12, 128 | 63 & b >> 6, 128 | 63 & b);
    });
}, Utf8.decode = function(a) {
    var b = a.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function(a) {
        var b = (15 & a.charCodeAt(0)) << 12 | (63 & a.charCodeAt(1)) << 6 | 63 & a.charCodeAt(2);
        return String.fromCharCode(b);
    });
    return b = b.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function(a) {
        var b = (31 & a.charCodeAt(0)) << 6 | 63 & a.charCodeAt(1);
        return String.fromCharCode(b);
    });
}, !function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("tooltip", a, b);
    };
    b.prototype = {
        "constructor": b,
        "init": function(b, c, d) {
            var e, f;
            this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.enabled = !0, "manual" != this.options.trigger && (e = "hover" == this.options.trigger ? "mouseenter" : "focus", f = "hover" == this.options.trigger ? "mouseleave" : "blur", this.$element.on(e, this.options.selector, a.proxy(this.enter, this)), this.$element.on(f, this.options.selector, a.proxy(this.leave, this))), this.options.selector ? this._options = a.extend({}, this.options, {
                "trigger": "manual",
                "selector": ""
            }) : this.fixTitle();
        },
        "getOptions": function(b) {
            return b = a.extend({}, a.fn[this.type].defaults, b, this.$element.data()), b.delay && "number" == typeof b.delay && (b.delay = {
                "show": b.delay,
                "hide": b.delay
            }), b;
        },
        "enter": function(b) {
            var c = a(b.currentTarget)[this.type](this._options).data(this.type);
            c.options.delay && c.options.delay.show ? (c.hoverState = "in", setTimeout(function() {
                "in" == c.hoverState && c.show();
            }, c.options.delay.show)) : c.show();
        },
        "leave": function(b) {
            var c = a(b.currentTarget)[this.type](this._options).data(this.type);
            c.options.delay && c.options.delay.hide ? (c.hoverState = "out", setTimeout(function() {
                "out" == c.hoverState && c.hide();
            }, c.options.delay.hide)) : c.hide();
        },
        "show": function() {
            var a, b, c, d, e, f, g;
            if (this.hasContent() && this.enabled) {
                switch (a = this.tip(), this.setContent(), this.options.animation && a.addClass("fade"), f = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement, b = /in/.test(f), a.remove().css({
                    "top": 0,
                    "left": 0,
                    "display": "block"
                }).appendTo(b ? this.$element : document.body), c = this.getPosition(b), d = a[0].offsetWidth, e = a[0].offsetHeight, b ? f.split(" ")[1] : f) {
                  case "bottom":
                    g = {
                        "top": c.top + c.height,
                        "left": c.left + c.width / 2 - d / 2
                    };
                    break;
                  case "top":
                    g = {
                        "top": c.top - e,
                        "left": c.left + c.width / 2 - d / 2
                    };
                    break;
                  case "left":
                    g = {
                        "top": c.top + c.height / 2 - e / 2,
                        "left": c.left - d
                    };
                    break;
                  case "right":
                    g = {
                        "top": c.top + c.height / 2 - e / 2,
                        "left": c.left + c.width
                    };
                }
                a.css(g).addClass(f).addClass("in");
            }
        },
        "setContent": function() {
            var a = this.tip();
            a.find(".timeline-tooltip-inner").html(this.getTitle()), a.removeClass("fade in top bottom left right");
        },
        "hide": function() {
            function d() {
                var b = setTimeout(function() {
                    c.off(a.support.transition.end).remove();
                }, 500);
                c.one(a.support.transition.end, function() {
                    clearTimeout(b), c.remove();
                });
            }
            var c = this.tip();
            c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d() : c.remove();
        },
        "fixTitle": function() {
            var a = this.$element;
            (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").removeAttr("title");
        },
        "hasContent": function() {
            return this.getTitle();
        },
        "getPosition": function(b) {
            return a.extend({}, b ? {
                "top": 0,
                "left": 0
            } : this.$element.offset(), {
                "width": this.$element[0].offsetWidth,
                "height": this.$element[0].offsetHeight
            });
        },
        "getTitle": function() {
            var a, b = this.$element, c = this.options;
            return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title), a = a.toString().replace(/(^\s*|\s*$)/, "");
        },
        "tip": function() {
            return this.$tip = this.$tip || a(this.options.template);
        },
        "validate": function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
        },
        "enable": function() {
            this.enabled = !0;
        },
        "disable": function() {
            this.enabled = !1;
        },
        "toggleEnabled": function() {
            this.enabled = !this.enabled;
        },
        "toggle": function() {
            this[this.tip().hasClass("in") ? "hide" : "show"]();
        }
    }, a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("tooltip"), f = "object" == typeof c && c;
            e || d.data("tooltip", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.defaults = {
        "animation": !0,
        "delay": 0,
        "selector": !1,
        "placement": "top",
        "trigger": "hover",
        "title": "",
        "template": '<div class="timeline-tooltip"><div class="timeline-tooltip-arrow"></div><div class="timeline-tooltip-inner"></div></div>'
    };
}(window.jQuery), "undefined" != typeof VMM && "undefined" == typeof VMM.StoryJS && (VMM.StoryJS = function() {
    this.init = function() {};
}), "undefined" != typeof VMM && "undefined" == typeof VMM.Timeline && (VMM.Timeline = function(a, b, c) {
    function w(a) {
        "object" == typeof embed_config && (timeline_config = embed_config), "object" == typeof timeline_config ? (trace("HAS TIMELINE CONFIG"), q = VMM.Util.mergeConfig(q, timeline_config)) : "object" == typeof a && (q = VMM.Util.mergeConfig(q, a)), ("mobile" == VMM.Browser.device || "tablet" == VMM.Browser.device) && (q.touch = !0), q.nav.width = q.width, q.nav.height = 200, q.feature.width = q.width, q.feature.height = q.height - q.nav.height, q.nav.zoom.adjust = parseInt(q.start_zoom_adjust, 10), VMM.Timeline.Config = q, VMM.master_config.Timeline = VMM.Timeline.Config, this.events = q.events, "" != q.gmap_key && (q.api_keys.google = q.gmap_key), trace("VERSION " + q.version), l = q.version;
    }
    function x() {
        d = VMM.getElement(m), VMM.Lib.addClass(d, "vco-timeline"), VMM.Lib.addClass(d, "vco-storyjs"), e = VMM.appendAndGetElement(d, "<div>", "vco-container vco-main"), f = VMM.appendAndGetElement(e, "<div>", "vco-feature"), h = VMM.appendAndGetElement(f, "<div>", "vco-slider"), i = VMM.appendAndGetElement(e, "<div>", "vco-navigation"), g = VMM.appendAndGetElement(d, "<div>", "vco-feedback", ""), "undefined" != typeof q.language.right_to_left && VMM.Lib.addClass(d, "vco-right-to-left"), j = new VMM.Slider(h, q), k = new VMM.Timeline.TimeNav(i), r ? VMM.Lib.width(d, q.width) : q.width = VMM.Lib.width(d), s ? VMM.Lib.height(d, q.height) : q.height = VMM.Lib.height(d), q.touch ? VMM.Lib.addClass(d, "vco-touch") : VMM.Lib.addClass(d, "vco-notouch");
    }
    function y(a, b) {
        trace("onDataReady"), o = b.timeline, "array" != type.of(o.era) && (o.era = []), S();
    }
    function z() {
        Q();
    }
    function A() {
        R(), j.setSize(q.feature.width, q.feature.height), k.setSize(q.width, q.height), L() && J();
    }
    function B() {
        q.loaded.slider = !0, C();
    }
    function C() {
        q.loaded.percentloaded = q.loaded.percentloaded + 25, q.loaded.slider && q.loaded.timenav && O();
    }
    function D() {
        q.loaded.timenav = !0, C();
    }
    function E() {
        u = !0, q.current_slide = j.getCurrentNumber(), H(q.current_slide), k.setMarker(q.current_slide, q.ease, q.duration);
    }
    function F() {
        u = !0, q.current_slide = k.getCurrentNumber(), H(q.current_slide), j.setSlide(q.current_slide);
    }
    function G(a) {
        a <= p.length - 1 && a >= 0 && (q.current_slide = a, j.setSlide(q.current_slide), k.setMarker(q.current_slide, q.ease, q.duration));
    }
    function H(a) {
        q.hash_bookmark && (window.location.hash = "#" + a.toString());
    }
    function J() {
        var a = "", b = K(window.orientation);
        "mobile" == VMM.Browser.device ? a = "portrait" == b ? "width=device-width; initial-scale=0.5, maximum-scale=0.5" : "landscape" == b ? "width=device-width; initial-scale=0.5, maximum-scale=0.5" : "width=device-width, initial-scale=1, maximum-scale=1.0" : "tablet" == VMM.Browser.device, document.getElementById("viewport");
    }
    function K(a) {
        var b = "";
        return b = 0 == a || 180 == a ? "portrait" : 90 == a || -90 == a ? "landscape" : "normal";
    }
    function L() {
        var a = K(window.orientation);
        return a == q.orientation ? !1 : (q.orientation = a, !0);
    }
    function N(a, b, c) {
        trace("showMessege " + b), c ? VMM.attachElement(g, b) : VMM.attachElement(g, VMM.MediaElement.loadingmessage(b));
    }
    function O() {
        VMM.Lib.animate(g, q.duration, 4 * q.ease, {
            "opacity": 0
        }, P);
    }
    function P() {
        VMM.Lib.detach(g);
    }
    function Q() {
        parseInt(q.start_at_slide) > 0 && 0 == q.current_slide && (q.current_slide = parseInt(q.start_at_slide)), q.start_at_end && 0 == q.current_slide && (q.current_slide = p.length - 1), t ? (t = !0, VMM.fireEvent(global, q.events.messege, "请使用IE8及IE8以上版本或者下载chrome、firefox等高级浏览器查看，谢谢！")) : (P(), A(), VMM.bindEvent(h, B, "LOADED"), VMM.bindEvent(i, D, "LOADED"), VMM.bindEvent(h, E, "UPDATE"), VMM.bindEvent(i, F, "UPDATE"), j.init(p), k.init(p, o.era), VMM.bindEvent(global, A, q.events.resize));
    }
    function R() {
        trace("UPDATE SIZE"), q.width = VMM.Lib.width(d), q.height = VMM.Lib.height(d), q.nav.width = q.width, q.feature.width = q.width, q.feature.height = q.height - q.nav.height - 3, "mobile" == VMM.Browser.device, q.width < 641 ? VMM.Lib.addClass(d, "vco-skinny") : VMM.Lib.removeClass(d, "vco-skinny");
    }
    function S() {
        p = [], VMM.fireEvent(global, q.events.messege, "Building Dates"), R();
        for (var a = 0; a < o.date.length; a++) if (null != o.date[a].startDate && "" != o.date[a].startDate) {
            var b = {}, c = VMM.Date.parse(o.date[a].startDate, !0);
            b.startdate = c.date, b.precisiondate = c.precision, isNaN(b.startdate) || (b.enddate = null != o.date[a].endDate && "" != o.date[a].endDate ? VMM.Date.parse(o.date[a].endDate) : b.startdate, b.needs_slug = !1, "" == o.date[a].headline && null != o.date[a].slug && "" != o.date[a].slug && (b.needs_slug = !0), b.title = o.date[a].headline, b.headline = o.date[a].headline, b.type = o.date[a].type, b.date = VMM.Date.prettyDate(b.startdate, !1, b.precisiondate), b.asset = o.date[a].asset, b.fulldate = b.startdate.getTime(), b.text = o.date[a].text, b.content = "", b.tag = o.date[a].tag, b.slug = o.date[a].slug, b.uniqueid = VMM.Util.unique_ID(7), b.classname = o.date[a].classname, p.push(b));
        }
        if ("storify" != o.type && p.sort(function(a, b) {
            return a.fulldate - b.fulldate;
        }), null != o.headline && "" != o.headline && null != o.text && "" != o.text) {
            var e, c, g, b = {};
            "undefined" != typeof o.startDate ? (c = VMM.Date.parse(o.startDate, !0), e = c.date) : e = !1, trace("HAS STARTPAGE"), trace(e), e && e < p[0].startdate ? b.startdate = new Date(e) : (g = p[0].startdate, b.startdate = new Date(p[0].startdate), 0 === g.getMonth() && 1 == g.getDate() && 0 === g.getHours() && 0 === g.getMinutes() ? b.startdate.setFullYear(g.getFullYear() - 1) : g.getDate() <= 1 && 0 === g.getHours() && 0 === g.getMinutes() ? b.startdate.setMonth(g.getMonth() - 1) : 0 === g.getHours() && 0 === g.getMinutes() ? b.startdate.setDate(g.getDate() - 1) : 0 === g.getMinutes() ? b.startdate.setHours(g.getHours() - 1) : b.startdate.setMinutes(g.getMinutes() - 1)), b.uniqueid = VMM.Util.unique_ID(7), b.enddate = b.startdate, b.precisiondate = c.precision, b.title = o.headline, b.headline = o.headline, b.text = o.text, b.type = "start", b.date = VMM.Date.prettyDate(o.startDate, !1, b.precisiondate), b.asset = o.asset, b.slug = !1, b.needs_slug = !1, b.fulldate = b.startdate.getTime(), q.embed && VMM.fireEvent(global, q.events.headline, b.headline), p.unshift(b);
        }
        "storify" != o.type && p.sort(function(a, b) {
            return a.fulldate - b.fulldate;
        }), z();
    }
    var d, e, f, g, h, i, j, k, l = "2.x", m = "#timelinejs", o = {}, p = [], q = {}, r = !1, s = !1, t = !1, u = !1;
    if (m = "string" == type.of(a) ? a.match("#") ? a : "#" + a : "#timelinejs", q = {
        "embed": !1,
        "events": {
            "data_ready": "DATAREADY",
            "messege": "MESSEGE",
            "headline": "HEADLINE",
            "slide_change": "SLIDE_CHANGE",
            "resize": "resize"
        },
        "id": m,
        "source": "nothing",
        "type": "timeline",
        "touch": !1,
        "orientation": "normal",
        "maptype": "",
        "version": "2.x",
        "preload": 4,
        "current_slide": 0,
        "hash_bookmark": !1,
        "start_at_end": !1,
        "start_at_slide": 0,
        "start_zoom_adjust": 0,
        "start_page": !1,
        "api_keys": {
            "google": "",
            "flickr": "",
            "twitter": ""
        },
        "interval": 10,
        "something": 0,
        "width": 960,
        "height": 540,
        "spacing": 15,
        "loaded": {
            "slider": !1,
            "timenav": !1,
            "percentloaded": 0
        },
        "nav": {
            "start_page": !1,
            "interval_width": 200,
            "density": 4,
            "minor_width": 0,
            "minor_left": 0,
            "constraint": {
                "left": 0,
                "right": 0,
                "right_min": 0,
                "right_max": 0
            },
            "zoom": {
                "adjust": 0
            },
            "multiplier": {
                "current": 6,
                "min": .1,
                "max": 50
            },
            "rows": [ 1, 1, 1 ],
            "width": 960,
            "height": 200,
            "marker": {
                "width": 150,
                "height": 50
            }
        },
        "feature": {
            "width": 960,
            "height": 540
        },
        "slider": {
            "width": 720,
            "height": 400,
            "content": {
                "width": 720,
                "height": 400,
                "padding": 130,
                "padding_default": 130
            },
            "nav": {
                "width": 100,
                "height": 200
            }
        },
        "ease": "easeInOutExpo",
        "duration": 1e3,
        "gmap_key": "",
        "language": VMM.Language
    }, null != b && "" != b && (q.width = b, r = !0), null != c && "" != c && (q.height = c, s = !0), window.location.hash) {
        var v = window.location.hash.substring(1);
        isNaN(v) || (q.current_slide = parseInt(v));
    }
    window.onhashchange = function() {
        var a = window.location.hash.substring(1);
        q.hash_bookmark ? u ? G(parseInt(a)) : u = !1 : G(parseInt(a));
    }, this.init = function(a, b) {
        trace("INIT"), J(), w(a), x(), "string" == type.of(b) && (q.source = b), VMM.Date.setLanguage(q.language), VMM.master_config.language = q.language, VMM.ExternalAPI.setKeys(q.api_keys), VMM.ExternalAPI.googlemaps.setMapType(q.maptype), VMM.bindEvent(global, y, q.events.data_ready), VMM.bindEvent(global, N, q.events.messege), VMM.fireEvent(global, q.events.messege, q.language.messages.loading_timeline), ("Explorer" == VMM.Browser.browser || "MSIE" == VMM.Browser.browser) && parseInt(VMM.Browser.version, 10) <= 7 && (t = !0), "string" == type.of(q.source) || "object" == type.of(q.source) ? VMM.Timeline.DataObj.getData(q.source) : VMM.fireEvent(global, q.events.messege, "No data source provided");
    }, this.iframeLoaded = function() {
        trace("iframeLoaded");
    }, this.reload = function(a) {
        trace("Load new timeline data" + a), VMM.fireEvent(global, q.events.messege, q.language.messages.loading_timeline), o = {}, VMM.Timeline.DataObj.getData(a), q.current_slide = 0, j.setSlide(0), k.setMarker(0, q.ease, q.duration);
    };
}, VMM.Timeline.Config = {}), "undefined" != typeof VMM.Timeline && "undefined" == typeof VMM.Timeline.TimeNav && (VMM.Timeline.TimeNav = function(a, b, c) {
    function R(a) {
        t.nav.constraint.left = t.width / 2, t.nav.constraint.right = t.nav.constraint.right_min - t.width / 2, s.updateConstraint(t.nav.constraint), VMM.Lib.css(m, "left", Math.round(t.width / 2) + 2), VMM.Lib.css(n, "left", Math.round(t.width / 2) - 8), $(t.current_slide, t.ease, t.duration, !0, a);
    }
    function S() {
        VMM.fireEvent(x, "UPDATE");
    }
    function T() {
        s.cancelSlide(), t.nav.multiplier.current > t.nav.multiplier.min && (t.nav.multiplier.current = t.nav.multiplier.current <= 1 ? t.nav.multiplier.current - .25 : t.nav.multiplier.current > 5 ? t.nav.multiplier.current > 16 ? Math.round(t.nav.multiplier.current - 10) : Math.round(t.nav.multiplier.current - 4) : Math.round(t.nav.multiplier.current - 1), t.nav.multiplier.current <= 0 && (t.nav.multiplier.current = t.nav.multiplier.min), X());
    }
    function U() {
        s.cancelSlide(), t.nav.multiplier.current < t.nav.multiplier.max && (t.nav.multiplier.current = t.nav.multiplier.current > 4 ? t.nav.multiplier.current > 16 ? Math.round(t.nav.multiplier.current + 10) : Math.round(t.nav.multiplier.current + 4) : Math.round(t.nav.multiplier.current + 1), t.nav.multiplier.current >= t.nav.multiplier.max && (t.nav.multiplier.current = t.nav.multiplier.max), X());
    }
    function V() {
        s.cancelSlide(), $(0), S();
    }
    function W(a) {
        var b = 0, c = 0;
        a || (a = window.event), a.originalEvent && (a = a.originalEvent), "undefined" != typeof a.wheelDeltaX && (b = a.wheelDeltaY / 6, b = Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY) ? a.wheelDeltaX / 6 : 0), b && (a.preventDefault && a.preventDefault(), a.returnValue = !1), c = VMM.Lib.position(d).left + b, c > t.nav.constraint.left ? c = t.width / 2 : c < t.nav.constraint.right && (c = t.nav.constraint.right), VMM.Lib.css(d, "left", c);
    }
    function X() {
        trace("config.nav.multiplier " + t.nav.multiplier.current), hb(!0), ib(!0), jb(h, B, !0, !0), jb(j, C, !0), t.nav.constraint.left = t.width / 2, t.nav.constraint.right = t.nav.constraint.right_min - t.width / 2, s.updateConstraint(t.nav.constraint);
    }
    function Y(a) {
        s.cancelSlide(), $(a.data.number), S();
    }
    function Z(a) {
        VMM.Lib.toggleClass(a.data.elem, "zFront");
    }
    function $(a, b, c) {
        trace("GO TO MARKER");
        var g = t.ease, h = t.duration, i = !1, j = !1;
        E = a, J.left = t.width / 2 - A[E].pos_left, J.visible.left = Math.abs(J.left) - 100, J.visible.right = Math.abs(J.left) + t.width + 100, 0 == E && (j = !0), E + 1 == A.length && (i = !0), null != b && "" != b && (g = b), null != c && "" != c && (h = c);
        for (var k = 0; k < A.length; k++) VMM.Lib.removeClass(A[k].marker, "active");
        t.start_page && "start" == A[0].type && (VMM.Lib.visible(A[0].marker, !1), VMM.Lib.addClass(A[0].marker, "start")), VMM.Lib.addClass(A[E].marker, "active"), VMM.Lib.stop(d), VMM.Lib.animate(d, h, g, {
            "left": J.left
        });
    }
    function ab() {
        var a = 0, b = 0, c = 0, d = [], e = 0;
        for (e = 0; e < A.length; e++) if ("start" != y[e].type) {
            var f = gb(M, A[e].relative_pos), a = b;
            b = f.begin, c = b - a, d.push(c);
        }
        return VMM.Util.average(d).mean;
    }
    function cb() {
        var a = t.nav.multiplier.current, b = 0;
        for (b = 0; a > b; b++) ab() < 75 && t.nav.multiplier.current > 1 && (t.nav.multiplier.current = t.nav.multiplier.current - 1);
    }
    function db() {
        var a = eb(y[0].startdate), b = eb(y[y.length - 1].enddate);
        P.eon.type = "eon", P.eon.first = a.eons, P.eon.base = Math.floor(a.eons), P.eon.last = b.eons, P.eon.number = w.eons, P.eon.multiplier = K.eons, P.eon.minor = K.eons, P.era.type = "era", P.era.first = a.eras, P.era.base = Math.floor(a.eras), P.era.last = b.eras, P.era.number = w.eras, P.era.multiplier = K.eras, P.era.minor = K.eras, P.epoch.type = "epoch", P.epoch.first = a.epochs, P.epoch.base = Math.floor(a.epochs), P.epoch.last = b.epochs, P.epoch.number = w.epochs, P.epoch.multiplier = K.epochs, P.epoch.minor = K.epochs, P.age.type = "age", P.age.first = a.ages, P.age.base = Math.floor(a.ages), P.age.last = b.ages, P.age.number = w.ages, P.age.multiplier = K.ages, P.age.minor = K.ages, P.millenium.type = "millenium", P.millenium.first = a.milleniums, P.millenium.base = Math.floor(a.milleniums), P.millenium.last = b.milleniums, P.millenium.number = w.milleniums, P.millenium.multiplier = K.millenium, P.millenium.minor = K.millenium, P.century.type = "century", P.century.first = a.centuries, P.century.base = Math.floor(a.centuries), P.century.last = b.centuries, P.century.number = w.centuries, P.century.multiplier = K.century, P.century.minor = K.century, P.decade.type = "decade", P.decade.first = a.decades, P.decade.base = Math.floor(a.decades), P.decade.last = b.decades, P.decade.number = w.decades, P.decade.multiplier = K.decade, P.decade.minor = K.decade, P.year.type = "year", P.year.first = a.years, P.year.base = Math.floor(a.years), P.year.last = b.years, P.year.number = w.years, P.year.multiplier = 1, P.year.minor = K.month, P.month.type = "month", P.month.first = a.months, P.month.base = Math.floor(a.months), P.month.last = b.months, P.month.number = w.months, P.month.multiplier = 1, P.month.minor = Math.round(K.week), P.week.type = "week", P.week.first = a.weeks, P.week.base = Math.floor(a.weeks), P.week.last = b.weeks, P.week.number = w.weeks, P.week.multiplier = 1, P.week.minor = 7, P.day.type = "day", P.day.first = a.days, P.day.base = Math.floor(a.days), P.day.last = b.days, P.day.number = w.days, P.day.multiplier = 1, P.day.minor = 24, P.hour.type = "hour", P.hour.first = a.hours, P.hour.base = Math.floor(a.hours), P.hour.last = b.hours, P.hour.number = w.hours, P.hour.multiplier = 1, P.hour.minor = 60, P.minute.type = "minute", P.minute.first = a.minutes, P.minute.base = Math.floor(a.minutes), P.minute.last = b.minutes, P.minute.number = w.minutes, P.minute.multiplier = 1, P.minute.minor = 60, P.second.type = "decade", P.second.first = a.seconds, P.second.base = Math.floor(a.seconds), P.second.last = b.seconds, P.second.number = w.seconds, P.second.multiplier = 1, P.second.minor = 10;
    }
    function eb(a) {
        var c = {};
        return c.days = a / L.day, c.weeks = c.days / L.week, c.months = c.days / L.month, c.years = c.months / L.year, c.hours = c.days * L.hour, c.minutes = c.days * L.minute, c.seconds = c.days * L.second, c.decades = c.years / L.decade, c.centuries = c.years / L.century, c.milleniums = c.years / L.millenium, c.ages = c.years / L.age, c.epochs = c.years / L.epoch, c.eras = c.years / L.era, c.eons = c.years / L.eon, c;
    }
    function fb(a, b, c) {
        var d, e, f = a.type, g = {
            "start": "",
            "end": "",
            "type": f
        };
        return d = eb(b), g.start = b.months, "eon" == f ? g.start = d.eons : "era" == f ? g.start = d.eras : "epoch" == f ? g.start = d.epochs : "age" == f ? g.start = d.ages : "millenium" == f ? g.start = b.milleniums : "century" == f ? g.start = d.centuries : "decade" == f ? g.start = d.decades : "year" == f ? g.start = d.years : "month" == f ? g.start = d.months : "week" == f ? g.start = d.weeks : "day" == f ? g.start = d.days : "hour" == f ? g.start = d.hours : "minute" == f && (g.start = d.minutes), "date" == type.of(c) ? (e = eb(c), g.end = c.months, "eon" == f ? g.end = e.eons : "era" == f ? g.end = e.eras : "epoch" == f ? g.end = e.epochs : "age" == f ? g.end = e.ages : "millenium" == f ? g.end = c.milleniums : "century" == f ? g.end = e.centuries : "decade" == f ? g.end = e.decades : "year" == f ? g.end = e.years : "month" == f ? g.end = e.months : "week" == f ? g.end = e.weeks : "day" == f ? g.end = e.days : "hour" == f ? g.end = e.hours : "minute" == f && (g.end = e.minutes)) : g.end = g.start, g;
    }
    function gb(a, b) {
        return {
            "begin": (b.start - M.base) * (t.nav.interval_width / t.nav.multiplier.current),
            "end": (b.end - M.base) * (t.nav.interval_width / t.nav.multiplier.current)
        };
    }
    function hb(a) {
        var b = 2, c = 0, e = -2, f = 0, h = 150, i = 6, j = 0, k = t.width, l = [], m = 6, n = {
            "left": J.visible.left - k,
            "right": J.visible.right + k
        }, o = 0, p = 0;
        for (t.nav.minor_width = t.width, VMM.Lib.removeClass(".flag", "row1"), VMM.Lib.removeClass(".flag", "row2"), VMM.Lib.removeClass(".flag", "row3"), o = 0; o < A.length; o++) {
            var q, r = A[o], s = gb(M, A[o].relative_pos), u = 0, v = !1, w = {
                "id": o,
                "pos": 0,
                "row": 0
            };
            if (s.begin = Math.round(s.begin + e), s.end = Math.round(s.end + e), q = Math.round(s.end - s.begin), r.pos_left = s.begin, E == o && (J.left = t.width / 2 - s, J.visible.left = Math.abs(J.left), J.visible.right = Math.abs(J.left) + t.width, n.left = J.visible.left - k, n.right = J.visible.right + k), Math.abs(s.begin) >= n.left && Math.abs(s.begin) <= n.right && (v = !0), a ? (VMM.Lib.stop(r.marker), VMM.Lib.animate(r.marker, t.duration / 2, t.ease, {
                "left": s.begin
            })) : (VMM.Lib.stop(r.marker), VMM.Lib.css(r.marker, "left", s.begin)), o == E && (j = s.begin), q > 5 && (VMM.Lib.css(r.lineevent, "height", i), VMM.Lib.css(r.lineevent, "top", h), a ? VMM.Lib.animate(r.lineevent, t.duration / 2, t.ease, {
                "width": q
            }) : VMM.Lib.css(r.lineevent, "width", q)), D.length > 0) {
                for (p = 0; p < D.length; p++) p < t.nav.rows.current.length && r.tag == D[p] && (b = p, p == t.nav.rows.current.length - 1 && (trace("ON LAST ROW"), VMM.Lib.addClass(r.flag, "flag-small-last")));
                u = t.nav.rows.current[b];
            } else s.begin - c.begin < t.nav.marker.width + t.spacing ? b < t.nav.rows.current.length - 1 ? b++ : (b = 0, f++) : (f = 1, b = 1), u = t.nav.rows.current[b];
            c = s, w.pos = s, w.row = b, l.push(w), l.length > m && l.remove(0), a ? (VMM.Lib.stop(r.flag), VMM.Lib.animate(r.flag, t.duration, t.ease, {
                "top": u
            })) : (VMM.Lib.stop(r.flag), VMM.Lib.css(r.flag, "top", u)), t.start_page && "start" == A[o].type && VMM.Lib.visible(r.marker, !1), s > t.nav.minor_width && (t.nav.minor_width = s), s < t.nav.minor_left && (t.nav.minor_left = s);
        }
        a && (VMM.Lib.stop(d), VMM.Lib.animate(d, t.duration / 2, t.ease, {
            "left": t.width / 2 - j
        }));
    }
    function ib(a) {
        var b = 0, c = 0;
        for (b = 0; b < z.length; b++) {
            var d = z[b], e = gb(M, d.relative_pos), f = 0, g = 0, h = t.nav.marker.height * t.nav.rows.full.length, i = e.end - e.begin;
            if ("" != d.tag) {
                for (h = t.nav.marker.height * t.nav.rows.full.length / t.nav.rows.current.length, c = 0; c < D.length; c++) c < t.nav.rows.current.length && d.tag == D[c] && (g = c);
                f = t.nav.rows.current[g];
            } else f = -1;
            a ? (VMM.Lib.stop(d.content), VMM.Lib.stop(d.text_content), VMM.Lib.animate(d.content, t.duration / 2, t.ease, {
                "top": f,
                "left": e.begin,
                "width": i,
                "height": h
            }), VMM.Lib.animate(d.text_content, t.duration / 2, t.ease, {
                "left": e.begin
            })) : (VMM.Lib.stop(d.content), VMM.Lib.stop(d.text_content), VMM.Lib.css(d.content, "left", e.begin), VMM.Lib.css(d.content, "width", i), VMM.Lib.css(d.content, "height", h), VMM.Lib.css(d.content, "top", f), VMM.Lib.css(d.text_content, "left", e.begin));
        }
    }
    function jb(a, b, c, d) {
        var e = 0, g = t.width, h = {
            "left": J.visible.left - g,
            "right": J.visible.right + g
        };
        for (not_too_many = !0, i = 0, t.nav.minor_left = 0, b.length > 100 && (not_too_many = !1, trace("TOO MANY " + b.length)), i = 0; i < b.length; i++) {
            var j = b[i].element, l = (b[i].date, b[i].visible), m = gb(M, b[i].relative_pos), n = m.begin, p = b[i].animation, q = !0, r = !1;
            p.pos = n, p.animate = !1, Math.abs(n) >= h.left && Math.abs(n) <= h.right && (r = !0), t.nav.multiplier.current > 16 && d ? q = !1 : 65 > n - e && (35 > n - e ? 0 == i % 4 ? 0 == n && (q = !1) : q = !1 : VMM.Util.isEven(i) || (q = !1)), q ? b[i].is_detached && (VMM.Lib.append(a, j), b[i].is_detached = !1) : (b[i].is_detached = !0, VMM.Lib.detach(j)), l ? q ? (p.opacity = "100", c && r && (p.animate = !0)) : (p.opacity = "0", c && not_too_many && (p.animate = !0), b[i].interval_visible = !1) : (p.opacity = "100", q ? (c && not_too_many ? p.animate = !0 : c && r && (p.animate = !0), b[i].interval_visible = !0) : c && not_too_many && (p.animate = !0)), e = n, n > t.nav.minor_width && (t.nav.minor_width = n), n < t.nav.minor_left && (t.nav.minor_left = n), p.animate ? VMM.Lib.animate(j, t.duration / 2, t.ease, {
                "opacity": p.opacity,
                "left": p.pos
            }) : (VMM.Lib.css(j, "opacity", p.opacity), VMM.Lib.css(j, "left", n));
        }
        t.nav.constraint.right_min = -t.nav.minor_width + t.width, t.nav.constraint.right = t.nav.constraint.right_min + t.width / 2, VMM.Lib.css(o, "left", t.nav.minor_left - t.width / 2), VMM.Lib.width(o, t.nav.minor_width + t.width + Math.abs(t.nav.minor_left));
    }
    function kb(a, b, c) {
        var h, i, d = 0, e = !0, f = 0, g = 0, k = Math.ceil(a.number) + 2, l = {
            "flag": !1,
            "offset": 0
        }, m = 0;
        for (VMM.attachElement(c, ""), a.date = new Date(y[0].startdate.getFullYear(), 0, 1, 0, 0, 0), h = a.date.getTimezoneOffset(), m = 0; k > m; m++) {
            trace(a.type);
            var n = !1, p = {
                "element": VMM.appendAndGetElement(c, "<div>", a.classname),
                "date": new Date(y[0].startdate.getFullYear(), 0, 1, 0, 0, 0),
                "visible": !1,
                "date_string": "",
                "type": a.interval_type,
                "relative_pos": 0,
                "is_detached": !1,
                "animation": {
                    "animate": !1,
                    "pos": "",
                    "opacity": "100"
                }
            };
            "eon" == a.type ? (e && (i = 5e8 * Math.floor(y[0].startdate.getFullYear() / 5e8)), p.date.setFullYear(i + 5e8 * d), n = !0) : "era" == a.type ? (e && (i = 1e8 * Math.floor(y[0].startdate.getFullYear() / 1e8)), p.date.setFullYear(i + 1e8 * d), n = !0) : "epoch" == a.type ? (e && (i = 1e7 * Math.floor(y[0].startdate.getFullYear() / 1e7)), p.date.setFullYear(i + 1e7 * d), n = !0) : "age" == a.type ? (e && (i = 1e6 * Math.floor(y[0].startdate.getFullYear() / 1e6)), p.date.setFullYear(i + 1e6 * d), n = !0) : "millenium" == a.type ? (e && (i = 1e3 * Math.floor(y[0].startdate.getFullYear() / 1e3)), p.date.setFullYear(i + 1e3 * d), n = !0) : "century" == a.type ? (e && (i = 100 * Math.floor(y[0].startdate.getFullYear() / 100)), p.date.setFullYear(i + 100 * d), n = !0) : "decade" == a.type ? (e && (i = 10 * Math.floor(y[0].startdate.getFullYear() / 10)), p.date.setFullYear(i + 10 * d), n = !0) : "year" == a.type ? (e && (i = y[0].startdate.getFullYear()), p.date.setFullYear(i + d), n = !0) : "month" == a.type ? (e && (i = y[0].startdate.getMonth()), p.date.setMonth(i + d)) : "week" == a.type ? (e && (i = y[0].startdate.getMonth()), p.date.setMonth(y[0].startdate.getMonth()), p.date.setDate(i + 7 * d)) : "day" == a.type ? (e && (i = y[0].startdate.getDate()), p.date.setMonth(y[0].startdate.getMonth()), p.date.setDate(i + d)) : "hour" == a.type ? (e && (i = y[0].startdate.getHours()), p.date.setMonth(y[0].startdate.getMonth()), p.date.setDate(y[0].startdate.getDate()), p.date.setHours(i + d)) : "minute" == a.type ? (e && (i = y[0].startdate.getMinutes()), p.date.setMonth(y[0].startdate.getMonth()), p.date.setDate(y[0].startdate.getDate()), p.date.setHours(y[0].startdate.getHours()), p.date.setMinutes(i + d)) : "second" == a.type ? (e && (i = y[0].startdate.getSeconds()), p.date.setMonth(y[0].startdate.getMonth()), p.date.setDate(y[0].startdate.getDate()), p.date.setHours(y[0].startdate.getHours()), p.date.setMinutes(y[0].startdate.getMinutes()), p.date.setSeconds(i + d)) : "millisecond" == a.type && (e && (i = y[0].startdate.getMilliseconds()), p.date.setMonth(y[0].startdate.getMonth()), p.date.setDate(y[0].startdate.getDate()), p.date.setHours(y[0].startdate.getHours()), p.date.setMinutes(y[0].startdate.getMinutes()), p.date.setSeconds(y[0].startdate.getSeconds()), p.date.setMilliseconds(i + d)), "Firefox" == VMM.Browser.browser && ("1970" == p.date.getFullYear() && p.date.getTimezoneOffset() != h ? (trace("FIREFOX 1970 TIMEZONE OFFSET " + p.date.getTimezoneOffset() + " SHOULD BE " + h), trace(a.type + " " + a.date), l.offset = p.date.getTimezoneOffset() / 60, l.flag = !0, p.date.setHours(p.date.getHours() + l.offset)) : l.flag && (l.flag = !1, p.date.setHours(p.date.getHours() + l.offset), n && (l.flag = !0))), p.date_string = n ? p.date.getFullYear() < 0 ? Math.abs(p.date.getFullYear()).toString() + " B.C." : p.date.getFullYear() : VMM.Date.prettyDate(p.date, !0), d += 1, e = !1, p.relative_pos = fb(M, p.date), f = p.relative_pos.begin, p.relative_pos.begin > g && (g = p.relative_pos.begin), VMM.appendElement(p.element, p.date_string), VMM.Lib.css(p.element, "text-indent", -(VMM.Lib.width(p.element) / 2)), VMM.Lib.css(p.element, "opacity", "0"), b.push(p);
        }
        VMM.Lib.width(o, g), jb(c, b);
    }
    function lb() {
        var a = 0, b = 0;
        if (VMM.attachElement(x, ""), d = VMM.appendAndGetElement(x, "<div>", "timenav"), e = VMM.appendAndGetElement(d, "<div>", "content"), f = VMM.appendAndGetElement(d, "<div>", "time"), g = VMM.appendAndGetElement(f, "<div>", "time-interval-minor"), o = VMM.appendAndGetElement(g, "<div>", "minor"), j = VMM.appendAndGetElement(f, "<div>", "time-interval-major"), h = VMM.appendAndGetElement(f, "<div>", "time-interval"), k = VMM.appendAndGetElement(x, "<div>", "timenav-background"), m = VMM.appendAndGetElement(k, "<div>", "timenav-line"), n = VMM.appendAndGetElement(k, "<div>", "timenav-indicator"), l = VMM.appendAndGetElement(k, "<div>", "timenav-interval-background", "<div class='top-highlight'></div>"), p = VMM.appendAndGetElement(x, "<div>", "vco-toolbar"), mb(), nb(), ob(), cb(), hb(!1), ib(), jb(h, B, !1, !0), jb(j, C), t.start_page && ($backhome = VMM.appendAndGetElement(p, "<div>", "back-home", "<div class='icon'></div>"), VMM.bindEvent(".back-home", V, "click"), VMM.Lib.attribute($backhome, "title", VMM.master_config.language.messages.return_to_title), VMM.Lib.attribute($backhome, "rel", "timeline-tooltip")), s = new VMM.DragSlider, s.createPanel(x, d, t.nav.constraint, t.touch), t.touch && t.start_page ? (VMM.Lib.addClass(p, "touch"), VMM.Lib.css(p, "top", 55), VMM.Lib.css(p, "left", 10)) : (t.start_page && VMM.Lib.css(p, "top", 27), q = VMM.appendAndGetElement(p, "<div>", "zoom-in", "<div class='icon'></div>"), r = VMM.appendAndGetElement(p, "<div>", "zoom-out", "<div class='icon'></div>"), VMM.bindEvent(q, T, "click"), VMM.bindEvent(r, U, "click"), VMM.Lib.attribute(q, "title", VMM.master_config.language.messages.expand_timeline), VMM.Lib.attribute(q, "rel", "timeline-tooltip"), VMM.Lib.attribute(r, "title", VMM.master_config.language.messages.contract_timeline), VMM.Lib.attribute(r, "rel", "timeline-tooltip"), p.tooltip({
            "selector": "div[rel=timeline-tooltip]",
            "placement": "right"
        }), VMM.bindEvent(x, W, "DOMMouseScroll"), VMM.bindEvent(x, W, "mousewheel")), 0 != t.nav.zoom.adjust) if (t.nav.zoom.adjust < 0) for (a = 0; a < Math.abs(t.nav.zoom.adjust); a++) U(); else for (b = 0; b < t.nav.zoom.adjust; b++) T();
        F = !0, R(!0), VMM.fireEvent(x, "LOADED");
    }
    function mb() {
        var a = 0, b = 0;
        for (w = eb(y[y.length - 1].enddate - y[0].startdate, !0), trace(w), db(), w.centuries > y.length / t.nav.density ? (M = P.century, N = P.millenium, O = P.decade) : w.decades > y.length / t.nav.density ? (M = P.decade, N = P.century, O = P.year) : w.years > y.length / t.nav.density ? (M = P.year, N = P.decade, O = P.month) : w.months > y.length / t.nav.density ? (M = P.month, N = P.year, O = P.day) : w.days > y.length / t.nav.density ? (M = P.day, N = P.month, O = P.hour) : w.hours > y.length / t.nav.density ? (M = P.hour, N = P.day, O = P.minute) : w.minutes > y.length / t.nav.density ? (M = P.minute, N = P.hour, O = P.second) : w.seconds > y.length / t.nav.density ? (M = P.second, N = P.minute, O = P.second) : (trace("NO IDEA WHAT THE TYPE SHOULD BE"), M = P.day, N = P.month, O = P.hour), trace("INTERVAL TYPE: " + M.type), trace("INTERVAL MAJOR TYPE: " + N.type), kb(M, B, h), kb(N, C, j), a = 0; a < B.length; a++) for (b = 0; b < C.length; b++) B[a].date_string == C[b].date_string && VMM.attachElement(B[a].element, "");
    }
    function nb() {
        var d = 0, f = 0, g = 0;
        for (A = [], z = [], d = 0; d < y.length; d++) {
            var h, i, j, l, m, n, o, p = "", q = "", r = !1;
            if (h = VMM.appendAndGetElement(e, "<div>", "marker"), i = VMM.appendAndGetElement(h, "<div>", "flag"), j = VMM.appendAndGetElement(i, "<div>", "flag-content"), l = VMM.appendAndGetElement(h, "<div>", "dot"), m = VMM.appendAndGetElement(h, "<div>", "line"), n = VMM.appendAndGetElement(m, "<div>", "event-line"), _marker_relative_pos = fb(M, y[d].startdate, y[d].enddate), _marker_thumb = "", null != y[d].asset && "" != y[d].asset ? (q = y[d].asset.position, VMM.appendElement(j, VMM.MediaElement.thumbnail(y[d].asset, 24, 24, y[d].uniqueid))) : VMM.appendElement(j, "<div style='margin-right:7px;height:50px;width:2px;float:left;'></div>"), "" == y[d].title || " " == y[d].title) if (trace("TITLE NOTHING"), "undefined" != typeof y[d].slug && "" != y[d].slug) trace("SLUG"), p = VMM.Util.untagify(y[d].slug), r = !0; else {
                var s = VMM.MediaType(y[d].asset.media);
                "quote" == s.type || "unknown" == s.type ? (p = VMM.Util.untagify(s.id), r = !0) : r = !1;
            } else "" != y[d].title || " " != y[d].title ? (trace(y[d].title), p = VMM.Util.untagify(y[d].title), r = !0) : trace("TITLE SLUG NOT FOUND " + y[d].slug);
            r ? VMM.appendElement(j, "<h3>" + p + "</h3>") : (VMM.appendElement(j, "<h3>" + p + "</h3>"), VMM.appendElement(j, "<h3 id='marker_content_" + y[d].uniqueid + "'>" + p + "</h3>")), VMM.appendElement(j, "<p>" + q + "</p>"), VMM.Lib.attr(h, "id", ("marker_" + y[d].uniqueid).toString()), VMM.bindEvent(i, Y, "", {
                "number": d
            }), VMM.bindEvent(i, Z, "mouseenter mouseleave", {
                "number": d,
                "elem": i
            }), o = {
                "marker": h,
                "flag": i,
                "lineevent": n,
                "type": "marker",
                "full": !0,
                "relative_pos": _marker_relative_pos,
                "tag": y[d].tag,
                "pos_left": 0
            }, "start" == y[d].type && (trace("BUILD MARKER HAS START PAGE"), t.start_page = !0, o.type = "start"), "storify" == y[d].type && (o.type = "storify"), y[d].tag && D.push(y[d].tag), A.push(o);
        }
        for (D = VMM.Util.deDupeArray(D), t.nav.rows.current = D.length > 3 ? t.nav.rows.half : t.nav.rows.full, f = 0; f < D.length; f++) if (f < t.nav.rows.current.length) {
            var u = VMM.appendAndGetElement(k, "<div>", "timenav-tag");
            VMM.Lib.addClass(u, "timenav-tag-row-" + (f + 1)), D.length > 3 ? VMM.Lib.addClass(u, "timenav-tag-size-half") : VMM.Lib.addClass(u, "timenav-tag-size-full"), VMM.appendElement(u, "<div><h3>" + D[f] + "</h3></div>");
        }
        if (D.length > 3) for (g = 0; g < A.length; g++) VMM.Lib.addClass(A[g].flag, "flag-small"), A[g].full = !1;
    }
    function ob() {
        var a = 6, b = 0, c = 0;
        for (c = 0; c < G.length; c++) {
            var d = {
                "content": VMM.appendAndGetElement(e, "<div>", "era"),
                "text_content": VMM.appendAndGetElement(h, "<div>", "era"),
                "startdate": VMM.Date.parse(G[c].startDate),
                "enddate": VMM.Date.parse(G[c].endDate),
                "title": G[c].headline,
                "uniqueid": VMM.Util.unique_ID(6),
                "tag": "",
                "relative_pos": ""
            }, i = (VMM.Date.prettyDate(d.startdate), VMM.Date.prettyDate(d.enddate), "<div>&nbsp;</div>");
            "undefined" != typeof G[c].tag && (d.tag = G[c].tag), d.relative_pos = fb(M, d.startdate, d.enddate), VMM.Lib.attr(d.content, "id", d.uniqueid), VMM.Lib.attr(d.text_content, "id", d.uniqueid + "_text"), VMM.Lib.addClass(d.content, "era" + (b + 1)), VMM.Lib.addClass(d.text_content, "era" + (b + 1)), a > b ? b++ : b = 0, VMM.appendElement(d.content, i), VMM.appendElement(d.text_content, VMM.Util.unlinkify(d.title)), z.push(d);
        }
    }
    trace("VMM.Timeline.TimeNav");
    var d, e, f, g, h, j, k, l, m, n, o, p, q, r, s, u, G, t = VMM.Timeline.Config, w = {}, x = a, y = [], z = [], A = [], B = [], C = [], D = [], E = 0, F = !1, J = {
        "left": "",
        "visible": {
            "left": "",
            "right": ""
        }
    }, K = {
        "day": 24,
        "month": 12,
        "year": 10,
        "hour": 60,
        "minute": 60,
        "second": 1e3,
        "decade": 10,
        "century": 100,
        "millenium": 1e3,
        "age": 1e6,
        "epoch": 1e7,
        "era": 1e8,
        "eon": 5e8,
        "week": 4.34812141,
        "days_in_month": 30.4368499,
        "days_in_week": 7,
        "weeks_in_month": 4.34812141,
        "weeks_in_year": 52.177457,
        "days_in_year": 365.242199,
        "hours_in_day": 24
    }, L = {
        "day": 864e5,
        "week": 7,
        "month": 30.4166666667,
        "year": 12,
        "hour": 24,
        "minute": 1440,
        "second": 86400,
        "decade": 10,
        "century": 100,
        "millenium": 1e3,
        "age": 1e6,
        "epoch": 1e7,
        "era": 1e8,
        "eon": 5e8
    }, M = {
        "type": "year",
        "number": 10,
        "first": 1970,
        "last": 2011,
        "multiplier": 100,
        "classname": "_idd",
        "interval_type": "interval"
    }, N = {
        "type": "year",
        "number": 10,
        "first": 1970,
        "last": 2011,
        "multiplier": 100,
        "classname": "major",
        "interval_type": "interval major"
    }, O = {
        "type": "year",
        "number": 10,
        "first": 1970,
        "last": 2011,
        "multiplier": 100,
        "classname": "_dd_minor",
        "interval_type": "interval minor"
    }, P = {
        "day": {},
        "month": {},
        "year": {},
        "hour": {},
        "minute": {},
        "second": {},
        "decade": {},
        "century": {},
        "millenium": {},
        "week": {},
        "age": {},
        "epoch": {},
        "era": {},
        "eon": {}
    };
    u = t.nav.marker.height / 2 + 3, t.nav.rows = {
        "full": [ 2, 2 * u, 4 * u ],
        "half": [ 2, u, 2 * u, 3 * u, 4 * u, 5 * u ],
        "current": []
    }, null != b && "" != b && (t.nav.width = b), null != c && "" != c && (t.nav.height = c), this.init = function(a, b) {
        trace("VMM.Timeline.TimeNav init"), "undefined" != typeof a ? this.setData(a, b) : trace("WAITING ON DATA");
    }, this.setData = function(a, b) {
        "undefined" != typeof a ? (y = {}, y = a, G = b, lb()) : trace("NO DATA");
    }, this.setSize = function(a, b) {
        null != a && (t.width = a), null != b && (t.height = b), F && R();
    }, this.setMarker = function(a, b, c) {
        $(a, b, c);
    }, this.getCurrentNumber = function() {
        return E;
    };
}), "undefined" != typeof VMM.Timeline && "undefined" == typeof VMM.Timeline.DataObj && (VMM.Timeline.DataObj = {
    "data_obj": {},
    "model_array": [],
    "getData": function(a) {
        if (VMM.Timeline.DataObj.data_obj = {}, VMM.fireEvent(global, VMM.Timeline.Config.events.messege, VMM.Timeline.Config.language.messages.loading_timeline), "object" == type.of(a)) trace("DATA SOURCE: JSON OBJECT"), VMM.Timeline.DataObj.parseJSON(a); else if ("string" == type.of(a)) if (a.match("%23")) trace("DATA SOURCE: TWITTER SEARCH"), VMM.Timeline.DataObj.model.tweets.getData("%23medill"); else if (a.match("spreadsheet")) trace("DATA SOURCE: GOOGLE SPREADSHEET"), VMM.Timeline.DataObj.model.googlespreadsheet.getData(a); else if (a.match("storify.com")) trace("DATA SOURCE: STORIFY"), VMM.Timeline.DataObj.model.storify.getData(a); else if (a.match(".jsonp")) trace("DATA SOURCE: JSONP"), LoadLib.js(a, VMM.Timeline.DataObj.onJSONPLoaded); else {
            trace("DATA SOURCE: JSON");
            var b = "";
            b = a.indexOf("?") > -1 ? a + "&callback=onJSONP_Data" : a + "?callback=onJSONP_Data", VMM.getJSON(b, VMM.Timeline.DataObj.parseJSON);
        } else "html" == type.of(a) ? (trace("DATA SOURCE: HTML"), VMM.Timeline.DataObj.parseHTML(a)) : trace("DATA SOURCE: UNKNOWN");
    },
    "onJSONPLoaded": function() {
        trace("JSONP IS LOADED"), VMM.fireEvent(global, VMM.Timeline.Config.events.data_ready, storyjs_jsonp_data);
    },
    "parseHTML": function() {
        trace("parseHTML"), trace("WARNING: THIS IS STILL ALPHA AND WILL NOT WORK WITH ID's other than #timeline");
        var b = VMM.Timeline.DataObj.data_template_obj;
        if (VMM.Lib.find("#timeline section", "time")[0]) {
            b.timeline.startDate = VMM.Lib.html(VMM.Lib.find("#timeline section", "time")[0]), b.timeline.headline = VMM.Lib.html(VMM.Lib.find("#timeline section", "h2")), b.timeline.text = VMM.Lib.html(VMM.Lib.find("#timeline section", "article"));
            var c = !1;
            0 != VMM.Lib.find("#timeline section", "figure img").length ? (c = !0, b.timeline.asset.media = VMM.Lib.attr(VMM.Lib.find("#timeline section", "figure img"), "src")) : 0 != VMM.Lib.find("#timeline section", "figure a").length && (c = !0, b.timeline.asset.media = VMM.Lib.attr(VMM.Lib.find("#timeline section", "figure a"), "href")), c && (0 != VMM.Lib.find("#timeline section", "cite").length && (b.timeline.asset.credit = VMM.Lib.html(VMM.Lib.find("#timeline section", "cite"))), 0 != VMM.Lib.find(this, "figcaption").length && (b.timeline.asset.caption = VMM.Lib.html(VMM.Lib.find("#timeline section", "figcaption"))));
        }
        VMM.Lib.each("#timeline li", function() {
            var d = !1, e = {
                "type": "default",
                "startDate": "",
                "headline": "",
                "text": "",
                "asset": {
                    "media": "",
                    "credit": "",
                    "caption": ""
                },
                "tags": "Optional"
            };
            if (0 != VMM.Lib.find(this, "time")) {
                d = !0, e.startDate = VMM.Lib.html(VMM.Lib.find(this, "time")[0]), VMM.Lib.find(this, "time")[1] && (e.endDate = VMM.Lib.html(VMM.Lib.find(this, "time")[1])), e.headline = VMM.Lib.html(VMM.Lib.find(this, "h3")), e.text = VMM.Lib.html(VMM.Lib.find(this, "article"));
                var f = !1;
                0 != VMM.Lib.find(this, "figure img").length ? (f = !0, e.asset.media = VMM.Lib.attr(VMM.Lib.find(this, "figure img"), "src")) : 0 != VMM.Lib.find(this, "figure a").length && (f = !0, e.asset.media = VMM.Lib.attr(VMM.Lib.find(this, "figure a"), "href")), f && (0 != VMM.Lib.find(this, "cite").length && (e.asset.credit = VMM.Lib.html(VMM.Lib.find(this, "cite"))), 0 != VMM.Lib.find(this, "figcaption").length && (e.asset.caption = VMM.Lib.html(VMM.Lib.find(this, "figcaption")))), trace(e), b.timeline.date.push(e);
            }
        }), VMM.fireEvent(global, VMM.Timeline.Config.events.data_ready, b);
    },
    "parseJSON": function(a) {
        trace("parseJSON"), "default" == a.timeline.type ? (trace("DATA SOURCE: JSON STANDARD TIMELINE"), VMM.fireEvent(global, VMM.Timeline.Config.events.data_ready, a)) : "twitter" == a.timeline.type ? (trace("DATA SOURCE: JSON TWEETS"), VMM.Timeline.DataObj.model_Tweets.buildData(a)) : (trace("DATA SOURCE: UNKNOWN JSON"), trace(type.of(a.timeline)));
    },
    "model": {
        "googlespreadsheet": {
            "getData": function(a) {
                function h() {
                    b = VMM.getJSON(e, function(a) {
                        clearTimeout(f), VMM.Timeline.DataObj.model.googlespreadsheet.buildData(a);
                    }).error(function(a, b) {
                        trace("Google Docs ERROR"), trace("Google Docs ERROR: " + b + " " + a.responseText);
                    }).success(function() {
                        clearTimeout(f);
                    });
                }
                var b, c, d, e, f, g = 0;
                c = VMM.Util.getUrlVars(a).key, d = VMM.Util.getUrlVars(a).worksheet, "undefined" == typeof d && (d = "od6"), e = "https://spreadsheets.google.com/feeds/list/" + c + "/" + d + "/public/values?alt=json", f = setTimeout(function() {
                    trace("Google Docs timeout " + e), trace(e), 3 > g ? (VMM.fireEvent(global, VMM.Timeline.Config.events.messege, "Still waiting on Google Docs, trying again " + g), g++, b.abort(), h()) : VMM.fireEvent(global, VMM.Timeline.Config.events.messege, "Google Docs is not responding");
                }, 16e3), h();
            },
            "buildData": function(a) {
                function d(a) {
                    return "undefined" != typeof a ? a.$t : "";
                }
                var b = VMM.Timeline.DataObj.data_template_obj, c = !1;
                if (VMM.fireEvent(global, VMM.Timeline.Config.events.messege, "Parsing Google Doc Data"), "undefined" == typeof a.feed.entry) VMM.fireEvent(global, VMM.Timeline.Config.events.messege, "Error parsing spreadsheet. Make sure you have no blank rows and that the headers have not been changed."); else {
                    c = !0;
                    for (var e = 0; e < a.feed.entry.length; e++) {
                        var f = a.feed.entry[e], g = "";
                        if ("undefined" != typeof f.gsx$type ? g = f.gsx$type.$t : "undefined" != typeof f.gsx$titleslide && (g = f.gsx$titleslide.$t), g.match("start") || g.match("title")) b.timeline.startDate = d(f.gsx$startdate), b.timeline.headline = d(f.gsx$headline), b.timeline.asset.media = d(f.gsx$media), b.timeline.asset.caption = d(f.gsx$mediacaption), b.timeline.asset.credit = d(f.gsx$mediacredit), b.timeline.text = d(f.gsx$text), b.timeline.type = "google spreadsheet"; else if (g.match("era")) {
                            var h = {
                                "startDate": d(f.gsx$startdate),
                                "endDate": d(f.gsx$enddate),
                                "headline": d(f.gsx$headline),
                                "text": d(f.gsx$text),
                                "tag": d(f.gsx$tag)
                            };
                            b.timeline.era.push(h);
                        } else {
                            var i = {
                                "type": "google spreadsheet",
                                "startDate": d(f.gsx$startdate),
                                "endDate": d(f.gsx$enddate),
                                "headline": d(f.gsx$headline),
                                "text": d(f.gsx$text),
                                "tag": d(f.gsx$tag),
                                "asset": {
                                    "media": d(f.gsx$media),
                                    "credit": d(f.gsx$mediacredit),
                                    "caption": d(f.gsx$mediacaption),
                                    "thumbnail": d(f.gsx$mediathumbnail)
                                }
                            };
                            b.timeline.date.push(i);
                        }
                    }
                }
                c ? (VMM.fireEvent(global, VMM.Timeline.Config.events.messege, "Finished Parsing Data"), VMM.fireEvent(global, VMM.Timeline.Config.events.data_ready, b)) : (VMM.fireEvent(global, VMM.Timeline.Config.events.messege, VMM.Language.messages.loading + " Google Doc Data (cells)"), trace("There may be too many entries. Still trying to load data. Now trying to load cells to avoid Googles limitation on cells"), VMM.Timeline.DataObj.model.googlespreadsheet.getDataCells(a.feed.link[0].href));
            },
            "getDataCells": function(a) {
                function g() {
                    b = VMM.getJSON(d, function(a) {
                        clearTimeout(e), VMM.Timeline.DataObj.model.googlespreadsheet.buildDataCells(a);
                    }).error(function(a, b) {
                        trace("Google Docs ERROR"), trace("Google Docs ERROR: " + b + " " + a.responseText);
                    }).success(function() {
                        clearTimeout(e);
                    });
                }
                var b, c, d, e, f = 0;
                c = VMM.Util.getUrlVars(a).key, d = "https://spreadsheets.google.com/feeds/cells/" + c + "/od6/public/values?alt=json", e = setTimeout(function() {
                    trace("Google Docs timeout " + d), trace(d), 3 > f ? (VMM.fireEvent(global, VMM.Timeline.Config.events.messege, "Still waiting on Google Docs, trying again " + f), f++, b.abort(), g()) : VMM.fireEvent(global, VMM.Timeline.Config.events.messege, "Google Docs is not responding");
                }, 16e3), g();
            },
            "buildDataCells": function(a) {
                function i(a) {
                    return "undefined" != typeof a ? a.$t : "";
                }
                var b = VMM.Timeline.DataObj.data_template_obj, c = !1, d = [ "timeline" ], e = [], f = 0, g = 0;
                if (VMM.fireEvent(global, VMM.Timeline.Config.events.messege, VMM.Language.messages.loading_timeline + " Parsing Google Doc Data (cells)"), "undefined" != typeof a.feed.entry) {
                    for (c = !0, g = 0; g < a.feed.entry.length; g++) {
                        var j = a.feed.entry[g];
                        parseInt(j.gs$cell.row) > f && (f = parseInt(j.gs$cell.row));
                    }
                    for (var g = 0; f + 1 > g; g++) {
                        var k = {
                            "type": "",
                            "startDate": "",
                            "endDate": "",
                            "headline": "",
                            "text": "",
                            "tag": "",
                            "asset": {
                                "media": "",
                                "credit": "",
                                "caption": "",
                                "thumbnail": ""
                            }
                        };
                        e.push(k);
                    }
                    for (g = 0; g < a.feed.entry.length; g++) {
                        var j = a.feed.entry[g], m = "", n = {
                            "content": i(j.gs$cell),
                            "col": j.gs$cell.col,
                            "row": j.gs$cell.row,
                            "name": ""
                        };
                        1 == n.row ? ("Start Date" == n.content ? m = "startDate" : "End Date" == n.content ? m = "endDate" : "Headline" == n.content ? m = "headline" : "Text" == n.content ? m = "text" : "Media" == n.content ? m = "media" : "Media Credit" == n.content ? m = "credit" : "Media Caption" == n.content ? m = "caption" : "Media Thumbnail" == n.content ? m = "thumbnail" : "Type" == n.content ? m = "type" : "Tag" == n.content && (m = "tag"), d.push(m)) : (n.name = d[n.col], e[n.row][n.name] = n.content);
                    }
                    for (g = 0; g < e.length; g++) {
                        var k = e[g];
                        if (k.type.match("start") || k.type.match("title")) b.timeline.startDate = k.startDate, b.timeline.headline = k.headline, b.timeline.asset.media = k.media, b.timeline.asset.caption = k.caption, b.timeline.asset.credit = k.credit, b.timeline.text = k.text, b.timeline.type = "google spreadsheet"; else if (k.type.match("era")) {
                            var o = {
                                "startDate": k.startDate,
                                "endDate": k.endDate,
                                "headline": k.headline,
                                "text": k.text,
                                "tag": k.tag
                            };
                            b.timeline.era.push(o);
                        } else if (k.startDate) {
                            var k = {
                                "type": "google spreadsheet",
                                "startDate": k.startDate,
                                "endDate": k.endDate,
                                "headline": k.headline,
                                "text": k.text,
                                "tag": k.tag,
                                "asset": {
                                    "media": k.media,
                                    "credit": k.credit,
                                    "caption": k.caption,
                                    "thumbnail": k.thumbnail
                                }
                            };
                            b.timeline.date.push(k);
                        } else trace("Skipping item " + g + " in list: no start date.");
                    }
                }
                c = b.timeline.date.length > 0, c ? (VMM.fireEvent(global, VMM.Timeline.Config.events.messege, "Finished Parsing Data"), VMM.fireEvent(global, VMM.Timeline.Config.events.data_ready, b)) : VMM.fireEvent(global, VMM.Timeline.Config.events.messege, "Unable to load Google Doc data source. Make sure you have no blank rows and that the headers have not been changed.");
            }
        },
        "storify": {
            "getData": function(a) {
                var b, c, d;
                VMM.fireEvent(global, VMM.Timeline.Config.events.messege, "Loading Storify..."), b = a.split("storify.com/")[1], c = "//api.storify.com/v1/stories/" + b + "?per_page=300&callback=?", d = setTimeout(function() {
                    trace("STORIFY timeout"), VMM.fireEvent(global, VMM.Timeline.Config.events.messege, "Storify is not responding");
                }, 6e3), VMM.getJSON(c, VMM.Timeline.DataObj.model.storify.buildData).error(function(a, b) {
                    trace("STORIFY error"), trace("STORIFY ERROR: " + b + " " + a.responseText);
                }).success(function() {
                    clearTimeout(d);
                });
            },
            "buildData": function(a) {
                VMM.fireEvent(global, VMM.Timeline.Config.events.messege, "Parsing Data");
                var b = VMM.Timeline.DataObj.data_template_obj;
                b.timeline.startDate = new Date(a.content.date.created), b.timeline.headline = a.content.title, trace(a);
                var c = "", d = a.content.author.username, e = "";
                "undefined" != typeof a.content.author.name && (d = a.content.author.name, e = a.content.author.username + "&nbsp;"), "undefined" != typeof a.content.description && null != a.content.description && (c += a.content.description), c += "<div class='storify'>", c += "<div class='vcard author'><a class='screen-name url' href='" + a.content.author.permalink + "' target='_blank'>", c += "<span class='avatar'><img src='" + a.content.author.avatar + "' style='max-width: 32px; max-height: 32px;'></span>", c += "<span class='fn'>" + d + "</span>", c += "<span class='nickname'>" + e + "<span class='thumbnail-inline'></span></span>", c += "</a>", c += "</div>", c += "</div>", b.timeline.text = c, b.timeline.asset.media = a.content.thumbnail, b.timeline.type = "storify";
                for (var f = 0; f < a.content.elements.length; f++) {
                    var g = a.content.elements[f], h = !1;
                    new Date(g.posted_at), trace(g.type);
                    var j = {
                        "type": "storify",
                        "startDate": g.posted_at,
                        "endDate": g.posted_at,
                        "headline": " ",
                        "slug": "",
                        "text": "",
                        "asset": {
                            "media": "",
                            "credit": "",
                            "caption": ""
                        }
                    };
                    if ("image" == g.type) "undefined" != typeof g.source.name ? "flickr" == g.source.name ? (j.asset.media = "//flickr.com/photos/" + g.meta.pathalias + "/" + g.meta.id + "/", j.asset.credit = "<a href='" + j.asset.media + "'>" + g.attribution.name + "</a>", j.asset.credit += " on <a href='" + g.source.href + "'>" + g.source.name + "</a>") : "instagram" == g.source.name ? (j.asset.media = g.permalink, j.asset.credit = "<a href='" + g.permalink + "'>" + g.attribution.name + "</a>", j.asset.credit += " on <a href='" + g.source.href + "'>" + g.source.name + "</a>") : (j.asset.credit = "<a href='" + g.permalink + "'>" + g.attribution.name + "</a>", "undefined" != typeof g.source.href && (j.asset.credit += " on <a href='" + g.source.href + "'>" + g.source.name + "</a>"), j.asset.media = g.data.image.src) : (j.asset.credit = "<a href='" + g.permalink + "'>" + g.attribution.name + "</a>", j.asset.media = g.data.image.src), j.slug = g.attribution.name, "undefined" != typeof g.data.image.caption && "undefined" != g.data.image.caption && (j.asset.caption = g.data.image.caption, j.slug = g.data.image.caption); else if ("quote" == g.type) g.permalink.match("twitter") ? (j.asset.media = g.permalink, j.slug = VMM.Util.untagify(g.data.quote.text)) : g.permalink.match("storify") && (h = !0, j.asset.media = "<blockquote>" + g.data.quote.text.replace(/<\s*\/?\s*b\s*.*?>/g, "") + "</blockquote>"); else if ("link" == g.type) j.headline = g.data.link.title, j.text = g.data.link.description, j.asset.media = "undefined" != g.data.link.thumbnail && "" != g.data.link.thumbnail ? g.data.link.thumbnail : g.permalink, j.asset.caption = "<a href='" + g.permalink + "' target='_blank'>" + g.data.link.title + "</a>", j.slug = g.data.link.title; else if ("text" == g.type) {
                        if (g.permalink.match("storify")) {
                            h = !0, a.content.author.username, "undefined" != typeof g.attribution.name && (d = g.attribution.name, e = g.attribution.username + "&nbsp;");
                            var m = "<div class='storify'>";
                            m += "<blockquote><p>" + g.data.text.replace(/<\s*\/?\s*b\s*.*?>/g, "") + "</p></blockquote>", m += "<div class='vcard author'><a class='screen-name url' href='" + g.attribution.href + "' target='_blank'>", m += "<span class='avatar'><img src='" + g.attribution.thumbnail + "' style='max-width: 32px; max-height: 32px;'></span>", m += "<span class='fn'>" + d + "</span>", m += "<span class='nickname'>" + e + "<span class='thumbnail-inline'></span></span>", m += "</a></div></div>", j.text = m, f + 1 >= a.content.elements.length ? j.startDate = a.content.elements[f - 1].posted_at : "text" == a.content.elements[f + 1].type && a.content.elements[f + 1].permalink.match("storify") ? f + 2 >= a.content.elements.length ? j.startDate = a.content.elements[f - 1].posted_at : "text" == a.content.elements[f + 2].type && a.content.elements[f + 2].permalink.match("storify") ? f + 3 >= a.content.elements.length ? j.startDate = a.content.elements[f - 1].posted_at : "text" == a.content.elements[f + 3].type && a.content.elements[f + 3].permalink.match("storify") ? j.startDate = a.content.elements[f - 1].posted_at : (trace("LEVEL 3"), j.startDate = a.content.elements[f + 3].posted_at) : (trace("LEVEL 2"), j.startDate = a.content.elements[f + 2].posted_at) : (trace("LEVEL 1"), j.startDate = a.content.elements[f + 1].posted_at), j.endDate = j.startDate;
                        }
                    } else "video" == g.type ? (j.headline = g.data.video.title, j.asset.caption = g.data.video.description, j.asset.caption = g.source.username, j.asset.media = g.data.video.src) : (trace("NO MATCH "), trace(g));
                    h && (j.slug = VMM.Util.untagify(g.data.text)), b.timeline.date.push(j);
                }
                VMM.fireEvent(global, VMM.Timeline.Config.events.data_ready, b);
            }
        },
        "tweets": {
            "type": "twitter",
            "buildData": function(a) {
                VMM.bindEvent(global, VMM.Timeline.DataObj.model.tweets.onTwitterDataReady, "TWEETSLOADED"), VMM.ExternalAPI.twitter.getTweets(a.timeline.tweets);
            },
            "getData": function(a) {
                VMM.bindEvent(global, VMM.Timeline.DataObj.model.tweets.onTwitterDataReady, "TWEETSLOADED"), VMM.ExternalAPI.twitter.getTweetSearch(a);
            },
            "onTwitterDataReady": function(a, b) {
                for (var c = VMM.Timeline.DataObj.data_template_obj, d = 0; d < b.tweetdata.length; d++) {
                    var e = {
                        "type": "tweets",
                        "startDate": "",
                        "headline": "",
                        "text": "",
                        "asset": {
                            "media": "",
                            "credit": "",
                            "caption": ""
                        },
                        "tags": "Optional"
                    };
                    e.startDate = b.tweetdata[d].raw.created_at, e.headline = type.of(b.tweetdata[d].raw.from_user_name) ? b.tweetdata[d].raw.from_user_name + " (<a href='https://twitter.com/" + b.tweetdata[d].raw.from_user + "'>" + "@" + b.tweetdata[d].raw.from_user + "</a>)" : b.tweetdata[d].raw.user.name + " (<a href='https://twitter.com/" + b.tweetdata[d].raw.user.screen_name + "'>" + "@" + b.tweetdata[d].raw.user.screen_name + "</a>)", e.asset.media = b.tweetdata[d].content, c.timeline.date.push(e);
                }
                VMM.fireEvent(global, VMM.Timeline.Config.events.data_ready, c);
            }
        }
    },
    "data_template_obj": {
        "timeline": {
            "headline": "",
            "description": "",
            "asset": {
                "media": "",
                "credit": "",
                "caption": ""
            },
            "date": [],
            "era": []
        }
    },
    "date_obj": {
        "startDate": "2013,2,2,11,30",
        "headline": "",
        "text": "",
        "asset": {
            "media": "http://youtu.be/vjVfu8-Wp6s",
            "credit": "",
            "caption": ""
        },
        "tags": "Optional"
    }
});/*  |xGv00|ed7ee82c6b75eb56916dc0942bdaeb2d */