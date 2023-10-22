/**
 * App
 * @author underSCREEN
 * */
var uS = {

    init: function()
    {
        cl('----------- uS Init! -----------');
        // init configuration
        uS.conf.inited = true;
        uS.conf.window = $(window);
        uS.conf.body = $('body');

        // set htmlservice address
        uS.conf.htmlservice = $('[name=htmlservice]').val();

        // launch sticky not on mobile
        //if (uS.tools.isDesktop() && !uS.tools.isMobileDevice())


        // init section controllers
        $('[data-controller]').each(function(idx, el)
        {
            var $this = $(el),
                controller = $this.attr('data-controller');

            // init page controllers
            var controllers = controller.split(',');

            for(var thisController in controllers) {

                if (uS.controller[controllers[thisController]]){
                    cl('Init controller '+controllers[thisController]);
                    uS.controller[controllers[thisController]].init($this);
                }
            }
        });

        // custom controllers
        $('.slider-pro a').each(function(idx, el)
        {
            uS.controller['SliderAnchorTitleClick'].init($(el));
        });
    },

    conf: {
        env: null,
        inited: false,
        htmlservice: null,
        window: null,
        body: null,

        getEnv: function()
        {
            if (uS.conf.env === null)
            {
                var href = window.location.href;
                if (href.indexOf('staging')>-1)
                    uS.conf.env = 'stage';
                else if (href.indexOf('usdev')>-1
                        || href.indexOf('192.168.1.200')>-1
                        || href.indexOf('ddev')>-1)
                    uS.conf.env = 'dev';
                else
                    uS.conf.env = 'prod';
            }
            return uS.conf.env;
        },

        setEnv: function(env){
            uS.conf.env = env.toLowerCase();
        },

        isDev: function(){
            //cl(uS.conf.getEnv());
            return (uS.conf.getEnv() == 'stage' || uS.conf.getEnv() == 'dev');
        },
    },

    tools: {
        ucfirst: function(str){
            str += '';
            var f = str.charAt(0)
                .toUpperCase();
            return f + str.substr(1);
        },

        slashToCamelCase: function(slashString){
            var camelCaseString = '';
            if (!slashString){ return slashString; }
            var parts = slashString.split('-');
            for(i=0; i<parts.length; i++){
                camelCaseString += (camelCaseString == '') ? parts[i] : uS.tools.ucfirst(parts[i]);
            }
            return camelCaseString;
        },

        isValidEmail: function(email) {
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(email);
        },

        isDesktop : function (){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){
                return false;
            } else {
                return true;
            }
        },

        isHttp: function(){
            return !(document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1);
        },

        isPhonegap: function(){
            return (window.cordova || window.Cordova || window.PhoneGap || window.phonegap)
                || (/^file:\/{3}[^\/]/i.test(window.location.href)
                && /ios|iphone|ipod|ipad|android|iemobile|Windows Phone/i.test(navigator.userAgent));
        },

        isMobileDevice: function() {
            //return navigator.userAgent.toLowerCase().indexOf('iphone') > -1 || navigator.userAgent.toLowerCase().indexOf('ipad') > -1 || navigator.userAgent.toLowerCase().indexOf('ipod') > -1 || navigator.userAgent.toLowerCase().indexOf('android') > -1 || navigator.userAgent.toLowerCase().indexOf('webos') > -1 || navigator.userAgent.toLowerCase().indexOf('blackberry') > -1
            return /ios|iphone|ipod|ipad|android|blackberry|webos/i.test(navigator.userAgent);
        },

        isWichDevice: function(){
            if (/ios|iphone|ipod|ipad/i.test(navigator.userAgent))
                return 'ios';
            else if(/android/i.test(navigator.userAgent))
                return 'android';
            else if(/iemobile|Windows Phone|Windows NT/i.test(navigator.userAgent))
                return 'windows';
            else if(/blackberry/i.test(navigator.userAgent))
                return 'blackberry';
            else if(/webos/i.test(navigator.userAgent))
                return 'webos';
            else
                return 'other';
        },

        isAndroid: function(){
            return (uS.tools.isWichDevice() == 'android');
        },

        isIos: function(){
            return (uS.tools.isWichDevice() == 'ios');
        },

        isWindows: function(){
            return (uS.tools.isWichDevice() == 'windows');
        },

        isWindowsPhonegap:function(){
            return (uS.tools.isWindows() && !uS.tools.isHttp());
        },

        getOsVer: function(){
            return parseFloat((navigator.userAgent.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'));
        },

        isMobileDeviceFake: function() {
            if(uS.tools.getViewport('width') < 979) {
                return true;
            } else {
                return false;
            }

        },

        exitApp: function()
        {
            if (uS.tools.isPhonegap()){
                cl('Exiting app!');
                if (uS.tools.isIos())
                    $.mobile.changePage('#ingresar');
                else
                    navigator.uS.exitApp();
            }
            else{
                cl('Exiting WebApp!');
                $.mobile.changePage('#ingresar');
            }
        },

        onKeyDownNumber: function(e){
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                    // Allow: Ctrl+A, Command+A
                (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) ||
                    // Allow: home, end, left, right, down, up
                (e.keyCode >= 35 && e.keyCode <= 40)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        },

        getViewport: function(type) {
            var viewPortWidth;
            var viewPortHeight;

            // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
            if (typeof window.innerWidth != 'undefined') {
                viewPortWidth = window.innerWidth,
                    viewPortHeight = window.innerHeight
            }

            // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
            else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
                viewPortWidth = document.documentElement.clientWidth,
                    viewPortHeight = document.documentElement.clientHeight
            }

            // older versions of IE
            else {
                viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
                    viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
            }

            // return
            if (type == 'width'){
                return viewPortWidth;
            } else {
                return viewPortHeight;
            }
        },

        is_touch_device: function() {
            return 'ontouchstart' in window || 'onmsgesturechange' in window;
        },

        getRelativepath: function(){
            var currentUrl = location.href;
            var currentHost = location.protocol + "//" +location.hostname;
            var cRelativeUrl = currentUrl.replace(currentHost, '');

            return cRelativeUrl;
        },

        setCookie: function(name, value, days) {
            var expires;

            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            } else {
                expires = "";
            }
            document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
        },

        getCookie: function(name) {
            var nameEQ = encodeURIComponent(name) + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
            }
            return null;
        },

        delCookie: function(name) {
            uS.tools.setCookie(name, "", -1);
        }
    },

    /**
     * CONTROLLERs
     * @author underSCREEN
     * */
    controller:{

        Sticky:{
            init: function($el)
            {
                if (!uS.tools.isMobileDeviceFake())
                    uS.controller.Sticky.sticky();
            },

            sticky: function () {
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
            }
        },

        SiteTabSlide: {
            $this: null,
            $tabSwitcher: null,
            $tabContainer: null,

            init: function($el)
            {
                var _this = uS.controller.SiteTabSlide;
                _this.$this = $el;
                _this.$tabSwitcher = $el.find('ul.tab-switcher');
                _this.$tabContainer = $el.find('ul.tab-container');

                _this.$tabSwitcher.on('click', 'li a', function(e){
                    e.preventDefault();
                    // remove active
                    _this.$this.find('.active').removeClass('active');
                    // marc active
                    cl($(e.currentTarget).parent(), $(e.currentTarget).attr('href'));
                    $(e.currentTarget).parent().addClass('active');
                    uS.controller.SiteTabSlide.$this.find($(e.currentTarget).attr('href')).addClass('active');
                });
            }
        },

        MenuMobile:
        {
            init: function($el)
            {
                var $this = $el,
                    $menu = $("ul#main-menu");

                $this.click({$menu:$menu}, function(e)
                {
                    e.preventDefault();
                    var $mainNav = $("nav.main-nav");
                    if ($mainNav.hasClass("open")){
                        $mainNav.removeClass("open");
                    }
                    else {
                        $mainNav.addClass("open");
                    }
                });
                // cl('Init Home!', $this);
            }
        },

        StartDemo:
        {
            init: function($el)
            {
                $el.on('click', uS.controller.StartDemo.click);
            },

            click: function(e) {
                e.preventDefault();

                var $el = $(e.currentTarget),
                    src = $el.data('src'),
                    iframeId = $el.data('iframe-id'),
                    $body = (uS.controller.MainProject.type==='ajax') ? uS.controller.MainProject.$el : $("html, body"),
                    st = $('section.app-demo').first().scrollTop();

                $('#'+iframeId).attr('src',src);
            }
        },
        ServiceSelector:
        {
            $modal:null,
            init: function($el){
                this.$modal = $('.serviceModal');
                $el.on('click', this.click);
                $('button.btn-close,.serviceModal').click(this.closeModal);
            },
            click: function(e){
                e.preventDefault();
                $('body').addClass('freeze');
                uS.controller.ServiceSelector.$modal.addClass('open');
            },
            closeModal: function(e){
                e.preventDefault();
                // avoid click if loading
                if (uS.controller.ServiceSelector.$modal.hasClass('loading')) return false;
                // do close
                uS.controller.ServiceSelector.doCloseModal();
            },
            doCloseModal: function(){
                $('body').removeClass('freeze');
                uS.controller.ServiceSelector.$modal.removeClass('open');
            }
        },
        WorkService:
        {
            newUrl:null,
            init: function($el){
                $el.on('click', this.click);
            },
            click: function(e){
                e.preventDefault();
                e.stopImmediatePropagation();

                // avoid click if loading
                if (uS.controller.ServiceSelector.$modal.hasClass('loading')) return false;

                $(e.currentTarget).parents('ul').find('li a.active').removeClass('active');
                $(e.currentTarget).addClass('active');
                $('.selector .btn-service').html('<span>'+$(e.currentTarget).html().replace(/ /g,"</span><span>&nbsp;</span><span>")+'</span>');
                uS.controller.ServiceSelector.$modal.addClass('loading');
                // set new url to load
                uS.controller.WorkService.newUrl = $(e.currentTarget).attr('href');

                $.ajax({
                    method: 'GET',
                    url: uS.controller.WorkService.newUrl,
                    async: true,
                    dataType: 'html'
                })
                    .done(function (html) {
                        var $html = $(html);
                        $html.each(function(idx,el){
                            // init controller
                            uS.controller.Project.init($(el));
                        });
                        // set content
                        $('.projects-container').empty().append($html);
                        // set new url
                        window.history.replaceState({"html":html},'',uS.controller.WorkService.newUrl);
                        // do close
                        uS.controller.ServiceSelector.doCloseModal();
                        // remove loading
                        setTimeout(function(){
                            uS.controller.ServiceSelector.$modal.removeClass('loading');
                        },500);
                    })
                    .fail(function (err) {
                        cl(['Error',err]);
                        uS.controller.Project.unfreeze();
                    });
            },
        },
        Project:
        {
            $modal:null,
            lastProjectCss:null,
            urlClicked:null,
            previousUrl:null,
            previousTitle:null,

            init: function($el)
            {
                $el.on('click', uS.controller.Project.click);
            },

            click: function(e)
            {
                e.preventDefault();

                var $el = $(e.currentTarget),
                    url = $el.attr('href'),
                    offset = $el.offset(),
                    w = $el.width(),
                    h = $el.height();

                uS.controller.Project.urlClicked = $el.attr('href');
                uS.controller.Project.previousUrl = window.location.href;
                if (!uS.controller.Project.previousTitle) uS.controller.Project.previousTitle = document.getElementsByTagName("title")[0].innerHTML;
                uS.controller.Project.projectTitle = $el.data('page-title');


                var rect = e.currentTarget.getBoundingClientRect();
                cl(rect.top, rect.right, rect.bottom, rect.left);

                cl('Load Work: '+url);

                $('body').addClass('freeze');

                $.ajax({
                        method: 'GET',
                        url: url,
                        async: true,
                        dataType: 'html'
                    })
                    .done(function (html) {
                        uS.controller.Project.setContent({
                            html: html,
                            offset: offset,
                            w: w,
                            h: h,
                            rect: rect
                        });
                    })
                    .fail(function (err) {
                        cl(['Error',err]);
                        uS.controller.Project.unfreeze();
                    });
            },

            setContent: function(data){
                cl('Done!');
                var $content = $(data.html);
                uS.controller.Project.lastProjectCss = {
                    width: (data.rect.right - data.rect.left),
                    height: (data.rect.bottom - data.rect.top),
                    top: (data.rect.top),
                    left: (data.rect.left)
                };
                $content.css(uS.controller.Project.lastProjectCss);
                $content.find('.btn-close').on('click',uS.controller.Project.closeClick);

                $('.project-modal').empty().append($content).css('display','block');
                setTimeout(function(){
                    $('body').addClass('in-place');
                    $('.project-modal main.project').css({
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0
                    });
                    // init possible controllers
                    uS.controller.MainProject.init($('[data-controller=MainProject]')[0]);
                    if ($('[data-controller=StartDemo]').length) uS.controller.StartDemo.init($('[data-controller=StartDemo]').first());

                    setTimeout(function(){
                        $('main.project').addClass('static-modal-navigation');
                        // change window url
                        window.history.replaceState({
                            "html":data.html,
                            "pageTitle":uS.controller.Project.pageTitle
                        }, uS.controller.Project.pageTitle, uS.controller.Project.urlClicked);
                    },1200);
                },50);
            },

            closeClick: function(e){
                e.preventDefault();
                $('main.project').scrollTop(0).css(uS.controller.Project.lastProjectCss);
                $('.project-modal .project').one('transitionend webkitTransitionEnd', function (e) {
                    uS.controller.Project.unfreeze();
                    // change window url
                    window.history.replaceState({
                        "pageTitle":uS.controller.Project.previousTitle
                    }, uS.controller.Project.previousTitle, uS.controller.Project.previousUrl);
                });
                $('body').addClass('closing');
                $('body').removeClass('in-place');
            },

            unfreeze: function()
            {
                // clear modal and un-freeze
                $('.project-modal').empty().css('display', 'none');
                $('body').removeClass('freeze');
                $('body').removeClass('closing');
            }
        },

        MainProject: {
            doc: null,
            state:"",
            $el: null,
            type:"",
            $scroll:null,

            init: function(e){
                var _this=uS.controller.MainProject;
                _this.doc = $(document);
                _this.state="static";
                _this.$el=$(e);

                cl('MainProject Init');
                cl(e);

                //_this.$el.addClass('static-modal-navigation');

                _this.type = ($('body.view-work,body.view-service').length) ? "ajax" : "standalone";
                _this.$scroll = (_this.type==="ajax") ? _this.$el : $(window);

                _this.$scroll.on("scroll",_this.scrollProject);

                //init scroll!
                if (_this.type!=="ajax") _this.scrollProject();

            },

            scrollProject:function () {
                var _this = uS.controller.MainProject,
                    docST = (_this.type==="ajax") ? _this.doc.scrollTop() : _this.doc.scrollTop();
                var docST = _this.$scroll.scrollTop();

                if (docST > 0){
                    if (_this.state==="static"){
                        _this.$el.addClass('fixed-modal-navigation');
                        _this.state="fixed";
                        cl(docST,_this.state);
                    }
                }
                else{
                    if (_this.state==="fixed"){
                        _this.$el.removeClass('fixed-modal-navigation');
                        _this.state="static";
                        cl(docST,_this.state);
                    }
                }
                //cl(docST,_this.state);
            }
        },

        Form:{

            $form: null,

            init: function($form)
            {
                var _this = uS.controller.Form;
                _this.$form = $form;

                cl('Form init!');

                // set wrapper click event
                $form.find('.input-item').on('click', _this.inputItemClick);
                // set focus event and clear
                $form.find('input,textarea,select').on('focus', _this.itemFocus).val('');

                // auto size textarea
                $form.find('textarea').each(function () {
                    uS.controller.Form.textAreaHeight(this);
                }).on('input', function () {
                    uS.controller.Form.textAreaHeight(this);
                })
            },

            itemFocus: function(e){
                e.stopImmediatePropagation();
                cl('focus!!!', e.type,e, e.eventPhase);
                if (e.eventPhase == undefined || e.eventPhase == 'undefined') return;

                var _this = uS.controller.Form,
                    $input = $(e.currentTarget),
                    $inputItem = $input.parents('.input-item');

                _this.$form.find('.input-item.active').removeClass('active');
                $inputItem.addClass('active');

                $input.on('blur',_this.itemBlur).focus();
            },

            textAreaHeight:function(e) {
                $(e).css({'height':'auto','overflow-y':'hidden'}).height(e.scrollHeight).parent().height(e.scrollHeight);
            },

            inputItemClick: function(e){
                //e.preventDefault();
                cl(e.type);

                var _this = uS.controller.Form,
                    $inputItem = $(e.currentTarget),
                    $input = $inputItem.find('input,textarea,select');

                _this.$form.find('.input-item.active').removeClass('active');
                $inputItem.addClass('active');

                $input.on('blur',_this.itemBlur).focus();
            },

            openSelect: function(selector){
                var element = $(selector)[0], worked = false;
                if (document.createEvent) { // all browsers
                    var e = document.createEvent("MouseEvents");
                    e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                    worked = element.dispatchEvent(e);
                } else if (element.fireEvent) { // ie
                    worked = element.fireEvent("onmousedown");
                }
            },

            itemBlur:function(e)
            {
                var $input = $(e.currentTarget),
                    $inputItem = $input.parents('.input-item');

                cl('itemBlur', $input, $input.val());
                $input.off('blur', uS.controller.Form.itemBlur);
                $input.off('click', uS.controller.Form.offSelect);

                if ($input.val() != '' && !$inputItem.hasClass('completed'))
                    $inputItem.addClass('completed');
                if ($input.val().trim() == '' && $inputItem.hasClass('completed'))
                    $inputItem.removeClass('completed');
                $inputItem.removeClass('active');
                // validate
                uS.controller.Form.validateField(e.currentTarget);
            },

            validateForm: function(){
                var $requiredFields = uS.controller.Form.$form.find(':required'),
                    valid = true,
                    firstField = null;

                $requiredFields.each(function(idx, el){
                    if (!uS.controller.Form.validateField(el)){
                        valid = false;
                        if (firstField === null) firstField = el;
                    };
                });
                // focus on first field with error
                if (firstField !== null) {
                    $(firstField).focus();
                    cl(firstField.getAttribute('id'));
                    if (firstField.tagName==='SELECT') uS.controller.Form.openSelect('#'+firstField.getAttribute('id'));
                }
                return valid;
            },

            setFieldError: function($el,errorMsg){
                var $wrapper = $el.parents('.input-wrapper'),
                    $error = $wrapper.find('.error');
                if ($error.length) {
                    $error.html(errorMsg);
                }
                else{
                    $error = $('<span class="error">'+errorMsg+'</span>');
                    $error.appendTo($wrapper);
                }
            },

            removeFieldError: function($el){
                var $error = $el.parents('.input-wrapper').find('.error');
                if ($error.length)
                    $error.remove();
            },

            validateField: function(el){
                var $el = $(el),
                    val = $el.val();
                cl(el, el.tagName,val);
                // catch all empty and required fields
                if (val == '' && $el.attr('required')) {
                    uS.controller.Form.setFieldError($el,'This field is required.');
                    return false;
                }
                switch (el.tagName){
                    case'INPUT':
                        switch (el.getAttribute('type')){
                            case'email':
                                if (!uS.tools.isValidEmail(val)){
                                    uS.controller.Form.setFieldError($el,'Please enter a valid email address.');
                                    return false;
                                }
                                break;

                            case'number':

                                break;

                            default:
                            case'text':
                                break;
                        }
                        break;

                    case'TEXTAREA':
                        break;

                    case'SELECT':
                    case'OPTION':
                        break;

                    default:
                        break;
                }
                // everything fine - return valid!
                uS.controller.Form.removeFieldError($el);
                return true;
            }
        },

        FormGetAQuote:{

            $form: null,

            init: function($el)
            {
                var _this = uS.controller.FormGetAQuote,
                    $submit = $el.find(':submit');

                cl($submit);
                uS.controller['Form'].init($el);

                _this.$form = _this.$element = $el;
                _this.$elements = $el.find('input,textarea,select');

                $submit.on('click', uS.controller.FormGetAQuote.submitForm);
            },

            submitForm: function(e){
                e.preventDefault();
                if(uS.controller.Form.validateForm()){
                    $.ajax({
                        url: window.index+'/formgetaquote',
                        method: 'post',
                        data: uS.controller.Form.$form.serialize(),
                        beforeSend: function(){
                            cl('BEFORE SENDING!');
                            uS.controller.Form.$form.addClass('sending');
                        }
                    })
                    .done(function(responseString){
                        cl('AJAX DONE!', responseString);
                        window.location.href = JSON.parse(responseString).redirect_url;
                    })
                    .fail(function(responseString){
                        cl('FAIL!',responseString);
                        uS.controller.Form.$form.removeClass('sending');
                    });
                }
            }

        },

        FormContact:{

            $form: null,

            init: function($el)
            {
                var _this = uS.controller.FormContact,
                    $submit = $el.find(':submit'),
                    $form = $el;

                cl($submit);
                uS.controller['Form'].init($el);

                _this.$form = _this.$element = $el;
                _this.$elements = $el.find('input,textarea,select');

                $submit.on('click', uS.controller.FormContact.submitForm);
            },

            submitForm: function(e){
                e.preventDefault();
                if(uS.controller.Form.validateForm()){
                    $.ajax({
                            url: window.index+'/formcontact',
                            method: 'post',
                            data: uS.controller.Form.$form.serialize(),
                            beforeSend: function(){
                                cl('BEFORE SENDING!');
                                uS.controller.Form.$form.addClass('sending');
                            }
                        })
                        .done(function(responseString){
                            cl('AJAX DONE!', responseString);
                            window.location.href = JSON.parse(responseString).redirect_url;
                        })
                        .fail(function(responseString){
                            cl('FAIL!',responseString);
                            uS.controller.Form.$form.removeClass('sending');
                        });
                }
            }

        },

        Newsletter:{
            $form: null,

            init: function($el){
                var _this = uS.controller.Newsletter,
                    $submit = $el.find(':submit'),
                    $form = $el;
                _this.$form = _this.$element = $el;
                _this.$elements = $el.find('input,textarea,select');

                _this.$elements.focus(function(e){
                    $(e.currentTarget).removeClass('error');
                });

                $submit.click(function(e)
                {
                    e.preventDefault();

                    var $elements = _this.$elements,
                        formValidateSuccess = uS.Helper.validateFormElements($elements);

                    if (formValidateSuccess)
                    {
                        bootbox.dialog({
                            title: '<span class="text-success"><i class="glyphicon glyphicon-share-alt"></i> Enviando...</span>',
                            message: '<p>Estamos enviando su email, por favor aguarde unos segundos...</p>',
                            closeButton: false
                        });
                        $.ajax({
                            method: 'POST',
                            url: $form.attr('action'),
                            data: $form.serialize(),
                            dataType: 'json',
                            success: function(data, textStatus, jqXHR)
                            {
                                bootbox.dialog({
                                    title: (data.success) ? '<span class="text-success"><i class="glyphicon glyphicon-ok-sign"></i> Listo!</span>' : '<span class="text-danger"><i class="glyphicon glyphicon-warning-sign"></i> Error!</span>!',
                                    closeButton: false,
                                    message: data.response,
                                    buttons: {
                                        success: {
                                            label: "Aceptar",
                                            className: "btn-success",
                                            callback: function() {
                                                uS.controller.Newsletter.$form[0].reset();
                                                bootbox.hideAll();
                                            }
                                        },
                                    },
                                });
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                                // Handle errors here
                                alert('ERRORS: ' + textStatus);
                            }
                        })
                    }
                });
            }
        },
    }

};

// /********************************
//  * uS INIT!
//  */
// var $ = ($) ? $ : jQuery;
// $(document).ready(function ($) {
//     uS.init();
// });

/********************************
 * COMMONS
 */
var cl = function()
{
    var debug = uS.conf.isDev();
    if (debug || uS.weinre){
        if (!window.console) {
            window.console = {
                log: function () {}
            };
        }
        else{
            console.log(arguments);
        }
        if (window.location.href.indexOf('trace')>-1 || false) console.trace();
    }
};