!function(e){var t={};function a(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(n,l,function(t){return e[t]}.bind(null,l));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t){e.exports=jQuery},function(e,t,a){"use strict";var n,l=a(0),o=(n=l)&&n.__esModule?n:{default:n};a(2),a(3),a(4),a(5),a(6),a(7),a(8),(0,o.default)((function(){(0,o.default)('a[data-trigger="click"]').on("click",(function(e){e.preventDefault()})),(0,o.default)(".scroll").on("click",(function(){return(0,o.default)("html, body").animate({scrollTop:(0,o.default)((0,o.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1}))}))},function(e,t,a){"use strict";var n,l=a(0),o=(n=l)&&n.__esModule?n:{default:n};(0,o.default)(".tabs .tabs__nav-item").on("click",(function(){var e=(0,o.default)(this).data("tab");(0,o.default)(".tabs .tabs__nav-item").removeClass("tabs__nav-item--active").eq((0,o.default)(this).index()).addClass("tabs__nav-item--active"),(0,o.default)(".tabs .tabs__content").removeClass("tabs__content--show"),(0,o.default)(".tabs .tabs__content").removeClass("tabs__content--active"),(0,o.default)(".tabs .tabs__content"+e).addClass("tabs__content--show").addClass("tabs__content--active")}))},function(e,t,a){"use strict";var n,l=a(0),o=(n=l)&&n.__esModule?n:{default:n};(0,o.default)((function(){(0,o.default)(".input_phone").length>0&&(0,o.default)(".input_phone").inputmask({mask:"+7 999 999 99 99",placeholder:" ",showMaskOnHover:!0,onincomplete:function(){(0,o.default)(this).closest("form").addClass("error-phone"),(0,o.default)(this).addClass("error"),(0,o.default)(this).siblings(".error_phone").addClass("error").html("Укажите корректный номер")},oncomplete:function(){(0,o.default)(this).closest("form").removeClass("error-phone"),(0,o.default)(this).removeClass("error"),(0,o.default)(this).siblings(".error_phone").removeClass("error").html("")}})})),(0,o.default)("input.input_phone").on("keydown",(function(e){if(13===e.keyCode&&!(0,o.default)(this).inputmask("isComplete"))return e.preventDefault(),(0,o.default)(this).blur(),!1}))},function(e,t,a){"use strict";var n,l=a(0),o=(n=l)&&n.__esModule?n:{default:n};(0,o.default)((function(){(0,o.default)("[data-fancybox]").length>0&&(0,o.default)("[data-fancybox]").fancybox({autoFocus:!1})}))},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sliderInitialized=void 0;var n,l=a(0),o=(n=l)&&n.__esModule?n:{default:n};var r=t.sliderInitialized=function(e,t,a,n,l,r,s,i){var d=(0,o.default)(t);if(0===d.length)return null;d.find(".slider__item").length>e?(d.closest(".slider-container").addClass("slider-container--active"),d.closest(".slider-container").removeClass("slider-container--disable"),d.owlCarousel({items:e,loop:l,margin:r,nav:a,dots:n,stagePadding:s,responsive:i})):(d.closest(".slider-container").removeClass("slider-container--active"),d.closest(".slider-container").addClass("slider-container--disable"))};(0,o.default)((function(){var e={460:{items:1,arrows:!1,loop:!0,stagePadding:100}};r(1,".slider.slider_review",!1,!1,!0,10,60,{500:{items:2,arrows:!0,loop:!0,stagePadding:60}}),(0,o.default)(window).width()>576||!window.matchMedia("screen and (max-width: 576px)").matches?((0,o.default)(".slider.slider_sale").removeClass("owl-carousel owl-theme"),(0,o.default)(".slider.slider_advantage").removeClass("owl-carousel owl-theme")):((0,o.default)(".slider.slider_advantage").addClass("owl-carousel owl-theme"),r(1,".slider.slider_advantage",!1,!1,!0,10,60,e),(0,o.default)(".slider.slider_sale").addClass("owl-carousel owl-theme"),r(1,".slider.slider_sale",!1,!1,!0,10,60,e))}))},function(e,t,a){"use strict";var n,l=a(0);if((0,((n=l)&&n.__esModule?n:{default:n}).default)(".map#map").length>0){ymaps.ready((function(){var e=new ymaps.Map("map",{center:[59.936846,30.312176],zoom:14,controls:["fullscreenControl"]});e.controls.add("routePanelControl"),e.controls.add("zoomControl",{position:{top:"auto",left:"auto",right:10,bottom:40}});var t=e.controls.get("routePanelControl");t.options.set({maxWidth:"240",autofocus:!1,showHeader:!0,title:"Как добраться?"}),t.routePanel.state.set({type:"auto",fromEnabled:!0,from:"",toEnabled:!1,to:"Санкт-Петербург, Невский проспект, дом 1"}),t.routePanel.options.set({reverseGeocoding:!0,allowSwitch:!1,types:{auto:!0,masstransit:!0,pedestrian:!0,bicycle:!1,taxi:!1}}),t.routePanel.getRouteAsync().then((function(e){e.options.set({wayPointStartIconFillColor:"#1E1E1E",routeStrokeColor:"726d72",routeStrokeStyle:"shortdot",routeActiveStrokeColor:"1E1E1E",routeActiveStrokeStyle:"solid",boundsAutoApply:!0}),e.model.events.once("requestsuccess",(function(){var t=e.getWayPoints().get(1);ymaps.geoObject.addon.balloon.get(t),t.options.set({preset:"islands#blackDotIcon",iconContentLayout:ymaps.templateLayoutFactory.createClass("<b>Наш&nbsp;офис</b>"),balloonContentLayout:ymaps.templateLayoutFactory.createClass('<div style="width:180px;max-width:100%;margin:20px 0 20px 20px;text-align:center">{{ properties.address|raw }}</div>')})}))}),(function(e){console.log(e)}))}))}},function(e,t,a){"use strict";var n,l=a(0),o=(n=l)&&n.__esModule?n:{default:n};(0,o.default)(".toggle .toggle__title").on("click",(function(e){e.preventDefault();var t=(0,o.default)(this),a=(0,o.default)(this).data("show"),n=(0,o.default)(this).data("hide");t.hasClass("toggle__title--active")?(t.removeClass("toggle__title--active"),t.closest("toggle").removeClass("toggle--active"),t.next(".toggle__content").slideUp(),null!=a&&null!=n&&t.text(a)):(t.addClass("toggle__title--active"),t.closest("toggle").addClass("toggle--active"),t.next(".toggle__content").slideDown(),null!=a&&null!=n&&t.text(n))}))},function(e,t,a){"use strict";var n,l=a(0),o=(n=l)&&n.__esModule?n:{default:n};function r(){var e=(0,o.default)(".navbar").find(".navbar__link.navbar__link--active"),t=e.data("nav");e.removeClass("navbar__link--active"),(0,o.default)(".navbar .navbar__children"+t).removeClass("navbar__children--active")}(0,o.default)(".header .header__nav-toggle").on("click",(function(){(0,o.default)(".header .header__navbar").slideToggle()})),(0,o.default)((function(){(0,o.default)(window).width()>1400||!window.matchMedia("screen and (max-width: 1400px)").matches?(0,o.default)(".navbar").removeClass("navbar--mobile").addClass("navbar--desktop"):(0,o.default)(".navbar").removeClass("navbar--desktop").addClass("navbar--mobile");var e=null;(0,o.default)(".navbar.navbar--desktop .navbar__item").mouseenter((function(t){clearTimeout(e);var a=(0,o.default)(this);e=setTimeout((function(){!function(e){var t=e.find(".navbar__link"),a=t.data("nav");if((0,o.default)(".navbar__link.navbar__link--active").length>0&&!t.hasClass("navbar__link--active")){var n=(0,o.default)(".navbar__link.navbar__link--active");n.removeClass("navbar__link--active"),(0,o.default)(".navbar .navbar__children"+n.data("nav")).removeClass("navbar__children--active")}t.addClass("navbar__link--active"),(0,o.default)(".navbar .navbar__children"+a).addClass("navbar__children--active")}(a)}),200)})).mouseleave((function(t){clearTimeout(e),e=setTimeout(r,400)})),(0,o.default)(".navbar.navbar--mobile .navbar__item .navbar__link").on("click",(function(e){e.preventDefault();var t=(0,o.default)(this).data("nav");(0,o.default)(".navbar__children"+t).slideToggle()}))})),(0,o.default)(window).on("resize",(function(){(0,o.default)(window).width()>991||!window.matchMedia("screen and (max-width: 992px)").matches?((0,o.default)(".navbar").removeClass("navbar--active"),(0,o.default)(".navbar .navbar__children.navbar__children--active").removeClass("navbar__children--active"),(0,o.default)(".navbar").removeClass("navbar--mobile").addClass("navbar--desktop")):(0,o.default)(".navbar").removeClass("navbar--desktop").addClass("navbar--mobile")}))}]);