// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/**
 * Created by davola on 2/5/2016.

var sticky = function () {
    "use strict";
    function e() {
        "shown" === u && (i.removeClass("main-navigation--show main-navigation--sticky"), u = "static")
    }

    function t() {
        "static" === u && i.addClass("main-navigation--sticky"), "shown" === u && i.removeClass("main-navigation--show"), u = "fixed"
    }

    function n() {
        "fixed" === u && (i.addClass("main-navigation--show"), u = "shown")
    }

    var i, r, o, s, a, l, c = $(document), u = "static", d = 60, f = 0, p = function () {
        i = $(" body > div > nav.main-nav"), l = $("body.home-view").length ? 60 : 40
    };
    //console.log(i);
    $(window).on("scroll", function () {
        r = c.scrollTop(), o = r > l, s = r > l + d, a = f > r, a ? o ? n() : e() : s && t(), f = r
    }), $(p), $(document).on("load", p), $(window).scroll()
}();
 */