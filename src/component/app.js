import $ from 'jquery';

import '../component/tabs/tabs';
import '../component/input/input';
import '../component/modal/modal';
import '../component/slider/slider-owl';
// import '../component/map/map';
import '../component/toggle/toggle';
import '../component/navbar/nav';

$(function() {
  // Нестандартное поведение ссылок
  $('a[data-trigger="click"]').on("click", function(e){
    e.preventDefault();
  })
  $(".scroll").on("click", function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
  });
});