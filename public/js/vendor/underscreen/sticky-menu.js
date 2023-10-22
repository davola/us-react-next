/**
 * Created by davola on 2/5/2016.
 */
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
        i = $(" body > div > header.main nav.container"), l = 15 //$(".homepage-index").length ? 40 : 15
    };
    console.log(i);
    $(window).on("scroll", function () {
        r = c.scrollTop(), o = r > l, s = r > l + d, a = f > r, a ? o ? n() : e() : s && t(), f = r
    }), $(p), $(document).on("load", p)
}();
sticky();